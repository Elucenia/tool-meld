<!-- ELUCENIA technical documentation · meld · zh · no clinical/professional/rights approval -->

# MELD-Na 与 MELD 3.0

[条件、来源与许可](https://elucenia.org/zh/tools/meld)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 肌酐

`cr`

mg/dL · 范围: 0.1–20

### 总胆红素

`bili`

mg/dL · 范围: 0.1–80

### INR

`inr`

范围: 0.5–15

### 钠

`na`

mEq/L · 范围: 100–180

### 过去一周透析 2 次或更多（或连续血液透析 24 h）？

`dialise`

- `0` — 否
- `1` — 是

### 性别

`sexo`

- `F` — 女性
- `M` — 男性

### 白蛋白（用于 MELD 3.0）

`alb`

g/dL · 选填 · 范围: 0.5–6

## 方法版本

经典MELD（2001/2003）；MELD-Na采用2016年实施的OPTN政策系数；MELD 3.0采用Kim（2021）的成人公式及2023年实施的OPTN器官分配限制，依据2026年10月1日的政策。

## 已记录的公式

边界：胆红素、INR和肌酐最低1.0；肌酐最高4.0（MELD）或3.0（MELD 3.0），透析时按最大值；钠125–137；白蛋白1.5–3.5。

MELD(i) = 10 × \[0.957 × ln(Cr) + 0.378 × ln(Bil) + 1.120 × ln(INR) + 0.643\], 取整.

MELD-Na (若 MELD(i) \> 11) = MELD(i) + 1.32 × (137 − Na) − 0.033 × MELD(i) × (137 − Na).

MELD 3.0 = 1.33 (女性) + 4.56 × ln(Bil) + 0.82 × (137 − Na) − 0.24 × (137 − Na) × ln(Bil) + 9.09 × ln(INR) + 11.14 × ln(Cr) + 1.85 × (3.5 − Alb) − 1.83 × (3.5 − Alb) × ln(Cr) + 6.

所有评分上限40。

所显示的MELD-Na公式采用2016年实施的OPTN政策系数，见Kim（2021）的记载；它并非Kim（2008）的原始MELD-Na公式。MELD 3.0中40分的上限及透析时采用3.0 mg/dL的肌酐值遵循2026年10月1日的成人OPTN政策；Kim（2021）的分析未设置40分上限。

## 限制与适用人群

MELD、MELD-Na和MELD 3.0是不同版本，具有各自的变量、交互作用和限值。原始模型针对晚期肝病三个月死亡率评估，不能自动确认当前器官分配规则。输入和解释须与版本及临床情境一致。 此处提供的是成人版本：2026年10月1日的OPTN政策区分登记时年龄为18岁及以上者与登记时未满18岁者；本工具未实现儿童公式。该政策将透析定义为此前七天内接受两次透析，或至少24小时的连续静脉-静脉血液透析。Kim（2008）的原始MELD-Na公式将钠限制在125至140 mmol/L，与本版本的系数及钠的限制范围不同。Kim（2021）的分析未将MELD 3.0限制在40分；本版本的这一限制源于器官分配政策。阅读这些来源并进行数值核对，不等于认可资格、移植优先顺序、诊断或临床决策。

## 参考文献

- [Kamath PS et al. A model to predict survival in patients with end-stage liver disease. Hepatology, 2001.](https://doi.org/10.1053/jhep.2001.22172)

- [Kim WR et al. Hyponatremia and mortality among patients on the liver-transplant waiting list. N Engl J Med, 2008.](https://doi.org/10.1056/NEJMoa0801209)

- [Kim WR et al. MELD 3.0: the model for end-stage liver disease updated for the modern era. Gastroenterology, 2021.](https://doi.org/10.1053/j.gastro.2021.08.050)

- [Wiesner R et al. Model for end-stage liver disease (MELD) and allocation of donor livers. Gastroenterology, 2003.](https://doi.org/10.1053/gast.2003.50016)

- [OPTN Policies effective October 1, 2026. Policy 9.1D: adult MELD score, dialysis definition and bounds.](https://www.hrsa.gov/sites/default/files/hrsa/optn/optn_policies.pdf)

- [UNOS. Policy and system changes effective January 11, 2016: adding serum sodium to MELD calculation.](https://unos.org/news/policy-and-system-changes-effective-january-11-2016-adding-serum-sodium-to-meld-calculation/)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026

## 已记录的结果

以下信息保留该方法对合成示例的输出，不构成独立的临床验证。

### 1

估计90天死亡率：1.9%

| 结果详情 | |
| --- | --- |
| 原始 MELD | 6 |
| MELD 3.0 | 7 |


### 2

估计90天死亡率：19.6%

| 结果详情 | |
| --- | --- |
| 原始 MELD | 26 |
| MELD 3.0 | 30 |


### 3

估计90天死亡率：52.6%

| 结果详情 | |
| --- | --- |
| 原始 MELD | 25 |
| MELD 3.0 | 请输入白蛋白 |

