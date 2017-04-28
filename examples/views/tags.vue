<template lang="html">
    <div class="tags-demo">
        <div class="block-header">
            <h2>Tag 标签
                <small>对不同维度进行简单的标记和分类。</small>
            </h2>
        </div>

        <div>

            <Tag>标签一</Tag>
            <Tag>标签二</Tag>
            <Tag closable>标签三</Tag>

            <hr>

            <Tag closable type="primary">标签一</Tag>
            <Tag closable type="info">标签一</Tag>
            <Tag closable type="success">标签二</Tag>
            <Tag closable type="danger">标签三</Tag>
            <Tag closable type="success">标签四</Tag>
            <br><br>

            <hr>
            <Tag hit="dot">标签一</Tag>
            <Tag hit="dot" closable>标签一</Tag>
            <Tag hit="dot" type="primary">标签一</Tag>
            <Tag hit="dot" type="primary" closable>标签一</Tag>
            <Tag hit="dot" type="info">标签一</Tag>
            <Tag hit="dot" type="info" closable>标签一</Tag>
            <Tag hit="dot" type="success">标签一</Tag>
            <Tag hit="dot" type="success" closable>标签一</Tag>
            <Tag hit="dot" type="danger">标签一</Tag>
            <Tag hit="dot" type="danger" closable>标签一</Tag>
            <Tag hit="dot" type="success">标签一</Tag>
            <Tag hit="dot" type="success" closable>标签一</Tag>
            <hr>
            <br><br>
            <Tag hit="border">标签一</Tag>
            <Tag hit="border" closable>标签一</Tag>
            <Tag hit="border" type="primary">标签一</Tag>
            <Tag hit="border" type="primary" closable>标签一</Tag>
            <Tag hit="border" type="info">标签一</Tag>
            <Tag hit="border" type="info" closable>标签一</Tag>
            <Tag hit="border" type="success">标签一</Tag>
            <Tag hit="border" type="success" closable>标签一</Tag>
            <Tag hit="border" type="danger">标签一</Tag>
            <Tag hit="border" type="danger" closable>标签一</Tag>
            <Tag hit="border" type="success">标签一</Tag>
            <Tag hit="border" type="success" closable>标签一</Tag>
            <br><br>
            <Tag v-if="ccc" closable @on-close="clickTagClose">标签一</Tag>

        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                modal1: false,
                loading: true,
                ccc: true
            }
        },
        methods: {
            ok () {
                setTimeout(() => {
                    this.modal1 = false;
                }, 2000);
            },
            clickTag() {
                console.log('click tag');
            },
            clickTagClose() {
                this.ccc = false;
                console.log('click tag close-icon');
            }
        }
    }
</script>