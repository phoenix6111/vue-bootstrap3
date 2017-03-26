<template lang="html">
    <div class="card m-t-30">
        <div class="card-header">
            <h2>Progress 进度条
                <small>用于展示操作进度，告知用户当前状态和预期。</small>
            </h2>
        </div>

        <div class="card-body card-padding">

            <Progress :percent="0"></Progress>
            <br>
            <Progress :percent="70" :stroke-width="18">
            </Progress>
            <br>
            <Progress :percent="100" status="success"></Progress>
            <br>
            <Progress :percent="50" status="error" :stroke-width="15"></Progress>

            <Progress :percent="100" :stroke-width="10">
                <Icon type="check-circle"></Icon>
                <span>成功</span>
            </Progress>

            <hr>

            <Progress :text-inside="true" :stroke-width="18" :percent="percent"></Progress>
            <ButtonGroup class="m-t-10 m-b-20">
                <i-button icon="plus" @click="add"></i-button>
                <i-button icon="minus" @click="minus"></i-button>
            </ButtonGroup>
            <br>
            <Progress :text-inside="true" :stroke-width="18" :percent="70" active></Progress>
            <br>
            <Progress :text-inside="true" :stroke-width="18" :percent="100" status="success"></Progress>
            <br>
            <Progress :text-inside="true" :stroke-width="18" :percent="50" status="error"></Progress>



            <hr>

            <Progress type="circle" :percent="percent" class="m-r-30"></Progress>
            <ButtonGroup>
                <i-button icon="plus" @click="add"></i-button>
                <i-button icon="minus" @click="minus"></i-button>
            </ButtonGroup>
            <Progress type="circle" :percent="25" class="m-r-30"></Progress>
            <Progress type="circle" :percent="100" status="success" class="m-r-30">
            </Progress>
            <Progress type="circle" :percent="50" status="error"></Progress>


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