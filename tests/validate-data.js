/**
 * Verifica dei dati e del motore, senza browser e senza dipendenze:
 *
 *     node tests/validate-data.js
 *
 * Controlla la struttura dei tre pool di domande, la copertura del blueprint,
 * la coerenza dei riferimenti al BABOK, le regole di scrittura delle
 * spiegazioni e il comportamento del motore su migliaia di sessioni simulate.
 * Esce con codice 1 se trova anche un solo problema.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');

// I file dell'app sono script da browser: li si carica in un finto `window`.
const window = {};
['data/blueprint.js', 'data/questions.js', 'data/topics.js', 'js/engine.js'].forEach(function (file) {
  new Function('window', fs.readFileSync(path.join(ROOT, file), 'utf8'))(window);
});
const BP = window.ECBA_BLUEPRINT;
const EXAM = window.ECBA_QUESTIONS;
const TECH = window.ECBA_TECHNIQUE_QUESTIONS;
const COMP = window.ECBA_COMPETENCY_QUESTIONS;
const Engine = window.Engine;
const ALL = EXAM.concat(TECH, COMP);

const problems = [];
let checks = 0;
function section(title) { console.log('\n=== ' + title + ' ==='); }
function check(label, ok, detail) {
  checks += 1;
  if (ok) { console.log('  ok    ' + label + (detail ? ' — ' + detail : '')); return; }
  console.log('  ERRORE ' + label + (detail ? ' — ' + detail : ''));
  problems.push(label + (detail ? ' — ' + detail : ''));
}
/** Raccoglie i casi che violano una regola e li riporta in un'unica riga. */
function rule(label, offenders) {
  check(label, offenders.length === 0,
    offenders.length ? offenders.length + ' casi: ' + offenders.slice(0, 8).join(' | ') : '');
}

