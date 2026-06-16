---
index: ""
title: embedding
---

# embedding
Embeddings are a way to translate tokens, which are words or pieces of words (or rather their numerical IDs), into numbers that the computer can manipulate. They play a key role in helping the model understand the relationships among words making up a statement. This is made possible by the attention mechanism, as we see later in the discussion about attention.

An embedding gives each token a unique numerical ID (a vector in a multi-dimensional space) that captures its meaning. While the absolute positions of those vectors themselves don’t have specific meanings, the spatial distance among the vectors reflects, in certain ways, the relationships among the vectors. For example, words like “happy” and “joyful”, while different, are relatively close embeddings in the embedding space. This step is essential because it helps the model make sense of language in a numerical way, bridging the gap between human language and machine processing.

Initially, every token is assigned a random vector as its embedding. As the model is trained, it adjusts these numbers. The goal is to tweak them such that tokens with similar meanings end up with similar sets of numbers. This adjustment is done automatically by the model as it learns from different contexts in which the tokens appear.


---

related:
- [[large-language-models]]
