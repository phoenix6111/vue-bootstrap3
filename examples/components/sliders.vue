<template lang="html">
    <div class="card m-t-30">
        <div class="card-header">
            <h2>Slider 滑块
                <small>通过拖动滑块在一个固定区间内进行选择</small>
            </h2>
        </div>

        <div class="card-body card-padding">

            <div class="block">
                <span class="demonstration">默认</span>
                <slider v-model="value1"></slider>
            </div>
            <div class="block">
                <span class="demonstration">自定义初始值</span>
                <slider v-model="value2"></slider>
            </div>
            <div class="block">
                <span class="demonstration">隐藏 Tooltip</span>
                <slider v-model="value3" :show-tooltip="false"></slider>
            </div>
            <div class="block">
                <span class="demonstration">禁用</span>
                <slider v-model="value4" disabled></slider>
            </div>


            <div class="block">
                <span class="demonstration">不显示间断点</span>
                <slider
                        v-model="value5"
                        :step="10">
                </slider>
            </div>
            <div class="block">
                <span class="demonstration m-b-30">显示间断点</span>
                <slider
                        v-model="value6"
                        :step="10"
                        show-stops>
                </slider>
            </div>


            <div class="block">
                <slider
                        v-model="value8"
                        range
                        show-stops
                        :max="10"
                        :custom-class="['m-t-30']">
                </slider>
            </div>

        </div>
    </div>
</template>
<script>

    export default {
        name:'Sliders',
        data() {
            return {
                value1: 0,
                value2: 50,
                value3: 36,
                value4: 42,
                value5:0,
                value6:0,

                value8: [4, 8]
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