---
index: index-swe
title: test driven development
---
# test-driven-development
test driven development involves writing the test before you write the code. the famous cycle is:
1. red - write a failing test (fails because feature doesn't exist yet)
2. green - write the smalled amount of code required to make the failing test case pass
3. refactor - clean up the code while keeping the test green

repeat this in small incremental cycles implementing features.

TDD enables:
- test-first mindset forcing clear understanding of requirements before implementation
- smaller increments reduce risk + cognitive load
- continuous feedback

focus on behavior, not implementation details (avoid over-mocking internals).

practices:
- start with the simplest failing case, then add edge cases
- keep tests fast and independent
- refactor aggressively
- use it for new code or when changing existing code (characterization tests first).

---

related:
- [[v-model]]
- [[architecture-decision-records]]
- [[c4-model]]

