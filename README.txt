NovoLog Correction Scale Calculator — build 2026-10-12b

One self-contained index.html covers low, medium and high-dose correction.
Open index.html locally or upload it to GitHub Pages. No build or login needed.
Select the ordered regimen, select standard or bedtime, then enter glucose.
The selection is never inferred from body size, renal function, time of day,
or prior insulin doses. Verify the active order and MAR dose timing.

Source: user-supplied low-dose order and medium/high-dose regimen text.
STANDARD mg/dL     Low     Medium     High (units)
Less than 70      0       0          0; follow hypoglycemia procedure
70-150            0       0          0
151-200           1       2          3
201-250           2       4          6
251-300           3       6          9
301-350           4       8          12
351-400           5       10         15
Greater than 400  6       12         18; give ordered dose and notify provider

BEDTIME mg/dL     Medium / High (units)
Less than 70      0; follow hypoglycemia procedure
70-250            0
251-300           2
301-350           3
351-400           4
Greater than 400  4; give ordered dose and notify provider
Low-dose bedtime was not supplied and is blocked without a dose calculation.
Do not substitute the low Q4H scale or the medium/high bedtime scale.

Low-dose source: Q4H, with or without nutrition. Below 70: hypoglycemia
protocol, call provider, document correctional insulin as Not Given.
At 70-150: at goal, no insulin needed; document as Not Given.
Medium/high source below 70 says follow hypoglycemia procedure; extra low-dose
documentation/provider-call instructions are not silently applied to these.

Medium description supplied: non-obese, normal renal function, and/or total
daily dose <80 units/day. High: stressed, obese and/or >80 units/day.
High caution supplied: add basal insulin first and consider medium dose.
This appears as an advisory, not an automatic basal insulin recommendation.
Only the prescribing team selects the regimen. The supplied criteria do not
resolve every case (including exactly 80 units/day); no automatic selection.
Medium/high order options supplied: Q4H, TID AC 15, and 4XD AC 15 HS.
For an ordered HS dose, explicitly select bedtime. No due-time calculation.

Alerts appear for glucose <70, >400, and high-dose regimen caution.
Positive whole-number mg/dL input only; HI/LO or decimals are rejected without
rounding. Changing glucose, regimen or timing clears the previous result.
Print / Save PDF shows the selected scale and calculation in units.
No basal, nutritional or IV insulin calculations; no administration logging
or patient data storage. Use an insulin pen/syringe labeled in units.

Validation: node test.js checks the embedded deployable code at every bracket
boundary, including all five supplied scale combinations and invalid inputs.
