# 柯西-施瓦茨不等式 Cauchy-Schwarz inequality

柯西-施瓦茨不等式（Cauchy-Schwarz inequality）是数学中最著名的不等式之一，以奥古斯丁·路易·柯西（Augustin-Louis Cauchy）和赫尔曼·阿曼杜斯·施瓦茨（Hermann Amandus Schwarz）的名字命名。这个不等式在线性代数、分析学和概率论中有广泛应用。

对于任意实数向量 $\mathbf{a} = (a_1, a_2, \ldots, a_n)$ 和 $\mathbf{b} = (b_1, b_2, \ldots, b_n)$，柯西-施瓦茨不等式表述为：

$$ \left( \sum_{i=1}^{n} a_i b_i \right)^2 \leq \left( \sum_{i=1}^{n} a_i^2 \right) \left( \sum_{i=1}^{n} b_i^2 \right) $$

当且仅当向量 $\mathbf{a}$ 和 $\mathbf{b}$ 线性相关时，等号成立。

在内积空间中，这个不等式可以更简洁地表示为：

$$ |\langle \mathbf{a}, \mathbf{b} \rangle|^2 \leq \langle \mathbf{a}, \mathbf{a} \rangle \cdot \langle \mathbf{b}, \mathbf{b} \rangle $$

或者用向量的范数表示：

$$ |\mathbf{a} \cdot \mathbf{b}| \leq \|\mathbf{a}\| \cdot \|\mathbf{b}\| $$

<div class="sage"><script type="text/x-sage">
# 验证柯西-施瓦茨不等式
import numpy as np
from random import random
# 生成随机向量
def random_vector(n):
    return [random() for _ in range(n)]
# 计算点积
def dot_product(a, b):
    return sum(a_i * b_i for a_i, b_i in zip(a, b))
# 计算向量范数
def norm(a):
    return sqrt(dot_product(a, a))
# 验证不等式
n = 5  # 向量维度
trials = 10  # 测试次数
for i in range(trials):
    a = random_vector(n)
    b = random_vector(n)   
    left_side = abs(dot_product(a, b))
    right_side = norm(a) * norm(b)   
    print(f"测试 {i+1}:")
    print(f"向量 a: {a}")
    print(f"向量 b: {b}")
    print(f"|a·b| = {left_side:.6f}")
    print(f"||a||·||b|| = {right_side:.6f}")
    print(f"不等式是否成立: {left_side <= right_side}")
    print(f"比值 |a·b|/(||a||·||b||) = {left_side/right_side:.6f}")
    print("")
# 验证等号成立的情况（线性相关向量）
a = [1, 2, 3, 4, 5]
b = [2, 4, 6, 8, 10]  # b = 2*a，线性相关
left_side = abs(dot_product(a, b))
right_side = norm(a) * norm(b)
print("线性相关向量的情况:")
print(f"向量 a: {a}")
print(f"向量 b: {b}")
print(f"|a·b| = {left_side:.6f}")
#print(f"||a||·||b|| = {right_side:.6f}")
#print(f"比值 |a·b|/(|a|·|b|) = {left_side/right_side:.6f}")
</script></div>

柯西-施瓦茨不等式的一个重要应用是三角不等式的证明：

$$ \|\mathbf{a} + \mathbf{b}\| \leq \|\mathbf{a}\| + \|\mathbf{b}\| $$

这个不等式在各种数学领域都有广泛应用，包括：
- 概率论中的方差计算
- 信号处理中的相关性分析
- 量子力学中的不确定性原理
- 机器学习中的核方法