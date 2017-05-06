<script>
    export default {
        data () {
            return {
                disabled: false
            }
        },

    }
</script>
<style scoped>
    .top,.bottom{
        text-align: center;
    }
    .center{
        width: 300px;
        margin: 10px auto;
        overflow: hidden;
    }
    .center-left{
        float: left;
    }
    .center-right{
        float: right;
    }
</style>

## Tooltip 文字提示

文字提示气泡框，在鼠标悬停时显示，代替了系统的title提示。。

### 何时使用
- 当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。
- 页面可视范围过小时，慎用此功能以免遮挡页面内容。

### 代码演示

::: demo
<summary>
  #### 基础用法
  最简单的用法。
</summary>

```html
<template>
  <Tooltip content="这里是提示文字">
      <p>当鼠标经过这段文字时，会显示一个气泡框</p>
  </Tooltip>
</template>
```
:::

::: demo
<summary>
  #### 位置
  组件提供了12个不同的方向显示Tooltip，具体配置可查看API。
</summary>

```html
<template>
  <div class="top">
      <Tooltip content="Top Left 文字提示" placement="top-start">
          <i-button>上左</i-button>
      </Tooltip>
      <Tooltip content="Top Center 文字提示" placement="top">
          <i-button>上边</i-button>
      </Tooltip>
      <Tooltip content="Top Right 文字提示" placement="top-end">
          <i-button>上右</i-button>
      </Tooltip>
  </div>
  <div class="center">
      <div class="center-left">
          <Tooltip content="Left Top 文字提示" placement="left-start">
              <i-button>左上</i-button>
          </Tooltip><br><br>
          <Tooltip content="Left Center 文字提示" placement="left">
              <i-button>左边</i-button>
          </Tooltip><br><br>
          <Tooltip content="Left Bottom 文字提示" placement="left-end">
              <i-button>左下</i-button>
          </Tooltip>
      </div>
      <div class="center-right">
          <Tooltip content="Right Top 文字提示" placement="right-start">
              <i-button>右上</i-button>
          </Tooltip><br><br>
          <Tooltip content="Right Center 文字提示" placement="right">
              <i-button>右边</i-button>
          </Tooltip><br><br>
          <Tooltip content="Right Bottom 文字提示" placement="right-end">
              <i-button>右下</i-button>
          </Tooltip>
      </div>
  </div>
  <div class="bottom">
      <Tooltip content="Bottom Left 文字提示" placement="bottom-start">
          <i-button>下左</i-button>
      </Tooltip>
      <Tooltip content="Bottom Center 文字提示" placement="bottom">
          <i-button>下边</i-button>
      </Tooltip>
      <Tooltip content="Bottom Right 文字提示" placement="bottom-end">
          <i-button>下右</i-button>
      </Tooltip>
  </div>
</template>
<style scoped>
    .top,.bottom{
        text-align: center;
    }
    .center{
        width: 300px;
        margin: 10px auto;
        overflow: hidden;
    }
    .center-left{
        float: left;
    }
    .center-right{
        float: right;
    }
</style>
```
:::