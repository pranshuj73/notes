---
index: ""
title: context-window
---

# context-window
The context size, or context window, is a crucial aspect of [[large-language-model|LLMs]]. It refers to the maximum number of [[token]] the model can process in a single request. It influences the length of text the model can handle at any one time, directly affecting the model’s performance and output. Context window in language models represents the number of input tokens the model can process simultaneously. In models like GPT-4, it currently (January 2024) stands at approximately 32K or roughly 90 pages of text. There is an inherent limit to the number of tokens a model can generate. However, recent advancements have extended this to an impressive 100K tokens, or about 156 pages, as seen in Claude by Anthropic, and millions of tokens for Gemini (Google). Context length primarily enables expanding the attention of the model during training and inference, offering a deeper understanding of the
