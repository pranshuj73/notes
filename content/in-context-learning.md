---
index:
title:
---
# in-context-learning
In-context learning is a [[large-language-models|language model]]'s ability to perform a task by inferring patterns from examples provided within the current prompt, without updating its underlying parameters.

Instead of retraining the model, the user supplies instructions, demonstrations, or examples in the model's context window. The model uses this temporary context to determine the task and generate an appropriate response.

Examples:
- Zero-shot: Only the instruction is given.
  - "Translate this sentence to French."
- One-shot: A single example is provided.
  - English: Hello → French: Bonjour
  - English: Good morning → ?
- Few-shot: Multiple examples are provided.
  - The model infers the pattern from several demonstrations before completing the task.

Characteristics:
- No gradient updates or weight changes occur.
- The learned behavior exists only for the current interaction.
- Performance often improves with clear instructions and representative examples.
- The effectiveness of in-context learning is constrained by the model's context window and the quality of the provided examples.

In-context learning is one of the defining capabilities of modern large language models: they can adapt their behavior from information presented at inference time, rather than requiring explicit retraining for every new task.

---

related:
- [[large-language-models]]

