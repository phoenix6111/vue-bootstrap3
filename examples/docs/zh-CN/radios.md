<script>
    export default {
        data () {
            return {
                radio: '2',
                radio1: '选中且禁用',
                radio2: 6,
                button1: '北京',
                button2: '北京',
                button3: '北京'
            };
        },
        methods: {
            onChange(val) {
                console.log("val == "+val);
            }
        }
    }
</script>

<style scoped>
    .test {
        padding:8px 14px;
        text-align: center;
        border:1px solid #ff0000;
    }
</style>

## Radio 单选框

在一组备选项中进行单选。

### 代码演示

::: demo
<summary>
  #### 基本
  使用 v-model 可以双向绑定数据。
</summary>

```html
<template>
  <Radio class="radio" v-model="radio" label="1">备选项</Radio>
  <Radio class="radio" v-model="radio" label="2">备选项</Radio>
</template>
```
:::

::: demo
<summary>
  #### 禁用
  单选框不可用的状态。
</summary>

```html
<template>
  <Radio disabled v-model="radio1" label="禁用">备选项</Radio>
  <Radio disabled v-model="radio1" label="选中且禁用">备选项</Radio>
</template>
```
:::

::: demo
<summary>
  #### 组合使用
  使用Radio-group实现一组互斥的选项组。在组合使用时，Radio 使用 label 来自动判断。每个 Radio 的内容可以自定义，如不填写则默认使用 label 的值。
</summary>

```html
<template>
  <radio-group v-model="radio2" @change="onChange" :vertical="true">
      <Radio :label="3">备选项</Radio>
      <Radio :label="6">备选项</Radio>
      <Radio :label="9">备选项</Radio>
  </radio-group>
</template>
```
:::

::: demo
<summary>
  #### 按钮样式
  组合使用时可以设置属性type为 button 来应用按钮的样式。
</summary>

```html
<template>
  <Radio-group v-model="button1" type="button" size="sm">
      <Radio label="北京"></Radio>
      <Radio label="上海"></Radio>
      <Radio label="深圳"></Radio>
      <Radio label="杭州"></Radio>
  </Radio-group>

  <br>

  <Radio-group v-model="button1" type="button">
      <Radio label="北京"></Radio>
      <Radio label="上海"></Radio>
      <Radio label="深圳"></Radio>
      <Radio label="杭州"></Radio>
  </Radio-group>

  <br>

  <Radio-group v-model="button1" type="button" size="lg">
      <Radio label="北京"></Radio>
      <Radio label="上海"></Radio>
      <Radio label="深圳"></Radio>
      <Radio label="杭州"></Radio>
  </Radio-group>
  
  <br>
  
  <Radio-group v-model="button2" type="button">
      <Radio label="北京"></Radio>
      <Radio label="上海" disabled></Radio>
      <Radio label="深圳"></Radio>
      <Radio label="杭州"></Radio>
  </Radio-group>

  <br>

  <Radio-group v-model="button3" type="button">
      <Radio label="北京" disabled></Radio>
      <Radio label="上海" disabled></Radio>
      <Radio label="深圳" disabled></Radio>
      <Radio label="杭州" disabled></Radio>
  </Radio-group>
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
