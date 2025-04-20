---
sidebar_position: 1
---

# SageCell 示例

这个页面展示了如何在 Docusaurus 中使用 SageCell。

## 基础数学计算

下面是一个简单的 Sage 计算示例：

<SageCell code="2 + 2" />

## 绘制函数图像

下面是一个绘制函数图像的示例：

<SageCell code="plot(sin(x), (x, -2*pi, 2*pi))" />

## 矩阵运算

下面是一个矩阵运算的示例：

<SageCell code={`A = matrix([[1, 2], [3, 4]])
B = matrix([[5, 6], [7, 8]])
A * B`} /> 