---
index:
  - "[[index-gen-ai]]"
title: ""
---
Large language models, commonly known as LLMs, are a sophisticated type of neural network. These models are characterized by their large number of [[large-language-model-parameters|parameters]], often in billions, that make them proficient at processing, understanding, and generating text. The primary goal of LLMs is to predict the next word based on previous words. As we’ve seen since GPT-3, predicting words accurately also means interpreting and creating human-like text that captures the nuances of natural language, including syntax (the arrangement of words) and semantics (the meaning of words). They are trained on extensive textual data, enabling them to grasp various language patterns and structures.

The core training objective of LLMs focuses on predicting the next word in a sentence. This straightforward objective leads LLMs to learn complex patterns and structures in language, leading to a wide range of emergent abilities, thanks to the scaling effect (where increasing the size of the model in terms of parameters, data, and computational resources leads to the emergence of new capabilities that were not explicitly programmed or observed in smaller models.

The text generation process in LLMs is autoregressive, meaning they generate the next word based on the sequence of words already generated. The [[attention-mechanism|attention mechanism]] is a vital component in this process; it establishes word relations and ensures the text is coherent and contextually appropriate.

LLMs are limited by their [[context-window]].
