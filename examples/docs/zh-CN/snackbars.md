<script>
    export default {
        methods: {
            open() {
                this.$snackbar.open({
                    title:'这是一条信息',
                    showIcon:true,
                    duration:50000
                });
            },

            open1() {
                this.$snackbar.success({
                    title:'这是一条信息'
                });
            },

            open2() {
                this.$snackbar.success({
                    title:'这是一条信息',
                    duration:30000
                });
            },
            open3() {
                this.$snackbar.success({
                    title: '这是通知标题！',
                    showIcon:true
                });
            },

            open4() {
                this.$snackbar.warning({
                    title: '这是通知标题！',
                    showIcon:true
                });
            },

            open5() {
                this.$snackbar.info({
                    title: '这是通知标题！',
                    showIcon:true
                });
            },

            open6() {
                this.$snackbar.danger({
                    title: '这是通知标题！',
                    showIcon:true,
                    duration:50000
                });
            },

            open7() {
                this.$snackbar.success({
                    title:'这是一条信息',
                    showIcon:true,
                    duration:0
                });
            },

        }
    }
</script>

## Snackbar 通知提醒

在界面顶部显示可关闭的全局通知

### 何时使用
为用户反馈操作结果时使用

### 代码演示

::: demo
<summary>
  #### 基本
  最基本的用法。
</summary>

```html
<template>
  <i-button @click="open">
      可自动关闭(默认颜色)
  </i-button>

  <i-button @click="open1">
      自动关闭(SUCCESS)
  </i-button>

  <i-button @click="open2">
      自动关闭(廷迟10s关闭)
  </i-button>

  <i-button @click="open7">
      不自动关闭(定义时长为0)
  </i-button>
</template>
```
:::

::: demo
<summary>
  #### 四种状态
  通过调用不同的方法，显示不同的状态，不同的样式
</summary>

```html
<template>
  <i-button
          @click="open3">
      成功
  </i-button>
  <i-button
          @click="open4">
      警告
  </i-button>
  <i-button
          @click="open5">
      消息
  </i-button>
  <i-button
          @click="open6">
      错误
  </i-button>
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
