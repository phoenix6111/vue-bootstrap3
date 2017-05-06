<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    const prefixCls = "i-timeline";

    export default {
        name:'Timeline',
        props: {
            pending: {
                type:Boolean,
                default:false
            }
        },
        computed:{
            classes() {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-pending`]: this.pending
                    }
                ];
            }
        }
    }
</script>