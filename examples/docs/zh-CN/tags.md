<script>
    export default {
        data () {
            return {
                modal1: false,
                loading: true,
                ccc: true
            }
        },
        methods: {
            ok () {
                setTimeout(() => {
                    this.modal1 = false;
                }, 2000);
            },
            clickTag() {
                console.log('click tag');
            },
            clickTagClose() {
                this.ccc = false;
                console.log('click tag close-icon');
            }
        }
    }
</script>

## Tag 标签

将页面元素钉在可视范围。

### 何时使用
- 用于标记事物的属性和维度。
- 进行分类。

### 代码演示

::: demo
<summary>
  #### 基本
  简单的展示，添加属性closable可以关闭标签。
  点击关闭标签时，会触发 on-close 事件，需自己实现关闭逻辑。
</summary>

```html
<template>
  <Tag>标签一</Tag>
  <Tag>标签二</Tag>
  <Tag closable>标签三</Tag>
</template>
```
:::

::: demo
<summary>
  #### 状态类型
  通过设置 type 属性为 primary、info、success、danger、success 来选择不同的样式类型。
</summary>

```html
<template>
  <Tag closable type="primary">标签一</Tag>
  <Tag closable type="info">标签一</Tag>
  <Tag closable type="success">标签二</Tag>
  <Tag closable type="danger">标签三</Tag>
  <Tag closable type="success">标签四</Tag>
</template>
```
:::

::: demo
<summary>
  #### 样式
  通过设置 hit 属性为 border 或 dot 来选择不同的样式类型。建议有关闭的某些场景下使用 border，图例的场景下使用 dot。
</summary>

```html
<template>
  <Tag hit="dot">标签一</Tag>
  <Tag hit="dot" closable>标签一</Tag>
  <Tag hit="dot" type="primary">标签一</Tag>
  <Tag hit="dot" type="primary" closable>标签一</Tag>
  <Tag hit="dot" type="info">标签一</Tag>
  <Tag hit="dot" type="info" closable>标签一</Tag>
  <Tag hit="dot" type="success">标签一</Tag>
  <Tag hit="dot" type="success" closable>标签一</Tag>
  <Tag hit="dot" type="danger">标签一</Tag>
  <Tag hit="dot" type="danger" closable>标签一</Tag>
  <Tag hit="dot" type="success">标签一</Tag>
  <Tag hit="dot" type="success" closable>标签一</Tag>
  <br>
  <hr>
  <br>
  <Tag hit="border">标签一</Tag>
  <Tag hit="border" closable>标签一</Tag>
  <Tag hit="border" type="primary">标签一</Tag>
  <Tag hit="border" type="primary" closable>标签一</Tag>
  <Tag hit="border" type="info">标签一</Tag>
  <Tag hit="border" type="info" closable>标签一</Tag>
  <Tag hit="border" type="success">标签一</Tag>
  <Tag hit="border" type="success" closable>标签一</Tag>
  <Tag hit="border" type="danger">标签一</Tag>
  <Tag hit="border" type="danger" closable>标签一</Tag>
  <Tag hit="border" type="success">标签一</Tag>
  <Tag hit="border" type="success" closable>标签一</Tag>
</template>
```
:::

::: demo
<summary>
  #### 样式
  通过设置 hit 属性为 border 或 dot 来选择不同的样式类型。建议有关闭的某些场景下使用 border，图例的场景下使用 dot。
</summary>

```html
<template>
  <Tag closable>标签一</Tag>
  <Tag closable>标签二</Tag>
  <Tag closable>标签三</Tag>
  <Tag closable>标签四</Tag>
  <Tag v-if="ccc" closable @on-close="clickTagClose">标签一</Tag>
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
