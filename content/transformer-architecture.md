---
id: transformer-architecture
aliases: []
tags: []
index: "[[index-data-modeling]]"
---
The foundation of a language model that makes it powerful lies in its architecture. Recurrent Neural Networks (RNNs) were traditionally used for text processing due to their ability to process sequential data. They maintain an internal state that retains information from previous words, facilitating sequential understanding. However, RNNs encounter challenges with long sequences where they forget older information in favor of recently processed input. This is primarily caused by the [[vanishing-gradient-problem]].

Transformer-based models addressed these challenges and emerged as the preferred architecture for natural language processing tasks. This architecture, introduced in the influential paper “Attention Is All You Need” by Vaswani et al., is a pivotal innovation, forming the foundation for cutting-edge models like GPT, Claude, and Llama. The architecture was originally designed as an encoder-decoder framework.

This setting uses an encoder to process input text, identify important parts, and create its own representation of the input. Meanwhile, the decoder transforms the encoder’s output, a vector of high dimensionality, back into readable text for humans. It offers additional flexibility across a wide range of tasks since the components of this architecture, the encoder and decoder, can be used jointly or independently. Some models use the encoder part of the network to transform the text into a vector representation or use only the decoder block, which is the backbone of the latest LLMs.

---

related:
- [[large-language-models]]

references:
- 
