---
index: "[[index-swe]]"
title:
---
# v-model
v-model is a sequential development process shaped like a v that pairs each development activity with a corresponding testing activity.

left side (decomposition):
- requirements gathering
- system analysis
- high-level design
- detailed module design
- coding (at the bottom)

right side (validation):
- acceptance testing
- system testing
- integration testing
- unit testing

each left-side artifact directly drives its matching test on the right.

v-model enables:
- explicit traceability from requirements to verification
- early planning of how each part will be tested
- clear definition of done for every level
- reduced defects through built-in verification

best suited for projects with stable requirements. less flexible for rapid change.

practices:
- define acceptance criteria during requirements phase
- create test plans in parallel with design
- maintain traceability matrix between artifacts and tests

---

related:
- [[test-driven-development]]
- [[architecture-decision-records]]

