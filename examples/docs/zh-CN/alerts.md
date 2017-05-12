<script>
export default {
    
}
</script>

## Alert 警告提示

静态地呈现一些警告信息，可手动关闭。

### 代码演示

::: demo
<summary>
  #### 基础用法
  基本使用方法，有四种样式可以选择info、success、warning、error。
</summary>

```html
<template>
  <Alert type="success">
      成功提示的文案
  </Alert>
  <Alert type="info">
      信息提示的文案
  </Alert>
  <Alert type="warning">
      警告提示的文案
  </Alert>
  <Alert type="danger">
      危险提示的文案
  </Alert>
</template>
```
:::

::: demo
<summary>
  #### 含标题和描述信息
  自定义`<slot name="header">`标题和描述内容。
</summary>

```html
<template>
  <Alert type="success">
      消息提示文案
      <template slot="desc">消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案</template>
  </Alert>
  <Alert type="info">
      消息提示文案
        <template slot="desc">消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案</template>
  </Alert>
  <Alert type="warning">
      消息提示文案
        <template slot="desc">消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案</template>
  </Alert>
  <Alert type="danger">
      消息提示文案
        <template slot="desc">消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案</template>
  </Alert>
</template>
```
:::

::: demo
<summary>
  #### 图标
  根据 type 属性自动添加不同图标，或者自定义图标 slot 。
</summary>

```html
<template>
    <Alert type="info" show-icon>消息提示文案</Alert>
    <Alert type="success" show-icon>成功提示文案</Alert>
    <Alert type="warning" show-icon>警告提示文案</Alert>
    <Alert type="danger" show-icon>错误提示文案</Alert>
  
    <Alert type="success" show-icon>
          消息提示文案
          <template slot="desc">消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案</template>
      </Alert>
      <Alert type="info" show-icon>
          消息提示文案
            <template slot="desc">消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案</template>
      </Alert>
      <Alert type="warning" show-icon>
          消息提示文案
            <template slot="desc">消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案</template>
      </Alert>
      <Alert type="danger" show-icon>
          消息提示文案
            <template slot="desc">消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案</template>
      </Alert>
      
      <Alert show-icon>
          自定义图标
          <Icon type="notifications-active" slot="icon"></Icon>
          <template slot="desc">自定义图标文案自定义图标文案自定义图标文案自定义图标文案自定义图标文案</template>
      </Alert>
</template>
```
:::

::: demo
<summary>
  #### 可关闭
  显示关闭按钮，点击可关闭提示，也可以自定义关闭 slot 。
</summary>

```html
<template>
    <Alert closable>消息提示文案</Alert>
    <Alert type="success" show-icon closable>
        成功提示文案
        <span slot="desc">成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案</span>
    </Alert>
    
    <Alert type="warning" closable>
        自定义关闭内容
        <span slot="close">不再提示</span>
    </Alert>
</template>
```
:::

::: demo
<summary>
  #### Light theme
  通过设置`theme=light`，可将`Alert`的背景设置为白色，并在左边添加type的颜色标志
</summary>

```html
<template>
  <Alert type="success" theme="light">
      成功提示的文案
  </Alert>
  <Alert type="info" theme="light">
      信息提示的文案
  </Alert>
  <Alert type="warning" theme="light">
      警告提示的文案
  </Alert>
  <Alert type="danger" theme="light">
      危险提示的文案
  </Alert>
  
  <Alert type="info" show-icon theme="light">消息提示文案</Alert>
  <Alert type="success" show-icon theme="light">成功提示文案</Alert>
  <Alert type="warning" show-icon theme="light">警告提示文案</Alert>
  <Alert type="danger" show-icon theme="light">错误提示文案</Alert>

  <Alert type="success" show-icon theme="light">
        消息提示文案
        <template slot="desc">消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案</template>
    </Alert>
    <Alert type="info" show-icon theme="light">
        消息提示文案
          <template slot="desc">消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案</template>
    </Alert>
    <Alert type="warning" show-icon theme="light">
        消息提示文案
          <template slot="desc">消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案</template>
    </Alert>
    <Alert type="danger" show-icon theme="light">
        消息提示文案
          <template slot="desc">消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案</template>
    </Alert>
    
    <Alert show-icon theme="light">
        自定义图标
        <Icon type="notifications-active" slot="icon"></Icon>
        <template slot="desc">自定义图标文案自定义图标文案自定义图标文案自定义图标文案自定义图标文案</template>
    </Alert>
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
