---
sidebar_position: 2
---

# LaTeX 和 SageCell 示例

这个页面展示了如何在 Docusaurus 中使用 LaTeX 和 SageCell。

## 基础 LaTeX 公式

Docusaurus 默认支持 LaTeX 公式，使用 `$` 或 `$$` 包裹公式：

行内公式：$E = mc^2$

块级公式：

$$
\frac{n!}{k!(n-k)!} = \binom{n}{k}
$$

## 使用 SageCell 计算数学表达式

下面是一个使用 SageCell 计算数学表达式的示例：

<SageCell code="latex(integral(x^2, x, 0, 1))" />

## 绘制函数图像并添加 LaTeX 标签

下面是一个绘制函数图像并添加 LaTeX 标签的示例：

<SageCell code="var('x')
f = sin(x)
p = plot(f, (x, -2*pi, 2*pi))
p.set_axes_range(ymin=-1.5, ymax=1.5)
p.axes_labels(['$x$', '$\\sin(x)$'])
p.show()" />

## 矩阵运算并显示 LaTeX 结果

下面是一个矩阵运算并显示 LaTeX 结果的示例：

<SageCell code="A = matrix([[1, 2], [3, 4]])
B = matrix([[5, 6], [7, 8]])
C = A * B
latex(C)" />

## 求解方程并显示 LaTeX 结果

下面是一个求解方程并显示 LaTeX 结果的示例：

<SageCell code="var('x')
eq = x^2 + 2*x + 1 == 0
sol = solve(eq, x)
latex(sol)" />

## 使用 SageCell 生成 LaTeX 表格

下面是一个使用 SageCell 生成 LaTeX 表格的示例：

<SageCell code="data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
latex.table(data, header_row=['A', 'B', 'C'], header_column=['Row 1', 'Row 2', 'Row 3'])" />