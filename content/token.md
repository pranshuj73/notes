---
aliases:
  - token
index: ""
title: token
---

# token
A token is the basic unit of text that an AI language model processes. Rather than reading characters or entire sentences, the model converts input into tokens, which may represent whole words, parts of words, punctuation, or special symbols. Tokens are processed during [[tokenization]].

Examples:

* `"Hello"` → `["Hello"]`
* `"unbelievable"` → `["un", "believ", "able"]` (model-dependent)
* `"I can't."` → `["I", " can", "'t", "."]`

Tokens determine:

* **Context window:** how much information a model can consider at once.
* **Cost:** many APIs charge per input and output token.
* **Latency:** more tokens generally increase processing time.
* **Generation length:** models produce output one token at a time, predicting the most probable next token given the preceding sequence.

A useful approximation is that **1 token is roughly ¾ of an English word**, though the exact mapping depends on the tokenizer used by the model.

In practice, tokens are to language models what bytes are to computers: the fundamental units on which computation operates.

