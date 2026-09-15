# Riassunti di studio ECBA

Documenti Word con i riassunti per ciascuno dei nove domini d'esame, più due
appendici sulle 20 tecniche e sulle 29 competenze valutate.

Esistono in **due versioni con lo stesso contenuto**:

| File | Lingua | Pagine |
|---|---|---|
| `ECBA - Riassunti di studio.docx` | italiano | 33 |
| `ECBA - Study Summaries.docx` | inglese | 32 |

Nessuna sezione supera le 3 pagine: il limite di 5 per dominio è ampiamente
rispettato, e dove il materiale non lo giustificava il riassunto è più corto.

## Rigenerare i documenti

```bash
cd src
npm install docx           # solo la prima volta
node build-docx.js "../ECBA - Riassunti di studio.docx" it
node build-docx.js "../ECBA - Study Summaries.docx" en
```

## Come è organizzato il sorgente

```
src/build-docx.js      generatore: traduce i blocchi in elementi docx e impagina
src/ui-strings.js      stringhe fisse nelle due lingue: copertina, etichette, introduzione
src/content-N.js       contenuto italiano   (1: domini 1-3, 2: 4-6, 3: 7-9, 4: appendici)
src/content-N-en.js    contenuto inglese, stessa struttura
```

Il contenuto è una lista di blocchi tipizzati, così le due lingue restano
allineate e il generatore è uno solo:

```js
{ t: 'p',     v: 'paragrafo' }
{ t: 'h3',    v: 'sottotitolo' }
{ t: 'ref',   v: 'BABOK 6.1 · BABOK 8.4' }                          // rimandi di studio del Syllabus Map
{ t: 'ul',    v: ['voce', 'voce'] }
{ t: 'table', head: [...], rows: [[...]], widths: [2600, 6400] }   // DXA, somma 9000
{ t: 'key',   v: 'riquadro azzurro: da sapere alla lettera' }
{ t: 'trap',  v: 'riquadro rosso: distinzioni facili da confondere' }
```

**Ogni modifica al contenuto va fatta in entrambe le lingue**, e i due documenti
vanno rigenerati insieme.

## Nota sulle fonti

I riassunti sono originali, scritti a partire da *The Business Analysis Standard*
v2.0, dal *BABOK Guide* v3, dall'*ECBA Exam Blueprint* V1.1 e dagli altri
documenti candidato pubblicati da IIBA: *Syllabus Map*, *Learning Outcomes*,
*Sample Exam Questions* e *Candidate Q&A*. I titoli dei paragrafi delle activity
statement e i rimandi di studio sotto ciascuno vengono dal Syllabus Map; i
riquadri che citano "la sample question ufficiale" si riferiscono alle dieci
domande di esempio pubblicate da IIBA. I documenti IIBA sono protetti da
copyright e non sono inclusi in questo repository.
