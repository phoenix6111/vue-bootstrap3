<script>
    export default {
        data () {
            return {
                visible: false
            }
        },
        methods: {
            ok () {
            },
            cancel () {
            },
            close () {
                this.visible = false;
            }
        }

    }
</script>

<style scoped>
    .top,.bottom{
        text-align: center;
    }
    .center{
        width: 300px;
        margin: 10px auto;
        overflow: hidden;
    }
    .center-left{
        float: left;
    }
    .center-right{
        float: right;
    }
</style>
## Pagination 分页

Popover 与 Tooltip 类似，具有很多相同配置，不同点是 Popover 以卡片的形式承载了更多的内容，比如链接、表格、按钮等。
Popover 还 confirm 确认框，与 Modal 不同的是，它会出现在就近元素，相对轻量。

### 代码演示

::: demo
<summary>
  #### 基础用法
  支持三种触发方式：鼠标悬停、点击、聚焦。默认是点击。。
</summary>

```html
<template>
  <Popover trigger="hover" title="提示标题" content="提示内容">
      <i-button>hover 激活</i-button>
  </Popover>
  <Popover title="提示标题" content="提示内容">
      <i-button>click 激活</i-button>
  </Popover>
  <Popover trigger="focus" title="提示标题" content="提示内容">
      <i-button>focus 激活</i-button>
  </Popover>
  <Popover trigger="focus" title="提示标题" content="提示内容">
      <bs-input placeholder="输入框的 focus"></bs-input>
  </Popover>
</template>
```
:::

::: demo
<summary>
  #### 位置
  组件提供了12个不同的方向显示Poptip，具体配置可查看API。
</summary>

```html
<template>
   <div>
        <div class="top">
            <Popover title="提示标题" content="提示内容" placement="top-start">
                <i-button>上左</i-button>
            </Popover>
            <Popover title="提示标题" content="提示内容" placement="top">
                <i-button>上边</i-button>
            </Popover>
            <Popover title="提示标题" content="提示内容" placement="top-end">
                <i-button>上右</i-button>
            </Popover>
        </div>
        <div class="center">
            <div class="center-left">
                <Popover title="提示标题" content="提示内容" placement="left-start">
                    <i-button>左上</i-button>
                </Popover><br><br>
                <Popover title="提示标题" content="提示内容" placement="left">
                    <i-button>左边</i-button>
                </Popover><br><br>
                <Popover title="提示标题" content="提示内容" placement="left-end">
                    <i-button>左下</i-button>
                </Popover>
            </div>
            <div class="center-right">
                <Popover title="提示标题" content="提示内容" placement="right-start">
                    <i-button>右上</i-button>
                </Popover><br><br>
                <Popover title="提示标题" content="提示内容" placement="right">
                    <i-button>右边</i-button>
                </Popover><br><br>
                <Popover title="提示标题" content="提示内容" placement="right-end">
                    <i-button>右下</i-button>
                </Popover>
            </div>
        </div>
        <div class="bottom">
            <Popover title="提示标题" content="提示内容" placement="bottom-start">
                <i-button>下左</i-button>
            </Popover>
            <Popover title="提示标题" content="提示内容" placement="bottom">
                <i-button>下边</i-button>
            </Popover>
            <Popover title="提示标题" content="提示内容" placement="bottom-end">
                <i-button>下右</i-button>
            </Popover>
        </div>
   </div>
</template>
<style scoped>
    .top,.bottom{
        text-align: center;
    }
    .center{
        width: 300px;
        margin: 10px auto;
        overflow: hidden;
    }
    .center-left{
        float: left;
    }
    .center-right{
        float: right;
    }
</style>
```
:::

::: demo
<summary>
  #### 从浮层内关闭
  通过属性v-model来控制提示框的显示和隐藏。
</summary>

```html
<template>
  <Popover v-model="visible">
      <a>click 激活</a>
      <div slot="title"><i>自定义标题</i></div>
      <div slot="content">
          <a @click="close">关闭提示框</a>
      </div>
  </Popover>
</template>
```
:::

::: demo
<summary>
  #### 嵌套复杂内容
  通过自定义 slot 来实现复杂的内容。
</summary>

```html
<template>
  <Popover placement="right" width="400">
      <i-button type="primary">click 激活</i-button>
      <div class="api" slot="content">
          <table>
              <thead>
              <tr>
                  <th>版本号</th>
                  <th>更新时间</th>
                  <th>说明</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                  <td>0.9.5</td>
                  <td>2016-10-26</td>
                  <td>新增信息提示组件 <code>Tooltip</code>和<code>Popover</code></td>
              </tr>
              <tr>
                  <td>0.9.4</td>
                  <td>2016-10-25</td>
                  <td>新增对话框组件 <code>Modal</code></td>
              </tr>
              <tr>
                  <td>0.9.2</td>
                  <td>2016-09-28</td>
                  <td>新增选择器组件 <code>Select</code></td>
              </tr>
              </tbody>
          </table>
      </div>
  </Popover>
</template>
```
:::

::: demo
<summary>
  #### 确认框
  通过设置属性confirm开启确认框模式。确认框只会以 click 的形式激活，并且只会显示 title 的内容，忽略 content。
</summary>

```html
<template>
  <Popover
          confirm
          title="您确认删除这条内容吗？"
          @on-ok="ok"
          @on-cancel="cancel">
      <i-button>删除</i-button>
  </Popover>
  <Popover
          confirm
          title="Are you sure delete this task?"
          @on-ok="ok"
          @on-cancel="cancel"
          ok-text="yes"
          cancel-text="no">
      <i-button>国际化</i-button>
  </Popover>
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
