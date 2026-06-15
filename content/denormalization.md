---
index: "[[index-database]]"
---
Denormalization is an approach that combines data from multiple tables into a single table to optimize read performance.

It intentionally introduces redundancy to simplify queries and improve query efficiency.

The diagram below shows as an example of denormalization.

`Key characteristics of denormalization include:`

- Combined Tables: Denormalization merges data from multiple related tables into a single table. It duplicates data across tables to avoid the need for complex joins during query execution.

- Simplified Queries: By combining data into a single table, denormalization simplifies queries. It reduces the need for joins and allows for faster data retrieval, as all the required data is readily available in one place.

- Improved Read Performance: Denormalization optimizes read-heavy workloads by providing quick access to frequently queried data. It eliminates the overhead of joining multiple tables, resulting in faster query execution and improved performance.

However, denormalization comes with its own set of trade-offs.

Due to data redundancy, denormalized tables require more storage space. Additionally, data inconsistency can arise if updates are not propagated consistently across all the duplicated data.