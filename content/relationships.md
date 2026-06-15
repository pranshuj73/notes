---
index: "[[index-database]]"
---
Degree
+ number of attributes (when talking about relations)
	+ for a table with 4 columns / attributes, the degree is 4
+ number of entity type or entity sets associated (when talking about relationships)
	+ types - unary, binary, ternary, n-nary
	+ note: `type` of entities involved isnt same the `number`  of entities (`Student` enrolled in a `Course` has a degree of 2, no matter how many students or courses are present)

Cardinality
+ number of instances of one entity that can be associated with instances of another entity
+ describes the relationship's multiplicity
+ types:
	+ 1:1 - one instance of A can be mapped to one instance of B
	+ 1:N - one instance of A can be mapped to N instances of B
	+ M:N - M instances of A can be mapped to N instances of B
+ implemented using primary & foreign keys, and join tables for M:N relationships

```
A relationship connects entities.
Cardinality describes how many instances of one entity relate to instances of another within that relationship.
```

Types of relationships:
+ based on cardinality
	1. one to one (1:1)
	2. one to many (1:N)
	3. many to many (M:N)
+ based on degree of relationship
	1. unary (degree: 1)
	2. binary (degree: 2)
	3. ternary (degree: 3)
	4. n-ary (degree: 4)
+ based on participation
	1. total participation: all instances of the entity are involved in the relationship
	2. partial participation: only some instances of the entity are involved