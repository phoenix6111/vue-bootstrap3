<script>
    export default {
        methods: {
            openSimple(type) {
                if(type === 'inverse') {
                    this.$notice.open({
                        title: '这是一条信息',
                    });
                } else {
                    this.$notice[type]({
                        title: '这是一条信息'
                    });
                }
            },
            openIcon(type) {
                if(type === 'inverse') {
                    this.$notice.open({
                        title: '这是一条信息',
                        showIcon: true,
                        duration:0
                    });
                } else {
                    this.$notice[type]({
                        title: '这是一条信息',
                        showIcon: true
                    });
                }
                
            },
            openMessage(type) {
                let title = '提示';
                if(type === 'success') {
                    title = '成功';
                } else if(type === 'warning') {
                    title = '警告';
                } else if(type === 'danger') {
                    title = '错误';
                }
                
                if(type === 'inverse') {
                    this.$notice.open({
                        title: '信息',
                        desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述',
                        duration:0
                    });
                } else {
                    this.$notice[type]({
                        title: title,
                        desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述',
                        duration:0
                    });
                }
                
            },
            openIconMessage(type) {
                let title = '提示';
                if(type === 'success') {
                    title = '成功';
                } else if(type === 'warning') {
                    title = '警告';
                } else if(type === 'danger') {
                    title = '错误';
                }
                
                if(type === 'inverse') {
                    this.$notice.open({
                        title: '信息',
                        desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述',
                        showIcon:true
                    });
                } else {
                    this.$notice[type]({
                        title: title,
                        desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述',
                        showIcon:true,
                    });
                }
            },
            openDuration(type,duration) {
                let title = '提示';
                if(type === 'success') {
                    title = '成功';
                } else if(type === 'warning') {
                    title = '警告';
                } else if(type === 'danger') {
                    title = '错误';
                }
                
                if(type === 'inverse') {
                    this.$notice.open({
                        title: '信息',
                        desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述',
                        showIcon:true,
                        duration:duration
                    });
                } else {
                    this.$notice[type]({
                        title: title,
                        desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述',
                        showIcon:true,
                        duration:duration
                    });
                }
            },
            openLightMessage(type) {
                let title = '提示';
                if(type === 'success') {
                    title = '成功';
                } else if(type === 'warning') {
                    title = '警告';
                } else if(type === 'danger') {
                    title = '错误';
                }
                
                if(type === 'inverse') {
                    this.$notice.open({
                        title: '信息',
                        desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述',
                        theme:'light',
                        duration:0
                    });
                } else {
                    this.$notice[type]({
                        title: title,
                        desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述',
                        theme:'light',
                        duration:0
                    });
                }
                
            },
            openLightIconMessage(type) {
                let title = '提示';
                if(type === 'success') {
                    title = '成功';
                } else if(type === 'warning') {
                    title = '警告';
                } else if(type === 'danger') {
                    title = '错误';
                }
                
                if(type === 'inverse') {
                    this.$notice.open({
                        title: '信息',
                        desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述',
                        showIcon:true,
                        theme:'light',
                        duration:0
                    });
                } else {
                    this.$notice[type]({
                        title: title,
                        desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述',
                        showIcon:true,
                        theme:'light',
                        duration:0
                    });
                }
            }
        }
    }
</script>
<style scoped>
    .btn {
        margin-right:10px;
    }
</style>

## Notice 通知提醒

在界面右上角显示可关闭的全局通知。

### 何时使用
- 通知内容带有描述信息。
- 系统主动推送。

### 代码演示

::: demo
<summary>
  #### 基础用法
  基本用法，默认在 4.5秒后关闭。通过`$notice`调用不同的type方法，可以有不同的主题，`type`为`[info,success,warning,danger,inverse]`中之一。
</summary>

```html
<template>
  <i-button type="info" @click="openSimple('info')">
      打开Notice(info)
  </i-button>
  <i-button type="success" @click="openSimple('success')">
      打开Notice(success)
  </i-button>

  <i-button type="warning" @click="openSimple('warning')">
      打开Notice(warning)
  </i-button>

  <i-button type="danger" @click="openSimple('danger')">
      打开Notice(danger)
  </i-button>
  <i-button type="secondary" @click="openSimple('inverse')">
      打开Notice(inverse)
  </i-button>
</template>
<script>
    export default {
        methods: {
            openSimple(type) {
                if(type === 'inverse') {
                    this.$notice.open({
                        title: '这是一条信息'
                    });
                } else {
                    this.$notice[type]({
                        title: '这是一条信息'
                    });
                }
            },
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 带Icon
  通过设置showIcon为true,可以显示通知图标。
</summary>

```html
<template>
  <i-button type="info" @click="openIcon('info')">
      打开Notice(带Icon)
  </i-button>
  <i-button type="success" @click="openIcon('success')">
      打开Notice(带Icon)
  </i-button>

  <i-button type="warning" @click="openIcon('warning')">
      打开Notice(带Icon)
  </i-button>

  <i-button type="danger" @click="openIcon('danger')">
      打开Notice(带Icon)
  </i-button>
  <i-button type="secondary" @click="openIcon('inverse')">
      打开Notice(带Icon)
  </i-button>
