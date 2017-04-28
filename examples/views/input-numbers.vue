<template lang="html">
    <div class="inputs-numbers-demo">
        <div class="block-header">
            <h2>InputNumber 数字输入框
                <small>使用鼠标或键盘输入一定范围的标准数值。</small>
            </h2>
        </div>

        <div>

            <h4>基础用法</h4>
            <input-number v-model="num1" @change="handleChange" :min="1" :max="10"></input-number>

            <input-number v-model="num1" @change="handleChange" :min="1" :max="10" sep-mode></input-number>

            <br><br>
            <hr>
            <br><br>

            <h4>禁用状态</h4>
            <input-number v-model="num2" :disabled="true"></input-number>
            <br><br>
            <hr>
            <br><br>

            <h4>步数</h4>
            <input-number v-model="num3" :step="2"></input-number>
            <br><br>
            <hr>
            <br><br>

            <h4>尺寸</h4>
            <input-number size="lg" v-model="num4"></input-number>
            <input-number v-model="num5"></input-number>
            <input-number size="sm" v-model="num6"></input-number>
            <br><br>
            <hr>
            <br><br>

        </div>
    </div>
</template>
<script>

    export default {
        data() {
            return {
                num1: 1,
                num2: 1,
                num3: 5,
                num4: 1,
                num5: 1,
                num6: 1
            };
        },
        methods: {
            handleChange(value) {
                console.log(value);
            }
        }
    }
</script>

<style>
    .inputs-numbers-demo .input-group {
        margin-bottom: 10px;
    }
</style>