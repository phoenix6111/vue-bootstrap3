<script>
export default {
    methods: {
        onAffixed(status) {
            this.$notice.open({
                type: 'success',
                title: `回调状态${status}`,
            });
        },
    }
}
</script>

## Affix 固钉

将页面元素钉在可视范围。

### 何时使用
- 当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。
- 页面可视范围过小时，慎用此功能以免遮挡页面内容。

### 代码演示

::: demo
<summary>
  #### 基本
  最简单的用法。
</summary>

```html
<template>
  <affix>
      <i-button type="primary">固定在顶部</i-button>
  </affix>
</template>
```
:::

::: demo
<summary>
  #### 基本
  设置距离顶部达到指定距离时触发。
</summary>

```html
<template>
  <affix :offset="200">
      <i-button class="btn btn-primary">固定距离顶部200px的位置</i-button>
  </affix>
</template>
```
:::

::: demo
<summary>
  #### 基本
  设置边界父容器。
</summary>

```html
<template>
  <div id="parent" style="height: 120px; text-align: center">
      <affix :offset="0" boundary="#parent">
          <i-button class="btn btn-primary">在指定容器内浮动</i-button>
      </affix>
  </div>
</template>
```
:::

::: demo
<summary>
  #### 固定状态改变的事件
  可以获得是否固定的状态。
</summary>

```html
<template>
  <div style="text-align: right">
      <affix :on-affix="onAffixed">
          <i-button class="btn btn-primary">触发回调</i-button>
      </affix>
  </div>
</template>

<script>
export default {
    onAffixed(status) {
        this.$notice.open({
            type: 'success',
            title: `回调状态${status}`,
        });
    },
}
</script>
```
:::

## API

### Affix Props
| 参数        | 说明           | 类型               | 默认值       |
|------------|----------------|-------------------|-------------|
| offsetTop    | 距离窗口顶部达到指定偏移量后触发 | Number | - |
| offsetBottom | 距离窗口底部达到指定偏移量后触发 | Number | - |

### Affix Events
| 参数        | 说明           | 回调参数               |
|------------|----------------|-------------------|
| change | 固定状态改变时触发的事件 | affixed |
