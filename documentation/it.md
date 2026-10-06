<!-- ELUCENIA technical documentation · meld · it · no clinical/professional/rights approval -->

# MELD-Na e MELD 3.0

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/meld)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Creatinina

`cr`

mg/dL · intervallo: 0,1–20

### Bilirubina totale

`bili`

mg/dL · intervallo: 0,1–80

### INR

`inr`

intervallo: 0,5–15

### Sodio

`na`

mEq/L · intervallo: 100–180

### Dialisi 2 o più volte nell’ultima settimana (o 24 h di emodialisi continua)?

`dialise`

- `0` — No
- `1` — Sì

### Sesso

`sexo`

- `F` — Femminile
- `M` — Maschile

### Albumina (per MELD 3.0)

`alb`

g/dL · facoltativo · intervallo: 0,5–6

## Edizione del metodo

MELD classico 2001/2003; MELD-Na con i coefficienti della politica OPTN implementata nel 2016; MELD 3.0 con la formula per adulti di Kim (2021) e i limiti di assegnazione OPTN implementati nel 2023, secondo la politica del 1° ottobre 2026.

## Formula documentata

Limiti: bilirubina, INR e creatinina minimo 1,0; creatinina massimo 4,0 (MELD) o 3,0 (MELD 3.0), assunta al massimo se in dialisi; sodio 125–137; albumina 1,5–3,5.

MELD(i) = 10 × \[0,957 × ln(Cr) + 0,378 × ln(Bil) + 1,120 × ln(INR) + 0,643\], arrotondato.

MELD-Na (se MELD(i) \> 11) = MELD(i) + 1,32 × (137 − Na) − 0,033 × MELD(i) × (137 − Na).

MELD 3.0 = 1,33 (donna) + 4,56 × ln(Bil) + 0,82 × (137 − Na) − 0,24 × (137 − Na) × ln(Bil) + 9,09 × ln(INR) + 11,14 × ln(Cr) + 1,85 × (3,5 − Alb) − 1,83 × (3,5 − Alb) × ln(Cr) + 6.

Tutti limitati a 40.

La formula MELD-Na visualizzata usa i coefficienti della politica OPTN implementata nel 2016, riprodotti da Kim (2021); non è la formula MELD-Na originale di Kim (2008). Il limite massimo di 40 e il valore di creatinina di 3,0 mg/dL in dialisi nel MELD 3.0 seguono la politica OPTN per adulti del 1° ottobre 2026; Kim (2021) non ha applicato il limite massimo di 40 nell’analisi.

## Limiti e popolazione

MELD, MELD-Na e MELD 3.0 sono versioni distinte, con variabili, interazioni e limiti propri. Il modello originale è stato valutato per la mortalità a tre mesi nella malattia epatica avanzata; non consente di confermare automaticamente le attuali regole di allocazione degli organi. Dati di ingresso e interpretazione devono corrispondere all’edizione e al contesto clinico. La variante qui presentata è per adulti: la politica OPTN del 1° ottobre 2026 distingue le persone registrate a 18 anni o più da quelle registrate prima dei 18 anni; la formula pediatrica non è implementata in questo strumento. Secondo la definizione di dialisi di tale politica, si tratta di due sedute di dialisi o di almeno 24 ore di emodialisi venovenosa continua nei sette giorni precedenti. La formula MELD-Na originale di Kim (2008), con sodio tra 125 e 140 mmol/L, differisce dai coefficienti e dai limiti di sodio di questa edizione. L’analisi di Kim (2021) non ha limitato MELD 3.0 a 40; in questa edizione, tale limite deriva dalla politica di assegnazione. La lettura di queste fonti e la verifica numerica non approvano l’idoneità, la priorità di trapianto, la diagnosi o le decisioni cliniche.

## Riferimenti

- [Kamath PS et al. A model to predict survival in patients with end-stage liver disease. Hepatology, 2001.](https://doi.org/10.1053/jhep.2001.22172)

- [Kim WR et al. Hyponatremia and mortality among patients on the liver-transplant waiting list. N Engl J Med, 2008.](https://doi.org/10.1056/NEJMoa0801209)

- [Kim WR et al. MELD 3.0: the model for end-stage liver disease updated for the modern era. Gastroenterology, 2021.](https://doi.org/10.1053/j.gastro.2021.08.050)

- [Wiesner R et al. Model for end-stage liver disease (MELD) and allocation of donor livers. Gastroenterology, 2003.](https://doi.org/10.1053/gast.2003.50016)

- [OPTN Policies effective October 1, 2026. Policy 9.1D: adult MELD score, dialysis definition and bounds.](https://www.hrsa.gov/sites/default/files/hrsa/optn/optn_policies.pdf)

- [UNOS. Policy and system changes effective January 11, 2016: adding serum sodium to MELD calculation.](https://unos.org/news/policy-and-system-changes-effective-january-11-2016-adding-serum-sodium-to-meld-calculation/)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Risultati documentati

Le informazioni seguenti conservano gli output del metodo per esempi sintetici. Non costituiscono una validazione clinica indipendente.

### 1

Mortalità stimata a 90 giorni: 1,9%

| Dettagli del risultato | |
| --- | --- |
| MELD originale | 6 |
| MELD 3.0 | 7 |


### 2

Mortalità stimata a 90 giorni: 19,6%

| Dettagli del risultato | |
| --- | --- |
| MELD originale | 26 |
| MELD 3.0 | 30 |


### 3

Mortalità stimata a 90 giorni: 52,6%

| Dettagli del risultato | |
| --- | --- |
| MELD originale | 25 |
| MELD 3.0 | inserire l’albumina |

