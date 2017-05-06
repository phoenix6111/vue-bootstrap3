<script>
    export default {
        
    }
</script>
<style scoped>
    .demo-badge{
        width: 42px;
        height: 42px;
        background: #eee;
        border-radius: 6px;
        display: inline-block;
    }
    .demo-badge-alone{
        background: #5cb85c !important;
    }
</style>

## Badge 徽标数

主要用于通知未读数的角标，提醒用户点击。

### 何时使用
一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。

### 代码演示

::: demo
<summary>
  #### 基础用法
  最简单的使用方法
</summary>

```html
<template>
  <Badge count="3">
      <a href="#" class="demo-badge"></a>
  </Badge>
</template>
<script>
    export default {
        
    }
</script>
<style scoped>
    .demo-badge{
        width: 42px;
        height: 42px;
        background: #eee;
        border-radius: 6px;
        display: inline-block;
    }
</style>
```
:::

::: demo
<summary>
  #### 小红点
  以红点的形式标注需要关注的内容。
</summary>

```html
<template>
    <div class="row">
        <div class="col-sm-3">
            <Badge :dot="true">
                <a href="#" class="demo-badge"></a>
            </Badge>
        </div>
        <div class="col-sm-3">
            <Badge :dot="true">
                <Icon type="notifications-none" size="26"></Icon>
            </Badge>
        </div>
        <div class="col-sm-3">
            <Badge :dot="true">
                <a href="#">可以是一个链接</a>
            </Badge>   
        </div>
    </div>
</template>
<script>
    export default {
        
    }
</script>
```
:::

::: demo
<summary>
  #### 封顶数字
  通过设置overflow-count属性设置一个封顶值，当超过时，会显示${overflowCount}+。
</summary>

```html
<template>
    <div class="row">
        <div class="col-sm-3">
            <Badge count="100">
                <a href="#" class="demo-badge"></a>
            </Badge>
        </div>
        <div class="col-sm-3">
            <Badge count="1000" overflow-count="999">
                <a href="#" class="demo-badge"></a>
            </Badge>
        </div>
    </div>
    
    
</template>
<script>
    export default {
        
    }
</script>
```
:::

::: demo
<summary>
  #### 独立使用及自定义样式
  可以没有 slot 独立展示。
</summary>

```html
<style>
    .demo-badge-alone{
        background: #5cb85c !important;
    }
</style>
<template>
    <div class="row">
        <div class="col-sm-3">
            <Badge count="10"></Badge>
        </div>
        <div class="col-sm-3">
            <Badge count="20" class-name="demo-badge-alone"></Badge>    
        </div>
    </div>
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
