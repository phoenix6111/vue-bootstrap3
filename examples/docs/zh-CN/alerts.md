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

## Alert 警告提示

静态地呈现一些警告信息，可手动关闭。

### 代码演示

::: demo
<summary>
  #### 基础用法
  基本使用方法，有四种样式可以选择info、success、warning、error。
</summary>

```html
<template>
  <Alert type="success">
      Well done! You successfully read this
      important alert message.
  </Alert>
  <Alert type="info">
      Heads up! This alert needs your attention, but
      it's not super important.
  </Alert>
  <Alert type="warning">
      Warning! Better check yourself, you're not
      looking too good.
  </Alert>
  <Alert type="danger">
      Oh snap! Change a few things up and try
      submitting again.
  </Alert>
</template>
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
