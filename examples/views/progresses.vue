<template lang="html">
    <div class="progresses-demo">
        <div class="block-header">
            <h2>Progress 进度条
                <small>用于展示操作进度，告知用户当前状态和预期。</small>
            </h2>
        </div>

        <div>

            <h4>基本用法</h4>
            <small class="c-gray">处在不同状态下的进度条，当 percent 为 100 时，自动将状态置为 success。可设置不自动置状态</small>
            <Progress :percent="0" class="m-t-10"></Progress>
            <br>
            <Progress :percent="70"></Progress>
            <br>
            <Progress :percent="100" status="success"></Progress>
            <br>
            <Progress :percent="50" status="danger"></Progress>

            <br>
            <Progress :percent="25" :show-text="false"></Progress>

            <br><br>
            <hr>
            <br><br>

            <h4>Striped 和Active状态</h4>
            <small class="c-gray">不同样式，不同状态</small>
            <br>
            <Progress :percent="45" active></Progress>
            <br>
            <Progress :percent="45" striped></Progress>
            <br>
            <Progress :percent="45" striped active></Progress>

            <br><br>
            <hr>
            <br><br>

            <h4>自定义更多样式</h4>
            <small class="c-gray">通过自定义slot和属性stroke-width改变进度条效果。</small>
            <br>
            <Progress :percent="25" class="m-t-10"></Progress>
            <br>
            <Progress :percent="100">
                <Icon type="check-circle" style="display: inline-block"></Icon>
                <span>成功</span>
            </Progress>

            <br><br>
            <hr>
            <br><br>

            <h4>配合外部组件使用</h4>
            <small class="c-gray">通过数据的联动和逻辑控制，实现动态效果。</small>
            <Progress :text-inside="true" :stroke-width="18" :percent="percent" class="m-t-10"></Progress>
            <ButtonGroup class="m-t-10 m-b-20">
                <i-button icon="plus" @click="add"></i-button>
                <i-button icon="minus" @click="minus"></i-button>
            </ButtonGroup>
            <br>

            <br><br>
            <hr>
            <br><br>

            <h4>线形进度条 — 百分比内显</h4>
            <small class="c-gray">百分比不占用额外控件，适用于文件上传等场景。</small>
            <Progress :text-inside="true" :stroke-width="18" :percent="70" active class="m-t-10"></Progress>
            <br>
            <Progress :text-inside="true" :stroke-width="18" :percent="100" status="success"></Progress>
            <br>
            <Progress :text-inside="true" :stroke-width="18" :percent="50" status="danger"></Progress>


        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                percent: 0
            }
        },
        methods: {
            add () {
                if (this.percent >= 100) {
                    return false;
                }
                this.percent += 10;
            },
            minus () {
                if (this.percent <= 0) {
                    return false;
                }
                this.percent -= 10;
            }
        }
    }
</script>