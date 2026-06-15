---
index: "[[index-database]]"
---
+ property or characteristics of an entity or relationship
+ essentially represent the columns

### Types of Attributes in DBMS
**Simple Attribute**
- Cannot be divided further.
- Represents a single piece of information.
- **Example**: `Age`, `Gender`.
**Composite Attribute**
- Can be divided into sub-parts with individual meanings.
- Useful for grouping related information.
- **Example**: `FullName` → `FirstName`, `LastName`.
**Single-Valued Attribute**
- Holds one value for each entity instance.
- Simple and common in most tables.
- **Example**: `SocialSecurityNumber`.
**Multi-Valued Attribute**
- Can store multiple values for a single entity instance.
- Often requires separate tables in normalization.
- **Example**: `PhoneNumbers` → `Home`, `Work`.
**Derived Attribute**
- Values computed from other attributes.
- Not stored in the database to save space.
- **Example**: `Age` derived from `DOB`.
**Complex Attribute**
- Combines multi-valued and composite attributes.
- Used to represent hierarchical or nested data.
- **Example**: `Address` → `{Street, City, Country}`.
**Stored Attribute**
- Values explicitly stored in the database.
- Acts as the base for derived attributes.
- **Example**: `DOB` stored, `Age` derived.
**Key Attribute**
- Uniquely identifies an entity in a table.
- Essential for primary keys and relationships.
- **Example**: `StudentID`, `EmployeeID`.
**Null Attribute**
- Represents unknown or missing data.
- Does not contribute to computations.
- **Example**: `MiddleName` if not applicable.
**Descriptive Attribute**
- Provides additional information about a relationship.
- Enhances the semantics of the data.
- **Example**: `EnrollmentDate` in a `Student-Course` relationship.
**Prime Attribute**
+ An attribute that is part of a candidate key in a relational schema.
+ These attributes help in uniquely identifying records within a table.
+ Prime attributes are critical in ensuring the uniqueness and integrity of a table's data.
- These attributes are involved in enforcing primary keys or candidate keys.
- In a Student table, if StudentID is the primary key, then StudentID is a prime attribute.
- If a composite key {StudentID, CourseID} is used, both StudentID and CourseID are prime attributes.