| **Aspect**               | **Normalized**                                                                              | **Denormalized**                                                                                                   |
| ------------------------ | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Purpose**              | Reduces redundancy and dependency; organizes data into well-structured tables.              | Increases redundancy to improve query performance.                                                                 |
| **Data Integrity**       | High; avoids anomalies like insertion, update, and deletion issues.                         | Lower; can introduce anomalies and inconsistent data.                                                              |
| **Data Redundancy**      | Minimal; data is split across multiple tables.                                              | High; data is duplicated across tables.                                                                            |
| **Performance**          | Slower for read-heavy operations due to joins.                                              | Faster for read-heavy operations as fewer joins are needed.                                                        |
| **Complexity**           | Higher; requires more tables and complex joins.                                             | Lower; fewer tables and simpler queries.                                                                           |
| **Storage Requirements** | Efficient; uses less storage due to minimal redundancy.                                     | Higher; consumes more storage due to data duplication.                                                             |
| **Maintenance**          | Easier to maintain; updating data in one place ensures consistency.                         | Harder to maintain; updates must be propagated to multiple places.                                                 |
| **Querying**             | More complex; may require multiple joins for data retrieval.                                | Simpler; fewer joins, but can lead to slower updates and increased data inconsistency.                             |
| **Use Case**             | Best for OLTP (Online Transaction Processing) systems where data consistency is a priority. | Best for OLAP (Online Analytical Processing) systems or specific scenarios where query performance is prioritized. |

---

### **Normalized Approach:**

**Pros:**
- **Data Integrity**: Reduces redundancy, ensuring consistency across the database. Changes made in one place are reflected everywhere.
- **Reduced Redundancy**: Data is stored once, minimizing duplication and saving storage.
- **Easier Maintenance**: Updates, deletions, and insertions are simpler, with no need to manage duplicate data.
- **Avoids Anomalies**: Minimizes risks of data anomalies like insertion, update, and deletion anomalies.

**Cons:**
- **Complex Queries**: Requires multiple joins across tables, which can slow down query performance.
- **Slower Read Operations**: Performance may degrade in read-heavy environments, where large amounts of data are required from multiple tables.
- **Increased Complexity**: The schema can become more complex, making it harder to understand and work with.

---

### **Denormalized Approach:**

**Pros:**
- **Improved Query Performance**: Fewer joins lead to faster read operations, ideal for querying large datasets in OLAP systems or analytics platforms.
- **Simplified Schema**: Data is often stored in fewer tables, making the schema easier to understand for some use cases.
- **Faster Reporting**: Useful for data retrieval and aggregation where **quick access** to pre-computed data is required.
  
**Cons:**
- **Data Redundancy**: Increases storage requirements due to duplicated data, which can lead to inefficiency.
- **Data Inconsistency**: Updates must be propagated to multiple places, leading to potential inconsistencies if not managed correctly.
- **Difficult to Maintain**: Making changes across multiple copies of data can become cumbersome, requiring more effort to keep the system up-to-date.

---

related:
- [[normalisation]]