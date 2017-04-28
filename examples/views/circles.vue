<template lang="html">
    <div class="circles-demo">
        <div class="block-header">
            <h2>Circle 进度环
                <small>用于显示某项任务进度的百分比，统计某些指标的占比。</small>
            </h2>
        </div>

        <div>
            <h4>基础用法</h4>
            <small class="c-gray">圆形进度环有一系列的参数可配置，具体可以查看下面的API文档。</small>
            <br>
            <div class="row m-t-20">
                <div class="col-sm-4 text-center">
                    <i-circle :percent="80">
                        <span class="demo-i-circle-inner" style="font-size:24px">80%</span>
                    </i-circle>
                </div>
                <div class="col-sm-4 text-center">
                    <i-circle :percent="100" stroke-color="#5cb85c">
                        <Icon type="check" size="40" style="color:#5cb85c"></Icon>
                    </i-circle>
                </div>
                <div class="col-sm-4 text-center">
                    <i-circle :percent="35" stroke-color="#ff5500">
                <span class="demo-i-circle-inner">
                    <Icon type="close" size="40" style="color:#ff5500"></Icon>
                </span>
                    </i-circle>
                </div>
            </div>

            <br><br>
            <hr>
            <br><br>

            <h4>配合外部组件使用</h4>
            <small class="c-gray">通过数据的联动和逻辑控制，实现交互效果</small>
            <div class="row">
                <div class="col-sm-12 text-center">
                    <i-circle :percent="percent" :stroke-color="color">
                        <Icon v-if="percent == 100" type="check" size="60"
                              style="color:#5cb85c"></Icon>
                        <span v-else style="font-size:24px">{{ percent }}%</span>
                    </i-circle>
                    <Button-group>
                        <i-button icon="plus" @click="add"></i-button>
                        <i-button icon="minus" @click="minus"></i-button>
                    </Button-group>
                </div>
            </div>

            <br><br>
            <hr>
            <br><br>

            <div class="row">
                <div class="col-sm-12 text-center">
                    <i-circle
                            :size="250"
                            :trail-width="4"
                            :stroke-width="5"
                            :percent="75"
                            stroke-linecap="square"
                            stroke-color="#43a3fb">
                        <div class="demo-circle-custom">
                            <h1>42,001,776</h1>
                            <p>消费人群规模</p>
                            <span>
                                总占人数
                                <i>75%</i>
                            </span>
                        </div>
                    </i-circle>
                </div>
            </div>

            <br><br><br>
            <hr>
            <br><br><br>

            <div class="col-sm-4 text-center">

                <i-circle2 :diameter="200"
                           :completed-steps="completedSteps"
                           :total-steps="totalSteps"
                            start-color="#2db7f5"
                            stop-color="#2279f5">
                    <p>Total steps: {{ totalSteps }}</p>
                    <p>Completed steps: {{ completedSteps }}</p>
                </i-circle2>
                <Button-group>
                    <i-button icon="plus" @click="add2" type="primary"></i-button>
                    <i-button icon="minus" @click="minus2" type="primary"></i-button>
                </Button-group>

            </div>


        </div>
    </div>
</template>
<script>

    export default {
        data () {
            return {
                percent: 0,

                completedSteps: 0,
                totalSteps: 10
            }
        },
        computed: {
            color () {
                let color = '#2db7f5';
                if (this.percent == 100) {
                    color = '#5cb85c';
                }
                return color;
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
            },
            add2 () {
                if(this.completedSteps >= this.totalSteps) {
                    return;
                }

                this.completedSteps += 1;
            },
            minus2() {
                if(this.completedSteps <= 0) {
                    return;
                }

                this.completedSteps -= 1;
            }
        }
    }
</script>

<style>
    .demo-circle-custom h5 {
        color: #3f414d;
        font-size: 28px;
        font-weight: 400
    }

    .demo-circle-custom h1 {
        color: #3f414d;
        font-size: 28px;
        font-weight: normal;
    }

    .demo-circle-custom p {
        color: #657180;
        font-size: 14px;
        margin: 10px 0 15px;
    }

    .demo-circle-custom span {
        display: block;
        padding-top: 15px;
        color: #657180;
        font-size: 14px;
    }

    .demo-circle-custom span:before {
        content: '';
        display: block;
        width: 50px;
        height: 1px;
        margin: 0 auto;
        background: #e0e3e6;
        position: relative;
        top: -15px;
    }

    .demo-circle-custom span i{
        font-style: normal;
        color: #3f414d;
    }
</style>