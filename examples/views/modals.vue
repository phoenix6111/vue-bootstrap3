<template lang="html">
    <div class="modals-demo">
        <div class="block-header">
            <h2>Modal 对话框
                <small>模态对话框，在浮层中显示，引导用户进行相关操作。
                    Modal提供了两种用法，普通组件使用和封装好的简洁实例调用。</small>
            </h2>
        </div>

        <div>

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

            <br>
            <hr>
            <br>

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

            <br>
            <hr>
            <br>

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

            <br>
            <hr>
            <br>

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

            <br>
            <hr>
            <br>

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

            <br>
            <hr>
            <br>

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

            <br>
            <hr>
            <br>

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
            <i-button @click="modal3 = true">不带标题栏</i-button>
            <Modal v-model="modal3">
                <p>对话框内容</p>
                <p>对话框内容</p>
                <p>对话框内容</p>
            </Modal>
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

