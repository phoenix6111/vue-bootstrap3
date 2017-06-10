<script>
export default {
    methods: {
        change(status) {
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
  简单使用，当元素不可见时，直接固定在最顶端。
</summary>

```html
<template>
    <Affix>
        <i-button type="primary" class="demo-affix">固定在最顶部</i-button>
    </Affix>
</template>
```
:::

::: demo
<summary>
  #### 偏移
  当滚动到一定距离时再固定。
</summary>

```html
<template>
  <Affix :offset-top="50">
      <i-button type="primary" class="demo-affix">固定在距离顶部 50px 的位置</i-button>
  </Affix>
</template>
```
:::

::: demo
<summary>
  #### 固定在底部
  在屏幕下方固定，可以通过缩小浏览器窗口高度来查看效果。
  注意，offset-top和offset-bottom只可以设置一个，如果都设置，会使用offset-top。
</summary>

```html
<template>
  <div id="parent" style="height: 120px; text-align: center">
      <affix :offset-bottom="20">
          <i-button class="btn btn-primary">固定在距离底部 20px 的位置</i-button>
      </affix>
  </div>
</template>
```
:::

::: demo
<summary>
  #### 固定状态改变的事件
  当固定状态发生改变时，会触发事件。
</summary>

```html
<template>
  <div style="text-align: right">
      <affix :offset-top="100" @on-change="change">
          <i-button class="btn btn-primary">触发回调</i-button>
      </affix>
  </div>
</template>

<script>
export default {
    change(status) {
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
