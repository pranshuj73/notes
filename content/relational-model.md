---
index: "[[index-data-modeling]]"
---
1. **Tuple**
	- **Definition**: A tuple represents a **single row** in a relational table. It is an ordered set of values corresponding to attributes of an entity.
	- **Characteristics**:  
	  - Each tuple is unique within a table (enforced by primary keys).  
	  - Represents a specific instance of an entity or relationship.  
	- **Example**: In a `Student` table, a tuple could be:  
	  `(101, 'Alice', 'CS', 21)`.

---

2. **Field**
	- **Definition**: A field represents a **single cell** in a table, corresponding to the intersection of a row (tuple) and a column (attribute).  
	- **Characteristics**:  
	  - Contains a single piece of data.  
	  - The value in a field is derived from the domain of its attribute.  
	- **Example**: In a `Student` table, the `Name` field for one tuple may contain `'Alice'`.

---

3. **Domain**
	- **Definition**: A domain is the **set of permissible values** for an attribute. It defines constraints on the type, format, and range of values an attribute can hold.  
	- **Characteristics**:  
	  - Ensures data validity and integrity.  
	  - Shared domains can enforce consistency across tables.  
	- **Example**:  
	  - Domain of `Age`: Integer values between 0 and 120.  
	  - Domain of `Email`: Strings matching an email format.