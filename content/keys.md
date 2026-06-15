---
index: "[[index-database]]"
---
**Types of Keys**:  
- **Primary Key (PK)**: Unique tuple ident; no nulls, no duplicates.  
- **Foreign Key (FK)**: Links two tables; refs PK in parent tbl, ensures referential integrity.  
- **Candidate Key**: All potential PKs; unique, irreducible.  
- **Alternate Key**: Candidate keys not chosen as PK.  
- **Composite Key**: Combines multiple attrs to form a unique id.  
- **Super Key**: Attr set uniquely idents tuples; may contain extra attrs.  

---

**Primary Key**:  
- **Props**: Ensures uniqueness, non-null values, supports indexing.  
- **Example**: `StudentID` in `Student` tbl uniquely identifies each student.  

---

**Foreign Key**:  
- **Props**: Refs PK of parent tbl, enforces relationships, can allow nulls/duplicates (optional).  
- **Example**: `CourseID` in `Enrollment` tbl refs `CourseID` in `Courses` tbl to maintain valid relationships.  

---

**Simple v/s Composite Keys**`

| **Aspect**              | **Simple Key**                                            | **Composite Key**                                                          |
| ----------------------- | --------------------------------------------------------- | -------------------------------------------------------------------------- |
| **Definition**          | A single attribute uniquely identifies tuples.            | Combines multiple attributes to uniquely identify tuples.                  |
| **Complexity**          | Simpler to define, manage, and index.                     | More complex due to multiple attributes.                                   |
| **Example**             | `EmployeeID` in an `Employee` table.                      | `{OrderID, ProductID}` in an `OrderDetails` table.                         |
| **Key Size**            | Single column/field.                                      | Multiple columns/fields.                                                   |
| **Indexing**            | Efficient and straightforward.                            | Slower indexing due to combined attributes.                                |
| **Query Performance**   | Faster as only one attribute is involved.                 | Slower for large datasets due to joins on multiple attributes.             |
| **Uniqueness**          | Ensures tuple uniqueness with one attribute.              | Ensures tuple uniqueness through a combination of attributes.              |
| **Usability in FK**     | Easier to reference as FK in another table.               | More difficult to reference as FK; requires all attributes in combination. |
| **Use Case**            | When a single attribute is sufficient for identification. | When no single attribute can uniquely identify tuples.                     |
| **Storage Requirement** | Requires less storage.                                    | Requires more storage due to multiple attributes.                          |


![[Pasted image 20250115120914.png]]