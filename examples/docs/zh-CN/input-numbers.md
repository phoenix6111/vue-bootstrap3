<script>
    export default {
        data() {
            return {
                num1: 1,
                num2: 1,
                num3: 5,
                num4: 1,
                num5: 1,
                num6: 1
            };
        },
        methods: {
            handleChange(value) {
                console.log(value);
            }
        }
    }
</script>

<style scoped>
    .box-demo .input-group {
        margin-bottom: 10px;
    }
</style>

## InputNumber 数字输入框

使用鼠标或键盘输入一定范围的标准数值。

### 何时使用
当需要获取标准数值时。

### 代码演示

::: demo
<summary>
  #### 基础用法
  数字输入框。
</summary>

```html
<template>
  <input-number v-model="num1" @change="handleChange" :min="1" :max="10"></input-number>
  
  <input-number v-model="num1" @change="handleChange" :min="1" :max="10" sep-mode></input-number>
</template>
```
:::

::: demo
<summary>
  #### 禁用状态
  通过设置disabled属性禁用输入框，点击按钮切换状态。
</summary>

```html
<template>
  <input-number v-model="num2" :disabled="true"></input-number>
</template>
```
:::

::: demo
<summary>
  #### 步数
  通过设置step属性来调整每次增加或减少的值。
</summary>

```html
<template>
  <input-number v-model="num3" :step="2"></input-number>
</template>
```
:::

::: demo
<summary>
  #### 尺寸
  通过设置size属性为lg和sm将输入框设置为大和小尺寸，不设置为默认（中）尺寸。
</summary>

```html
<template>
  <input-number size="lg" v-model="num4"></input-number>
  <input-number v-model="num5"></input-number>
  <input-number size="sm" v-model="num6"></input-number>
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
