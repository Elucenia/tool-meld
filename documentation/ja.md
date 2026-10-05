<!-- ELUCENIA technical documentation · meld · ja · no clinical/professional/rights approval -->

# MELD-Na・MELD 3.0

[条件・出典・許諾](https://elucenia.org/ja/tools/meld)

## 使い方

ポータルでツールを使用するか、ローカルHTTPサーバー経由でindex.htmlを開いてください。言語を選択し、項目を入力して計算してください。

## 入力項目と単位

### クレアチニン

`cr`

mg/dL · 範囲: 0.1–20

### 総ビリルビン

`bili`

mg/dL · 範囲: 0.1–80

### INR

`inr`

範囲: 0.5–15

### ナトリウム

`na`

mEq/L · 範囲: 100–180

### 過去1週間に透析2回以上（または24 hの持続的血液透析）ですか？

`dialise`

- `0` — いいえ
- `1` — はい

### 性別

`sexo`

- `F` — 女性
- `M` — 男性

### アルブミン（MELD 3.0用）

`alb`

g/dL · 任意 · 範囲: 0.5–6

## 方法の版

従来のMELD（2001/2003）、2016年に導入されたOPTN方針の係数を用いるMELD-Na、およびKim（2021）の成人用式と2023年に導入されたOPTNの臓器配分上の制限を用いるMELD 3.0を、2026年10月1日の方針に基づいて示す。

## 記載された計算式

範囲：ビリルビン、INR、クレアチニン最低1.0；クレアチニン上限4.0（MELD）または3.0（MELD 3.0）、透析なら上限を使用；ナトリウム125–137；アルブミン1.5–3.5。

MELD(i) = 10 × \[0.957 × ln(Cr) + 0.378 × ln(Bil) + 1.120 × ln(INR) + 0.643\], 四捨五入.

MELD-Na (MELD(i) \> 11の場合) = MELD(i) + 1.32 × (137 − Na) − 0.033 × MELD(i) × (137 − Na).

MELD 3.0 = 1.33 (女性) + 4.56 × ln(Bil) + 0.82 × (137 − Na) − 0.24 × (137 − Na) × ln(Bil) + 9.09 × ln(INR) + 11.14 × ln(Cr) + 1.85 × (3.5 − Alb) − 1.83 × (3.5 − Alb) × ln(Cr) + 6.

すべて上限40。

表示するMELD-Naの式は、2016年に導入されたOPTN方針の係数を用い、Kim（2021）にも記載されている。Kim（2008）の元のMELD-Na式ではない。MELD 3.0の上限40と透析時に用いるクレアチニン値3.0 mg/dLは、2026年10月1日の成人向けOPTN方針に従う。Kim（2021）は解析で上限40を適用していない。

## 限界・対象集団

MELD、MELD-Na、MELD 3.0は、変数、交互作用、限界がそれぞれ異なる版です。原モデルは進行した肝疾患の三か月死亡率について評価されており、現在の臓器配分ルールを自動的に確認できるものではありません。入力と解釈は、版と臨床状況に対応する必要があります。 ここで示すのは成人用の版である。2026年10月1日のOPTN方針は、登録時に18歳以上の人と18歳未満で登録された人を区別しており、このツールには小児用の式を実装していない。この方針での透析の定義は、過去七日間に透析を二回受けたこと、または持続的静脈静脈血液透析を少なくとも24時間受けたことである。Kim（2008）の元のMELD-Na式ではナトリウムを125から140 mmol/Lに制限しており、この版の係数およびナトリウムの制限とは異なる。Kim（2021）の解析ではMELD 3.0を40に制限していない。この版の上限は臓器配分方針に由来する。これらの出典の読解と数値の照合は、適格性、移植の優先順位、診断、臨床判断の承認を意味しない。

## 参考文献

- [Kamath PS et al. A model to predict survival in patients with end-stage liver disease. Hepatology, 2001.](https://doi.org/10.1053/jhep.2001.22172)

- [Kim WR et al. Hyponatremia and mortality among patients on the liver-transplant waiting list. N Engl J Med, 2008.](https://doi.org/10.1056/NEJMoa0801209)

- [Kim WR et al. MELD 3.0: the model for end-stage liver disease updated for the modern era. Gastroenterology, 2021.](https://doi.org/10.1053/j.gastro.2021.08.050)

- [Wiesner R et al. Model for end-stage liver disease (MELD) and allocation of donor livers. Gastroenterology, 2003.](https://doi.org/10.1053/gast.2003.50016)

- [OPTN Policies effective October 1, 2026. Policy 9.1D: adult MELD score, dialysis definition and bounds.](https://www.hrsa.gov/sites/default/files/hrsa/optn/optn_policies.pdf)

- [UNOS. Policy and system changes effective January 11, 2016: adding serum sodium to MELD calculation.](https://unos.org/news/policy-and-system-changes-effective-january-11-2016-adding-serum-sodium-to-meld-calculation/)

## 技術テストの再現

このリポジトリのルートディレクトリでnode test.cjsを実行すると、記録された合成ケースを再実行できます。元の入力、期待結果、許容誤差は保持されています。技術テストは臨床的検証を意味しません。

```sh
node test.cjs
```

tool.jsonには出典、版、確認範囲が記録されています。examples.jsonには合成入力と期待結果が保持され、results.jsonには実際に得られた結果が記録されています。

[記録・参考文献](../tool.json) · [JavaScriptコード](../calculator.js) · [参照ケース](../examples.json) · [results.json](../results.json)

## 確認状況と使用条件

独立した臨床レビューは実施されていません。

このインターフェースは独自に作成した翻訳であり、公式版や認証済みの版ではありません。独立した臨床レビュー、専門家による言語レビュー、評価尺度等の権利許諾の確認は実施されていません。

式または分類の結果です。解釈、対応、適用可能性は専門家による評価と選択した出典に依存します。

## ライセンスと帰属表示

Apache-2.0はELUCENIAのコードにのみ適用されます。評価尺度等、出版物、翻訳、データの権利は、それぞれの権利者に帰属します。LICENSEとNOTICEを保持してください。

ELUCENIA · Felipe Guedes · Copyright © 2026
