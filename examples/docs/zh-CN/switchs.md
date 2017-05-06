<script>
    export default {
        name:'Switchs',
        data () {
            return {
                switch1: false,
                disabled: true
            }
        },
        methods: {
            change (status) {
                console.log("onchange...");
            },
            toggle() {
                console.log("toggle ..");
                this.disabled = !this.disabled;
            }
        }
    }
</script>

## Switch 开关

在两种状态间切换时用到的开关选择器。

### 代码演示

::: demo
<summary>
  #### 基本
  基本用法，状态切换时会触发事件
</summary>

```html
<template>
  <i-switch @on-change="change" v-model="switch1" ></i-switch>
</template>
```
:::

::: demo
<summary>
  #### 尺寸
  设置size为 lg 或 sm 使用大号和小号的开关。
</summary>

```html
<template>
  <i-switch size="large"></i-switch>
  <i-switch></i-switch>
  <i-switch size="small"></i-switch>
</template>
```
:::

::: demo
<summary>
  #### 文字和图标
  自定义内容，建议如果使用2个汉字，将开关尺寸设置为 lg。
</summary>

```html
<template>
  <i-switch>
      <span slot="open">开</span>
      <span slot="close">关</span>
  </i-switch>
  <i-switch>
      <Icon type="check" slot="open"></Icon>
      <Icon type="close" slot="close"></Icon>
  </i-switch>
  <br><br>
  <i-switch size="large">
      <span slot="open">开启</span>
      <span slot="close">关闭</span>
  </i-switch>
  <i-switch size="large">
      <span slot="open">ON</span>
      <span slot="close">OFF</span>
  </i-switch>
</template>
```
:::

::: demo
<summary>
  #### 不可用
  禁用开关
</summary>

```html
<template>
  <i-switch :disabled="disabled"></i-switch>
  <i-button type="primary" @click="toggle">Toggle Disabled</i-button>
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
