---
aliases:
  - tokenization
index: ""
title: tokenization
---

# tokenization
Tokenization is the initial phase of interacting with [[large-language-models|LLMs]]. It involves breaking the input text into smaller pieces known as [[token]]. Tokens can range from single characters to entire words, and the size of these tokens can greatly influence the model’s performance. Some models adopt subword tokenization, breaking words into smaller segments that retain meaningful linguistic elements.


The tokenization process is model-dependent. The models are released as a pair of pre-trained tokenizers and associated model weights. There are more advanced techniques, like the [[byte-pair-encoding|Byte-Pair encoding]], which is used by most of the recently released models. Another technique is [[subword-tokenization|subword tokenization]]

The tokenization process involves scanning the entire text to identify unique tokens, which are then indexed to create a dictionary. This dictionary assigns a unique token ID to each token, enabling a standardized numerical representation of the text. When interacting with the models, this conversion of text into token IDs (numbers instead of characters) allows the model to efficiently process and “understand” the input, as it can quickly reference the dictionary to decode the meaning of each token.
