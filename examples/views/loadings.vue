<template lang="html">
    <div class="loadings-demo">
        <div class="block-header">
            <h2>Loading 加载
                <small>加载数据时显示动效。</small>
            </h2>
        </div>

        <div>

            <div class="block">
                <h4>整页加载</h4>
                <i-button
                        type="primary"
                        @click="openFullScreen"
                        v-loading.fullscreen.lock="fullscreenLoading">
                    显示整页加载，3 秒后消失
                </i-button>
            </div>

            <div class="block">
                <h4>LoadingBar</h4>
                <IButton @click="start">Start</IButton>
                <IButton @click="finish">Finish</IButton>
                <IButton @click="error">Error</IButton>
            </div>

        </div>
    </div>
</template>
<script>

    export default {
        data() {
            return {
                fullscreenLoading: false
            }
        },
        methods: {
            openFullScreen() {
                this.fullscreenLoading = true;
                setTimeout(() => {
                    this.fullscreenLoading = false;
                }, 3000);
            },
            start () {
                this.$loadingBar.start();
            },
            finish () {
                this.$loadingBar.finish();
            },
            error () {
                this.$loadingBar.error();
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