// Generatore pseudocasuale con seme: le simulazioni danno sempre gli stessi numeri.
function seeded(seed) {
  return function () {
    seed |= 0; seed = seed + 0x6D2B79F5 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
Math.random = seeded(20261110);

// ---------------------------------------------------------------------------
section('1. Struttura delle domande');
// ---------------------------------------------------------------------------
const EXAM_FIELDS = ['id', 'domain', 'activity', 'style', 'cluster', 'source', 'stem', 'options', 'answer', 'explanation'];
const TOPIC_FIELDS = ['id', 'ref', 'style', 'cluster', 'source', 'stem', 'options', 'answer', 'explanation'];
const techRefs = BP.techniques.map(function (t) { return t.ref; });
const compLeaves = [];
const compGroups = [];
BP.competencies.forEach(function (g) {
  compGroups.push(g.ref);
  g.items.forEach(function (c) { compLeaves.push(c.ref); });
});

(function () {
  const seen = {};
  const bad = { id: [], fields: [], options: [], answer: [], text: [], style: [], place: [], dup: [] };

  function common(q, allowed, idPattern) {
    if (!q.id || !idPattern.test(q.id)) bad.id.push(String(q.id));
    if (seen[q.id]) bad.dup.push(q.id);
    seen[q.id] = true;
    Object.keys(q).forEach(function (k) { if (allowed.indexOf(k) === -1) bad.fields.push(q.id + '.' + k); });
    allowed.forEach(function (k) { if (k !== 'cluster' && q[k] === undefined) bad.fields.push(q.id + ' senza ' + k); });

    const options = q.options || [];
    if (options.length !== 4 || options.map(function (o) { return o.id; }).join('') !== 'ABCD') bad.options.push(q.id);
    const texts = options.map(function (o) { return (o.text || '').trim().toLowerCase(); });
    if (texts.some(function (t) { return !t; }) || new Set(texts).size !== texts.length) bad.options.push(q.id + ' (testo)');
    if ('ABCD'.indexOf(q.answer) === -1 || (q.answer || '').length !== 1) bad.answer.push(q.id);
    if (['applied', 'knowledge'].indexOf(q.style) === -1) bad.style.push(q.id);

    [q.stem, q.explanation, q.source].concat(options.map(function (o) { return o.text; })).forEach(function (t) {
      if (typeof t !== 'string' || !t.trim()) return bad.text.push(q.id + ' (vuoto)');
      if (t !== t.trim() || / {2,}/.test(t)) bad.text.push(q.id + ' (spazi)');
      if (/[\u0000-\u001f]/.test(t)) bad.text.push(q.id + ' (carattere di controllo)');
      // Le spiegazioni sono mostrate come testo: un'entità HTML comparirebbe alla lettera.
      if (/&(lt|gt|amp|quot|nbsp|#\d+);/.test(t)) bad.text.push(q.id + ' (entità HTML)');
    });
    if ((q.stem || '').length < 20 || (q.explanation || '').length < 40) bad.text.push(q.id + ' (troppo corto)');

    // I segnaposto {A}…{D} devono riferirsi a opzioni esistenti e non comparire fuori dalla spiegazione.
    ((q.explanation || '').match(/\{[^}]*\}/g) || []).forEach(function (p) {
      if (!/^\{[A-D]\}$/.test(p)) bad.place.push(q.id + ' ' + p);
    });
    [q.stem].concat(options.map(function (o) { return o.text; })).forEach(function (t) {
      if (/\{[A-D]\}/.test(t || '')) bad.place.push(q.id + ' (segnaposto fuori dalla spiegazione)');
    });
    // Un segnaposto usato al posto della preposizione "a": "{A} questo livello…"
    if (/\{A\}\s+(questo|questa|quest'|livello|volte|differenza|seconda|partire|fronte|patto|meno|causa|tutti|ogni)\b/.test(q.explanation || '')) {
      bad.place.push(q.id + ' ({A} usato come preposizione)');
    }
  }

  EXAM.forEach(function (q) {
    common(q, EXAM_FIELDS, /^[AD][1-9]-\d{2}$/);
    const d = BP.domains.filter(function (x) { return x.id === q.domain; })[0];
    if (!d || !d.activities[q.activity]) bad.fields.push(q.id + ' dominio/activity');
    else if (String(q.activity).charAt(0) !== String(q.domain)) bad.fields.push(q.id + ' activity di un altro dominio');
    if (q.id.charAt(1) !== String(q.domain)) bad.id.push(q.id + ' (id e dominio non corrispondono)');
  });
  TECH.forEach(function (q) {
    common(q, TOPIC_FIELDS, /^T-10\.\d{1,2}-\d$/);
    if (techRefs.indexOf(q.ref) === -1) bad.fields.push(q.id + ' ref');
    if (q.id.indexOf('T-' + q.ref + '-') !== 0) bad.id.push(q.id + ' (id e ref non corrispondono)');
  });
  COMP.forEach(function (q) {
    common(q, TOPIC_FIELDS, /^C-(9\.\d\.\d-\d|GRP-\d{1,2})$/);
    if (compLeaves.indexOf(q.ref) === -1 && compGroups.indexOf(q.ref) === -1) bad.fields.push(q.id + ' ref');
    if (/^C-9/.test(q.id) && q.id.indexOf('C-' + q.ref + '-') !== 0) bad.id.push(q.id + ' (id e ref non corrispondono)');
  });

  console.log('  pool: simulazione ' + EXAM.length + ' · tecniche ' + TECH.length + ' · competenze ' + COMP.length);
  rule('id presenti, nel formato atteso e coerenti con dominio o ref', bad.id);
  rule('nessun id ripetuto, nemmeno fra pool diversi', bad.dup);
  rule('solo i campi previsti, tutti valorizzati', bad.fields);
  rule('quattro opzioni A-D con testi diversi', bad.options);
  rule('risposta corretta fra le opzioni', bad.answer);
  rule('style applied o knowledge', bad.style);
  rule('testi puliti: niente spazi doppi, controlli o entità HTML', bad.text);
  rule('segnaposto delle spiegazioni validi', bad.place);
})();

(function () {
  const norm = function (s) { return s.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim(); };
  const stems = {};
  const dup = [];
  ALL.forEach(function (q) {
    const key = norm(q.stem);
    if (stems[key]) dup.push(stems[key] + ' = ' + q.id); else stems[key] = q.id;
  });
  rule('nessuna domanda con lo stesso testo di un\'altra', dup);
})();

// ---------------------------------------------------------------------------
section('2. Copertura del blueprint');
// ---------------------------------------------------------------------------
(function () {
  check('i pesi dei domini sommano a 100% e le domande a ' + BP.exam.questionCount,
    Math.abs(BP.domains.reduce(function (a, d) { return a + d.weight; }, 0) - 1) < 1e-9 &&
    BP.domains.reduce(function (a, d) { return a + d.questions; }, 0) === BP.exam.questionCount);
  check('ogni dominio ha le domande che il suo peso gli assegna',
    BP.domains.every(function (d) { return d.questions === Math.round(d.weight * BP.exam.questionCount); }));
  check('36 activity statement, 20 tecniche, 29 competenze in 6 gruppi',
    BP.domains.reduce(function (a, d) { return a + Object.keys(d.activities).length; }, 0) === 36 &&
    techRefs.length === 20 && compLeaves.length === 29 && compGroups.length === 6);

  const thinDomains = [], thinApplied = [], thinActivities = [];
  BP.domains.forEach(function (d) {
    const qs = EXAM.filter(function (q) { return q.domain === d.id; });
    const applied = qs.filter(function (q) { return q.style === 'applied'; }).length;
    const wantApplied = Math.ceil(d.questions * BP.exam.appliedShare);
    console.log('  D' + d.id + ' ' + String(qs.length).padStart(3) + ' domande (' + applied + ' applied, ' +
      (qs.length - applied) + ' knowledge) — una simulazione ne usa ' + d.questions + ' — ' +
      Object.keys(d.activities).map(function (a) {
        return a + ':' + qs.filter(function (q) { return q.activity === a; }).length;
      }).join(' '));
    if (qs.length < d.questions * 3) thinDomains.push('D' + d.id);
    if (applied < wantApplied * 2 || qs.length - applied < (d.questions - wantApplied + 1) * 2) thinApplied.push('D' + d.id);
    Object.keys(d.activities).forEach(function (a) {
      if (qs.filter(function (q) { return q.activity === a; }).length < 3) thinActivities.push(a);
    });
  });
  rule('ogni dominio ha almeno il triplo delle domande che una simulazione usa', thinDomains);
  rule('ogni dominio ha abbastanza domande di entrambi gli stili', thinApplied);
  rule('ogni activity statement ha almeno tre domande', thinActivities);

  rule('ogni tecnica ha almeno cinque domande', techRefs.filter(function (r) {
    return TECH.filter(function (q) { return q.ref === r; }).length < 5;
  }));
  rule('ogni competenza ha almeno due domande', compLeaves.filter(function (r) {
    return COMP.filter(function (q) { return q.ref === r; }).length < 2;
  }));
  rule('ogni gruppo di competenze basta per un test da ' + BP.topicTestSize, compGroups.filter(function (g) {
    return COMP.filter(function (q) { return q.ref === g || q.ref.indexOf(g + '.') === 0; }).length < BP.topicTestSize;
  }));

  const activityFields = [];
  BP.domains.forEach(function (d) {
    Object.keys(d.activities).forEach(function (a) {
      const act = d.activities[a];
      if (!act.title || !act.detail || !Array.isArray(act.study) || !act.study.length) activityFields.push(a);
    });
  });
  rule('ogni activity statement ha titolo, descrizione e rimandi di studio', activityFields);
})();

// ---------------------------------------------------------------------------
section('3. Cluster');
// ---------------------------------------------------------------------------
(function () {
  const members = {};
  ALL.forEach(function (q) { if (q.cluster) (members[q.cluster] = members[q.cluster] || []).push(q.id); });
  const names = Object.keys(members);
  console.log('  ' + names.length + ' cluster, ' + ALL.filter(function (q) { return q.cluster; }).length + ' domande coinvolte');
  rule('nomi dei cluster in minuscolo con trattini', names.filter(function (n) { return !/^[a-z]+(-[a-z]+)*$/.test(n); }));
  rule('ogni cluster riunisce almeno due domande', names.filter(function (n) { return members[n].length < 2; }));
  // Un cluster non deve assorbire tanta parte di un dominio da non lasciare scelta.
  const heavy = [];
  BP.domains.forEach(function (d) {
    const qs = EXAM.filter(function (q) { return q.domain === d.id; });
    const distinct = new Set(qs.map(function (q) { return q.cluster || q.id; })).size;
    if (distinct < d.questions * 2) heavy.push('D' + d.id + ' (' + distinct + ' punti distinti)');
  });
  rule('ogni dominio ha almeno il doppio di punti distinti rispetto alle domande pescate', heavy);
})();

// ---------------------------------------------------------------------------
section('4. Lingua e regole di scrittura');
// ---------------------------------------------------------------------------
(function () {
  // Confini di parola validi anche per le lettere accentate (\b non le riconosce).
  const words = function (list) { return new RegExp('(?<!\\p{L})(' + list.join('|') + ')(?!\\p{L})', 'giu'); };
  const itWord = words(['il', 'lo', 'la', 'le', 'gli', 'di', 'del', 'della', 'delle', 'dei', 'degli', 'dello',
    'è', 'e', 'con', 'un', 'una', 'uno', 'non', 'che', 'ma', 'si', 'sono', 'perché', 'quando', 'se', 'anche',
    'più', 'già', 'al', 'alla', 'ai', 'nel', 'nella', 'dal', 'dalla', 'sul', 'sulla', 'tra', 'fra', 'ciò',
    'questo', 'questa', 'cioè', 'ha', 'hanno', 'viene', 'essere', 'ogni', 'né']);
  const enWord = /\b(the|and|which|what|that|with|from|should|does|how|why|who|when|are|for|is|of)\b/gi;
  const count = function (s, re) { return (s.match(re) || []).length; };
  const notItalian = [], notEnglish = [];
  ALL.forEach(function (q) {
    // Le spiegazioni citano termini inglesi: conta che l'italiano prevalga.
    const it = count(q.explanation, itWord);
    if (it < 4 || it <= count(q.explanation, enWord)) notItalian.push(q.id);
    const english = [q.stem].concat(q.options.map(function (o) { return o.text; }));
    if (count(q.stem, enWord) < 1) notEnglish.push(q.id + ' (stem)');
    english.forEach(function (t) {
      if (/\b(che|della|delle|sono|perché|cioè|degli|anche)\b/i.test(t)) notEnglish.push(q.id + ' (parola italiana)');
    });
  });
  rule('spiegazioni in italiano', notItalian);
  rule('domande e opzioni in inglese', notEnglish);

  // IIBA non pubblica il question bank: nessuna spiegazione può dire che cosa
  // l'esame chiede "spesso". Le uniche evidenze sono le dieci sample question.
  const claim = /(l'esame (usa|testa|sfrutta|ama|ripropone|accosta|verifica|mette|presenta|chiede)|materia d'esame|all'esame|d'esame ricorrente|più testat|domanda d'esame|frequent[ei] (dell'|all')esame|quasi sempre)/i;
  rule('nessuna affermazione su ciò che l\'esame chiede di frequente',
    ALL.filter(function (q) { return claim.test(q.explanation); }).map(function (q) { return q.id; }));

  rule('ogni domanda finisce con il punto interrogativo',
    ALL.filter(function (q) { return !/\?$/.test(q.stem); }).map(function (q) { return q.id; }));
  rule('ogni spiegazione finisce con il punto',
    ALL.filter(function (q) { return !/[.")]$/.test(q.explanation); }).map(function (q) { return q.id; }));

  // La lunghezza non deve tradire la risposta: chi sceglie sempre l'opzione più
  // lunga non deve fare molto meglio del caso (25%), e la risposta corretta non
  // deve essere visibilmente più lunga delle alternative.
  [['simulazione', EXAM], ['tecniche', TECH], ['competenze', COMP]].forEach(function (pair) {
    let longest = 0;
    const visible = [];
    pair[1].forEach(function (q) {
      const c = q.options.filter(function (o) { return o.id === q.answer; })[0].text.length;
      const other = Math.max.apply(null, q.options.filter(function (o) { return o.id !== q.answer; })
        .map(function (o) { return o.text.length; }));
      if (c > other) longest += 1;
      if (c > other * 1.15 && c - other > 8) visible.push(q.id);
    });
    const share = longest / pair[1].length;
    check('la risposta corretta non è l\'opzione più lunga più spesso del 40% (' + pair[0] + ')',
      share <= 0.40, (100 * share).toFixed(0) + '%');
    // Le poche eccezioni ammesse sono domande sui nomi (un principio, un gruppo di competenze).
    check('la risposta corretta è visibilmente più lunga in non più del 3% delle domande (' + pair[0] + ')',
      visible.length <= pair[1].length * 0.03, visible.length + (visible.length ? ': ' + visible.join(' ') : ''));
  });

  // Le parole chiave delle sample question sono in maiuscolo: se compaiono, lo sono anche qui.
  const keyword = /\b(What|Which|How)\b[^?]*\b(first|next)\b[^?]*\?$|\b(most|best)\b (appropriate|accurate|useful|likely|directly)/;
  rule('FIRST, NEXT, MOST e BEST in maiuscolo nelle domande di stile sample',
    EXAM.filter(function (q) { return /^A/.test(q.id) && keyword.test(q.stem); }).map(function (q) { return q.id; }));
})();

// ---------------------------------------------------------------------------
section('5. Riferimenti al BABOK Guide');
// ---------------------------------------------------------------------------
(function () {
  const TASKS = {
    '3.1': 'Plan Business Analysis Approach', '3.2': 'Plan Stakeholder Engagement',
    '3.3': 'Plan Business Analysis Governance', '3.4': 'Plan Business Analysis Information Management',
    '3.5': 'Identify Business Analysis Performance Improvements',
    '4.1': 'Prepare for Elicitation', '4.2': 'Conduct Elicitation', '4.3': 'Confirm Elicitation Results',
    '4.4': 'Communicate Business Analysis Information', '4.5': 'Manage Stakeholder Collaboration',
    '5.1': 'Trace Requirements', '5.2': 'Maintain Requirements', '5.3': 'Prioritize Requirements',
    '5.4': 'Assess Requirements Changes', '5.5': 'Approve Requirements',
    '6.1': 'Analyze Current State', '6.2': 'Define Future State', '6.3': 'Assess Risks',
    '6.4': 'Define Change Strategy',
    '7.1': 'Specify and Model Requirements', '7.2': 'Verify Requirements', '7.3': 'Validate Requirements',
    '7.4': 'Define Requirements Architecture', '7.5': 'Define Design Options',
    '7.6': 'Analyze Potential Value and Recommend Solution',
    '8.1': 'Measure Solution Performance', '8.2': 'Analyze Performance Measures',
    '8.3': 'Assess Solution Limitations', '8.4': 'Assess Enterprise Limitations',
    '8.5': 'Recommend Actions to Increase Solution Value'
  };
  const TECHNIQUES = {};
  BP.techniques.forEach(function (t) { TECHNIQUES[t.ref] = t.name; });
  const COMPETENCIES = {};
  BP.competencies.forEach(function (g) {
    COMPETENCIES[g.ref] = g.group;
    g.items.forEach(function (c) { COMPETENCIES[c.ref] = c.name; });
  });
  const norm = function (s) { return s.toLowerCase().replace(/\(kpis\)/g, '').replace(/[^a-z ]/g, ' ').replace(/\s+/g, ' ').trim(); };
  // Il nome può comparire anche in forma breve: "office productivity tools (9.6.1)".
  const related = function (a, b) {
    return [b, b.replace(/ and technology$/, '')].some(function (v) { return a.indexOf(v) !== -1 || v.indexOf(a) !== -1; });
  };

  const wrong = [];
  let found = 0;
  ALL.forEach(function (q) {
    const text = [q.stem, q.explanation].concat(q.options.map(function (o) { return o.text; })).join('  ');
    let m;
    // "Analyze Current State (6.1)" e "Interviews (10.25)" e "Facilitation (9.5.1)"
    const after = /([A-Z][A-Za-z,/ -]{3,70}?)\s*\((\d{1,2}\.\d{1,2}(?:\.\d)?)\)/g;
    while ((m = after.exec(text))) {
      const official = TASKS[m[2]] || TECHNIQUES[m[2]] || COMPETENCIES[m[2]];
      if (!official) continue;
      found += 1;
      const said = norm(m[1]).split(' ').slice(-9).join(' ');
      if (!related(said, norm(official))) wrong.push(q.id + ': "' + m[1].trim() + ' (' + m[2] + ')" — è "' + official + '"');
    }
    // "6.1 Analyze Current State" nel testo o nella fonte
    // Il lookbehind evita di leggere "4.4 Listening" dentro "9.4.4 Listening".
    const before = /(?<![\d.])([3-8]\.[1-6])\s+([A-Z][A-Za-z ]{5,60}?)(?=[,.;:)]|$| e \d| · )/g;
    const scan = text + '  ' + q.source;
    while ((m = before.exec(scan))) {
      if (!TASKS[m[1]]) continue;
      found += 1;
      if (!related(norm(m[2]), norm(TASKS[m[1]]))) wrong.push(q.id + ': "' + m[1] + ' ' + m[2].trim() + '" — è "' + TASKS[m[1]] + '"');
    }
  });
  console.log('  riferimenti numerati a task, tecniche e competenze riscontrati: ' + found);
  rule('ogni riferimento numerato porta il nome ufficiale', wrong);

  // La fonte di una domanda su una tecnica o competenza deve citare la sua sezione.
  rule('la fonte delle domande trasversali cita la sezione giusta',
    TECH.concat(COMP).filter(function (q) {
      return q.source.indexOf(q.ref) === -1 && q.source.indexOf(q.ref.split('.').slice(0, 2).join('.')) === -1 &&
        !/Business Analysis Standard|BABOK Guide, 9$/.test(q.source);
    }).map(function (q) { return q.id; }));
})();

// ---------------------------------------------------------------------------
section('6. Motore: composizione della simulazione');
// ---------------------------------------------------------------------------
(function () {
  const RUNS = 4000;
  const expected = {};
  BP.domains.forEach(function (d) { expected[d.id] = d.questions; });
  const seenCount = {};
  EXAM.forEach(function (q) { seenCount[q.id] = 0; });
  let wrongSize = 0, wrongMix = 0, repeated = 0, clusterClash = 0, applied = 0;

  for (let i = 0; i < RUNS; i++) {
    const exam = Engine.buildExam(EXAM);
    if (exam.length !== BP.exam.questionCount) wrongSize += 1;
    const perDomain = {}, ids = {}, clusters = {};
    exam.forEach(function (q) {
      perDomain[q.domain] = (perDomain[q.domain] || 0) + 1;
      if (ids[q.id]) repeated += 1;
      ids[q.id] = true;
      if (q.cluster) { if (clusters[q.cluster]) clusterClash += 1; clusters[q.cluster] = true; }
      if (q.style === 'applied') applied += 1;
      seenCount[q.id] += 1;
    });
    if (BP.domains.some(function (d) { return perDomain[d.id] !== expected[d.id]; })) wrongMix += 1;
  }

  check(RUNS + ' simulazioni da ' + BP.exam.questionCount + ' domande', wrongSize === 0, wrongSize ? wrongSize + ' di dimensione diversa' : '');
  check('distribuzione dei domini uguale al blueprint in ogni simulazione', wrongMix === 0, wrongMix ? wrongMix + ' simulazioni fuori distribuzione' : '10/7/3/5/5/5/5/5/5');
  check('nessuna domanda ripetuta nella stessa simulazione', repeated === 0, String(repeated));
  check('mai due domande dello stesso cluster nella stessa simulazione', clusterClash === 0, String(clusterClash));

  const share = applied / (RUNS * BP.exam.questionCount);
  check('quota di domande applicative vicina al ' + Math.round(BP.exam.appliedShare * 100) + '%',
    Math.abs(share - BP.exam.appliedShare) < 0.01, (share * 100).toFixed(1) + '%');

  const never = EXAM.filter(function (q) { return seenCount[q.id] === 0; }).map(function (q) { return q.id; });
  rule('ogni domanda del pool esce in qualche simulazione', never);
  // Nessuna domanda deve essere quasi introvabile: confronto con la frequenza attesa nel suo dominio.
  const rare = [];
  BP.domains.forEach(function (d) {
    const qs = EXAM.filter(function (q) { return q.domain === d.id; });
    const fair = RUNS * d.questions / qs.length;
    qs.forEach(function (q) { if (seenCount[q.id] < fair * 0.2) rare.push(q.id + ' (' + seenCount[q.id] + ' contro ' + Math.round(fair) + ' attese)'); });
  });
  rule('nessuna domanda esce meno di un quinto di quanto le spetterebbe', rare);

  // Due simulazioni consecutive devono essere in buona parte diverse.
  let overlap = 0;
  const PAIRS = 500;
  for (let i = 0; i < PAIRS; i++) {
    const a = {};
    Engine.buildExam(EXAM).forEach(function (q) { a[q.id] = true; });
    overlap += Engine.buildExam(EXAM).filter(function (q) { return a[q.id]; }).length;
  }
  check('due simulazioni consecutive condividono poche domande', overlap / PAIRS < 15,
    'in media ' + (overlap / PAIRS).toFixed(1) + ' su ' + BP.exam.questionCount);
})();

// ---------------------------------------------------------------------------
section('7. Motore: esercizio, sezioni trasversali, ripasso');
// ---------------------------------------------------------------------------
(function () {
  let foreign = 0, wrongSize = 0, clash = 0;
  BP.domains.forEach(function (d) {
    const available = EXAM.filter(function (q) { return q.domain === d.id; });
    const distinct = new Set(available.map(function (q) { return q.cluster || q.id; })).size;
    [10, 20, 30, 0].forEach(function (count) {
      for (let i = 0; i < 60; i++) {
        const set = Engine.buildPractice(EXAM, [d.id], count);
        const want = count > 0 ? Math.min(count, available.length) : available.length;
        if (set.length !== want) wrongSize += 1;
        if (set.some(function (q) { return q.domain !== d.id; })) foreign += 1;
        if (new Set(set.map(function (q) { return q.id; })).size !== set.length) wrongSize += 1;
        if (count > 0 && count <= distinct) {
          const clusters = set.filter(function (q) { return q.cluster; }).map(function (q) { return q.cluster; });
          if (new Set(clusters).size !== clusters.length) clash += 1;
        }
      }
    });
  });
  check('l\'esercizio per dominio pesca solo dal dominio scelto', foreign === 0, String(foreign));
  check('l\'esercizio rispetta il numero di domande chiesto', wrongSize === 0, String(wrongSize));
  check('l\'esercizio evita i doppioni di cluster finché il dominio lo consente', clash === 0, String(clash));

  const all = Engine.buildPractice(EXAM, BP.domains.map(function (d) { return d.id; }), 0);
  check('"tutti i domini, tutte le domande" restituisce l\'intero pool', all.length === EXAM.length);

  let topicBad = 0;
  [[TECH, techRefs], [COMP, compLeaves.concat(compGroups)]].forEach(function (pair) {
    const pool = pair[0];
    for (let i = 0; i < 200; i++) {
      const mixed = Engine.buildTopicTest(pool, null, BP.topicTestSize);
      if (mixed.length !== BP.topicTestSize || new Set(mixed.map(function (q) { return q.id; })).size !== mixed.length) topicBad += 1;
    }
    pair[1].forEach(function (ref) {
      const available = pool.filter(function (q) { return q.ref === ref || q.ref.indexOf(ref + '.') === 0; });
      const set = Engine.buildTopicTest(pool, ref, BP.topicTestSize);
      if (set.length !== Math.min(BP.topicTestSize, available.length)) topicBad += 1;
      if (set.some(function (q) { return q.ref !== ref && q.ref.indexOf(ref + '.') !== 0; })) topicBad += 1;
    });
  });
  check('i test su tecniche e competenze pescano dalla voce scelta, senza ripetizioni', topicBad === 0, String(topicBad));
  check('il prefisso "9.5" non cattura altre voci per somiglianza',
    Engine.buildTopicTest(COMP, '9.5', 0).every(function (q) { return q.ref === '9.5' || q.ref.indexOf('9.5.') === 0; }) &&
    Engine.buildTopicTest(TECH, '10.2', 0).every(function (q) { return q.ref === '10.2'; }));

  const missed = {};
  missed[EXAM[0].id] = 0; missed[EXAM[1].id] = 3; missed[TECH[0].id] = 1; missed['ID-RITIRATO'] = 5;
  const review = Engine.buildReview(ALL, missed);
  check('il ripasso include le domande segnalate anche se mai sbagliate', review.length === 3,
    review.map(function (q) { return q.id; }).join(', '));
  check('il ripasso propone prima le più sbagliate', review[0].id === EXAM[1].id && review[2].id === EXAM[0].id);
})();

// ---------------------------------------------------------------------------
section('8. Motore: rimescolamento delle opzioni');
// ---------------------------------------------------------------------------
(function () {
  const position = { A: 0, B: 0, C: 0, D: 0 };
  let total = 0, broken = 0;
  for (let i = 0; i < 300; i++) {
    const questions = Engine.buildExam(EXAM).concat(Engine.buildTopicTest(COMP, null, 10));
    const session = Engine.createSession('exam', questions);
    questions.forEach(function (q) {
      const shown = Engine.displayOptions(session, q);
      if (shown.map(function (o) { return o.letter; }).join('') !== 'ABCD') broken += 1;
      q.options.forEach(function (o) {
        const hit = shown.filter(function (s) { return s.optionId === o.id; });
        if (hit.length !== 1 || hit[0].text !== o.text) broken += 1;
      });
      position[Engine.letterFor(session, q, q.answer)] += 1;
      total += 1;
    });
  }
  check('le opzioni mostrate sono le stesse quattro, ognuna una volta', broken === 0, String(broken));
  const shares = 'ABCD'.split('').map(function (l) { return position[l] / total; });
  check('la risposta corretta cade con la stessa frequenza su A, B, C e D',
    shares.every(function (s) { return Math.abs(s - 0.25) < 0.012; }),
    shares.map(function (s, i) { return 'ABCD'[i] + ' ' + (s * 100).toFixed(1) + '%'; }).join(' · '));

  const stored = { A: 0, B: 0, C: 0, D: 0 };
  ALL.forEach(function (q) { stored[q.answer] += 1; });
  console.log('  (nei file la risposta corretta è scritta come ' + JSON.stringify(stored) +
    ': per questo il rimescolamento è indispensabile)');
})();

// ---------------------------------------------------------------------------
section('9. Motore: correzione');
// ---------------------------------------------------------------------------
(function () {
  function play(questions, mode, pick) {
    const session = Engine.createSession(mode, questions);
    questions.forEach(function (q, i) { const a = pick(q, i); if (a) session.answers[q.id] = a; });
    return Engine.grade(session, ALL);
  }
  const wrongOf = function (q) { return q.options.filter(function (o) { return o.id !== q.answer; })[0].id; };

  const exam = Engine.buildExam(EXAM);
  const full = play(exam, 'exam', function (q) { return q.answer; });
  check('tutte corrette: 50 su 50, sopra la soglia', full.correct === 50 && full.total === 50 && full.passed && full.percent === 1);
  const none = play(exam, 'exam', wrongOf);
  check('tutte sbagliate: 0 su 50, sotto la soglia', none.correct === 0 && !none.passed);
  const blank = play(exam, 'exam', function () { return null; });
  check('nessuna risposta: 0 su 50, e ogni domanda conta come errore',
    blank.correct === 0 && blank.answers.every(function (a) { return !a.isCorrect && a.given === null; }));

  const threshold = Math.ceil(BP.exam.referencePassMark * 50);
  const atMark = play(exam, 'exam', function (q, i) { return i < threshold ? q.answer : wrongOf(q); });
  const below = play(exam, 'exam', function (q, i) { return i < threshold - 1 ? q.answer : wrongOf(q); });
  check('la soglia di riferimento scatta esattamente a ' + threshold + ' su 50',
    atMark.correct === threshold && atMark.passed && below.correct === threshold - 1 && !below.passed);

  const mixed = play(exam, 'exam', function (q, i) { return i % 2 ? q.answer : wrongOf(q); });
  const byDomain = {}, byActivity = {};
  exam.forEach(function (q, i) {
    const d = byDomain[q.domain] = byDomain[q.domain] || { seen: 0, correct: 0 };
    d.seen += 1; if (i % 2) d.correct += 1;
    const a = byActivity[q.activity] = byActivity[q.activity] || { seen: 0, wrong: 0 };
    a.seen += 1; if (!(i % 2)) a.wrong += 1;
  });
  check('il dettaglio per dominio corrisponde alle risposte date', JSON.stringify(mixed.domains) === JSON.stringify(byDomain));
  check('il dettaglio per activity statement corrisponde alle risposte date', JSON.stringify(mixed.activities) === JSON.stringify(byActivity));
  check('la somma dei domini è il totale', Object.keys(mixed.domains).reduce(function (a, k) { return a + mixed.domains[k].correct; }, 0) === mixed.correct);

  const topic = Engine.buildTopicTest(TECH, null, 10);
  const graded = play(topic, 'technique', function (q, i) { return i < 4 ? q.answer : wrongOf(q); });
  check('le sezioni trasversali si correggono per riferimento, senza domini',
    graded.correct === 4 && Object.keys(graded.domains).length === 0 &&
    Object.keys(graded.refs).reduce(function (a, k) { return a + graded.refs[k].seen; }, 0) === 10);

  const timed = Engine.createSession('exam', exam);
  const untimed = Engine.createSession('practice', exam);
  check('solo la simulazione ha il limite di tempo, di ' + BP.exam.durationMinutes + ' minuti',
    untimed.deadline === null && Math.abs(timed.deadline - timed.startedAt - BP.exam.durationMinutes * 60000) < 50);
})();

// ---------------------------------------------------------------------------
section('10. Motore: sessioni salvate prima di un aggiornamento del pool');
// ---------------------------------------------------------------------------
(function () {
  const exam = Engine.buildExam(EXAM);
  const session = Engine.createSession('exam', exam);
  session.answers[exam[0].id] = exam[0].answer;
  session.answers[exam[5].id] = 'B';
  session.flagged[exam[5].id] = true;
  // Tre domande della sessione non esistono più, e una risposta punta a un'opzione sparita.
  session.questionIds.splice(2, 0, 'D0-01');
  session.questionIds.splice(9, 0, 'D0-02');
  session.questionIds.push('D0-03');
  session.optionOrder['D0-01'] = ['A', 'B', 'C', 'D'];
  session.answers['D0-02'] = 'C';
  session.answers[exam[7].id] = 'Z';
  session.optionOrder[exam[8].id] = ['A', 'B'];
  session.index = session.questionIds.indexOf(exam[5].id);

  const removed = Engine.reconcile(session, ALL);
  check('le domande ritirate vengono tolte dalla sessione', removed === 3 && session.questionIds.length === 50 &&
    session.questionIds.every(function (id) { return id.indexOf('D0-') !== 0; }));
  check('le risposte alle domande rimaste restano', session.answers[exam[0].id] === exam[0].answer && session.answers[exam[5].id] === 'B' && session.flagged[exam[5].id] === true);
  check('le risposte orfane o non più valide spariscono', session.answers['D0-02'] === undefined && session.answers[exam[7].id] === undefined);
  check('l\'ordine delle opzioni viene rigenerato dove non corrisponde più', session.optionOrder[exam[8].id].slice().sort().join('') === 'ABCD' && session.optionOrder['D0-01'] === undefined);
  check('la domanda corrente resta la stessa', session.questionIds[session.index] === exam[5].id);
  const graded = Engine.grade(session, ALL);
  check('la sessione riallineata si corregge senza errori', graded.total === 50 && graded.correct === 1);
  check('una sessione già allineata non viene toccata', Engine.reconcile(session, ALL) === 0);
  check('una sessione di sole domande ritirate va scartata',
    Engine.reconcile({ questionIds: ['D0-01', 'D0-02'], index: 1, answers: {}, flagged: {}, revealed: {}, optionOrder: {} }, ALL) === -1);
})();

// ---------------------------------------------------------------------------
console.log('\n' + '-'.repeat(60));
if (problems.length) {
  console.log(problems.length + ' problemi su ' + checks + ' controlli:');
  problems.forEach(function (p) { console.log('  - ' + p); });
  process.exit(1);
}
console.log('Tutti i ' + checks + ' controlli superati.');
