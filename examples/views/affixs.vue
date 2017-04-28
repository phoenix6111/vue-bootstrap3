<template lang="html">
    <div class="affixes-demo">
        <div class="block-header">
            <h2>Affix 图钉
                <small>将元素钉在固定位置，常用于顶部菜单或者侧边菜单</small>
            </h2>
        </div>

        <div>


            <div class="page-block">
                <span class="demonstration">基本</span>

                <affix>
                    <i-button class="btn btn-primary">固定在顶部</i-button>
                </affix>
            </div>

            <div class="page-block">
                <span class="demonstration">设置距离顶部达到指定距离时触发</span>

                <affix :offset="200">
                    <i-button class="btn btn-primary">固定距离顶部200px的位置</i-button>
                </affix>
            </div>


            <div class="page-block">
                <span class="demonstration">设置边界父容器</span>

                <div id="parent" style="height: 120px; text-align: center">
                    <affix :offset="0" boundary="#parent">
                        <i-button class="btn btn-primary">在指定容器内浮动</i-button>
                    </affix>
                </div>
            </div>

            <div class="page-block">
                <span class="demonstration">回调函数</span>

                <div style="text-align: right">
                    <affix :on-affix="onAffixed">
                        <i-button class="btn btn-primary">触发回调</i-button>
                    </affix>
                </div>
            </div>

        </div>
    </div>
</template>
<script>

    export default {
        methods: {
            onAffixed(status) {
                this.$notice.open({
                    type: 'success',
                    title: `回调状态${status}`,
                });
            },
        },
    }
</script>

<style>
    .page-block {
        padding: 30px 24px;
        border-bottom: 1px solid #eff2f6;
    }

    .demonstration {
        font-size: 14px;
        color: #8492a6;
        line-height: 44px;
    }
</style>