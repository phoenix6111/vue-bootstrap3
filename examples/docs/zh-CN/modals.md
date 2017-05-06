<script>
    export default {
        data () {
            return {
                modal1: false,
                modal2: false,
                modal3: false,
                modal4: false,
                modal5: false,
                modal6: false,
                modal7: false,
                modal8: false,
                modal9: false,
                modal_blue:false
            }
        },
        methods: {
            ok () {
//                this.$Message.info('点击了确定');
            },
            cancel () {
//                this.$Message.info('点击了取消');
            },
            del() {

            }
        }
    }
</script>

## Modal 对话框

模态对话框。

### 何时使用
模态对话框，在浮层中显示，引导用户进行相关操作。
Modal提供了两种用法，普通组件使用和封装好的简洁实例调用。

### 代码演示

::: demo
<summary>
  #### 基础用法
  最简单的使用方法，通过控制属性visible来显示 / 隐藏对话框。
  可以使用 v-model 实现双向绑定。
  默认按键盘ESC键也可以关闭。
</summary>

```html
<template>
  <i-button type="primary" @click="modal1 = true">显示对话框</i-button>
  <Modal
          v-model="modal1"
          title="普通的Modal对话框标题"
          @on-ok="ok"
          @on-cancel="cancel">
      <p>对话框内容</p>
      <p>对话框内容</p>
      <p>对话框内容</p>
  </Modal>
</template>
```
:::

::: demo
<summary>
  #### 无遮罩层
  无backdrop遮罩层的对话框。
</summary>

```html
<template>
  <i-button type="primary" @click="modal6 = true">无backdrop遮罩层的对话框</i-button>
  <Modal
          v-model="modal6"
          title="无backdrop遮罩层的对话框"
          :backdrop="false"
          @on-ok="ok"
          @on-cancel="cancel">
      <p>对话框内容</p>
      <p>对话框内容</p>
      <p>对话框内容</p>
  </Modal>
</template>
```
:::

::: demo
<summary>
  #### 遮罩层可滚动
  遮罩层可滚动的对话框。
</summary>

```html
<template>
  <i-button type="primary" @click="modal7 = true">遮罩层可滚动的对话框</i-button>
  <Modal
          v-model="modal7"
          title="遮罩层可滚动的对话框"
          :lock-scroll="false"
          @on-ok="ok"
          @on-cancel="cancel">
      <p>对话框内容</p>
      <p>对话框内容</p>
      <p>对话框内容</p>
  </Modal>
</template>
```
:::

::: demo
<summary>
  #### 不可关闭
  不显示关闭按钮，且ESC键不可关闭的对话框。
</summary>

```html
<template>
  <i-button type="primary" @click="modal8 = true">不显示关闭按钮，且ESC键不可关闭的对话框</i-button>
  <Modal
          v-model="modal8"
          title="不显示关闭按钮，且ESC键不可关闭的对话框"
          :show-close="false"
          :close-on-click-esc="false"
          @on-ok="ok"
          @on-cancel="cancel">
      <p>对话框内容</p>
      <p>对话框内容</p>
      <p>对话框内容</p>
  </Modal>
</template>
```
:::

::: demo
<summary>
  #### 无动画
  无Animation的对话框。
</summary>

```html
<template>
  <i-button type="primary" @click="modal9 = true">无Animation的对话框</i-button>
  <Modal
          v-model="modal9"
          title="无Animation的对话框"
          :animation="false"
          @on-ok="ok"
          @on-cancel="cancel">
      <p>对话框内容</p>
      <p>对话框内容</p>
      <p>对话框内容</p>
  </Modal>
</template>
```
:::

::: demo
<summary>
  #### 自定义背景颜色
  通过设置data-color可以自定义背景颜色。
</summary>

```html
<template>
  <i-button type="primary" @click="modal_blue=true">BLUE背景的Modal</i-button>
  <Modal
          v-model="modal_blue"
          title="BLUE的Modal对话框标题"
          data-modal-color="blue"
          @on-ok="ok"
          @on-cancel="cancel">
      <p>对话框内容</p>
      <p>对话框内容</p>
      <p>对话框内容</p>
  </Modal>
</template>
```
:::

::: demo
<summary>
  #### 自定义样式
  Modal 组件提供了灵活的自定义样式 API 和 Slot，可以自由控制整个 Modal 的各个组成部分，比如页头、页脚、关闭按钮。。
</summary>

```html
<template>
<div class="row">
    <div class="col-sm-3">
        <i-button @click="modal2 = true">自定义页头和页脚</i-button>
          <Modal v-model="modal2" width="360">
              <p slot="header" style="color:#f60;text-align:center">
                  <Icon type="info-outline"></Icon>
                  <span>删除确认</span>
              </p>
              <div style="text-align:center">
                  <p>此任务删除后，下游 10 个任务将无法执行。</p>
                  <p>是否继续删除？</p>
              </div>
          </Modal>
    </div>

      <div class="col-sm-3">
          <i-button @click="modal3 = true">不带标题栏</i-button>
            <Modal v-model="modal3">
                <p>对话框内容</p>
                <p>对话框内容</p>
                <p>对话框内容</p>
            </Modal>
      </div>
  
      <div class="col-sm-3">
      <i-button @click="modal4 = true">国际化</i-button>
        <Modal
                v-model="modal4"
                title="Modal Title"
                ok-text="OK"
                cancel-text="Cancel">
            <p>Something...</p>
            <p>Something...</p>
            <p>Something...</p>
        </Modal>
    </div>
    <div class="col-sm-3">
      <i-button @click="modal5 = true">设置宽度</i-button>
        <Modal
                v-model="modal5"
                title="自定义宽度"
                width="300">
            <p>自定义宽度，单位 px，默认 520px。</p>
            <p>对话框的宽度是响应式的，当屏幕尺寸小于 768px 时，宽度会变为自动<code>auto</code>。</p>
        </Modal>
    </div>
 </div>
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
