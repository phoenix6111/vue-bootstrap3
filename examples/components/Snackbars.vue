<template lang="html">
    <div class="card m-t-30">
        <div class="card-header">
            <h2>Snackbar 通知提醒
                <small>在界面顶部显示可关闭的全局通知</small>
            </h2>
        </div>

        <div class="card-body card-padding">

            <div class="block">
                <i-button @click="open">
                    可自动关闭(默认颜色)
                </i-button>

                <i-button @click="open1">
                    自动关闭(SUCCESS)
                </i-button>

                <i-button @click="open2">
                    自动关闭(廷迟10s关闭)
                </i-button>

                <i-button @click="open7">
                    不自动关闭(定义时长为0)
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

        </div>
    </div>
</template>
<script>

    export default {
        methods: {
            open() {
                this.$snackbar.open({
                    title:'这是一条信息',
                    showIcon:true,
                    duration:50000
                });
            },

            open1() {
                this.$snackbar.success({
                    title:'这是一条信息'
                });
            },

            open2() {
                this.$snackbar.success({
                    title:'这是一条信息',
                    duration:30000
                });
            },
            open3() {
                this.$snackbar.success({
                    title: '这是通知标题！',
                    showIcon:true
                });
            },

            open4() {
                this.$snackbar.warning({
                    title: '这是通知标题！',
                    showIcon:true
                });
            },

            open5() {
                this.$snackbar.info({
                    title: '这是通知标题！',
                    showIcon:true
                });
            },

            open6() {
                this.$snackbar.danger({
                    title: '这是通知标题！',
                    showIcon:true,
                    duration:50000
                });
            },

            open7() {
                this.$snackbar.success({
                    title:'这是一条信息',
                    showIcon:true,
                    duration:0
                });
            },

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