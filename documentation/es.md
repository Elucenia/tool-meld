<!-- ELUCENIA technical documentation · meld · es · no clinical/professional/rights approval -->

# MELD-Na y MELD 3.0

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/meld)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Creatinina

`cr`

mg/dL · intervalo: 0,1–20

### Bilirrubina total

`bili`

mg/dL · intervalo: 0,1–80

### INR

`inr`

intervalo: 0,5–15

### Sodio

`na`

mEq/L · intervalo: 100–180

### ¿Diálisis 2 o más veces en la última semana (o 24 h de hemodiálisis continua)?

`dialise`

- `0` — No
- `1` — Sí

### Sexo

`sexo`

- `F` — Femenino
- `M` — Masculino

### Albúmina (para MELD 3.0)

`alb`

g/dL · opcional · intervalo: 0,5–6

## Edición del método

MELD clásico 2001/2003; MELD-Na con los coeficientes de la política OPTN implementada en 2016; MELD 3.0 con la fórmula para adultos de Kim (2021) y los límites de asignación OPTN implementados en 2023, conforme a la política del 1 de octubre de 2026.

## Fórmula documentada

Límites: bilirrubina, INR y creatinina mínimo 1,0; creatinina máxima 4,0 (MELD) o 3,0 (MELD 3.0), asumida al máximo si en diálisis; sodio 125–137; albúmina 1,5–3,5.

MELD(i) = 10 × \[0,957 × ln(Cr) + 0,378 × ln(Bil) + 1,120 × ln(INR) + 0,643\], redondeado.

MELD-Na (si MELD(i) \> 11) = MELD(i) + 1,32 × (137 − Na) − 0,033 × MELD(i) × (137 − Na).

MELD 3.0 = 1,33 (mujer) + 4,56 × ln(Bil) + 0,82 × (137 − Na) − 0,24 × (137 − Na) × ln(Bil) + 9,09 × ln(INR) + 11,14 × ln(Cr) + 1,85 × (3,5 − Alb) − 1,83 × (3,5 − Alb) × ln(Cr) + 6.

Todos limitados a 40.

La fórmula MELD-Na mostrada usa los coeficientes de la política OPTN implementada en 2016, reproducidos por Kim (2021); no es la fórmula MELD-Na original de Kim (2008). El límite máximo de 40 y el valor de creatinina de 3,0 mg/dL en diálisis en MELD 3.0 siguen la política OPTN para adultos del 1 de octubre de 2026; Kim (2021) no aplicó el límite máximo de 40 en el análisis.

## Límites y población

MELD, MELD-Na y MELD 3.0 son versiones distintas, con variables, interacciones y límites propios. El modelo original se evaluó para mortalidad a tres meses en enfermedad hepática avanzada; no permite confirmar automáticamente las reglas actuales de asignación de órganos. Las entradas y la interpretación deben corresponder a la edición y al contexto clínico. La variante presentada aquí es para adultos: la política OPTN del 1 de octubre de 2026 distingue a las personas registradas a los 18 años o más de las personas registradas antes de los 18 años; la fórmula pediátrica no está implementada en esta herramienta. Según la definición de diálisis de esa política, son dos sesiones de diálisis o al menos 24 horas de hemodiálisis venovenosa continua en los siete días anteriores. La fórmula MELD-Na original de Kim (2008), con sodio entre 125 y 140 mmol/L, difiere de los coeficientes y los límites de sodio de esta edición. El análisis de Kim (2021) no limitó MELD 3.0 a 40; en esta edición, ese límite procede de la política de asignación. La lectura de estas fuentes y la comprobación numérica no aprueban la elegibilidad, la prioridad para trasplante, el diagnóstico ni las decisiones clínicas.

## Referencias

- [Kamath PS et al. A model to predict survival in patients with end-stage liver disease. Hepatology, 2001.](https://doi.org/10.1053/jhep.2001.22172)

- [Kim WR et al. Hyponatremia and mortality among patients on the liver-transplant waiting list. N Engl J Med, 2008.](https://doi.org/10.1056/NEJMoa0801209)

- [Kim WR et al. MELD 3.0: the model for end-stage liver disease updated for the modern era. Gastroenterology, 2021.](https://doi.org/10.1053/j.gastro.2021.08.050)

- [Wiesner R et al. Model for end-stage liver disease (MELD) and allocation of donor livers. Gastroenterology, 2003.](https://doi.org/10.1053/gast.2003.50016)

- [OPTN Policies effective October 1, 2026. Policy 9.1D: adult MELD score, dialysis definition and bounds.](https://www.hrsa.gov/sites/default/files/hrsa/optn/optn_policies.pdf)

- [UNOS. Policy and system changes effective January 11, 2016: adding serum sodium to MELD calculation.](https://unos.org/news/policy-and-system-changes-effective-january-11-2016-adding-serum-sodium-to-meld-calculation/)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
