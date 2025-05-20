# 极坐标方程曲线
<div class="sage"><script type="text/x-sage">
var('t')
polar_plot(sin(1/t), (t, 0, 2*pi), color='blue')
#PolarPlot[Sin[1/t], {t, 0, 2 Pi}]  (*Mathematica*)
</script></div>

### 三叶线
<div class="sage"><script type="text/x-sage">
var('t')
polar_plot(sin(3*t), (t, 0, 2*pi))
</script></div>

### Lemniscate of Bernoulli  伯努利双纽线
<div class="sage"><script type="text/x-sage">
var('t')
a=4
polar_plot(a*sqrt(cos(2*t)), (t, 0, 2*pi))
</script></div>

### 
<div class="sage"><script type="text/x-sage">
#PolarPlot[{1, 1 + 1/10 Sin[10 t]}, {t, 0, 2 Pi}, PlotStyle -> {Green, Directive[Dashed, Thick, Orange]}]
</script></div>