<template lang="html">
    <div class="code-boxs-demo">
        <div class="block-header">
            <h2>CodeBox 代码示例
                <small>用于展示组件代码。</small>
            </h2>
        </div>

        <code-box title="基本" describe="button基本用法">
            <i-button>Default</i-button>
        </code-box>

        <code-box title="基本" describe="button基本用法" code="自定义<v-button>Default</v-button>自定义">
            <i-button>Default</i-button>
        </code-box>

        <code-box title="基本" describe="button基本用法" :code="code1">
            <template slot="css">
                #components-form-demo-normal-login .login-form {max-width: 300px;}
                #components-form-demo-normal-login .login-form-forgot {float: right;}
            </template>

            <button class="btn">Default</button>
            <button class="btn">Default</button>
            <div>
                <div>123123</div>
                <div>
                    <div>343fcdfc</div>
                </div>
            </div>
            <template slot="vueCode">
                <![CDATA[
                    <IButton>Default</IButton>
                    <IButton>Default</IButton>
                ]]>
            </template>


            <template slot="js">
                export default { data: function () { return { content: [ aaa: { aaa:{
                asdasd } }, [ 'title', '标题', 'string', '无' ] ] } } }
            </template>
        </code-box>

    </div>
</template>
<script>
    import CodeBox from '../components/code-box.vue';
    export default {
        components:{CodeBox},
        data:() => ({
            code1:`<button class="btn">Default</button>
            <button class="btn">Default</button>
            <div>
                <div>123123</div>
                <div>
                    <div>343fcdfc</div>
                </div>
            </div>`
        }),
    }
</script>

