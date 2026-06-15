---
title:
index:
---
### Vanishing Gradient Problem

**Definition:**
During backpropagation, gradients are repeatedly multiplied as they move through network layers. When these values are small (< 1), they shrink exponentially, eventually approaching zero.

**Effect:**
Earlier layers receive negligible gradient updates and stop learning effectively, even while later layers continue to train.

**Common Causes:**

* Deep neural networks
* Sigmoid activations
* Tanh activations
* Poor weight initialization

**Symptoms:**

* Slow convergence
* Training stagnation
* Lower layers learn little or nothing

**Example:**

$0.5^{20} \approx 10^{-6}$


A gradient of 0.5 becomes nearly zero after passing through 20 layers.

**Solutions:**

* ReLU and variants (Leaky ReLU, GELU)
* Xavier/He initialization
* Batch normalization
* Residual connections (ResNets)
* LSTM/GRU architectures for sequence models

**Mental Model:**
Backpropagation is like passing a message backward through many layers. If each layer weakens the message slightly, eventually the earliest layers receive almost no signal and cannot learn.

---

related:
- [[large-language-models]]

references:
- 