/**
 * Test end-to-end nel browser (Chromium via Playwright):
 *
 *     node tests/e2e.js
 *
 * Il test serve da sé la cartella del progetto via HTTP, perché il service
 * worker non funziona da file://. Ogni scenario parte da un profilo pulito.
 * Il punteggio si verifica completando simulazioni intere, non rispondendo a
 * poche domande. Esce con codice 1 se un controllo fallisce o se la pagina
 * produce errori JavaScript.
 */
'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium, devices } = require('playwright');

const ROOT = path.join(__dirname, '..');
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.webmanifest': 'application/manifest+json',
  '.png': 'image/png', '.svg': 'image/svg+xml', '.json': 'application/json'
};

function serve() {
  return new Promise(function (resolve) {
    const server = http.createServer(function (req, res) {
      let p = decodeURIComponent(req.url.split('?')[0]);
      if (p.endsWith('/')) p += 'index.html';
      const file = path.join(ROOT, path.normalize(p));
      if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end(); }
      fs.readFile(file, function (err, data) {
        if (err) { res.writeHead(404); return res.end('not found'); }
        res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
        res.end(data);
      });
    });
    server.listen(0, '127.0.0.1', function () { resolve(server); });
  });
}

const failures = [];
let checks = 0;
function check(label, ok, detail) {
  checks += 1;
  console.log((ok ? '  ok    ' : '  ERRORE ') + label + (detail !== undefined ? ' — ' + detail : ''));
  if (!ok) failures.push(label + (detail !== undefined ? ' — ' + detail : ''));
}

const jsErrors = [];
let browser, base;

async function newPage(options) {
  const context = await browser.newContext(options || {});
  const page = await context.newPage();
  page.on('pageerror', function (e) { jsErrors.push(e.message); });
  page.on('console', function (m) { if (m.type() === 'error') jsErrors.push(m.text()); });
  page.on('dialog', function (d) { d.accept(); });
  await page.goto(base + 'index.html');
  await page.waitForSelector('.mode-card');
  return { context, page };
}

/** Stato salvato della sessione in corso. */
function session(page) {
  return page.evaluate(function () { return JSON.parse(localStorage.getItem('ecba.session')); });
}

/** Posizione a schermo dell'opzione giusta (o di una sbagliata) per la domanda corrente. */
function positionFor(page, wantCorrect) {
  return page.evaluate(function (want) {
    const s = JSON.parse(localStorage.getItem('ecba.session'));
    const all = [].concat(window.ECBA_QUESTIONS, window.ECBA_TECHNIQUE_QUESTIONS, window.ECBA_COMPETENCY_QUESTIONS);
    const q = all.filter(function (x) { return x.id === s.questionIds[s.index]; })[0];
    const shown = window.Engine.displayOptions(s, q);
    for (let i = 0; i < shown.length; i++) {
      if ((shown[i].optionId === q.answer) === want) return i;
    }
    return -1;
  }, wantCorrect);
}

/**
 * Completa la sessione aperta. `plan(i)` dice per la domanda i se rispondere
 * giusto (true), sbagliato (false) o lasciarla in bianco (null).
 */
async function complete(page, plan) {
  const total = (await session(page)).questionIds.length;
  let expected = 0;
  for (let i = 0; i < total; i++) {
    const want = plan(i);
    if (want !== null) {
      await page.locator('#q-options .option').nth(await positionFor(page, want)).click();
      if (want) expected += 1;
    }
    await page.click('#btn-next');
  }
  await page.waitForSelector('#qgrid');
  await page.click('#btn-submit');
  await page.waitForSelector('#score-value');
  return { total, expected };
}

async function startExam(page) {
  await page.click('[data-mode="exam"]');
  await page.waitForSelector('.quiz');
}

async function goHome(page) {
  await page.goto(base + 'index.html');
  await page.waitForSelector('.mode-card');
}

async function scoreText(page) { return (await page.textContent('#score-value')).trim(); }

// ---------------------------------------------------------------------------

