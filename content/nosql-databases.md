---
index: "[[index-nosql]]"
---
# What is NoSQL Database?

+ Unlike traditional relational databases (RDBMS) that use structured tables and require a predefined schema, NoSQL databases provide flexibility, scalability, and high performance in handling large volumes of data that don’t fit well into the rigid, table-based structures of relational databases.

+ NoSql databases unlike relational dbs are "eventually consistent", which means they do not follow ACID properties strictly instead focusing on speed and scalability.
+ Transactions involving multiple documents or collections may not be atomic unless explicitly supported (e.g., MongoDB 4.x and later support multi-document transactions).

	## BASE properties

Instead of ACID, NoSQL databases typically embrace the **BASE** model (Basically Available, Soft state, Eventual consistency) for consistency and availability:

- **Basically Available**: Ensures that the system is available for reads and writes even when some nodes or replicas are down.
- **Soft state**: Implies that the system's state can change over time, even without input (due to eventual consistency).
- **Eventual consistency**: Guarantees that all replicas will eventually be consistent, but not necessarily immediately.

This approach favors scalability and availability over immediate consistency.

### Key Features of NoSQL Databases:
1. **Schema-less Design**: Data is stored without the need for a fixed schema, allowing each entry to have a different structure.
2. **Scalability**: NoSQL databases are optimized for horizontal scaling (distributing data across multiple servers), making them suitable for large-scale, distributed applications.
3. **Flexible Data Models**: Data can be stored as documents, key-value pairs, columns, or graphs, depending on the NoSQL type.
4. **Eventual Consistency**: Many NoSQL databases prioritize availability and partition tolerance (from the **CAP Theorem**), offering eventual consistency instead of strong consistency like in relational databases.
5. **High Performance**: NoSQL systems are built to handle high-speed read and write operations with low latency.

### Types of NoSQL Databases:
1. **Document Stores**: Store data as documents (typically in JSON or BSON format).
   - **Example**: MongoDB, Couchbase
2. **Key-Value Stores**: Store data as key-value pairs.
   - **Example**: Redis, DynamoDB
3. **Wide-Column Stores**: Store data in columns rather than rows.
   - **Example**: Cassandra, HBase
4. **Graph Databases**: Store data as graphs with nodes, edges, and properties, ideal for managing relationships.
   - **Example**: Neo4j, ArangoDB

### When to Use NoSQL:
- When dealing with large amounts of unstructured or semi-structured data.
- When scalability is a primary concern (handling massive datasets across distributed systems).
- When flexibility is needed in the data model (e.g., schema changes over time).
- When quick access to data (e.g., caching or real-time analytics) is needed.

### Example Use-Cases:
- **Social Networks**: Graph databases for modeling relationships between users.
- **E-commerce**: Document stores for flexible product catalogs with varying attributes.
- **IoT Applications**: Wide-column stores for handling time-series data.
- **Session Management**: Key-value stores for storing session data in memory for fast access.

In essence, NoSQL databases offer a more adaptable and scalable approach compared to traditional relational databases, making them ideal for modern applications with diverse, rapidly changing data.