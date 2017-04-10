<template lang="html">
    <div class="card m-t-30">
        <div class="card-header">
            <h2>Input 输入框
                <small>基本表单组件，支持 input 和 textarea，并在原生控件基础上进行了功能扩展，可以组合使用。</small>
            </h2>
        </div>

        <div class="card-body card-padding">

            <div class="block">
                <h5>
                    基础用法
                </h5>
                <bs-input v-model="value" placeholder="请输入..." style="width: 300px"></bs-input>

            </div>

            <div class="block">
                <h5>
                    尺寸
                </h5>
                <bs-input v-model="value1" size="lg" placeholder="large size"></bs-input>
                <br>
                <bs-input v-model="value2" placeholder="default size"></bs-input>
                <br>
                <bs-input v-model="value3" size="sm" placeholder="small size"></bs-input>
            </div>

            <div class="block">
                <h5>
                    带Icon的输入框
                </h5>
                <bs-input v-model="value4" icon="time" placeholder="请输入..." style="width: 200px"></bs-input>
            </div>

            <div class="block">
                <h5>
                    文本域
                </h5>
                <bs-input v-model="value5" type="textarea" placeholder="请输入..."></bs-input>
                <bs-input v-model="value6" type="textarea" :rows="4" placeholder="请输入..."></bs-input>
            </div>

            <div class="block">
                <h5>
                    适应文本高度的文本域
                </h5>
                <bs-input v-model="value7" type="textarea" :autosize="true" placeholder="请输入..."></bs-input>
                <bs-input v-model="value8" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></bs-input>
            </div>

            <div class="block">
                <h5>禁用状态</h5>
                <bs-input v-model="value9" disabled placeholder="请输入..."></bs-input>
                <bs-input v-model="value10" disabled type="textarea" placeholder="请输入..."></bs-input>
            </div>

            <div class="m-t-30 p-l-20">
                <h5>复合型输入框</h5>

                <bs-input v-model="value11" size="sm" placeholder="small size">
                    <Icon type="upload" slot="prepend"></Icon>
                </bs-input>
                <br>

                <bs-input v-model="value11" size="sm" placeholder="small size">
                    <Icon type="search" slot="append"></Icon>
                </bs-input>
                <br>

                <bs-input v-model="value11" size="sm" placeholder="small size">
                    <span slot="prepend">http://</span>
                    <span slot="append">.com</span>
                </bs-input>
                <br>

                <bs-input v-model="value11" placeholder="default size">
                    <span slot="prepend">http://</span>
                    <span slot="append">.com</span>
                </bs-input>
                <br>

                <bs-input v-model="value11" size="lg" placeholder="large size">
                    <span slot="prepend">http://</span>
                    <span slot="append">.com</span>
                </bs-input>
                <br>
            </div>



        </div>
    </div>
</template>
<script>

    export default {
        data () {
            return {
                value: '',
                value1: '',
                value2: '',
                value3: '',
                value4: '',
                value5: '',
                value6: '',
                value7: '',
                value8: '',
                value9: '',
                value10: '',
                value11: '',
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

    .block .fg-line {
        margin-bottom: 10px;
    }

    .demonstration {
        font-size: 14px;
        color: #8492a6;
        line-height: 44px;
    }
</style>