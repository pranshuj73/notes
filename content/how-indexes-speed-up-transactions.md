---
index: "[[index-database]]"
---
Indexes enhance the performance of database transactions by reducing the time required to locate and retrieve data. They act as shortcuts, allowing the database engine to quickly identify the location of the requested data without scanning the entire table. This is especially beneficial for **read-heavy operations** and queries involving `WHERE`, `JOIN`, or `ORDER BY` clauses.

### How Indexes Work
1. **Data Mapping**: Indexes map key values (like IDs) to the physical location of the corresponding records in storage.
2. **Search Optimization**: Instead of scanning all rows, the database navigates the index structure to directly access the required data.

### Types of Indexes
1. **B-Tree Indexes**:
   - Balanced tree structure.
   - Efficient for **range queries** (e.g., finding values within a range) and ordered traversals.
   - Common in relational databases like MySQL, PostgreSQL, and Oracle.

2. **Hash Indexes**:
   - Based on hash tables.
   - Efficient for **equality comparisons** (e.g., finding a record with an exact match).
   - Used in NoSQL databases and memory-optimized tables.

---

## Example Usage of B-Tree and Hash Indexes

### 1. **B-Tree Index**
   - **Scenario**: A table `Orders` with columns: `OrderID`, `CustomerID`, `OrderDate`, `Amount`.
   - **Use Case**: Retrieve all orders placed between `2025-01-01` and `2025-01-10`.
   - **Query**:
     ```sql
     SELECT * FROM Orders
     WHERE OrderDate BETWEEN '2025-01-01' AND '2025-01-10';
     ```
   - **How It Works**:
     - The database uses the B-Tree index created on `OrderDate` to navigate directly to the leaf nodes containing the matching range.
     - Instead of scanning the entire table, it traverses the tree to retrieve the results.

---

### 2. **Hash Index**
   - **Scenario**: A table `Users` with columns: `UserID`, `Username`, `Email`.
   - **Use Case**: Retrieve the user details for a specific `UserID = 12345`.
   - **Query**:
     ```sql
     SELECT * FROM Users
     WHERE UserID = 12345;
     ```
   - **How It Works**:
     - The hash index on `UserID` computes a hash for the value `12345`, maps it to a bucket, and retrieves the record directly.
     - This avoids scanning or tree traversal, making it faster for exact matches.

---

## Key Differences Between B-Tree and Hash Indexes
| **Aspect**            | **B-Tree Index**                  | **Hash Index**                     |
|------------------------|-----------------------------------|-------------------------------------|
| **Best Use Case**      | Range queries, ordered data       | Equality lookups                   |
| **Traversal**          | Tree structure                   | Hash table (bucket-based)          |
| **Order Preservation** | Maintains order of keys           | Does not maintain order            |
| **Efficiency**         | Good for range and point queries | Faster for point queries           |
| **Drawback**           | Slower for exact match           | Inefficient for range queries      |

---

Indexes can significantly improve transaction speed but also add overhead during data insertion, deletion, and updates, as the index must also be maintained.