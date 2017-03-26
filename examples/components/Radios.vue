<template>
    <div class="card icons-demo m-t-30">
        <div class="card-header">
            <h2>Radio 单选框
                <small>在一组备选项中进行单选</small>
            </h2>
        </div>

        <div class="card-body card-padding">
            <div>
                <Radio class="radio" v-model="radio" label="1">备选项</Radio>
                <Radio class="radio" v-model="radio" label="2">备选项</Radio>
            </div>

            <br><br>
            <hr>
            <br><br>

            <div>
                <Radio disabled v-model="radio1" label="禁用">备选项</Radio>
                <Radio disabled v-model="radio1" label="选中且禁用">备选项</Radio>
            </div>

            <br><br>
            <hr>
            <br><br>

            <div>
                <radio-group v-model="radio2" @change="onChange" :vertical="true">
                    <Radio :label="3">备选项</Radio>
                    <Radio :label="6">备选项</Radio>
                    <Radio :label="9">备选项</Radio>
                </radio-group>
            </div>

            <br><br>
            <hr>
            <br><br>

            <Radio-group v-model="button1" type="button" size="sm">
                <Radio label="北京"></Radio>
                <Radio label="上海"></Radio>
                <Radio label="深圳"></Radio>
                <Radio label="杭州"></Radio>
            </Radio-group>

            <br>

            <Radio-group v-model="button1" type="button">
                <Radio label="北京"></Radio>
                <Radio label="上海"></Radio>
                <Radio label="深圳"></Radio>
                <Radio label="杭州"></Radio>
            </Radio-group>

            <br>

            <Radio-group v-model="button1" type="button" size="lg">
                <Radio label="北京"></Radio>
                <Radio label="上海"></Radio>
                <Radio label="深圳"></Radio>
                <Radio label="杭州"></Radio>
            </Radio-group>

            <br>


            <Radio-group v-model="button2" type="button">
                <Radio label="北京"></Radio>
                <Radio label="上海" disabled></Radio>
                <Radio label="深圳"></Radio>
                <Radio label="杭州"></Radio>
            </Radio-group>

            <br>

            <Radio-group v-model="button3" type="button">
                <Radio label="北京" disabled></Radio>
                <Radio label="上海" disabled></Radio>
                <Radio label="深圳" disabled></Radio>
                <Radio label="杭州" disabled></Radio>
            </Radio-group>


        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                radio: '2',
                radio1: '选中且禁用',
                radio2: 6,
                button1: '北京',
                button2: '北京',
                button3: '北京'
            };
        },
        methods: {
            onChange(val) {
                console.log("val == "+val);
            }
        }
    }
</script>

<style>
    .test {
        padding:8px 14px;
        text-align: center;
        border:1px solid #ff0000;
    }
</style>