async function scenarioExams() {
  console.log('\n=== Simulazioni complete e punteggio ===');
  const { context, page } = await newPage();

  check('la home mostra la copertura dei nove domini', (await page.locator('#coverage-list .bar-row, #coverage-list > *').count()) >= 9);
  check('la home indica il totale del pool', /Totale nel pool: 278 domande/.test(await page.textContent('#coverage-card')));

  await startExam(page);
  const s0 = await session(page);
  const byDomain = await page.evaluate(function (ids) {
    const c = {};
    ids.forEach(function (id) {
      const q = window.ECBA_QUESTIONS.filter(function (x) { return x.id === id; })[0];
      c[q.domain] = (c[q.domain] || 0) + 1;
    });
    return [1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (d) { return c[d] || 0; }).join('/');
  }, s0.questionIds);
  check('la simulazione ha 50 domande nella distribuzione del blueprint', s0.questionIds.length === 50 && byDomain === '10/7/3/5/5/5/5/5/5', byDomain);
  check('il timer è visibile e parte da 75 minuti', /^7[45]:\d\d$/.test((await page.textContent('#timer')).trim()), await page.textContent('#timer'));

  // Tutte giuste
  let r = await complete(page, function () { return true; });
  check('simulazione tutta giusta: 50/50', (await scoreText(page)) === '50/50', await scoreText(page));
  check('… sopra la soglia di riferimento', /Sopra la soglia/.test(await page.textContent('#score-verdict')));
  const rows = await page.locator('#domain-breakdown > *').allTextContents();
  check('… dettaglio sui nove domini, ciascuno pieno', rows.length === 9 && rows.every(function (t) { return /(\d+)\/\1 · 100%/.test(t); }), rows.length + ' righe');
  check('… nessuna activity statement da rivedere', /Nessun errore/.test(await page.textContent('#activity-breakdown')));

  // Tutte sbagliate, poi revisione delle risposte
  await goHome(page);
  await startExam(page);
  r = await complete(page, function () { return false; });
  check('simulazione tutta sbagliata: 0/50', (await scoreText(page)) === '0/50', await scoreText(page));
  check('… sotto la soglia di riferimento', /Sotto la soglia/.test(await page.textContent('#score-verdict')));
  check('… le activity statement sbagliate sono elencate con i rimandi di studio',
    (await page.locator('#activity-breakdown .weak-row').count()) > 0 && /Da studiare:/.test(await page.textContent('#activity-breakdown')));

  await page.click('#btn-review-answers');
  await page.waitForSelector('.quiz');
  const review = await page.evaluate(function () {
    const box = document.querySelector('#q-explain');
    const correctBtn = document.querySelector('#q-options .option.correct .key');
    const wrongBtn = document.querySelector('#q-options .option.incorrect');
    return {
      header: box.querySelector('h4').textContent,
      text: box.querySelector('.expl-text').textContent,
      letter: correctBtn ? correctBtn.textContent : null,
      wrong: !!wrongBtn,
      disabled: Array.prototype.every.call(document.querySelectorAll('#q-options .option'), function (b) { return b.disabled; })
    };
  });
  check('in revisione la spiegazione indica la lettera della risposta giusta mostrata a schermo',
    review.header === 'Sbagliata — la risposta corretta è ' + review.letter, review.header);
  check('… la risposta data è marcata come sbagliata e le opzioni sono bloccate', review.wrong && review.disabled);
  check('… nessun segnaposto {A}-{D} resta nel testo', !/\{[A-D]\}/.test(review.text));
  await page.click('#btn-grid');
  check('la panoramica di revisione segna 50 errori', (await page.locator('.qcell.incorrect').count()) === 50 &&
    /^0 corrette su 50/.test(await page.textContent('#grid-summary')), await page.textContent('#grid-summary'));

  // La soglia: 34 e 35 su 50
  await goHome(page);
  await startExam(page);
  await complete(page, function (i) { return i < 34; });
  check('34 giuste su 50: sotto la soglia', (await scoreText(page)) === '34/50' && /Sotto/.test(await page.textContent('#score-verdict')), await scoreText(page));
  await goHome(page);
  await startExam(page);
  await complete(page, function (i) { return i < 35; });
  check('35 giuste su 50: sopra la soglia', (await scoreText(page)) === '35/50' && /Sopra/.test(await page.textContent('#score-verdict')), await scoreText(page));

  // Risposte in bianco
  await goHome(page);
  await startExam(page);
  await complete(page, function (i) { return i % 5 === 0 ? true : null; });
  check('10 risposte giuste e 40 in bianco: 10/50', (await scoreText(page)) === '10/50', await scoreText(page));

  const hist = await page.evaluate(function () { return JSON.parse(localStorage.getItem('ecba.history') || '[]'); });
  check('lo storico registra le cinque simulazioni, la più recente in cima',
    hist.length === 5 && hist.map(function (h) { return h.correct; }).join(',') === '10,35,34,0,50',
    hist.map(function (h) { return h.correct; }).join(','));

  await context.close();
}

