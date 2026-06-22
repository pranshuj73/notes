---
index: index-swe
title:
---
# c4-model

c4 model is a hierarchical way to diagram software architecture at four levels of abstraction.

the four levels:
1. context - system plus users and external systems (big picture)
2. containers - major deployable units (apps databases services) and their interactions
3. components - logical building blocks inside a container
4. code - classes and methods (optional rarely maintained)

c4 enables:
- shared mental model across team and stakeholders
- clear system boundaries and responsibilities
- effective communication at the right level of detail
- early detection of design issues like tight coupling

use simple boxes and labeled arrows. start with context and containers. keep diagrams lightweight and useful.

practices:
- create context and container diagrams first
- maintain consistency in notation
- store diagrams with code when possible (structurizr or similar)

---

related:
- [[test-driven-development]]
- [[v-model]]
- [[architecture-decision-records]]

