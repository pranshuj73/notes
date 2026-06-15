---
index: "[[index-database]]"
---
# Database Objects

- **Database Objects**: Entities within a database such as tables, views, indexes, schemas, and more.

- **Hierarchy of Database Objects**:
  - **Database**: The highest level, containing schemas and objects like tables and views.
  - **Schema**: A collection of related database objects, acting as a namespace within a database.
  - **Table**: A collection of rows and columns used to store data.
  - **View**: A virtual table derived from the result of a query; it does not store data itself but fetches data from underlying tables.

# Table vs View
- **Table**: 
  - Stores data physically.
  - Can have primary keys, indexes, and constraints.
  - Data is persistent.
- **View**:
  - Does not store data physically.
  - Can be based on one or multiple tables.
  - Provides a simplified or customized view of data from underlying tables.

# Columns, Datatypes, Keys

- **Columns**: Individual data fields within a table. Each column has a datatype.
  
- **Datatypes**: Defines the type of data a column can store (e.g., INT, VARCHAR, DATE).

- **Keys**:
  - **Primary Key**: Uniquely identifies each row in a table; no duplicate values.
  - **Foreign Key**: Links two tables, ensuring referential integrity.
  - **Unique Key**: Ensures that all values in a column are unique, but can accept nulls.
  - **Composite Key**: Combination of two or more columns used to uniquely identify a row.

# Constraints – Types of Constraints

- **NOT NULL**: Ensures a column cannot have NULL values.
- **DEFAULT**: Assigns a default value to a column when no value is provided.
- **CHECK**: Validates data based on a specified condition.
- **UNIQUE**: Ensures all values in a column are distinct.
- **PRIMARY KEY**: Uniquely identifies rows; a combination of NOT NULL and UNIQUE.
- **FOREIGN KEY**: Ensures referential integrity by linking columns in different tables.

# Index
- **Index**: Improves the speed of data retrieval operations on a database table by providing quick access to rows.
  - Can be created on one or more columns.
  - Types: B-tree, Hash, Bitmap, etc.

# Materialized Views
- **Materialized View**: A view that stores the result of the query as an actual physical object, unlike a standard view. It can be refreshed periodically.
  - Reduces query time by storing the precomputed data.
  - Can be updated manually or automatically.