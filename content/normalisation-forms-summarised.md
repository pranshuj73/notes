**First Normal Form (1NF)**
* **No repeating groups:** Data should not be stored in repeating groups within a single row. Instead, create separate rows for each instance of the repeating group.
* **Atomic values:** Each column should contain only one value, not a list or set of values.
* **No duplicate rows:** Each row in the table must be unique.
* **Primary key:** Every table must have a primary key, which uniquely identifies each row.

**Second Normal Form (2NF)**
* **Full dependency on primary key:** Every non-key attribute must depend on the entire primary key, not just a part of it.

**Third Normal Form (3NF)**
* **No transitive dependencies:** No non-key attribute should depend on another non-key attribute.

**Boyce-Codd Normal Form (BCNF)**
* **No partial dependencies:** Every non-key attribute must depend only on the primary key, not on any other non-key attribute.

**Fourth Normal Form (4NF)**
* **No multivalued dependencies:** The only multivalued dependencies allowed are those on the entire primary key.

**Fifth Normal Form (5NF)**
* **No decomposable tables:** The table cannot be decomposed into smaller tables without losing information.

---

**refer:**
+ https://www.youtube.com/watch?v=GFQaEYEc8_8
+ https://youtu.be/EGEwkad_llA?si=dh20fXDnJbyfpEkO

---

related:
+ [[normalisation]]
