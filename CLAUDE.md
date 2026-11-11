# Note per Claude Code

## Documenti di studio: sempre in doppia versione

I riassunti di studio in `docs/summaries/` esistono in **italiano e inglese**.
Ogni modifica al contenuto va applicata a entrambe le lingue e i due file Word
vanno rigenerati insieme:

```bash
cd docs/summaries/src
node build-docx.js "../ECBA - Riassunti di studio.docx" it
node build-docx.js "../ECBA - Study Summaries.docx" en
```

Il contenuto italiano sta in `content-N.js`, quello inglese in `content-N-en.js`,
con la stessa struttura di blocchi. Le stringhe fisse (copertina, etichette dei
riquadri, introduzione) stanno in `ui-strings.js`, una voce per lingua.

Vincolo di lunghezza: massimo 5 pagine per sezione d'esame, meno dove il
materiale non giustifica di più.

## Lingua

L'interfaccia dell'app e le spiegazioni delle domande sono in italiano; il testo
delle domande e la terminologia IIBA restano in inglese, come all'esame.

## Verifica

L'app si prova con un web server locale (il service worker non funziona da
`file://`) e i test end-to-end girano su Chromium via Playwright. Il calcolo del
punteggio va verificato completando esami interi, non rispondendo a poche
domande. I due controlli da lanciare dopo ogni modifica:

```bash
node tests/validate-data.js   # dati e motore, nessuna dipendenza
node tests/e2e.js             # l'app nel browser, serve da sé la cartella via HTTP
```

Le spiegazioni non devono dire che cosa l'esame chieda "spesso": IIBA non pubblica
il question bank, e le uniche evidenze sono le dieci sample question. Nei distrattori
nuovi va curata anche la lunghezza: la risposta giusta non deve riconoscersi perché
è la più lunga (il validatore lo controlla).

Gli strumenti disponibili cambiano da un ambiente all'altro. Dove LibreOffice
funziona, `soffice --headless --convert-to pdf` permette di contare le pagine dei
riassunti; dove non apre i `.docx`, conviene leggere direttamente `word/document.xml`.