async function scenarioKeyboardAndResume() {
  console.log('\n=== Tastiera, ripresa e pool aggiornato ===');
  const { context, page } = await newPage();

  // Scorciatoie in esercizio: le opzioni mostrate sono rimescolate.
  await page.click('[data-mode="practice"]');
  await page.selectOption('#practice-count', '10');
  await page.locator('.domain-card').nth(0).click();
  await page.waitForSelector('.quiz');
  await page.keyboard.press('2');
  let s = await session(page);
  let shown = await page.evaluate(function (st) {
    const q = window.ECBA_QUESTIONS.filter(function (x) { return x.id === st.questionIds[st.index]; })[0];
    return window.Engine.displayOptions(st, q).map(function (o) { return o.optionId; });
  }, s);
  check('il tasto 2 sceglie la seconda opzione mostrata', s.answers[s.questionIds[0]] === shown[1], s.answers[s.questionIds[0]] + ' vs ' + shown[1]);
  check('… e in esercizio la spiegazione compare subito', await page.isVisible('#q-explain'));
  await page.keyboard.press('ArrowRight');
  await page.keyboard.press('c');
  s = await session(page);
  shown = await page.evaluate(function (st) {
    const q = window.ECBA_QUESTIONS.filter(function (x) { return x.id === st.questionIds[st.index]; })[0];
    return window.Engine.displayOptions(st, q).map(function (o) { return o.optionId; });
  }, s);
  check('freccia a destra, poi C sceglie la terza opzione mostrata', s.index === 1 && s.answers[s.questionIds[1]] === shown[2]);
  await page.keyboard.press('Control+d');
  check('Ctrl+D non viene preso per una risposta', (await session(page)).answers[s.questionIds[1]] === shown[2]);
  await page.keyboard.press('f');
  check('F segnala la domanda', (await session(page)).flagged[s.questionIds[1]] === true &&
    (await page.getAttribute('#btn-flag', 'aria-pressed')) === 'true');
  await page.keyboard.press('ArrowLeft');
  check('freccia a sinistra torna indietro', (await session(page)).index === 0);

  // Ripresa dopo una ricarica
  await goHome(page);
  await page.click('#btn-discard');
  await startExam(page);
  for (let i = 0; i < 5; i++) {
    await page.locator('#q-options .option').nth(await positionFor(page, true)).click();
    await page.click('#btn-next');
  }
  const before = await page.locator('#q-options .option .txt').allTextContents();
  await page.reload();
  await page.waitForSelector('#resume-card:not([hidden])');
  check('dopo la ricarica la home propone di riprendere: 5/50 risposte', /5\/50 risposte/.test(await page.textContent('#resume-detail')), await page.textContent('#resume-detail'));
  await page.click('#btn-resume');
  await page.waitForSelector('.quiz');
  check('la ripresa torna alla domanda 6 con le opzioni nello stesso ordine',
    (await page.textContent('#q-counter')).trim() === 'Domanda 6 di 50' &&
    JSON.stringify(await page.locator('#q-options .option .txt').allTextContents()) === JSON.stringify(before));

  // Sessione salvata prima che una domanda venisse ritirata dal pool
  await page.evaluate(function () {
    const st = JSON.parse(localStorage.getItem('ecba.session'));
    st.questionIds[49] = 'D1-99';
    st.optionOrder['D1-99'] = ['A', 'B', 'C', 'D'];
    st.answers['D1-99'] = 'A';
    localStorage.setItem('ecba.session', JSON.stringify(st));
  });
  await page.reload();
  await page.waitForSelector('#resume-card:not([hidden])');
  check('una domanda ritirata viene segnalata nella ripresa', /1 domanda ritirata dal pool/.test(await page.textContent('#resume-detail')), await page.textContent('#resume-detail'));
  await page.click('#btn-resume');
  await page.waitForSelector('.quiz');
  check('… e la sessione continua con le 49 rimaste', /di 49$/.test((await page.textContent('#q-counter')).trim()));
  await page.click('#btn-grid');
  await page.click('#btn-submit');
  await page.waitForSelector('#score-value');
  check('… la consegna si corregge su 49 domande con le 5 risposte date', (await scoreText(page)) === '5/49', await scoreText(page));

  await context.close();
}

