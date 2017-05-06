<script>
    export default {
        data () {
            return {
                value: '',
                value1: '',
                value2: '',
                value3: '',
                value4: '',
                value5: '',
                value6: '',
                value7: '',
                value8: '',
                value9: '',
                value10: '',
                value11: '',
                select1: 'http',
                select2: 'com',
                select3: 'day'
            }
        }
    }
</script>

<style scoped>
    .fg-line {
        margin-bottom: 10px;
    }
</style>

## Input 输入框

基本表单组件，支持 input 和 textarea，并在原生控件基础上进行了功能扩展，可以组合使用。

### 何时使用
- 需要用户输入表单域内容时。
- 提供组合型输入框，带搜索的输入框，还可以进行大小选择。

### 代码演示

::: demo
<summary>
  #### 基础用法
  基本使用
</summary>

```html
<template>
  <bs-input v-model="value" placeholder="请输入..." style="width: 300px"></bs-input>
</template>
```
:::

::: demo
<summary>
  #### 尺寸
  输入框有三种尺寸：大、默认（中）、小
  通过设置size为lg和sm设置为大和小尺寸，不设置为默认（中）尺寸。
</summary>

```html
<template>
  <bs-input v-model="value1" size="lg" placeholder="large size"></bs-input>
  <br>
  <bs-input v-model="value2" placeholder="default size"></bs-input>
  <br>
  <bs-input v-model="value3" size="sm" placeholder="small size"></bs-input>
</template>
```
:::

::: demo
<summary>
  #### 带Icon的输入框
  通过 icon 属性可以在输入框右边加一个图标。
  点击图标，会触发 on-click 事件。
</summary>

```html
<template>
  <bs-input v-model="value4" icon="time" placeholder="请输入..." style="width: 200px"></bs-input>
</template>
```
:::

::: demo
<summary>
  #### 文本域
  通过设置属性 type 为 textarea 来使用文本域，用于多行输入。
  通过设置属性 rows 控制文本域默认显示的行数。
</summary>

```html
<template>
  <bs-input v-model="value5" type="textarea" placeholder="请输入..."></bs-input>
  <bs-input v-model="value6" type="textarea" :rows="4" placeholder="请输入..."></bs-input>
</template>
```
:::

::: demo
<summary>
  #### 适应文本高度的文本域
  设置属性 autosize，文本域会自动适应高度的变化。
  autosize也可以设定为一个对象，指定最小行数和最大行数。
</summary>

```html
<template>
  <bs-input v-model="value7" type="textarea" :autosize="true" placeholder="请输入..."></bs-input>
  <bs-input v-model="value8" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></bs-input>
</template>
```
:::

::: demo
<summary>
  #### 禁用状态
  通过添加disabled属性可设置为不可用状态。
</summary>

```html
<template>
  <bs-input v-model="value9" disabled placeholder="请输入..."></bs-input>
  <bs-input v-model="value10" disabled type="textarea" placeholder="请输入..."></bs-input>
</template>
```
:::

::: demo
<summary>
  #### 复合型输入框
  通过前置和后置的 slot 可以实现复合型的输入框。
</summary>

```html
<template>
  <bs-input v-model="value11" size="sm" placeholder="small size">
      <Icon type="upload" slot="prepend"></Icon>
  </bs-input>
  <br>

  <bs-input v-model="value11" size="sm" placeholder="small size">
      <Icon type="search" slot="append"></Icon>
  </bs-input>
  <br>

  <bs-input v-model="value11" size="sm" placeholder="small size">
      <span slot="prepend">http://</span>
      <span slot="append">.com</span>
  </bs-input>
  <br>

  <bs-input v-model="value11" placeholder="default size">
      <span slot="prepend">http://</span>
      <span slot="append">.com</span>
  </bs-input>
  <br>

  <bs-input v-model="value11" size="lg" placeholder="large size">
      <span slot="prepend">http://</span>
      <span slot="append">.com</span>
  </bs-input>
  
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
