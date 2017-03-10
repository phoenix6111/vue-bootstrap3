<template lang="html">
    <div class="card m-t-30">
        <div class="card-header">
            <h2>Rate 评分
                <small>对事物进行快速的评级操作，或对评价进行展示。</small>
            </h2>
        </div>

        <div class="card-body card-padding">

            <Rate :value.sync="value"></Rate>

            <hr>
            <Rate allow-half :value.sync="valueHalf" @on-change="onchange"></Rate>

            <hr>
            <div class="row">
                <div class="col-sm-6">
                    <Rate show-text :value.sync="valueText"></Rate>
                </div>
                <div class="col-sm-6">
                    <Rate show-text :value.sync="valueCustomText">
                        <span style="color: #f5a623">{{ valueCustomText }}</span>
                    </Rate>
                </div>
            </div>

            <hr>
            <Rate disabled :value.sync="valueDisabled"></Rate>
        </div>
    </div>
</template>
<script>
    export default {
        name:'Rates',
        data () {
            return {
                value: 0,
                valueHalf: 2.5,
                valueText: 3,
                valueCustomText: 3.8,
                valueDisabled: 2
            }
        },
        methods: {
            onchange(value) {
                console.log("value "+value);
            }
        }
    }
</script>