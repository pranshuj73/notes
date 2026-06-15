---
index: "[[index-nosql]]"
---
While ACID properties are fundamental to relational databases, **NoSQL databases** generally do not enforce all four ACID properties in the same way. NoSQL systems prioritize scalability, flexibility, and performance over strict transactional consistency, leading to the use of different models for data consistency.

## 1. **ACID in NoSQL Databases**
Most NoSQL databases (e.g., MongoDB, Cassandra, Couchbase) typically do not fully adhere to ACID properties, especially when it comes to **transactions across multiple documents or collections**. However, some NoSQL databases do implement certain ACID-like guarantees in specific scenarios.

### Key Differences:
- **Atomicity**: 
  - **MongoDB** supports atomic operations at the **document level**, meaning that changes to a single document in a collection are atomic. However, transactions involving multiple documents or collections may not be atomic unless explicitly supported (e.g., MongoDB 4.x and later support multi-document transactions).
  - **Cassandra** offers atomicity at the **row level**, but for operations involving multiple rows or partitions, atomicity is not guaranteed.

- **Consistency**:
  - Many NoSQL databases, especially those designed for high availability and partition tolerance (as per the CAP theorem), prioritize **eventual consistency** over strong consistency. This means data might not be immediately consistent across replicas but will eventually converge.
  - Some NoSQL databases (e.g., **Cassandra**) offer tunable consistency levels, where users can choose between stronger or weaker consistency based on their needs.

- **Isolation**:
  - **Couchbase** and **MongoDB** provide isolated transactions at the document or row level but may allow for concurrent transactions to affect the same data concurrently without strict isolation.
  - **Cassandra** doesn’t offer full isolation and uses eventual consistency to allow for parallel operations without waiting for locks.

- **Durability**:
  - NoSQL systems like **Cassandra** and **Couchbase** generally ensure durability, but at the cost of strong consistency or isolation. If durability is critical, configurations like **write-ahead logs (WAL)** or replication are used to ensure that data is not lost in the event of failures.
  
## 2. **BASE vs. ACID**
Instead of ACID, NoSQL databases typically embrace the **BASE** model (Basically Available, Soft state, Eventual consistency) for consistency and availability:
- **Basically Available**: Ensures that the system is available for reads and writes even when some nodes or replicas are down.
- **Soft state**: Implies that the system's state can change over time, even without input (due to eventual consistency).
- **Eventual consistency**: Guarantees that all replicas will eventually be consistent, but not necessarily immediately.

This approach favors scalability and availability over immediate consistency.

## 3. **Examples of NoSQL Databases with Transaction Support**
Some modern NoSQL databases are adding transaction support with ACID-like properties, though usually with limitations:
- **MongoDB** (since version 4.x): Supports **multi-document transactions**, providing ACID guarantees, but at a cost to performance and scalability.
- **Couchbase**: Supports **ACID transactions** at the document level, with the ability to roll back or commit changes for a group of documents.
- **Firebase Firestore**: Supports ACID transactions but within certain boundaries, like operations that occur within a single document.

## Conclusion
- **Traditional NoSQL databases** (e.g., Cassandra, CouchDB, etc.) usually do not offer full ACID compliance due to the trade-off between consistency and availability/scalability.
- **Some newer NoSQL systems** (like MongoDB or Couchbase) have started to provide more ACID-like guarantees, especially in single-document or specific transactional scenarios.

NoSQL systems are generally designed with flexibility and scalability in mind, and while they can support atomic operations and durability in some cases, they tend to prioritize performance and availability over strict ACID compliance.