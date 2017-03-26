<template lang="html">
    <div class="card m-t-30">
        <div class="card-header">
            <h2>Progress 进度条
                <small>用于展示操作进度，告知用户当前状态和预期。</small>
            </h2>
        </div>

        <div class="card-body card-padding">

            <Progress :percent="25" :text-inside="true" :stroke-width="18"></Progress>
            <Progress :percent="45" status="active"></Progress>
            <Progress :percent="65" status="wrong"></Progress>
            <Progress :percent="100"></Progress>
            <Progress :percent="25" hide-info></Progress>

            <hr>

            <Progress :percent="percent"></Progress>
            <ButtonGroup>
                <i-button icon="plus" @click="add"></i-button>
                <i-button icon="minus" @click="minus"></i-button>
            </ButtonGroup>

            <hr>

            <Progress :percent="25" :stroke-width="15"></Progress>
            <Progress :percent="100" :stroke-width="15">
                <Icon type="check-circle"></Icon>
                <span>成功</span>
            </Progress>

            <hr>
            <Progress type="circle" :percent="30" class="m-r-30"></Progress>
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