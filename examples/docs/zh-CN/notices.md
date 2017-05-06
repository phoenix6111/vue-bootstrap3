<script>
    export default {
        methods: {
            open() {
                this.$notice.open({
                    title:'这是一条信息'
                });
            },

            open1() {
                this.$notice.success({
                    title:'这是一条信息'
                });
            },

            open2() {
                this.$notice.success({
                    title:'这是一条信息',
                    showIcon:true
                });
            },
            open3() {
                this.$notice.success({
                    title: '成功',
                    desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述',
                    showIcon:true
                });
            },

            open4() {
                this.$notice.warning({
                    title: '这是通知标题！',
                    desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述',
                    showIcon:true
                });
            },

            open5() {
                this.$notice.info({
                    title: '这是通知标题！',
                    desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述',
                    showIcon:true
                });
            },

            open6() {
                this.$notice.danger({
                    title: '这是通知标题！',
                    desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述',
                    showIcon:true,
                    duration:10000
                });
            },
            open7() {
                this.$notice.success({
                    title: '这是通知标题！',
                    desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述',
                    showIcon:true
                });
            },
            open8() {
                this.$notice.success({
                    title: '这是通知标题！',
                    desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述',
                });
            }
        }
    }
</script>

## Notice 通知提醒

在界面右上角显示可关闭的全局通知。

### 何时使用
- 通知内容带有描述信息。
- 系统主动推送。

### 代码演示

::: demo
<summary>
  #### 基础用法
  基本用法，默认在 4.5秒后关闭。如果 desc 参数为空或不填，则自动应用仅标题模式下的样式。
  建议标题言简意赅，例如"删除成功"，更详细的内容可以放在描述信息里。
</summary>

```html
<template>
  <i-button @click="open">
      可自动关闭(默认颜色)
  </i-button>
  <i-button @click="open1">
      可自动关闭
  </i-button>

  <i-button @click="open2">
      自动关闭(带ICON)
  </i-button>

  <i-button @click="open8">
      自动关闭(带标题和描述)
  </i-button>
</template>
```
:::

::: demo
<summary>
  #### 通知状态
  通过调用this.$notice的不同方法，显示不同的样式
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
