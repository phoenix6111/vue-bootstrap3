<script>

    export default {
        data() {
            return {
                fullscreenLoading: false
            }
        },
        methods: {
            openFullScreen() {
                this.fullscreenLoading = true;
                setTimeout(() => {
                    this.fullscreenLoading = false;
                }, 3000);
            },
            start () {
                this.$loadingBar.start();
            },
            finish () {
                this.$loadingBar.finish();
            },
            error () {
                this.$loadingBar.error();
            }
        }
    }
</script>

## Loading 加载进度条

全局创建一个显示页面加载、异步请求、文件上传等的加载进度条。

### 代码演示

::: demo
<summary>
  #### 整页加载
  最简单使用 Spin 的方法。
</summary>

```html
<template>
  <i-button
          type="primary"
          @click="openFullScreen"
          v-loading.fullscreen.lock="fullscreenLoading">
      显示整页加载，3 秒后消失
  </i-button>
</template>
```
:::

::: demo
<summary>
  #### 基本用法
  点击 Start 开始进度，点击 Finish 结束。在调用start()方法后，组件会自动模拟进度，当调用finish()或error()时，补全进度并自动消失。
</summary>

```html
<template>
  <i-button @click="start">Start</i-button>
  <i-button @click="finish">Finish</i-button>
  <i-button @click="error">Error</i-button>
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
