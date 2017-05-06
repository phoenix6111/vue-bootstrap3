<script>
    export default {
        data () {
            return {
                percent: 0
            }
        },
        methods: {
            add () {
                if (this.percent >= 100) {
                    return false;
                }
                this.percent += 10;
            },
            minus () {
                if (this.percent <= 0) {
                    return false;
                }
                this.percent -= 10;
            }
        }
    }
</script>

## Progress 进度条

用于展示操作进度，告知用户当前状态和预期。

### 何时使用
在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。

- 当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过2秒时；
- 当需要显示一个操作完成的百分比时。

### 代码演示

::: demo
<summary>
  #### 基本用法
  处在不同状态下的进度条，当 percent 为 100 时，自动将状态置为 success。可设置不自动置状态。
</summary>

```html
<template>
  <i-progress :percent="0" class="m-t-10"></i-progress>
  <br>
  <i-progress :percent="70"></i-progress>
  <br>
  <i-progress :percent="100" status="success"></i-progress>
  <br>
  <i-progress :percent="50" status="danger"></i-progress>

  <br>
  <i-progress :percent="25" :show-text="false"></i-progress>
</template>
```
:::

::: demo
<summary>
  #### Striped 和Active状态
  不同样式，不同状态。
</summary>

```html
<template>
  <i-progress :percent="45" active></i-progress>
  <br>
  <i-progress :percent="45" striped></i-progress>
  <br>
  <i-progress :percent="45" striped active></i-progress>
</template>
```
:::

::: demo
<summary>
  #### 自定义更多样式
  通过自定义slot和属性stroke-width改变进度条效果。
</summary>

```html
<template>
  <i-progress :percent="25" class="m-t-10" :strok-width="12"></i-progress>
  <br>
  <i-progress :percent="100">
      <Icon type="check-circle" style="display: inline-block"></Icon>
      <span>成功</span>
  </i-progress>
</template>
```
:::

::: demo
<summary>
  #### 配合外部组件使用
  通过数据的联动和逻辑控制，实现动态效果。
</summary>

```html
<template>
  <i-progress :text-inside="true" :stroke-width="18" :percent="percent" class="m-t-10"></i-progress>
  <button-group class="m-t-10 m-b-20">
      <i-button icon="plus" @click="add"></i-button>
      <i-button icon="minus" @click="minus"></i-button>
  </button-group>
</template>
```
:::

::: demo
<summary>
  #### 线形进度条 — 百分比内显
  百分比不占用额外控件，适用于文件上传等场景。
</summary>

```html
<template>
  <i-progress :text-inside="true" :stroke-width="18" :percent="70" active class="m-t-10"></i-progress>
  <br>
  <i-progress :text-inside="true" :stroke-width="18" :percent="100" status="success"></i-progress>
  <br>
  <i-progress :text-inside="true" :stroke-width="18" :percent="50" status="danger"></i-progress>
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
