<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                cityList1: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    }
                ],
                cityList2: [
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model7: '',
                model1: '',
                form:"",
                model2: '',
                model3: '',
                model4: '',
                model5: '',
                model6: '',
                model8: '',
                model9: '',
                model10: [],
                model11: '',
                model12: []
            }
        }
    }
</script>

## Select 选择器

使用模拟的增强下拉选择器来代替浏览器原生的选择器。选择器支持单选、多选、搜索，以及键盘快捷操作。

### 代码演示

::: demo
<summary>
  #### 基本用法
  基本用法。可以使用 v-model 双向绑定数据。
  单选时，value 只接受字符串和数字类型，多选时，只接受数组类型，组件会自动根据Option的value来返回选中的数据。
  可以给Select添加 style 样式，比如宽度。
  在展开选择器后，可以使用键盘的up和down快速上下选择，按下Enter选择，按下Esc收起选择器。
</summary>

```html
<template>
  <bs-select v-model="model1" style="width:200px">
      <bs-option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</bs-option>
  </bs-select>
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
  <bs-select v-model="model2" size="small" style="width:100px">
      <bs-option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</bs-option>
  </bs-select>
  <bs-select v-model="model3" style="width:100px">
      <bs-option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</bs-option>
  </bs-select>
  <bs-select v-model="model4" size="large" style="width:100px">
      <bs-option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</bs-option>
  </bs-select>
</template>
```
:::

::: demo
<summary>
  #### 禁用
  通过给Select设置属性disabled禁用整个选择器。
  通过给Option设置属性disabled可以禁用当前项。
</summary>

```html
<template>
  <bs-select v-model="model5" disabled style="width:200px">
      <bs-option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</bs-option>
  </bs-select>
  <bs-select v-model="model6" style="width:200px">
      <bs-option value="beijing">北京市</bs-option>
      <bs-option value="shanghai" disabled>上海市</bs-option>
      <bs-option value="shenzhen">深圳市</bs-option>
  </bs-select>
</template>
```
:::

::: demo
<summary>
  #### 分组
  使用Option-group可将选项进行分组。
</summary>

```html
<template>
  <bs-select v-model="model7" style="width:200px">
      <option-group label="热门城市">
          <bs-option v-for="item in cityList1" :value="item.value" :key="item">{{ item.label }}</bs-option>
      </option-group>
      <option-group label="其它城市">
          <bs-option v-for="item in cityList2" :value="item.value" :key="item">{{ item.label }}</bs-option>
      </option-group>
  </bs-select>
</template>
```
:::

::: demo
<summary>
  #### 可清空
  通过设置属性clearable可以清空已选项，仅适用于单选模式。
</summary>

```html
<template>
  <bs-select v-model="model8" clearable style="width:200px">
      <bs-option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</bs-option>
  </bs-select>
</template>
```
:::

::: demo
<summary>
  #### 自定义模板
  对选项内容可以进行自定义。注意在Option中使用label属性，可以让选择器优先读取该属性的值以显示，否则选中时显示的内容会和自定义的一样，这往往不是我们想要的。
  对于选项显示内容的逻辑：优先显示 slot 内容，如果没有定义 slot，则显示label的值，如果没有设置 label，则显示value的值。
</summary>

```html
<template>
  <bs-select v-model="model9" style="width:200px">
      <bs-option value="beijing" label="北京市">
          <span>北京</span>
          <span style="float:right;color:#ccc">Beiing</span>
      </bs-option>
      <bs-option value="shanghai" label="上海市">
          <span>上海</span>
          <span style="float:right;color:#ccc">ShangHai</span>
      </bs-option>
      <bs-option value="shenzhen" label="深圳市">
          <span>深圳</span>
          <span style="float:right;color:#ccc">ShenZhen</span>
      </bs-option>
  </bs-select>
</template>
```
:::

::: demo
<summary>
  #### 多选
  通过设置属性multiple可以开启多选模式。多选模式下，model 接受数组类型的数据，所返回的也是数组。
</summary>

```html
<template>
  <bs-select v-model="model10" multiple style="width:260px">
      <bs-option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</bs-option>
  </bs-select>
</template>
```
:::

::: demo
<summary>
  #### 可搜索
  通过设置属性filterable可以开启搜索模式。单选和多选都支持搜索模式。多选搜索时，可以使用键盘Delete快捷删除最后一个已选项。
</summary>

```html
<template>
  <div class="row m-b-30">
      <div class="col-sm-6" style="padding-right:10px">
          <bs-select v-model="model11" filterable>
              <bs-option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</bs-option>
          </bs-select>
      </div>
      <div class="col-sm-6" >
          <bs-select v-model="model12" filterable multiple>
              <bs-option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</bs-option>
          </bs-select>
      </div>
  </div>
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
