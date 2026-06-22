---
index: index-swe
title:
---
# architecture-decision-records

architecture decision records (adrs) are short permanent documents that capture a single important technical decision.

standard structure:
- title with adr number
- status (proposed accepted superseded)
- context including forces and constraints
- decision
- options considered with pros and cons
- rationale explaining trade-offs
- consequences (positive negative risks)

adrs enable:
- explicit reasoning instead of implicit choices
- preserved institutional memory
- reduced repeated debates
- faster onboarding
- visible architectural evolution

keep adrs in the codebase as markdown files. one decision per adr. never edit history, supersede instead.

practices:
- write for significant irreversible or cross-cutting decisions
- keep each adr focused and concise
- review collaboratively

---

related:
- [[test-driven-development]]
- [[v-model]]
- [[c4-model]]

