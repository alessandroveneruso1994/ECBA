# ECBA Trainer

PWA per esercitarsi all'esame **ECBA** (Entry Certificate in Business Analysis) di IIBA,
costruita sulla struttura dell'**ECBA Exam Blueprint V1.1** (ottobre 2025).

Nessun build step, nessuna dipendenza, nessun backend: HTML, CSS e JavaScript vanilla.
Funziona offline e si installa sulla home screen come un'app.

## Modalità

| Modalità | Cosa fa |
|---|---|
| **Simulazione d'esame** | 50 domande in 75 minuti, distribuite secondo i pesi ufficiali dei nove domini. Nessun feedback fino alla consegna, navigazione avanti/indietro e flag "segnala per revisione", come nell'esame reale. |
| **Esercizio per dominio** | Una scheda per ciascuno dei nove domini: tocchi quella che ti interessa e ti alleni solo su quel dominio, senza timer, con la spiegazione subito dopo ogni risposta. Ogni scheda mostra la tua percentuale storica su quel dominio. |
| **Le 20 tecniche** | Il capitolo 10 del BABOK. Test da 10 domande su tutto il capitolo, oppure drill su una singola tecnica (cinque domande ciascuna). |
| **Le 29 competenze** | Il capitolo 9 del BABOK. Test da 10 domande, per gruppo di competenze o per singola competenza. |
| **Ripasso errori** | Ripropone solo le domande sbagliate o segnalate, le più sbagliate per prime. Attinge da tutte le sezioni. |
| **Blueprint & progressi** | Domini e pesi, le 20 tecniche e le 29 competenze valutate, storico e statistiche per dominio. |

Al termine di ogni sessione il report mostra il risultato per dominio e per **activity
statement**: non solo "sei debole su Need", ma "sei debole su 5.3 — confrontare i bisogni
degli stakeholder con gli outcome".

## Struttura dell'esame reale

Dal blueprint ufficiale: 75 minuti, 50 domande a scelta multipla (situation-based e
standard), online remote proctored.

| # | Dominio | Peso | Domande | Fonte |
|---|---|---|---|---|
| 1 | Understanding Business Analysis | 20% | 10 | The Business Analysis Standard |
| 2 | Mindset for Effective Business Analysis | 14% | 7 | The Business Analysis Standard |
| 3 | Implementing Business Analysis | 6% | 3 | The Business Analysis Standard |
| 4 | Change | 10% | 5 | BABOK Guide |
| 5 | Need | 10% | 5 | BABOK Guide |
| 6 | Solution | 10% | 5 | BABOK Guide |
| 7 | Stakeholder | 10% | 5 | BABOK Guide |
| 8 | Value | 10% | 5 | BABOK Guide |
| 9 | Context | 10% | 5 | BABOK Guide |

L'esame valuta inoltre 20 tecniche del capitolo 10 del BABOK Guide e le 29 underlying
competencies del capitolo 9.

## Stato del pool domande

440 domande in tre pool distinti:

| Pool | Domande | Copertura |
|---|---|---|
| **Simulazione** — domini 1–3 | 96 | *The Business Analysis Standard* v2.0 |
| **Simulazione** — domini 4–9 | 144 | *BABOK Guide* v3 |
| **Tecniche** (cap. 10) | 100 | 5 domande per ciascuna delle 20 tecniche |
| **Competenze** (cap. 9) | 100 | tutte e 29 le competenze, più 13 domande sui sei gruppi |

Le 240 domande della simulazione coprono tutti e nove i domini e **tutte e 36 le activity
statement**.

Tecniche e competenze non sono domini: il blueprint le valuta trasversalmente, dentro i
nove domini. Le loro domande stanno quindi in pool separati e **non entrano nella
simulazione**, che altrimenti perderebbe la distribuzione ufficiale delle 50 domande. Le
domande su tecniche e competenze già presenti nel pool della simulazione restano dove
sono, agganciate al dominio in cui l'esame le collocherebbe.

Ogni dominio ha da 4 a 8 volte le domande che compaiono all'esame: due simulazioni
consecutive condividono circa 9 domande su 50, e servono una ventina di simulazioni per
incontrare l'intero pool. La simulazione rispetta esattamente la distribuzione del
blueprint (10/7/3/5/5/5/5/5/5).

**Le domande non sono domande d'esame reali.** IIBA non pubblica il proprio question bank.
Sono domande di pratica originali scritte a partire dai documenti ufficiali, con
riferimento alla sezione di origine in ogni spiegazione.

## Uso

Serve un web server qualsiasi (il service worker non funziona da `file://`):

```bash
python3 -m http.server 8000
# poi apri http://localhost:8000
```

Per installarla sul telefono, pubblica la cartella su un host HTTPS (GitHub Pages va
benissimo) e usa "Aggiungi a schermata Home".

Scorciatoie da tastiera durante il quiz: `1`–`4` per rispondere, `←` `→` per navigare,
`F` per segnalare la domanda.

## Struttura del progetto

```
index.html                 markup e template delle viste
css/style.css              tema chiaro/scuro
js/engine.js               composizione dei set secondo il blueprint, timing, correzione
js/storage.js              persistenza su localStorage (sessione, storico, errori)
js/app.js                  routing, rendering, eventi
data/blueprint.js          domini, pesi, activity statement, tecniche, competenze
data/questions.js          pool della simulazione, per dominio
data/topics.js             pool delle sezioni tecniche e competenze, per riferimento BABOK
sw.js                      service worker, cache offline
```

I dati restano nel browser: nessuna telemetria, nessuna chiamata di rete.

### Aggiungere domande

Ogni voce di `data/questions.js` ha questa forma:

```js
{
  id: 'D5-01', domain: 5, activity: '5.1', type: 'situational',
  source: 'BABOK Guide, 4.2',
  stem: 'Testo della domanda in inglese...',
  options: [ { id: 'A', text: '...' }, /* ... */ ],
  answer: 'C',
  explanation: 'Spiegazione in italiano. {A} è sbagliata perché...'
}
```

Le opzioni vengono mescolate a ogni sessione, così non si finisce per ricordare la
posizione della risposta invece del contenuto. Per questo nelle spiegazioni le opzioni si
citano con i segnaposto `{A}`, `{B}`… riferiti alla numerazione qui sopra: a schermo
diventano la lettera effettivamente mostrata.

## Fonti

- ECBA Exam Blueprint V1.1 — IIBA
- ECBA Handbook, ottobre 2025 — IIBA
- The Business Analysis Standard v2.0 — IIBA
- A Guide to the Business Analysis Body of Knowledge (BABOK Guide) v3 — IIBA

I documenti IIBA sono materiale protetto da copyright e non sono inclusi in questo
repository.