async function scenarioReviewResetTopics() {
  console.log('\n=== Ripasso, sezioni trasversali, azzeramento ===');
  const { context, page } = await newPage();

  check('senza errori il ripasso è vuoto', await (async function () {
    await page.click('[data-mode="review"]');
    return /Nessun errore da rivedere/.test(await page.textContent('#view'));
  })());

  // Esercizio da 10: tutte giuste, una segnalata
  await goHome(page);
  await page.click('[data-mode="practice"]');
  await page.selectOption('#practice-count', '10');
  await page.locator('.domain-card').nth(1).click();
  await page.waitForSelector('.quiz');
  const flaggedId = (await session(page)).questionIds[0];
  await page.keyboard.press('f');
  await complete(page, function () { return true; });
  check('esercizio da 10 tutto giusto: 10/10', (await scoreText(page)) === '10/10');
  await goHome(page);
  await page.click('[data-mode="review"]');
  await page.waitForSelector('.quiz');
  const rs = await session(page);
  check('il ripasso propone la domanda segnalata anche se era giusta', rs.questionIds.length === 1 && rs.questionIds[0] === flaggedId, rs.questionIds.join(','));

  // Test sulle tecniche
  await goHome(page);
  await page.click('[data-mode="techniques"]');
  await page.click('#btn-topic-test');
  await page.waitForSelector('.quiz');
  const ts = await session(page);
  check('il test sulle tecniche ha 10 domande delle tecniche', ts.questionIds.length === 10 && ts.questionIds.every(function (id) { return /^T-/.test(id); }));
  await complete(page, function (i) { return i < 7; });
  check('test sulle tecniche: 7/10, con il dettaglio per tecnica e senza domini',
    (await scoreText(page)) === '7/10' && await page.isVisible('#ref-card') && !(await page.isVisible('#domain-card')) &&
    (await page.textContent('#ref-card-title')) === 'Risultato per tecnica');

  // Azzeramento
  await goHome(page);
  await page.click('[data-mode="blueprint"]');
  check('il riepilogo prima dell\'azzeramento conta sessioni e ripasso', /sessioni nello storico/.test(await page.textContent('#reset-summary')));
  await page.click('#btn-reset-stats');
  await page.waitForSelector('#reset-summary');
  const left = await page.evaluate(function () {
    return ['ecba.history', 'ecba.stats', 'ecba.topicStats', 'ecba.missed'].filter(function (k) { return localStorage.getItem(k) !== null; });
  });
  check('dopo l\'azzeramento non resta nulla da azzerare', /Non c'è ancora nulla da azzerare/.test(await page.textContent('#reset-summary')) &&
    await page.isDisabled('#btn-reset-stats') && left.length === 0, left.join(','));

  // Tema
  const t0 = await page.getAttribute('html', 'data-theme');
  await page.click('#btn-theme');
  const t1 = await page.getAttribute('html', 'data-theme');
  await page.reload();
  await page.waitForSelector('.mode-card');
  check('il tema cambia e resta dopo la ricarica', t0 !== t1 && (await page.getAttribute('html', 'data-theme')) === t1, t0 + ' → ' + t1);

  await context.close();
}

