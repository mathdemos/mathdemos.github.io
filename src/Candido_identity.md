# 坎迪多恒等式 Candido's identity

坎迪多恒等式 ，以意大利数学家贾科莫·坎迪多 (Giacomo Candido) 的名字命名，是一个实数恒等式。它指出，对于任意两个实数 $x$ 和 $y$ 以下等式成立：
$$ \displaystyle \left[x^{2}+y^{2}+(x+y)^{2}\right]^{2}=2[x^{4}+y^{4}+(x+y)^{4}] $$
也可表示为：
$$ \displaystyle 2(x^{2}+y^{2}+xy)^{2}=x^{4}+y^{4}+(x+y)^{4} $$
然而，这个恒等式并不局限于实数，而是在每个交换环中都成立。  
坎迪多最初设计这个恒等式是为了证明下面的关于斐波那契Fibonacci数列的恒等式：
$$ (F_{n}^{2}+F_{n+1}^{2}+F_{n+2}^{2})^{2}=2(F_{n}^{4}+F_{n+1}^{4}+F_{n+2}^{4}) $$

<div class="sage"><script type="text/x-sage">
var('x,y')
print(expand((x^2+y^2+(x+y)^2)^2))
print(expand(2*(x^4+y^4+(x+y)^4)))
F=fibonacci
[(F(5)^2+F(6)^2+F(7)^2)^2, 2*(F(5)^4+F(6)^4+F(7)^4)]
</script></div>