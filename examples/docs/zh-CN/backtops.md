<script>
    export default {
        
    }
</script>

<style scoped>
    .top{
        padding: 10px;
        background: rgba(0, 153, 229, .7);
        color: #fff;
        text-align: center;
        border-radius: 2px;
    }
</style>

## BackTop 返回顶部

当页面内容冗长，需要快捷返回顶部时使用，一般放置在页面右下角位置。

### 代码演示

::: demo
<summary>
  #### 基础用法
  默认位置距离页面右部和底部 30px，滚动至距顶端 400px 时显示。
</summary>

```html
<template>
    <p>向下滚动页面，灰色的按钮为默认效果。</p>
  <Back-top></Back-top>
</template>
```
:::

::: demo
<summary>
  #### 自定义样式 
  自定义了位置在页面底部 100px,滚动至距顶端 100px 时显示。
</summary>

```html
<template>
    <p>向下滚动页面，蓝色的按钮为自定义效果。</p>
  <Back-top :height="100" :bottom="200">
      <div class="top">返回顶端</div>
  </Back-top>
</template>
<script>
    export default {
        
    }
</script>

<style scoped>
    .top{
        padding: 10px;
        background: rgba(0, 153, 229, .7);
        color: #fff;
        text-align: center;
        border-radius: 2px;
    }
</style>
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
