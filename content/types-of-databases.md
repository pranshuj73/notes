---
index: "[[index-database]]"
---
Databases can be broadly categorized into **Relational Databases** and **NoSQL Databases**, each designed to address different types of data storage and access requirements. Here's a comparison:

---

## Relational Databases (RDBMS)

### Characteristics:
1. **Data Structure**: Data is stored in structured tables with rows and columns. Each table represents an entity, and relationships between entities are defined using **foreign keys**.
2. **Schema**: Requires a predefined schema that dictates the structure of data (tables, fields, data types).
3. **Query Language**: Uses **SQL** (Structured Query Language) for querying and data manipulation.
4. **Transactions**: Provides **ACID** (Atomicity, Consistency, Isolation, Durability) properties for reliable transaction handling.
5. **Normalization**: Data is normalized to reduce redundancy and ensure data integrity.

### Examples:
- MySQL
- PostgreSQL
- Oracle Database
- Microsoft SQL Server

### Use Cases:
- **Financial Applications**: Require consistency and complex queries.
- **Customer Relationship Management (CRM)**: Structured, transactional data.
- **Enterprise Resource Planning (ERP)**: Requires strong consistency and relationships between tables.

### Advantages:
- **Data Integrity**: ACID properties ensure correctness.
- **Powerful Querying**: SQL supports complex queries and joins.
- **Mature Technology**: Well-established with a large ecosystem.

### Disadvantages:
- **Scalability**: Vertical scaling (adding more power to a single server) is often limited and can become expensive.
- **Rigid Schema**: Changes to the schema can be challenging, especially with large datasets.

---

## NoSQL Databases

### Characteristics:
1. **Data Structure**: Data can be stored in various formats such as key-value pairs, documents, column families, or graphs.
2. **Schema**: NoSQL databases are generally **schema-less**, meaning the structure of data can vary from one entry to another.
3. **Query Language**: Uses APIs or domain-specific query languages. There is no standardized query language like SQL.
4. **Transactions**: Often offer eventual consistency instead of ACID, prioritizing availability and partition tolerance (CAP theorem).
5. **Scaling**: Designed for horizontal scaling (distributing data across multiple servers).

### Types of NoSQL Databases:
1. **Document-Oriented**: Stores data as documents, typically in JSON format (e.g., MongoDB, CouchDB).
2. **Key-Value Stores**: Stores data as key-value pairs (e.g., Redis, DynamoDB).
3. **Column-Oriented**: Stores data in columns rather than rows (e.g., Cassandra, HBase).
4. **Graph Databases**: Stores data as graphs with nodes, edges, and properties (e.g., Neo4j, ArangoDB).

### Examples:
- MongoDB (Document-based)
- Cassandra (Column-based)
- Redis (Key-value)
- Neo4j (Graph-based)

### Use Cases:
- **Social Networks**: Store relationships between users (graph databases).
- **Real-Time Analytics**: Fast reads and writes, as in caching systems (key-value stores).
- **Content Management Systems**: Schema flexibility for varying content types (document databases).
- **Big Data**: Horizontal scaling for handling massive datasets (column-family stores).

### Advantages:
- **Scalability**: Easily scales horizontally across multiple machines.
- **Flexibility**: Schema-less design allows for more fluid and rapid development.
- **High Availability**: Many NoSQL databases offer replication and fault tolerance.

### Disadvantages:
- **Consistency**: Lack of ACID guarantees in favor of eventual consistency.
- **Complex Queries**: Limited or less powerful querying capabilities compared to SQL.
- **Maturity**: Some NoSQL databases are newer, with less robust tooling and community support.

---

## Key Differences Between Relational and NoSQL Databases

| **Feature**               | **Relational Databases**            | **NoSQL Databases**                |
|---------------------------|-------------------------------------|------------------------------------|
| **Data Model**             | Tables (rows and columns)          | Key-value, document, column, graph |
| **Schema**                 | Fixed, predefined schema           | Schema-less or flexible            |
| **Query Language**         | SQL (Structured Query Language)    | APIs or custom query languages     |
| **Transactions**           | ACID compliant                     | Eventual consistency (CAP theorem) |
| **Scalability**            | Vertical scaling                   | Horizontal scaling (distributed)   |
| **Use Cases**              | Structured data, complex queries   | Unstructured data, scalability     |
| **Examples**               | MySQL, PostgreSQL, Oracle, SQL Server | MongoDB, Cassandra, Redis, Neo4j   |

---

## When to Use Which?

- **Use Relational Databases** when:
  - Data structure is stable and well-defined.
  - You need strong consistency (e.g., financial applications).
  - Complex queries and joins are required.
  - ACID compliance is crucial.

- **Use NoSQL Databases** when:
  - Data is unstructured or semi-structured.
  - Scalability is a primary concern (horizontal scaling).
  - Flexibility in data model and schema evolution is needed.
  - Speed is essential, especially for real-time data (e.g., caching, logging).

---

related:
+ [[database]]
+ [[What is NoSQL Database?]]
+ [[types of nosql databases]]
+ [[why nosql]]
+ [[ACID and nosql databases]]
