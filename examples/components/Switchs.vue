<template lang="html">
    <div class="card m-t-30">
        <div class="card-header">
            <h2>Switch 开关
                <small>在两种状态间切换时用到的开关选择器。</small>
            </h2>
        </div>

        <div class="card-body card-padding">

            <ISwitch @on-change="change"></ISwitch>

            <hr>

            <ISwitch size="large"></ISwitch>
            <ISwitch></ISwitch>
            <ISwitch size="small"></ISwitch>

            <hr>

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