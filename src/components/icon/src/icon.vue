<template lang="html">
    <i :class="classes" :style="styles" @click="_click"></i>
</template>

<script>
    const prefixCls = 'zmdi';

    export default {
        props: {
            type: String,
            size: [Number, String],
            color: String
        },
        computed: {
            classes () {
                return `${prefixCls} ${prefixCls}-${this.type}`;
            },
            styles () {
                let style = {};
                if (this.size) {
                    style['font-size'] = `${this.size}px`;
                }
                if (this.color) {
                    style.color = this.color;
                }
                return style;
            }
        },
        methods: {
            _click(e) {
                this.$emit('click',e);
            }
        }
    };
</script>