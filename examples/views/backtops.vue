<template lang="html">
    <div class="backtops-demo">
        <div class="block-header">
            <h2>BackTop 返回顶部
                <small>当页面内容冗长，需要快捷返回顶部时使用，一般放置在页面右下角位置。</small>
            </h2>
        </div>

        <div>


            <div class="page-block">
                <span class="demonstration">基础用法</span>

                <Back-top></Back-top>
            </div>


            <div class="page-block">
                <span class="demonstration">
                    自定义样式 <br>
                    <small>自定义了位置在页面底部 100px,滚动至距顶端 100px 时显示。</small>
                </span>

                <Back-top :height="100" :bottom="200">
                    <div class="top">返回顶端</div>
                </Back-top>
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

    .top{
        padding: 10px;
        background: rgba(0, 153, 229, .7);
        color: #fff;
        text-align: center;
        border-radius: 2px;
    }
</style>