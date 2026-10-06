<!-- ELUCENIA technical documentation · meld · fr · no clinical/professional/rights approval -->

# MELD-Na et MELD 3.0

[conditions, sources et autorisations](https://elucenia.org/fr/outils/meld)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Créatinine

`cr`

mg/dL · intervalle: 0,1–20

### Bilirubine totale

`bili`

mg/dL · intervalle: 0,1–80

### INR

`inr`

intervalle: 0,5–15

### Sodium

`na`

mEq/L · intervalle: 100–180

### Dialyse au moins 2 fois la dernière semaine (ou 24 h d’hémodialyse continue) ?

`dialise`

- `0` — Non
- `1` — Oui

### Sexe

`sexo`

- `F` — Féminin
- `M` — Masculin

### Albumine (pour MELD 3.0)

`alb`

g/dL · facultatif · intervalle: 0,5–6

## Édition de la méthode

MELD classique 2001/2003 ; MELD-Na avec les coefficients de la politique OPTN mise en œuvre en 2016 ; MELD 3.0 avec la formule pour adultes de Kim (2021) et les limites d’attribution OPTN mises en œuvre en 2023, conformément à la politique du 1er octobre 2026.

## Formule documentée

Limites : bilirubine, INR et créatinine minimum 1,0 ; créatinine maximum 4,0 (MELD) ou 3,0 (MELD 3.0), fixée au maximum si dialyse ; sodium 125–137 ; albumine 1,5–3,5.

MELD(i) = 10 × \[0,957 × ln(Cr) + 0,378 × ln(Bil) + 1,120 × ln(INR) + 0,643\], arrondi.

MELD-Na (si MELD(i) \> 11) = MELD(i) + 1,32 × (137 − Na) − 0,033 × MELD(i) × (137 − Na).

MELD 3.0 = 1,33 (femme) + 4,56 × ln(Bil) + 0,82 × (137 − Na) − 0,24 × (137 − Na) × ln(Bil) + 9,09 × ln(INR) + 11,14 × ln(Cr) + 1,85 × (3,5 − Alb) − 1,83 × (3,5 − Alb) × ln(Cr) + 6.

Tous plafonnés à 40.

La formule MELD-Na affichée utilise les coefficients de la politique OPTN mise en œuvre en 2016, reproduits par Kim (2021) ; il ne s’agit pas de la formule MELD-Na originale de Kim (2008). Le plafond de 40 et la valeur de créatinine de 3,0 mg/dL en cas de dialyse dans MELD 3.0 suivent la politique OPTN pour adultes du 1er octobre 2026 ; Kim (2021) n’a pas appliqué le plafond de 40 dans l’analyse.

## Limites et population

MELD, MELD-Na et MELD 3.0 sont des versions distinctes avec leurs propres variables, interactions et limites. Le modèle original a été évalué pour la mortalité à trois mois en maladie hépatique avancée ; il ne permet pas de confirmer automatiquement les règles actuelles d’attribution d’organes. Les entrées et l’interprétation doivent correspondre à l’édition et au contexte clinique. La variante présentée ici concerne les adultes : la politique OPTN du 1er octobre 2026 distingue les personnes inscrites à 18 ans ou plus des personnes inscrites avant 18 ans ; la formule pédiatrique n’est pas implémentée dans cet outil. Selon la définition de la dialyse dans cette politique, il s’agit de deux séances de dialyse ou d’au moins 24 heures d’hémodialyse veinoveineuse continue au cours des sept jours précédents. La formule MELD-Na originale de Kim (2008), avec un sodium compris entre 125 et 140 mmol/L, diffère des coefficients et des limites de sodium de cette édition. L’analyse de Kim (2021) ne plafonnait pas le MELD 3.0 à 40 ; dans cette édition, cette limite provient de la politique d’attribution. La lecture de ces sources et la vérification numérique ne constituent pas une approbation de l’éligibilité, de la priorité de transplantation, du diagnostic ou des décisions cliniques.

## Références

- [Kamath PS et al. A model to predict survival in patients with end-stage liver disease. Hepatology, 2001.](https://doi.org/10.1053/jhep.2001.22172)

- [Kim WR et al. Hyponatremia and mortality among patients on the liver-transplant waiting list. N Engl J Med, 2008.](https://doi.org/10.1056/NEJMoa0801209)

- [Kim WR et al. MELD 3.0: the model for end-stage liver disease updated for the modern era. Gastroenterology, 2021.](https://doi.org/10.1053/j.gastro.2021.08.050)

- [Wiesner R et al. Model for end-stage liver disease (MELD) and allocation of donor livers. Gastroenterology, 2003.](https://doi.org/10.1053/gast.2003.50016)

- [OPTN Policies effective October 1, 2026. Policy 9.1D: adult MELD score, dialysis definition and bounds.](https://www.hrsa.gov/sites/default/files/hrsa/optn/optn_policies.pdf)

- [UNOS. Policy and system changes effective January 11, 2016: adding serum sodium to MELD calculation.](https://unos.org/news/policy-and-system-changes-effective-january-11-2016-adding-serum-sodium-to-meld-calculation/)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Résultats documentés

Les informations ci-dessous conservent les sorties de la méthode pour des exemples synthétiques. Elles ne constituent pas une validation clinique indépendante.

### 1

Mortalité estimée à 90 jours : 1,9%

| Détails du résultat | |
| --- | --- |
| MELD original | 6 |
| MELD 3.0 | 7 |


### 2

Mortalité estimée à 90 jours : 19,6%

| Détails du résultat | |
| --- | --- |
| MELD original | 26 |
| MELD 3.0 | 30 |


### 3

Mortalité estimée à 90 jours : 52,6%

| Détails du résultat | |
| --- | --- |
| MELD original | 25 |
| MELD 3.0 | indiquez l’albumine |

