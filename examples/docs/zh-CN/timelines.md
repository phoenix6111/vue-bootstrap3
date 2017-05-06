<script>
export default {
    
}
</script>

## Timeline 时间轴

对一系列信息进行时间排序时，垂直地展示。

### 何时使用
- 当有一系列信息需要从上至下按时间排列时；
- 需要有一条时间轴进行视觉上的串联时；

### 代码演示

::: demo
<summary>
  #### 基本
  最简单定义一个时间轴的用法。
</summary>

```html
<template>
    <Timeline>
        <Timeline-item title="Apple I 问世">
        </Timeline-item>
        <Timeline-item title="发布 Macintosh">
        </Timeline-item>
        <Timeline-item title="发布 iPhone">
        </Timeline-item>
        <Timeline-item title="发布 iPad">
        </Timeline-item>
        <Timeline-item title="史蒂夫·乔布斯去世">
        </Timeline-item>
    </Timeline>
</template>
<script>
    export default {
        
    }
</script>
```
:::

::: demo
<summary>
  #### 圆圈颜色
  用各种颜色来标识不同状态，可以使用green、red、blue或自定义的颜色，默认是 blue 。
</summary>

```html
<template>
    <Timeline>
            <Timeline-item type="success" title="发布1.0版本"></Timeline-item>
            <Timeline-item type="success" title="发布2.0版本"></Timeline-item>
            <Timeline-item type="danger" title="严重故障"></Timeline-item>
            <Timeline-item type="primary" title="发布3.0版本"></Timeline-item>
        </Timeline>
</template>
<script>
    export default {
        
    }
</script>
```
:::

::: demo
<summary>
  #### 最后一个
  通过添加pending属性来标记最后一个为幽灵节点，标识还未完成。
</summary>

```html
<template>
    <Timeline pending>
        <Timeline-item title="发布1.0版本"></Timeline-item>
        <Timeline-item title="发布2.0版本"></Timeline-item>
        <Timeline-item title="发布3.0版本"></Timeline-item>
        <Timeline-item><a href="#" slot="title">查看更多</a></Timeline-item>
    </Timeline>
</template>
<script>
    export default {
        
    }
</script>
```
:::

::: demo
<summary>
  #### 自定义时间轴点
  接受一个 slot 来自定义轴点的内容，比如一个图标。
</summary>

```html
<template>
    <Timeline>
        <Timeline-item type="primary" title="发布里程碑版本">
            <Icon type="flower-alt" slot="dot"></Icon>
        </Timeline-item>
        <Timeline-item title="发布1.0版本"></Timeline-item>
        <Timeline-item title="发布2.0版本"></Timeline-item>
        <Timeline-item title="发布3.0版本"></Timeline-item>
    </Timeline>
</template>
<script>
    export default {
        
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
