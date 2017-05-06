<script>
    export default {
        name:'Sliders',
        data() {
            return {
                value1: 0,
                value2: 50,
                value3: 36,
                value4: 42,
                value5:0,
                value6:0,

                value8: [4, 8]
            }
        }
    }
</script>

## Slider 滑块

通过拖动滑块在一个固定区间内进行选择。

### 何时使用
当用户需要在数值区间/自定义区间内进行选择时，可为连续或离散值。

### 代码演示

::: demo
<summary>
  #### 基础用法
  滑块的基本用法，可以使用 v-model 双向绑定数据。
  通过设置属性 show-tooltip 设置是否显示tooltip，通过设置属性 disable 禁用滑块。
  注意，单滑块时，value 格式为数字，当开启双滑块时，value 为长度是2的数组，且每项为数字。
</summary>

```html
<template>
  <slider v-model="value1"></slider>
  <slider v-model="value2" class="m-t-20"></slider>
  <slider v-model="value3" :show-tooltip="false" class="m-t-20"></slider>
  <slider v-model="value4" disabled class="m-t-20"></slider>
</template>
```
:::

::: demo
<summary>
  #### 显示间断点
  通过设置属性 show-stops 可以显示间断点，建议在 step 间隔不密集时使用。
</summary>

```html
<template>
    <slider
            v-model="value5"
            :step="10">
    </slider>
    <slider
            class="m-t-20"
            v-model="value6"
            :step="10"
            show-stops>
    </slider>
</template>
```
:::

::: demo
<summary>
  #### 双滑块
  通过设置v-model为一个数组可以定义一个双滑块
</summary>

```html
<template>
    <slider
            v-model="value8"
            range
            show-stops
            :max="10"
            :custom-class="['m-t-30']">
    </slider>
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
