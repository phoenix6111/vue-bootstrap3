<template lang="html">
    <ol :class="classes">
        <slot></slot>
    </ol>
</template>

<script>
    const prefixCls = 'breadcrumb';

    export default {
        name: 'Breadcrumb',
        props: {
            separator: {
                type: String,
                default: '/'
            },
            router: {
                type:Boolean,
                default:true
            }
        },
        computed: {
            classes () {
                return `${prefixCls}`;
            }
        },
        mounted () {
            this.updateChildren();
        },
        methods: {
            updateChildren () {
                this.$children.forEach((child) => {
                    child.separator = this.separator;
                });
            }
        },
        watch: {
            separator () {
                this.updateChildren();
            }
        }
    }
</script>