In the relational model, constraints enforce data integrity and maintain accuracy within the database. They ensure that the database adheres to defined rules and prevents invalid data entry.

### Summary Table

| **Constraint**            | **Purpose**                                | **Example**                  |
| ------------------------- | ------------------------------------------ | ---------------------------- |
| **Domain Constraint**     | Restricts values based on domain rules.    | `Age` must be 0–120.         |
| **Key Constraint**        | Ensures tuples are uniquely identifiable.  | `StudentID` is unique.       |
| **Entity Integrity**      | Prevents nulls in primary keys.            | `StudentID` cannot be null.  |
| **Referential Integrity** | Maintains valid foreign key references.    | `StudentID` in `Enrollment`. |
| **Null Constraint**       | Disallows empty values in specific fields. | `Email` is `NOT NULL`.       |
| **Check Constraint**      | Defines logical conditions on data.        | `Salary > 0`.                |
| **Unique Constraint**     | Ensures column values are distinct.        | `Username` must be unique.   |

---

### 1. **Domain Constraints**
- **Definition**: Restricts the permissible values of attributes based on their domains (data types, ranges, formats, etc.).
- **Example**:
  - Attribute `Age` has a domain of integers between `0` and `120`.
  - Attribute `Email` must follow a valid email format.

---

### 2. **Key Constraints**
- **Definition**: Ensures that every row (tuple) in a table is uniquely identifiable.
- **Types**:
  - **Primary Key**: Uniquely identifies each tuple.  
    - Example: `StudentID` in a `Student` table.
  - **Unique Key**: Ensures no two tuples have the same value for the attribute(s).  
    - Example: `Email` in an `Employee` table.
- **Violation**: Duplicate values in primary/unique key columns are not allowed.

---

### 3. **Entity Integrity Constraint**
- **Definition**: States that primary key attributes cannot be null, ensuring each tuple is identifiable.
- **Example**: A `StudentID` (primary key) cannot be left blank for any student.

---

### 4. **Referential Integrity Constraint**
- **Definition**: Ensures consistency between two related tables by maintaining valid references.
- **Mechanism**:
  - A **foreign key** in one table must reference a **primary key** in another table or be null.
- **Example**:
  - In a `CourseEnrollment` table, `StudentID` (foreign key) must reference the `StudentID` in the `Student` table.

---

### 5. **Null Constraints**
- **Definition**: Specifies whether an attribute can or cannot have null (empty) values.
- **Example**:
  - `Email` in a `Users` table may be marked as `NOT NULL`.

---

### 6. **Check Constraints**
- **Definition**: Defines a condition that every tuple must satisfy.
- **Example**:
  - `Salary > 0` ensures that no employee has a negative salary.

---

### 7. **Unique Constraints**
- **Definition**: Ensures all values in a column or combination of columns are distinct.
- **Example**:
  - `Username` in a `Users` table must be unique.

---

related:
- [[relational-model]]