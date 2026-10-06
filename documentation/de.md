<!-- ELUCENIA technical documentation · meld · de · no clinical/professional/rights approval -->

# MELD-Na und MELD 3.0

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/meld)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Kreatinin

`cr`

mg/dL · Bereich: 0,1–20

### Gesamtbilirubin

`bili`

mg/dL · Bereich: 0,1–80

### INR

`inr`

Bereich: 0,5–15

### Natrium

`na`

mEq/L · Bereich: 100–180

### Dialyse 2-mal oder häufiger in der letzten Woche (oder 24 h kontinuierliche Hämodialyse)?

`dialise`

- `0` — Nein
- `1` — Ja

### Geschlecht

`sexo`

- `F` — Weiblich
- `M` — Männlich

### Albumin (für MELD 3.0)

`alb`

g/dL · optional · Bereich: 0,5–6

## Fassung der Methode

Klassischer MELD 2001/2003; MELD-Na mit den Koeffizienten der 2016 eingeführten OPTN-Richtlinie; MELD 3.0 mit der Formel für Erwachsene von Kim (2021) und den 2023 eingeführten OPTN-Zuteilungsgrenzen gemäß der Richtlinie vom 1. Oktober 2026.

## Dokumentierte Formel

Grenzen: Bilirubin, INR und Kreatinin mindestens 1,0; Kreatinin maximal 4,0 (MELD) oder 3,0 (MELD 3.0), bei Dialyse auf Maximum gesetzt; Natrium 125–137; Albumin 1,5–3,5.

MELD(i) = 10 × \[0,957 × ln(Cr) + 0,378 × ln(Bil) + 1,120 × ln(INR) + 0,643\], gerundet.

MELD-Na (wenn MELD(i) \> 11) = MELD(i) + 1,32 × (137 − Na) − 0,033 × MELD(i) × (137 − Na).

MELD 3.0 = 1,33 (Frau) + 4,56 × ln(Bil) + 0,82 × (137 − Na) − 0,24 × (137 − Na) × ln(Bil) + 9,09 × ln(INR) + 11,14 × ln(Cr) + 1,85 × (3,5 − Alb) − 1,83 × (3,5 − Alb) × ln(Cr) + 6.

Alle auf 40 begrenzt.

Die angezeigte MELD-Na-Formel verwendet die Koeffizienten der 2016 eingeführten OPTN-Richtlinie, die Kim (2021) wiedergibt; sie ist nicht die ursprüngliche MELD-Na-Formel von Kim (2008). Die Obergrenze von 40 und der Kreatininwert von 3,0 mg/dL bei Dialyse im MELD 3.0 entsprechen der OPTN-Richtlinie für Erwachsene vom 1. Oktober 2026; Kim (2021) verwendete in der Analyse keine Obergrenze von 40.

## Grenzen und Population

MELD, MELD-Na und MELD 3.0 sind unterschiedliche Versionen mit eigenen Variablen, Wechselwirkungen und Grenzen. Das Originalmodell wurde für Drei-Monats-Mortalität bei fortgeschrittener Leberkrankheit beurteilt; es bestätigt nicht automatisch heutige Organallokationsregeln. Eingaben und Interpretation müssen zur Ausgabe und zum klinischen Kontext passen. Die hier dargestellte Variante gilt für Erwachsene: Die OPTN-Richtlinie vom 1. Oktober 2026 unterscheidet zwischen Personen, die im Alter von mindestens 18 Jahren registriert wurden, und Personen, die vor dem 18. Geburtstag registriert wurden; die pädiatrische Formel ist in diesem Werkzeug nicht implementiert. Nach der Dialysedefinition dieser Richtlinie sind zwei Dialysesitzungen oder mindestens 24 Stunden kontinuierliche venovenöse Hämodialyse in den vorangegangenen sieben Tagen erforderlich. Die ursprüngliche MELD-Na-Formel von Kim (2008) mit Natrium zwischen 125 und 140 mmol/L unterscheidet sich von den Koeffizienten und Natriumgrenzen dieser Fassung. In der Analyse von Kim (2021) wurde MELD 3.0 nicht auf 40 begrenzt; in dieser Fassung stammt diese Grenze aus der Zuteilungsrichtlinie. Die Lektüre dieser Quellen und die numerische Prüfung bedeuten keine Freigabe von Eignung, Transplantationspriorität, Diagnose oder klinischen Entscheidungen.

## Referenzen

- [Kamath PS et al. A model to predict survival in patients with end-stage liver disease. Hepatology, 2001.](https://doi.org/10.1053/jhep.2001.22172)

- [Kim WR et al. Hyponatremia and mortality among patients on the liver-transplant waiting list. N Engl J Med, 2008.](https://doi.org/10.1056/NEJMoa0801209)

- [Kim WR et al. MELD 3.0: the model for end-stage liver disease updated for the modern era. Gastroenterology, 2021.](https://doi.org/10.1053/j.gastro.2021.08.050)

- [Wiesner R et al. Model for end-stage liver disease (MELD) and allocation of donor livers. Gastroenterology, 2003.](https://doi.org/10.1053/gast.2003.50016)

- [OPTN Policies effective October 1, 2026. Policy 9.1D: adult MELD score, dialysis definition and bounds.](https://www.hrsa.gov/sites/default/files/hrsa/optn/optn_policies.pdf)

- [UNOS. Policy and system changes effective January 11, 2016: adding serum sodium to MELD calculation.](https://unos.org/news/policy-and-system-changes-effective-january-11-2016-adding-serum-sodium-to-meld-calculation/)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Dokumentierte Ergebnisse

Die folgenden Angaben bewahren die Ausgaben der Methode für synthetische Beispiele. Sie stellen keine unabhängige klinische Validierung dar.

### 1

Geschätzte 90-Tage-Mortalität: 1,9%

| Ergebnisdetails | |
| --- | --- |
| Ursprünglicher MELD | 6 |
| MELD 3.0 | 7 |


### 2

Geschätzte 90-Tage-Mortalität: 19,6%

| Ergebnisdetails | |
| --- | --- |
| Ursprünglicher MELD | 26 |
| MELD 3.0 | 30 |


### 3

Geschätzte 90-Tage-Mortalität: 52,6%

| Ergebnisdetails | |
| --- | --- |
| Ursprünglicher MELD | 25 |
| MELD 3.0 | Albumin eingeben |

