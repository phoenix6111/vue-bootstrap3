<script>
export default {
    data () {
        return {
            current: 0
        }
    },
    methods: {
        next () {
            if (this.current == 3) {
                this.current = 0;
            } else {
                this.current += 1;
            }
        }
    }
}
</script>

## Steps 步骤条

拆分某项流程的步骤，引导用户按流程完成任务。

### 代码演示

::: demo
<summary>
  #### 基础用法
  基本用法，组件会根据`current`自动判断各步骤状态。
</summary>

```html
<template>
  <Steps :current="1">
      <Step title="已完成" content="这里是该步骤的描述信息"></Step>
      <Step title="进行中" content="这里是该步骤的描述信息"></Step>
      <Step title="待进行" content="这里是该步骤的描述信息"></Step>
      <Step title="待进行" content="这里是该步骤的描述信息"></Step>
  </Steps>
</template>
```
:::

::: demo
<summary>
  #### 迷你版
  设置属性`size`为`small`启用迷你版。
</summary>

```html
<template>
  <Steps :current="2" size="small">
      <Step title="已完成"></Step>
      <Step title="进行中"></Step>
      <Step title="待进行"></Step>
      <Step title="待进行"></Step>
  </Steps>
</template>
```
:::

::: demo
<summary>
  #### 带图标的步骤条
  通过设置`Step`的`icon`属性可以自定义图标。
</summary>

```html
<template>
  <Steps :current="1">
      <Step title="注册" icon="account-add"></Step>
      <Step title="上传头像" icon="camera-add"></Step>
      <Step title="验证邮箱" icon="email"></Step>
  </Steps>
</template>
```
:::

::: demo
<summary>
  #### 切换步骤
  点击下一步按钮可以切换当前进度状态。
</summary>

```html
<template>
    <p>当前正在进行第 {{ current + 1 }} 步</p>
    <Steps :current="current">
        <Step title="步骤1"></Step>
        <Step title="步骤2"></Step>
        <Step title="步骤3"></Step>
        <Step title="步骤4"></Step>
    </Steps>
    <br>
    <i-button type="primary" @click="next">下一步</i-button>
</template>
<script>
    export default {
        data () {
            return {
                current: 0
            }
        },
        methods: {
            next () {
                if (this.current == 3) {
                    this.current = 0;
                } else {
                    this.current += 1;
                }
            }
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 垂直方向
  设置属性`direction`为`vertical`在垂直方向展示。
</summary>

```html
<template>
  <Steps :current="2" direction="vertical">
      <Step title="已完成" content="这里是该步骤的描述信息"></Step>
      <Step title="已完成" content="这里是该步骤的描述信息"></Step>
      <Step title="进行中" content="这里是该步骤的描述信息"></Step>
      <Step title="待进行" content="这里是该步骤的描述信息"></Step>
  </Steps>
</template>
```
:::

::: demo
<summary>
  #### 步骤运行错误
  设置`Steps`的属性`status`为`error`指定当前步骤状态。
</summary>

```html
<template>
  <Steps :current="1" status="error">
      <Step title="已完成" content="这里是该步骤的描述信息"></Step>
      <Step title="进行中" content="这里是该步骤的描述信息"></Step>
      <Step title="待进行" content="这里是该步骤的描述信息"></Step>
      <Step title="待进行" content="这里是该步骤的描述信息"></Step>
  </Steps>
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
