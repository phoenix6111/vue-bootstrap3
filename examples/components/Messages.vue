<template lang="html">
    <div class="card m-t-30">
        <div class="card-header">
            <h2>Message 通知提醒
                <small>在界面右上角显示可关闭的全局通知</small>
            </h2>
        </div>

        <div class="card-body card-padding">

            <div class="block">
                <i-button @click="open">
                    可自动关闭
                </i-button>
                <i-button @click="open2">
                    不会自动关闭
                </i-button>
            </div>

            <div class="block">
                <i-button
                        @click="open3">
                    成功
                </i-button>
                <i-button
                        @click="open4">
                    警告
                </i-button>
                <i-button
                        @click="open5">
                    消息
                </i-button>
                <i-button
                        @click="open6">
                    错误
                </i-button>
            </div>

            <div class="block">
                <i-button
                        @click="open7">
                    偏移的消息
                </i-button>
            </div>

        </div>
    </div>
</template>
<script>

    export default {
        methods: {
            open() {
                const h = this.$createElement;

                this.$msg({
                    title: '标题名称',
                    message: h('p', { style: 'color: red'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
                });
            },

            open2() {
                this.$msg({
                    title: '提示',
                    message: '这是一条不会自动关闭的消息',
                    duration: 12000
                });
            },
            open3() {
                this.$msg.success({
                    title: '成功',
                    message: '这是一条成功的提示消息',
                    type: 'success'
                });
            },

            open4() {
                this.$msg.warning({
                    title: '警告',
                    message: '这是一条警告的提示消息',
                    type: 'warning'
                });
            },

            open5() {
                this.$msg.info({
                    title: '消息',
                    message: '这是一条消息的提示消息'
                });
            },

            open6() {
                this.$msg.danger({
                    title: '错误',
                    message: '这是一条错误的提示消息'
                });
            },
            open7() {
                this.$msg.success({
                    title: '成功',
                    message: '这是一条成功的提示消息',
                    offset: 100
                });
            }
        }
    }
</script>

<style>
    .block {
        padding: 30px 24px;
        overflow: hidden;
        border-bottom: 1px solid #eff2f6;
    }

    .demonstration {
        font-size: 14px;
        color: #8492a6;
        line-height: 44px;
    }
</style>