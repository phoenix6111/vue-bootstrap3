<template lang="html">
    <div class="notices-demo">
        <div class="block-header">
            <h2>Message 通知提醒
                <small>在界面右上角显示可关闭的全局通知</small>
            </h2>
        </div>

        <div>

            <div class="block">
                <i-button @click="open">
                    可自动关闭(默认颜色)
                </i-button>

                <i-button @click="open1">
                    可自动关闭
                </i-button>

                <i-button @click="open2">
                    自动关闭(带ICON)
                </i-button>

                <i-button @click="open8">
                    自动关闭(带标题和描述)
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
                this.$notice.open({
                    title:'这是一条信息'
                });
            },

            open1() {
                this.$notice.success({
                    title:'这是一条信息'
                });
            },

            open2() {
                this.$notice.success({
                    title:'这是一条信息',
                    showIcon:true
                });
            },
            open3() {
                this.$notice.success({
                    title: '成功',
                    desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述',
                    showIcon:true
                });
            },

            open4() {
                this.$notice.warning({
                    title: '这是通知标题！',
                    desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述',
                    showIcon:true
                });
            },

            open5() {
                this.$notice.info({
                    title: '这是通知标题！',
                    desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述',
                    showIcon:true
                });
            },

            open6() {
                this.$notice.danger({
                    title: '这是通知标题！',
                    desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述',
                    showIcon:true,
                    duration:10000
                });
            },
            open7() {
                this.$notice.success({
                    title: '这是通知标题！',
                    desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述',
                    showIcon:true
                });
            },
            open8() {
                this.$notice.success({
                    title: '这是通知标题！',
                    desc: '这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述',
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