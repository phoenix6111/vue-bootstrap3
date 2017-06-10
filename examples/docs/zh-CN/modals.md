<script>
    export default {
        data () {
            return {
                modal1: false,
                modal122:false,
                modal1222:false,
                modal2:false,
                modal3:false,
                modal4:false,
                modal5:false,
                modal6:false,
                modal7:false,
                modal8:false,
                modal88:false,
                modal9:false,
                modal10:false,
                modal11:false,
                modal12:false,
                modal13:false,
                modal14:false,
                modal15:false,
                modal_full:false
            }
        },
        methods: {
            ok () {
                this.$notice.info({title:'点击了确定'});
            },
            cancel () {
                this.$notice.info({title:'点击了取消'});
            },
            handleClose(done) {
                console.log("beforeClose");
                done();
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
  可以使用 :visible.sync 实现双向绑定。
  默认按键盘ESC键也可以关闭。
</summary>

```html
<template>
  <i-button type="primary" @click="modal1 = true">普通对话框(backdrop,modal append to body)</i-button>
  <Modal
          v-model="modal1"
          title="普通的Modal对话框标题">
      <p>对话框内容</p>
      <p>对话框内容</p>
      <p>对话框内容</p>
  </Modal>
  <i-button type="primary" @click="modal122 = true">普通对话框(backdrop not append to body)</i-button>
    <Modal
            v-model="modal122"
            :backdrop-append-to-body="false"
            title="普通的Modal对话框标题">
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
    </Modal>
    
   <i-button type="primary" @click="modal1222 = true">普通对话框(backdrop,modal not append to body)</i-button>
  <Modal
          v-model="modal1222"
          :backdrop-append-to-body="false"
          :append-to-body="false"
          title="普通的Modal对话框标题">
      <p>对话框内容</p>
      <p>对话框内容</p>
      <p>对话框内容</p>
  </Modal>
</template>
<script>
export default {
    data() {
        return {
            modal1:false,
            modal122:false,
            modal1222:false
        }
    }
}
</script>
```
:::

::: demo
<summary>
  #### Size
  通过设置`size=sm,lg,full`,可设置modal的大小,默认为default
</summary>

```html
<template>
  <i-button type="primary" @click="modal2 = true">sm size 的modal</i-button>
  <Modal
          v-model="modal2"
          size="sm"
          title="Small size的Modal对话框标题">
      <p>对话框内容</p>
      <p>对话框内容</p>
      <p>对话框内容</p>
  </Modal>
  <i-button type="primary" @click="modal3 = true">default size 的modal</i-button>
    <Modal
            v-model="modal3"
            title="Default size的Modal对话框标题">
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
    </Modal>
    <i-button type="primary" @click="modal4 = true">lg size 的modal</i-button>
      <Modal
              v-model="modal4"
              size="lg"
              title="Lg size的Modal对话框标题">
          <p>对话框内容</p>
          <p>对话框内容</p>
          <p>对话框内容</p>
      </Modal>
      <i-button type="primary" @click="modal_full = true">full size 的modal</i-button>
        <Modal
                v-model="modal_full"
                size="full"
                title="全屏的Modal对话框标题">
            <p>对话框内容</p>
            <p>对话框内容</p>
            <p>对话框内容</p>
        </Modal>
</template>
<script>
export default {
    data() {
        return {
            modal2:false,
            modal3:false,
            modal4:false,
            modal_full:false
        }
    }
}
</script>
```
:::

::: demo
<summary>
  #### 无遮罩层
  设置backdrop=false可以设置modal为无backdrop遮罩层的对话框。
</summary>

```html
<template>
  <i-button type="primary" @click="modal5 = true">无backdrop遮罩层的对话框</i-button>
  <Modal
          :visible.sync="modal5"
          title="无backdrop遮罩层的对话框"
          :backdrop="false">
      <p>对话框内容</p>
      <p>对话框内容</p>
      <p>对话框内容</p>
  </Modal>
</template>
<script >
export default {
    data() {
        return {
            modal5:false
        }
    }
}
</script>
```

:::

::: demo
<summary>
  #### 遮罩层可滚动
  设置scrollable=true可将Modal设置为背景可滚动的对话框。
</summary>

```html
<template>
  <i-button type="primary" @click="modal6 = true">遮罩层可滚动的对话框</i-button>
  <Modal
          :visible.sync="modal6"
          title="遮罩层可滚动的对话框"
          :scrollable="true">
      <p>对话框内容</p>
      <p>对话框内容</p>
      <p>对话框内容</p>
  </Modal>
</template>
<script >
export default {
    data() {
        return {
            modal6:false
        }
    }
}
</script>
```
:::

::: demo
<summary>
  #### 不可关闭
  show-close=false不显示关闭按钮，close-on-press-esc="false" ESC键不可关闭,close-on-click-outside="false"点击modal不会关闭的对话框。
</summary>

```html
<template>
  <i-button type="primary" @click="modal7 = true">不显示关闭按钮，且ESC键不可关闭的对话框</i-button>
  <Modal
          :visible.sync="modal7"
          title="不显示关闭按钮，且ESC键不可关闭的对话框"
          :show-close="false"
          :close-on-press-esc="false"
          :close-on-click-outside="false"
          @on-ok="ok"
          @on-cancel="cancel">
      <p>对话框内容</p>
      <p>对话框内容</p>
      <p>对话框内容</p>
  </Modal>
</template>
<script >
export default {
    data() {
        return {
            modal7:false
        }
    }
}
</script>
```
:::

::: demo
<summary>
  #### 无动画
  设置noAnimation=true可将Modal设置为无Animation的对话框。
</summary>

```html
<template>
  <i-button type="primary" @click="modal8 = true">无Animation的对话框</i-button>
  <Modal
          :visible.sync="modal8"
          title="无Animation的对话框"
          no-animation
          @on-ok="ok"
          @on-cancel="cancel">
      <p>对话框内容</p>
      <p>对话框内容</p>
      <p>对话框内容</p>
  </Modal>
  <i-button type="primary" @click="modal88 = true">无Animation,backdrop无动画的对话框</i-button>
    <Modal
            :visible.sync="modal88"
            title="无Animation,backdrop无动画的对话框"
            no-animation
            :backdrop-fade="false"
            @on-ok="ok"
            @on-cancel="cancel">
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
    </Modal>
</template>
<script >
export default {
    data() {
        return {
            modal8:false,
            modal88:false
        }
    }
}
</script>
```
:::

::: demo
<summary>
  #### 自定义背景颜色
  通过设置data-color可以自定义背景颜色。
</summary>

```html
<template>
  <i-button type="primary" @click="modal9=true">BLUE背景的Modal</i-button>
  <Modal
          :visible.sync="modal9"
          title="BLUE的Modal对话框标题"
          modal-color="blue"
          @on-ok="ok"
          @on-cancel="cancel">
      <p>对话框内容</p>
      <p>对话框内容</p>
      <p>对话框内容</p>
  </Modal>
</template>
<script >
export default {
    data() {
        return {
            modal9:false
        }
    }
}
</script>
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
        <i-button @click="modal10 = true">自定义页头和页脚</i-button>
          <Modal :visible.sync="modal10" width="360">
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
          <i-button @click="modal11 = true">不带标题栏</i-button>
            <Modal :visible.sync="modal11">
                <p>对话框内容</p>
                <p>对话框内容</p>
                <p>对话框内容</p>
            </Modal>
      </div>
  
      <div class="col-sm-3">
      <i-button @click="modal12 = true">国际化</i-button>
        <Modal
                :visible.sync="modal12"
                title="Modal Title"
                ok-text="OK"
                cancel-text="Cancel">
            <p>Something...</p>
            <p>Something...</p>
            <p>Something...</p>
        </Modal>
    </div>
    <div class="col-sm-3">
      <i-button @click="modal13 = true">设置宽度</i-button>
        <Modal
                :visible.sync="modal13"
                title="自定义宽度"
                width="300">
            <p>自定义宽度，单位 px，默认 520px。</p>
            <p>对话框的宽度是响应式的，当屏幕尺寸小于 768px 时，宽度会变为自动<code>auto</code>。</p>
        </Modal>
    </div>
 </div>
</template>
<script >
export default {
    data() {
        return {
            modal10:false,
            modal11:false,
            modal12:false,
            modal13:false,
        }
    }
}
</script>
```
:::

::: demo
<summary>
  #### 事件
  on-cancel为取消按钮事件，on-ok为确认按钮事件，before-close为close前执行的Function,必须调用before-close中的done方法，才能关闭Modal
</summary>

```html
<template>
  <i-button type="primary" @click="modal14=true">监听按钮事件</i-button>
  <Modal
          :visible.sync="modal14"
          title="监听Modal对话按钮事件"
          @on-ok="ok"
          @on-cancel="cancel">
      <p>对话框内容</p>
      <p>对话框内容</p>
      <p>对话框内容</p>
  </Modal>
  
  <i-button type="primary" @click="modal15=true">Modal关闭前回调</i-button>
    <Modal
            :visible.sync="modal15"
            title="监听Modal对话按钮事件"
            :before-close="handleClose">
        <p>对话框内容</p>
        <p>对话框内容</p>
        <p>对话框内容</p>
    </Modal>
</template>
<script >
export default {
    data() {
        return {
            modal14:false,
            modal15:false
        }
    },
    methods: {
        ok () {
            this.$notice.info({title:'点击了确定'});
        },
        cancel () {
            this.$notice.info({title:'点击了取消'});
        },
        handleClose(done) {
            console.log("beforeClose");
            done();
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
