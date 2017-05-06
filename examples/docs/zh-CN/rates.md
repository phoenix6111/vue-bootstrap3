<script>
  export default {
    data() {
      return {
        value1: null,
        value2: null,
        value3: null,
        value4: null,
        value5: 3.7
      }
    }
  }
</script>
<style>
    .block {
        margin-bottom:20px;
    }
    
    .demonstration {
        display:block;
        margin-bottom: 15px;
        color: #8492a6;
        font-size: 14px;
    }
</style>
## Rate 评分

对事物进行快速的评级操作，或对评价进行展示。

### 代码演示

::: demo
<summary>
  #### 基础用法
  评分被分为三个等级，可以利用颜色对分数及情感倾向进行分级（默认情况下不区分颜色）。
  三个等级所对应的颜色用过colors属性设置，而它们对应的两个阈值则通过 `low-threshold` 和 `high-threshold` 设定。
</summary>

```html
<div class="row">
    <div class="col-sm-6 text-center">
        <div class="block">
          <span class="demonstration">默认不区分颜色</span>
          <rate v-model="value1"></rate>
        </div>
    </div>
    <div class="col-sm-6 text-center">
        <div class="block">
          <span class="demonstration">区分颜色</span>
          <rate
            v-model="value2"
            :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
          </rate>
        </div>    
    </div>
</div>

<script>
  export default {
    data() {
      return {
        value1: null,
        value2: null
      }
    }
  }
</script>
```
:::

::: demo
<summary>
  #### 辅助文字
  为组件设置 show-text 属性会在右侧显示辅助文字。
  通过设置 texts 可以为每一个分值指定对应的辅助文字。texts 为一个数组，长度应等于最大值 max。
</summary>

```html
<rate
  v-model="value3"
  show-text>
</rate>

<script>
  export default {
    data() {
      return {
        value3: null
      }
    }
  }
</script>
```
:::

::: demo
<summary>
  #### 其它 icon
  当有多层评价时，可以用不同类型的 icon 区分评分层级。
</summary>

```html
<rate
  v-model="value4"
  :icon-classes="['zmdi zmdi-mood-bad', 'zmdi zmdi-face', 'zmdi zmdi-mood']"
  void-icon-class="zmdi zmdi-face"
  :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
</rate>

<script>
  export default {
    data() {
      return {
        value4: null
      }
    }
  }
</script>
```
:::

::: demo
<summary>
  #### 只读
  只读的评分用来展示分数，允许出现半星。
</summary>

```html
<rate
  v-model="value5"
  disabled
  show-text
  text-color="#ff9900"
  text-template="{value}">
</rate>

<script>
  export default {
    data() {
      return {
        value5: 3.7
      }
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
