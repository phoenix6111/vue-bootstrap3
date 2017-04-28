<template lang="html">
    <div class="switchs-demo">
        <div class="block-header">
            <h2>Switch 开关
                <small>在两种状态间切换时用到的开关选择器。</small>
            </h2>
        </div>

        <div>
            <h4>基本用法，状态切换时会触发事件</h4>
            <ISwitch @on-change="change" v-model="switch1" ></ISwitch>

            <hr>
            <h4>设置size为 large 或 small 使用大号和小号的开关。</h4>
            <ISwitch size="large"></ISwitch>
            <ISwitch></ISwitch>
            <ISwitch size="small"></ISwitch>

            <hr>

            <h4>自定义内容，建议如果使用2个汉字，将开关尺寸设置为 large。</h4>
            <ISwitch>
                <span slot="open">开</span>
                <span slot="close">关</span>
            </ISwitch>
            <ISwitch>
                <Icon type="check" slot="open"></Icon>
                <Icon type="close" slot="close"></Icon>
            </ISwitch>
            <br><br>
            <ISwitch size="large">
                <span slot="open">开启</span>
                <span slot="close">关闭</span>
            </ISwitch>
            <ISwitch size="large">
                <span slot="open">ON</span>
                <span slot="close">OFF</span>
            </ISwitch>

            <hr>
            <h4>禁用开关</h4>
            <ISwitch :disabled="disabled"></ISwitch>
            <i-button type="primary" @click="toggle">Toggle Disabled</i-button>

        </div>
    </div>
</template>
<script>
    export default {
        name:'Switchs',
        data () {
            return {
                switch1: false,
                disabled: true
            }
        },
        methods: {
            change (status) {
                console.log("onchange...");
            },
            toggle() {
                console.log("toggle ..");
                this.disabled = !this.disabled;
            }
        }
    }
</script>