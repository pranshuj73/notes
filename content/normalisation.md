---
index: "[[index-database]]"
---
**Normalization**:  
- Process of organizing a relational database to minimize redundancy and dependency.
- Aims to reduce anomalies in database operations like insertion, update, and deletion.
- Achieved by splitting table into multiple tables based on their logical relationship

---

- **First Normal Form (1NF)**:  
  - A table is in 1NF if:  
    - All attributes contain **atomic (indivisible) values**.  
    - Each attribute contains only a single value (no sets or arrays).  
    - All records (rows) are unique.  
  - **Example**:  
    - A table with `StudentID`, `StudentName`, and `Courses` (where `Courses` contains a list) violates 1NF. It should be split into separate rows for each course.

---

- **Second Normal Form (2NF)**:  
  - A table is in 2NF if:  
    - It is in **1NF**.  
    - There is **no partial dependency**; non-prime attributes must be fully functionally dependent on the **entire primary key**, not just part of it.  
  - Applies to tables with composite keys (multiple attributes forming the primary key).  
  - **Example**:  
    - A `StudentCourse` table with `{StudentID, CourseID}` as a composite key may violate 2NF if the `InstructorName` depends only on `CourseID`. This should be moved to a separate `Courses` table.

---

- **Third Normal Form (3NF)**:  
  - A table is in 3NF if:  
    - It is in **2NF**.  
    - There are **no transitive dependencies**; non-prime attributes must not depend on other non-prime attributes.  
  - Eliminates redundancy caused by indirect dependencies.  
  - **Example**:  
    - A `Student` table with `StudentID`, `StudentName`, and `InstructorName`, where `InstructorName` depends on `CourseID` (which is in another table), violates 3NF. `InstructorName` should be moved to a `Courses` table.

---

- **Boyce-Codd Normal Form (BCNF)**:  
  - A table is in BCNF if:  
    - It is in **3NF**.  
    - For every non-trivial functional dependency, the determinant (attribute that determines others) must be a **superkey**.  
  - BCNF deals with situations where 3NF is satisfied but certain functional dependencies still exist that are not based on superkeys.  
  - **Example**:  
    - A table with `{StudentID, CourseID, InstructorName}` where `{InstructorName → CourseID}` violates BCNF because `InstructorName` is not a superkey. To satisfy BCNF, `InstructorName` should be removed to a separate table.

---

- **Fourth Normal Form (4NF)**:  
  - A table is in 4NF if:  
    - It is in **BCNF**.  
    - It has **no multi-valued dependencies**; that is, a record should not contain two or more independent and multivalued facts about an entity.  
    - This is relevant when attributes in a table are independent but are represented together, leading to redundancy.  
  - **Example**:  
    - A `Student` table with `StudentID`, `CourseID`, and `Language` where a student can take multiple courses and speak multiple languages, violating 4NF. These should be stored in separate tables to eliminate multi-valued dependencies.

---

- **Fifth Normal Form (5NF)**:  
  - A table is in 5NF if:  
    - It is in **4NF**.  
    - It has **no join dependency**; that is, it cannot be decomposed into smaller tables without losing information.  
    - 5NF ensures that all information is split into the most granular tables without introducing redundancy or requiring unnatural joins.  
  - **Example**:  
    - A table that contains `StudentID`, `CourseID`, and `InstructorID`, where each record represents an assignment of a student to a course with a specific instructor, and each attribute is independently meaningful. A decomposition of this table that does not result in loss of information would require 5NF.

---

---

related:
+ [[normalisation-forms-summarised]]
- [[normalized-vs-denormalized]]
