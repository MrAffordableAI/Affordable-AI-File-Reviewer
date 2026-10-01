# Affordable AI File Reviewer

Standalone manager drop-in reviewer for affordable housing tenant files. This repository is separate from the other MrAffordableAI projects.

A manager drops the file, selects the programs on the unit, and gets the corrections needed to make the file match Tax Credit, HUD, HOME, RD, and Section 202 rules.

Open the reviewer from this repo: https://github.com/MrAffordableAI/Affordable-AI-File-Reviewer

## What it checks

- Required documents for the programs selected on the unit
- Idaho Housing and Finance Association stacking order (revised October 2025) when the state is Idaho
- Tax Credit student rule and six-month initial lease
- HOME certification on a layered LIHTC/HOME unit
- HUD 50059, EIV at recertification, and VAWA documents
- RD 3560-8
- Section 202 age eligibility
- 120-day verification window
- Certification income versus the worksheet
- Gross rent against the max rent entered for the unit
- 140% Available Unit Rule on a Tax Credit recertification
- 2026 HUD HOTMA figures where that program uses HOTMA: passbook rate 0.40%, asset self-certification through $52,787, dependent deduction $500, elderly/disabled deduction $550

The reviewer does not look up county income or rent limits. The manager enters the limit for that household size and effective date.

## Not an agency determination

Findings are a specialist aid. The property regulatory agreement, the current HFA manual, HUD Handbook 4350.3, 24 CFR Part 92, and RD HB-2-3560 control. Do not alter a file after an audit notice.
