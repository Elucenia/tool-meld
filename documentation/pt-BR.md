<!-- ELUCENIA technical documentation · meld · pt-BR · no clinical/professional/rights approval -->

# MELD-Na e MELD 3.0

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/meld)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Creatinina

`cr`

mg/dL · intervalo: 0,1–20

### Bilirrubina total

`bili`

mg/dL · intervalo: 0,1–80

### INR

`inr`

intervalo: 0,5–15

### Sódio

`na`

mEq/L · intervalo: 100–180

### Diálise 2 ou mais vezes na última semana (ou 24 h de hemodiálise contínua)?

`dialise`

- `0` — Não
- `1` — Sim

### Sexo

`sexo`

- `F` — Feminino
- `M` — Masculino

### Albumina (para o MELD 3.0)

`alb`

g/dL · opcional · intervalo: 0,5–6

## Edição do método

MELD clássico 2001/2003; MELD-Na com os coeficientes da política OPTN implementada em 2016; MELD 3.0 com a fórmula adulta de Kim (2021) e os limites de alocação OPTN implementados em 2023, conforme a política de 1 de outubro de 2026.

## Fórmula documentada

Limites: bilirrubina, INR e creatinina com mínimo 1,0; creatinina máxima 4,0 (MELD) ou 3,0 (MELD 3.0), assumida no máximo se em diálise; sódio entre 125 e 137; albumina entre 1,5 e 3,5.

MELD(i) = 10 × \[0,957 × ln(Cr) + 0,378 × ln(Bil) + 1,120 × ln(INR) + 0,643\], arredondado.

MELD-Na (se MELD(i) \> 11) = MELD(i) + 1,32 × (137 − Na) − 0,033 × MELD(i) × (137 − Na).

MELD 3.0 = 1,33 (mulher) + 4,56 × ln(Bil) + 0,82 × (137 − Na) − 0,24 × (137 − Na) × ln(Bil) + 9,09 × ln(INR) + 11,14 × ln(Cr) + 1,85 × (3,5 − Alb) − 1,83 × (3,5 − Alb) × ln(Cr) + 6.

Todos limitados a 40.

A fórmula MELD-Na exibida usa os coeficientes da política OPTN implementada em 2016, reproduzidos por Kim (2021); não é a fórmula MELD-Na original de Kim (2008). O teto de 40 e a creatinina de 3,0 mg/dL em diálise no MELD 3.0 seguem a política OPTN adulta de 1 de outubro de 2026; Kim (2021) não aplicou o teto de 40 na análise.

## Limites e população

MELD, MELD-Na e MELD 3.0 são versões distintas, com variáveis, interações e limites próprios. O modelo original foi avaliado para mortalidade em três meses em doença hepática avançada; não permite confirmar automaticamente regras atuais de alocação de órgãos. Entradas e interpretação devem corresponder à edição e ao contexto clínico. A variante aqui apresentada é adulta: a política OPTN de 1 de outubro de 2026 distingue pessoas registradas aos 18 anos ou mais de pessoas registradas antes dos 18 anos; a fórmula pediátrica não está implementada nesta ferramenta. Para a definição de diálise dessa política, são duas sessões de diálise ou pelo menos 24 horas de hemodiálise venovenosa contínua nos sete dias anteriores. A fórmula original MELD-Na de Kim (2008), com sódio entre 125 e 140 mmol/L, difere dos coeficientes e limites de sódio desta edição. A análise de Kim (2021) não limitou o MELD 3.0 a 40; nesta edição, esse limite provém da política de alocação. A leitura dessas fontes e a conferência numérica não aprovam elegibilidade, prioridade de transplante, diagnóstico ou decisões clínicas.

## Referências

- [Kamath PS et al. A model to predict survival in patients with end-stage liver disease. Hepatology, 2001.](https://doi.org/10.1053/jhep.2001.22172)

- [Kim WR et al. Hyponatremia and mortality among patients on the liver-transplant waiting list. N Engl J Med, 2008.](https://doi.org/10.1056/NEJMoa0801209)

- [Kim WR et al. MELD 3.0: the model for end-stage liver disease updated for the modern era. Gastroenterology, 2021.](https://doi.org/10.1053/j.gastro.2021.08.050)

- [Wiesner R et al. Model for end-stage liver disease (MELD) and allocation of donor livers. Gastroenterology, 2003.](https://doi.org/10.1053/gast.2003.50016)

- [OPTN Policies effective October 1, 2026. Policy 9.1D: adult MELD score, dialysis definition and bounds.](https://www.hrsa.gov/sites/default/files/hrsa/optn/optn_policies.pdf)

- [UNOS. Policy and system changes effective January 11, 2016: adding serum sodium to MELD calculation.](https://unos.org/news/policy-and-system-changes-effective-january-11-2016-adding-serum-sodium-to-meld-calculation/)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

As informações abaixo preservam as saídas do método para exemplos sintéticos. Não constituem validação clínica independente.

### 1

Mortalidade estimada em 90 dias: 1,9%

| Detalhes do resultado | |
| --- | --- |
| MELD original | 6 |
| MELD 3.0 | 7 |


### 2

Mortalidade estimada em 90 dias: 19,6%

| Detalhes do resultado | |
| --- | --- |
| MELD original | 26 |
| MELD 3.0 | 30 |


### 3

Mortalidade estimada em 90 dias: 52,6%

| Detalhes do resultado | |
| --- | --- |
| MELD original | 25 |
| MELD 3.0 | informe a albumina |

