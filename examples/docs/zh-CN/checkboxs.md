<script>
    const cityOptions = ['上海', '北京', '广州', '深圳'];

    export default {
        name:'Checkboxs',
        data() {
            return {
                checked: true,
                checked1: false,
                checked2: true,
                checkList: ['选中且禁用','复选框 A'],

                checkAll: true,
                checkedCities: ['上海', '北京'],
                checkedCities1: ['上海', '北京'],
                cities: cityOptions,
                isIndeterminate: true,
                checkboxGroup1: ['上海'],
                checkboxGroup2: ['北京'],
                checkboxGroup3: ['广州'],
            };
        },
        methods: {
            handleCheckAllChange(event) {
                this.checkedCities = event.target.checked ? cityOptions : [];
                this.isIndeterminate = false;
            },
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.cities.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
            }
        }
    }
</script>

## Checkbox 多选框

一组备选项中进行多选

### 何时使用
- 在一组可选项中进行多项选择时；
- 单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。

### 代码演示

::: demo
<summary>
  #### 单独使用
  使用 v-model 可以双向绑定数据。
</summary>

```html
<template>
  <Checkbox v-model="checked">备选项</Checkbox>
</template>
```
:::

::: demo
<summary>
  #### 不可用
  checkbox 不可用。
</summary>

```html
<template>
  <Checkbox v-model="checked1" disabled>备选项1</Checkbox>
  <Checkbox v-model="checked2" disabled>备选项</Checkbox>
</template>
```
:::

::: demo
<summary>
  #### 组合使用
  使用Checkbox-group配合数组来生成组合。在组合使用时，Checkbox 使用 label 来自动判断选中状态。每个 Checkbox 的内容可以自定义，如不填写则默认使用 label 的值。
</summary>

```html
<template>
  <checkbox-group v-model="checkList">
      <Checkbox label="复选框 A"></Checkbox>
      <Checkbox label="复选框 B"></Checkbox>
      <Checkbox label="复选框 C"></Checkbox>
      <Checkbox label="禁用" disabled></Checkbox>
      <Checkbox label="选中且禁用" disabled></Checkbox>
  </checkbox-group>
</template>
```
:::

::: demo
<summary>
  #### 全选
  在实现全选效果时，你可能会用到 indeterminate 属性。示例代码只是一种写法，业务中可以用更多的方法，比如计算属性。
</summary>

```html
<template>
  <Checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</Checkbox>
  <div style="margin: 15px 0;"></div>
  <checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
      <Checkbox v-for="(city,index) in cities" :label="city" :key="index">{{city}}</Checkbox>
  </checkbox-group>
</template>
```
:::

::: demo
<summary>
  #### 可选项目数量的限制
  使用 min 和 max 属性能够限制可以被勾选的项目的数量。
</summary>

```html
<template>
  <checkbox-group 
    v-model="checkedCities1"
    :min="1"
    :max="2">
    <checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
  </checkbox-group>
</template>

<script>
  const cityOptions = ['上海', '北京', '广州', '深圳'];
  export default {
    data() {
      return {
        checkedCities1: ['上海', '北京'],
        cities: cityOptions
      };
    }
  };
</script>
```
:::

::: demo
<summary>
  #### 按钮样式
  按钮样式的多选组合。
</summary>

```html
<template>
  <div style="margin: 15px 0;"></div>
  <checkbox-group v-model="checkboxGroup1">
    <checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</checkbox-button>
  </checkbox-group>
  <div style="margin: 15px 0;"></div>
  <checkbox-group v-model="checkboxGroup2" size="small">
    <checkbox-button v-for="city in cities" :label="city" :disabled="city === '深圳'" :key="city">{{city}}</checkbox-button>
  </checkbox-group>
  <div style="margin: 15px 0;"></div>
  <checkbox-group v-model="checkboxGroup3" size="large" fill="#324057" text-color="#a4aebd" :min="1" :max="3">
    <checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</checkbox-button>
  </checkbox-group>
</template>
<script>
  const cityOptions = ['上海', '北京', '广州', '深圳'];
  export default {
    data () {
      return {
        checkboxGroup1: ['上海'],
        checkboxGroup2: ['北京'],
        checkboxGroup3: ['广州'],
        cities: cityOptions
      };
    }
  }
</script>
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
