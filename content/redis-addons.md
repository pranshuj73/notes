---
index: "[[index-redis]]"
---
# Redis Add-ons

Redis Add-ons are extensions or modules that enhance the capabilities of Redis, providing additional features, data structures, or functionality beyond the core Redis features. These add-ons can be loaded into Redis to support specific use cases, such as full-text search, time-series data, machine learning, geospatial data handling, and more.

Here are some common Redis add-ons:

## 1. **RedisSearch**
- **Purpose**: Adds full-text search capabilities to Redis, enabling fast indexing and querying of text data.
- **Features**:
  - Supports **text search**, **filtering**, and **ranking** of results.
  - Allows searching across multiple fields (e.g., tags, categories).
  - Full-text indexing and searching, including **wildcards**, **fuzzy matching**, and **range queries**.
  - Support for **faceted search**, enabling filtering by categories or tags.
- **Use Case**: Ideal for applications requiring full-text search, like product catalogs, social media posts, or logs.
  
## 2. **RedisTimeSeries**
- **Purpose**: Extends Redis to store and manage time-series data efficiently.
- **Features**:
  - Provides optimized operations for time-series data (e.g., adding, querying, and downsampling data).
  - Supports **automatic aggregation** and **retention policies** to manage large volumes of time-series data.
  - Ability to perform **range queries**, **aggregation queries**, and **downsampling**.
  - Supports data compression to reduce memory usage.
- **Use Case**: Useful for applications dealing with time-series data, such as IoT sensors, stock price tracking, or real-time analytics.

## 3. **RedisGraph**
- **Purpose**: Adds graph database capabilities to Redis, enabling the storage and querying of graph data.
- **Features**:
  - Supports **graph traversal** and **pattern matching** queries.
  - Can store and query graphs using nodes, edges, and properties.
  - Provides efficient **Graph Algorithms** for tasks like shortest path, page rank, and connected components.
- **Use Case**: Ideal for applications that need to represent relationships, such as social networks, recommendation engines, fraud detection, and network analysis.

## 4. **RedisAI**
- **Purpose**: Integrates machine learning and artificial intelligence (AI) models into Redis for fast inference and scoring.
- **Features**:
  - Allows **model deployment** for TensorFlow, PyTorch, and ONNX models.
  - Supports **vector data processing**, enabling similarity search and other AI workloads.
  - Provides support for **Tensor Operations** and executing pre-trained models directly within Redis.
- **Use Case**: Useful for AI-powered applications that require real-time predictions, like recommender systems, fraud detection, and NLP.

## 5. **RedisML**
- **Purpose**: Provides machine learning capabilities within Redis, allowing the execution of machine learning models and algorithms.
- **Features**:
  - Supports **training and serving** machine learning models (e.g., regression, classification).
  - Includes various machine learning algorithms for predictions, including linear regression, k-means clustering, and more.
- **Use Case**: For users who want to run machine learning models directly within their Redis environment.

## 6. **RedisBloom**
- **Purpose**: Implements **probabilistic data structures** such as Bloom filters, Count-Min Sketch, and Top-K to help handle large datasets efficiently with minimal memory usage.
- **Features**:
  - **Bloom filters**: Used to test membership of an element in a set with a probability of false positives but no false negatives.
  - **Count-Min Sketch**: An approximate data structure for counting the frequency of items in a stream.
  - **Top-K**: Efficiently tracking the top K elements in a dataset.
- **Use Case**: Useful for scenarios where you need efficient space-optimized storage, such as unique item tracking, approximate counting, or stream data processing.

## 7. **RedisGears**
- **Purpose**: Allows the execution of custom code on Redis data, enabling complex data processing and logic execution inside Redis.
- **Features**:
  - Supports writing **Python**, **JavaScript**, **Go**, and **Rust** functions to execute on Redis data.
  - Provides support for **batch processing** and **stream processing**.
  - Enables **data transformations** directly within Redis.
- **Use Case**: Suitable for use cases where you want to perform complex data processing in real-time on the Redis server, such as data enrichment, transformation, or applying business logic to Redis data.

## 8. **RediSQL**
- **Purpose**: Brings SQL query capabilities to Redis, allowing you to run SQL queries on Redis data.
- **Features**:
  - Enables you to run SQL commands on data stored in Redis.
  - Supports **tables**, **indexes**, and **basic SQL operations** (e.g., SELECT, INSERT, UPDATE, DELETE).
- **Use Case**: Ideal for users who want to combine the speed of Redis with the flexibility of SQL queries for certain data use cases.

## 9. **RedisAI (Redis for AI workloads)**
- **Purpose**: Provides the ability to serve AI and deep learning models directly within Redis.
- **Features**:
  - Seamless integration with machine learning models and frameworks like TensorFlow, PyTorch, and ONNX.
  - Low-latency access to models for **real-time inference**.
- **Use Case**: Ideal for applications requiring AI-powered predictions and inference in real-time, such as recommendation systems or fraud detection.

## 10. **Redis Streams**
- **Purpose**: Provides a log-based data structure for managing data streams within Redis.
- **Features**:
  - Supports **append-only log** functionality to keep records of events.
  - Allows reading and processing streams of data in real time.
  - Supports **consumer groups** for distributed stream processing.
- **Use Case**: Ideal for event-driven architectures, real-time data processing, and message queuing systems.

## Conclusion
Redis add-ons enhance the core capabilities of Redis, making it a highly versatile and powerful tool for a wide range of use cases, from caching to advanced real-time data processing, machine learning, and graph analytics. By choosing the right add-ons, Redis can be customized to meet the specific needs of your application, whether it involves real-time analytics, recommendation engines, or scalable time-series data management.