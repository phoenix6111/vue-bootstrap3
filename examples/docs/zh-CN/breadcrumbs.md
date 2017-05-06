<script>
export default {
    
}
</script>
<style scoped>
    .demo-breadcrumb-separator{
        color: #ff5500;
        padding: 0 5px;
    }
</style>

## Breadcrumb 面包屑

显示网站的层级结构，告知用户当前所在位置，以及在需要向上级导航时使用。

### 何时使用
- 当系统拥有超过两级以上的层级结构时；
- 当需要告知用户『你在哪里』时；
- 当需要向上导航的功能时。

### 代码演示

::: demo
<summary>
  #### 基础用法
  最基础的用法，通过设置href属性添加链接。
</summary>

```html
<template>
    <Breadcrumb>
        <Breadcrumb-item href="/">Home</Breadcrumb-item>
        <Breadcrumb-item href="/components/breadcrumb">Components</Breadcrumb-item>
        <Breadcrumb-item>Breadcrumb</Breadcrumb-item>
    </Breadcrumb>
</template>
<script>
    export default {
        
    }
</script>
```
:::

::: demo
<summary>
  #### 基础用法
  最基础的用法，通过设置href属性添加链接。
</summary>

```html
<template>
    <Breadcrumb>
        <Breadcrumb-item href="/">
            <Icon type="home"></Icon> Home
        </Breadcrumb-item>
        <Breadcrumb-item href="/components/breadcrumb">
            <Icon type="apps"></Icon> Components
        </Breadcrumb-item>
        <Breadcrumb-item>
            <Icon type="view-comfy"></Icon> Breadcrumb
        </Breadcrumb-item>
    </Breadcrumb>
</template>
<script>
    export default {
        
    }
</script>
```
:::

::: demo
<summary>
  #### 分隔符
  通过设置separator属性来自定义分隔符，比如 > ，也可以接受自定义的HTML字符串。
</summary>

```html
<template>
    <Breadcrumb separator=">">
        <Breadcrumb-item href="/">Home</Breadcrumb-item>
        <Breadcrumb-item href="/components/breadcrumb">Components</Breadcrumb-item>
        <Breadcrumb-item>Breadcrumb</Breadcrumb-item>
    </Breadcrumb>
    <Breadcrumb separator="<b class='demo-breadcrumb-separator'>=></b>">
        <Breadcrumb-item href="/">Home</Breadcrumb-item>
        <Breadcrumb-item href="/components/breadcrumb">Components</Breadcrumb-item>
        <Breadcrumb-item>Breadcrumb</Breadcrumb-item>
    </Breadcrumb>
</template>
<script>
    export default {
        
    }
</script>
<style scoped>
    .demo-breadcrumb-separator{
        color: #ff5500;
        padding: 0 5px;
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
