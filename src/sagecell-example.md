# SageCell示例

## 简单计算

<div class="sage"><script type="text/x-sage">
print("Hello from SageCell!")
plot(sin(x), (x, 0, 2*pi))
</script></div>

## 交互式计算

<div class="sage-interact">
@interact
def _(a=(1, 10)):
    print(factorial(a))
</div>