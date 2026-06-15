---
aliases:
  - tokenization
index: ""
title: tokenization
---

# tokenization
Tokenization is the initial phase of interacting with [[large-language-models|LLMs]]. It involves breaking the input text into smaller pieces known as [[token]]. Tokens can range from single characters to entire words, and the size of these tokens can greatly influence the model’s performance. Some models adopt subword tokenization, breaking words into smaller segments that retain meaningful linguistic elements.


The tokenization process is model-dependent. The models are released as a pair of pre-trained tokenizers and associated model weights. There are more advanced techniques, like the [[byte-pair-encoding|Byte-Pair encoding]], which is used by most of the recently released models. Byte-Pair encoding basically looks at the text corpus (training data) and determines the most efficient way to split the data based on recurrence. First, it will create tokens with each individual character. Next, it will match the two bytes of data (our pair) that appear together most often to form a new token. It will then repeat this process numerous times to form all tokens. This, in theory, leads to an efficient organization of data into tokens, representing text distribution in a very effective way. As demonstrated in the example below, this method also divides a word such as “coloring” into two parts.
