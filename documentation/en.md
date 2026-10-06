<!-- ELUCENIA technical documentation · meld · en · no clinical/professional/rights approval -->

# MELD-Na and MELD 3.0

[conditions, sources and permissions](https://elucenia.org/en/tools/meld)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Creatinine

`cr`

mg/dL · range: 0.1–20

### Total bilirubin

`bili`

mg/dL · range: 0.1–80

### INR

`inr`

range: 0.5–15

### Sodium

`na`

mEq/L · range: 100–180

### Dialysis 2 or more times in the last week (or 24 h of continuous hemodialysis)?

`dialise`

- `0` — No
- `1` — Yes

### Sex

`sexo`

- `F` — Female
- `M` — Male

### Albumin (for MELD 3.0)

`alb`

g/dL · optional · range: 0.5–6

## Method edition

Classic MELD 2001/2003; MELD-Na with the coefficients of the OPTN policy implemented in 2016; MELD 3.0 with the adult formula from Kim (2021) and the OPTN allocation limits implemented in 2023, according to the policy of October 1, 2026.

## Documented formula

Limits: bilirubin, INR and creatinine minimum 1.0; creatinine maximum 4.0 (MELD) or 3.0 (MELD 3.0), assumed at maximum if on dialysis; sodium 125–137; albumin 1.5–3.5.

MELD(i) = 10 × \[0.957 × ln(Cr) + 0.378 × ln(Bil) + 1.120 × ln(INR) + 0.643\], rounded.

MELD-Na (if MELD(i) \> 11) = MELD(i) + 1.32 × (137 − Na) − 0.033 × MELD(i) × (137 − Na).

MELD 3.0 = 1.33 (female) + 4.56 × ln(Bil) + 0.82 × (137 − Na) − 0.24 × (137 − Na) × ln(Bil) + 9.09 × ln(INR) + 11.14 × ln(Cr) + 1.85 × (3.5 − Alb) − 1.83 × (3.5 − Alb) × ln(Cr) + 6.

All capped at 40.

The displayed MELD-Na formula uses the coefficients of the OPTN policy implemented in 2016, reproduced by Kim (2021); it is not the original MELD-Na formula from Kim (2008). The cap of 40 and the creatinine value of 3.0 mg/dL during dialysis in MELD 3.0 follow the adult OPTN policy of October 1, 2026; Kim (2021) did not apply the cap of 40 in the analysis.

## Limits and population

MELD, MELD-Na and MELD 3.0 are distinct versions, with their own variables, interactions and limits. The original model was assessed for three-month mortality in advanced liver disease; it does not automatically confirm current organ-allocation rules. Inputs and interpretation must match the edition and clinical context. The variant presented here is for adults: the OPTN policy of October 1, 2026 distinguishes people registered at age 18 or older from people registered before age 18; the pediatric formula is not implemented in this tool. Under the dialysis definition in that policy, there must have been two dialysis sessions or at least 24 hours of continuous venovenous hemodialysis in the preceding seven days. The original MELD-Na formula from Kim (2008), with sodium between 125 and 140 mmol/L, differs from the coefficients and sodium limits in this edition. The analysis by Kim (2021) did not cap MELD 3.0 at 40; in this edition, that limit comes from the allocation policy. Reading these sources and checking the numbers do not establish approval of eligibility, transplant priority, diagnosis or clinical decisions.

## References

- [Kamath PS et al. A model to predict survival in patients with end-stage liver disease. Hepatology, 2001.](https://doi.org/10.1053/jhep.2001.22172)

- [Kim WR et al. Hyponatremia and mortality among patients on the liver-transplant waiting list. N Engl J Med, 2008.](https://doi.org/10.1056/NEJMoa0801209)

- [Kim WR et al. MELD 3.0: the model for end-stage liver disease updated for the modern era. Gastroenterology, 2021.](https://doi.org/10.1053/j.gastro.2021.08.050)

- [Wiesner R et al. Model for end-stage liver disease (MELD) and allocation of donor livers. Gastroenterology, 2003.](https://doi.org/10.1053/gast.2003.50016)

- [OPTN Policies effective October 1, 2026. Policy 9.1D: adult MELD score, dialysis definition and bounds.](https://www.hrsa.gov/sites/default/files/hrsa/optn/optn_policies.pdf)

- [UNOS. Policy and system changes effective January 11, 2016: adding serum sodium to MELD calculation.](https://unos.org/news/policy-and-system-changes-effective-january-11-2016-adding-serum-sodium-to-meld-calculation/)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Documented results

The information below preserves the method outputs for synthetic examples. It does not constitute independent clinical validation.

### 1

Estimated 90-day mortality: 1.9%

| Result details | |
| --- | --- |
| Original MELD | 6 |
| MELD 3.0 | 7 |


### 2

Estimated 90-day mortality: 19.6%

| Result details | |
| --- | --- |
| Original MELD | 26 |
| MELD 3.0 | 30 |


### 3

Estimated 90-day mortality: 52.6%

| Result details | |
| --- | --- |
| Original MELD | 25 |
| MELD 3.0 | enter albumin |

