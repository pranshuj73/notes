---
index: "[[index-database]]"
---
# ACID Properties

ACID is an acronym that stands for the four key properties of database transactions, ensuring reliable processing and integrity of database operations. These properties are crucial for maintaining consistency and correctness in relational databases.

## 1. **Atomicity**
- **Definition**: A transaction is treated as a single, indivisible unit. It either completes in full or has no effect at all.
- **Explanation**: If any part of a transaction fails, the entire transaction is rolled back, and the database remains in its previous state.
- **Example**: When transferring money between bank accounts, both the debit and credit operations must succeed together. If one fails, the whole transaction is discarded, and no money is transferred.

## 2. **Consistency**
- **Definition**: A transaction brings the database from one valid state to another, maintaining database invariants.
- **Explanation**: The database must follow all defined rules, constraints, and triggers before and after a transaction. If a transaction violates any rule (such as foreign key constraints), the database is rolled back to ensure consistency.
- **Example**: If a database has a constraint that a customer’s balance cannot be negative, any transaction that violates this rule (like deducting more than the available balance) will be rolled back.

## 3. **Isolation**
- **Definition**: Transactions are executed independently of each other, even if they are running concurrently.
- **Explanation**: The intermediate state of a transaction is not visible to other transactions. Isolation ensures that the operations of one transaction do not interfere with another, preventing issues like dirty reads, non-repeatable reads, and phantom reads.
- **Example**: If two users are attempting to withdraw money from the same account at the same time, isolation ensures that one user’s transaction is fully completed before the second one starts, preventing errors like double withdrawals.

## 4. **Durability**
- **Definition**: Once a transaction has been committed, its changes are permanent, even in the event of a system crash.
- **Explanation**: The results of a successful transaction are written to durable storage, such as a hard drive or SSD, ensuring that data is not lost after a crash.
- **Example**: After a bank transaction is committed (e.g., transferring money), the change will persist even if the server crashes immediately afterward, and no data is lost.

## Summary of ACID in Action:
- **Atomicity** ensures transactions are all-or-nothing.
- **Consistency** guarantees the database remains valid and conforms to rules.
- **Isolation** keeps concurrent transactions from interfering with each other.
- **Durability** ensures committed changes are permanent, even in the event of a failure.

These four properties work together to ensure that database transactions are processed reliably, maintaining data integrity and consistency across systems.