</template>
<script>
    export default {
        methods: {
            openIcon(type) {
                if(type === 'inverse') {
                    this.$notice.open({
                        title: '这是一条信息',
                        showIcon: true
                    });
                } else {
                    this.$notice[type]({
                        title: '这是一条信息',
                        showIcon: true
                    });
                }
            }
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 通知标题和信息
  通过设置title和desc为Notice显示通知标题和内容，设置showIcon可以显示信息的图标
</summary>

```html
<template>
  <i-button type="info" @click="openMessage('info')">
      打开Notice(title和desc)
  </i-button>
  <i-button type="success" @click="openMessage('success')">
      打开Notice(title和desc)
  </i-button>

  <i-button type="warning" @click="openMessage('warning')">
      打开Notice(title和desc)
  </i-button>

  <i-button type="danger" @click="openMessage('danger')">
      打开Notice(title和desc)
  </i-button>
  <i-button type="secondary" @click="openMessage('inverse')">
      打开Notice(title和desc)
  </i-button>
  <br><br>
  <i-button type="info" @click="openIconMessage('info')">
      打开Notice(完整功能)
  </i-button>
</template>
<script>
    export default {
        methods: {
            openMessage(type) {
                let title = '提示';
                if(type === 'success') {
                    title = '成功';
                } else if(type === 'warning') {
                    title = '警告';
                } else if(type === 'danger') {
                    title = '错误';
                }
                
                if(type === 'inverse') {
                    this.$notice.open({
                        title: '信息',
                        desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述'
                    });
                } else {
                    this.$notice[type]({
                        title: title,
                        desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述',
                    });
                }
                
            },
            openIconMessage(type) {
                let title = '提示';
                if(type === 'success') {
                    title = '成功';
                } else if(type === 'warning') {
                    title = '警告';
                } else if(type === 'danger') {
                    title = '错误';
                }
                
                if(type === 'inverse') {
                    this.$notice.open({
                        title: '信息',
                        desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述',
                        showIcon:true
                    });
                } else {
                    this.$notice[type]({
                        title: title,
                        desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述',
                        showIcon:true
                    });
                }
            }
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 通知显示时长
  通过设置duration设置通知的显示时长，默认为`4500ms`，若`duration=0`则不自动关闭。
</summary>

```html
<template>
  <i-button type="info" @click="openDuration('info',2000)">
      打开Notice(2000ms后关闭)
  </i-button>
  <i-button type="success" @click="openDuration('success')">
      打开Notice(默认时长)
  </i-button>

  <i-button type="warning" @click="openDuration('warning',0)">
      打开Notice(不自动关闭)
  </i-button>
</template>
<script>
    export default {
        methods: {
            openDuration(type,duration) {
                let title = '提示';
                if(type === 'success') {
                    title = '成功';
                } else if(type === 'warning') {
                    title = '警告';
                } else if(type === 'danger') {
                    title = '错误';
                }
                
                if(type === 'inverse') {
                    this.$notice.open({
                        title: '信息',
                        desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述',
                        showIcon:true,
                        duration:duration
                    });
                } else {
                    this.$notice[type]({
                        title: title,
                        desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述',
                        showIcon:true,
                        duration:duration
                    });
                }
            }
        }
    }
</script>
```
:::

::: demo
<summary>
  #### Light主题
  通过设置theme=light，可以将Notice设置背景子为白色，并带有box-shadow值
</summary>

```html
<template>
  <i-button type="info" @click="openLightMessage('info')">
      打开Notice(title和desc)
  </i-button>
  <i-button type="success" @click="openLightMessage('success')">
      打开Notice(title和desc)
  </i-button>

  <i-button type="warning" @click="openLightMessage('warning')">
      打开Notice(title和desc)
  </i-button>

  <i-button type="danger" @click="openLightMessage('danger')">
      打开Notice(title和desc)
  </i-button>
  <i-button type="secondary" @click="openLightMessage('inverse')">
      打开Notice(title和desc)
  </i-button>
  <br><br>
  <i-button type="info" @click="openLightIconMessage('info')">
      打开Notice(完整功能)
  </i-button>
</template>
<script>
    export default {
        methods: {
            openLightMessage(type) {
                let title = '提示';
                if(type === 'success') {
                    title = '成功';
                } else if(type === 'warning') {
                    title = '警告';
                } else if(type === 'danger') {
                    title = '错误';
                }
                
                if(type === 'inverse') {
                    this.$notice.open({
                        title: '信息',
                        desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述',
                        theme:'light'
                    });
                } else {
                    this.$notice[type]({
                        title: title,
                        desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述',
                        theme:'light'
                    });
                }
                
            },
            openLightIconMessage(type) {
                let title = '提示';
                if(type === 'success') {
                    title = '成功';
                } else if(type === 'warning') {
                    title = '警告';
                } else if(type === 'danger') {
                    title = '错误';
                }
                
                if(type === 'inverse') {
                    this.$notice.open({
                        title: '信息',
                        desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述',
                        showIcon:true,
                        theme:'light'
                    });
                } else {
                    this.$notice[type]({
                        title: title,
                        desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述',
                        showIcon:true,
                        theme:'light'
                    });
                }
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