async function scenarioTimer() {
  console.log('\n=== Tempo dell\'esame ===');
  const { context, page } = await newPage();
  await startExam(page);
  for (let i = 0; i < 3; i++) {
    await page.locator('#q-options .option').nth(await positionFor(page, true)).click();
    await page.click('#btn-next');
  }
  await page.evaluate(function () {
    const st = JSON.parse(localStorage.getItem('ecba.session'));
    st.deadline = Date.now() + 2000;
    localStorage.setItem('ecba.session', JSON.stringify(st));
  });
  await page.reload();
  await page.click('#btn-resume');
  await page.waitForSelector('#score-value', { timeout: 10000 });
  check('allo scadere del tempo l\'esame si consegna da solo', (await scoreText(page)) === '3/50', await scoreText(page));

  await goHome(page);
  await startExam(page);
  await page.evaluate(function () {
    const st = JSON.parse(localStorage.getItem('ecba.session'));
    st.deadline = Date.now() - 1000;
    localStorage.setItem('ecba.session', JSON.stringify(st));
  });
  await page.reload();
  check('una simulazione scaduta mentre l\'app era chiusa risulta scaduta', /tempo scaduto/.test(await page.textContent('#resume-detail')));
  await page.click('#btn-resume');
  await page.waitForSelector('#score-value');
  check('… e riprendendola viene consegnata', (await scoreText(page)) === '0/50');
  await context.close();
}

async function scenarioOffline() {
  console.log('\n=== Uso offline ===');
  const { context, page } = await newPage();
  await page.evaluate(function () { return navigator.serviceWorker.ready.then(function () { return true; }); });
  await page.reload();
  await page.waitForFunction(function () { return !!navigator.serviceWorker.controller; });
  await context.setOffline(true);
  await page.reload();
  await page.waitForSelector('.mode-card');
  const n = await page.evaluate(function () { return window.ECBA_QUESTIONS.length + window.ECBA_TECHNIQUE_QUESTIONS.length + window.ECBA_COMPETENCY_QUESTIONS.length; });
  check('senza rete l\'app si apre con tutte le domande', n === 478, n);
  await startExam(page);
  check('… e la simulazione parte', (await page.textContent('#q-counter')).trim() === 'Domanda 1 di 50');
  await context.close();
}

async function scenarioPhone() {
  console.log('\n=== Telefono ===');
  const { context, page } = await newPage(devices['iPhone 13']);
  const overflow = async function () {
    return page.evaluate(function () { return document.documentElement.scrollWidth - window.innerWidth; });
  };
  check('la home non scorre in orizzontale', (await overflow()) <= 0, await overflow());
  await startExam(page);
  check('la domanda non scorre in orizzontale', (await overflow()) <= 0, await overflow());
  await page.click('#btn-grid');
  check('la panoramica non scorre in orizzontale', (await overflow()) <= 0, await overflow());
  await context.close();
}

(async function () {
  const server = await serve();
  base = 'http://127.0.0.1:' + server.address().port + '/';
  try {
    browser = await chromium.launch();
  } catch (e) {
    // Ambiente con il Chromium preinstallato in una cartella diversa da quella attesa da Playwright.
    browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  }
  try {
    await scenarioExams();
    await scenarioKeyboardAndResume();
    await scenarioReviewResetTopics();
    await scenarioTimer();
    await scenarioOffline();
    await scenarioPhone();
  } catch (e) {
    failures.push('eccezione: ' + (e && e.stack || e));
    console.log('  ERRORE eccezione: ' + (e && e.stack || e));
  }
  check('nessun errore JavaScript nella pagina', jsErrors.length === 0, jsErrors.slice(0, 5).join(' | '));
  await browser.close();
  server.close();

  console.log('\n' + '-'.repeat(60));
  if (failures.length) {
    console.log(failures.length + ' problemi su ' + checks + ' controlli:');
    failures.forEach(function (f) { console.log('  - ' + f); });
    process.exit(1);
  }
  console.log('Tutti i ' + checks + ' controlli superati.');
})();
