<script>
export default {
    methods: {
        info () {
            this.$message.info('这是一条普通的提醒');
        },
        open() {
            this.$message('这是一条消息提示');
          },
          open2() {
            this.$message({
              message: '恭喜你，这是一条成功消息',
              type: 'success'
            });
          },
    
          open3() {
            this.$message({
              message: '警告哦，这是一条警告消息',
              type: 'warning'
            });
          },
    
          open4() {
            this.$message.danger('错了哦，这是一条错误消息');
          },
          
        open5() {
            this.$message({
              closable: true,
              message: '这是一条消息提示'
            });
          },
    
          open6() {
            this.$message({
              closable: true,
              message: '恭喜你，这是一条成功消息',
              type: 'success'
            });
          },
    
          open7() {
            this.$message({
              closable: true,
              message: '警告哦，这是一条警告消息',
              type: 'warning',
              duration:0
            });
          },
    
          open8() {
            this.$message({
              closable: true,
              message: '错了哦，这是一条错误消息',
              type: 'danger'
            });
          }
    }
}
</script>

## Message 全局提示

轻量级的信息反馈组件，在顶部居中显示，并自动消失。有多种不同的提示状态可选择。

### 代码演示

::: demo
<summary>
  #### 基本
  最简单的用法。
</summary>

```html
<template>
    <i-button type="primary" @click="info">显示普通提醒</i-button>
</template>
<script>
    export default {
        methods: {
            info () {
                this.$message.info('这是一条普通的提醒');
            }
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 基本
  最简单的用法。
</summary>

```html
<template>
  <i-button @click="open">消息</i-button>
  <i-button @click="open2">成功</i-button>
  <i-button @click="open3">警告</i-button>
  <i-button @click="open4">错误</i-button>
</template>

<script>
  export default {
    methods: {
      open() {
        this.$message('这是一条消息提示');
      },
      open2() {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          message: '警告哦，这是一条警告消息',
          type: 'warning',
          duration:0
        });
      },

      open4() {
        this.$message.danger('错了哦，这是一条错误消息');
      }
    }
  }
</script>
```
:::

::: demo
<summary>
  #### 可关闭
  可以添加关闭按钮。
</summary>

```html
<template>
  <i-button @click="open5">消息</i-button>
  <i-button @click="open6">成功</i-button>
  <i-button @click="open7">警告</i-button>
  <i-button @click="open8">错误</i-button>
</template>

<script>
  export default {
    methods: {
      open5() {
        this.$message({
          closable: true,
          message: '这是一条消息提示'
        });
      },

      open6() {
        this.$message({
          closable: true,
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },

      open7() {
        this.$message({
          closable: true,
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },

      open8() {
        this.$message({
          closable: true,
          message: '错了哦，这是一条错误消息',
          type: 'error'
        });
      }
    }
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
