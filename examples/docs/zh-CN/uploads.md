<script>
    export default {
        data() {
            return {
                action:'http://localhost:8080/upload'
            }
        }
    }
</script>

## Upload 文件上传

文件选择上传和拖拽上传控件。

### 何时使用
- 上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。
- 当需要上传一个或一些文件时。
- 当需要展现上传的进度时。
- 当需要使用拖拽交互时。

### 代码演示

::: demo
<summary>
  #### 拖拽上传加文件预览
  拖拽上传加文件预览。
</summary>

```html
<template>
  <Upload :action="action" :max-files="1"></Upload>
</template>
```
:::

::: demo
<summary>
  #### 拖拽上传加文件列表
  拖拽上传加文件列表。
</summary>

```html
<template>
  <Upload :action="action" :show-preview="false"></Upload>
</template>
```
:::

::: demo
<summary>
  #### 按钮选择上传加文件列表
  按钮选择上传加文件列表
</summary>

```html
<template>
  <Upload :action="action" :show-preview="false" type="select" tip="只能上传jpg/png文件，且不超过500kb"></Upload>
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
