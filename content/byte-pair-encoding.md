---
index: ""
title: Byte-Pair Encoding
---

# Byte-Pair Encoding
Byte Pair Encoding (BPE) is a subword tokenization algorithm used to convert raw text into numerical tokens. It begins by treating every character as a base token, then iteratively merges the most frequently occurring adjacent pairs into new, single tokens. BPE bridges the gap between character and word-level tokenization to solve the "unknown word" problem.

Byte-Pair encoding basically looks at the text corpus (training data) and determines the most efficient way to split the data based on recurrence. First, it will create tokens with each individual character. Next, it will match the two bytes of data (our pair) that appear together most often to form a new token. It will then repeat this process numerous times to form all tokens. This, in theory, leads to an efficient organization of data into tokens, representing text distribution in a very effective way. As demonstrated in the example below, this method also divides a word such as “coloring” into two parts. 

```
["The", "child", "'", "s", "color", "ing", "book", "."]
```
