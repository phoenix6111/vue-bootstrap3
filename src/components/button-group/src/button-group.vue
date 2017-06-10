<template lang="html">
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    import { oneOf } from '../../../utils/assist';
    const prefixCls = 'btn-group';

    /**
     * 用于按钮组
     */
    export default {
        name:'ButtonGroup',
        props: {
            size: {
                required:false,
                validator (value) {
                    return oneOf(value, ['lg', 'sm', 'xs']);
                }
            },
            justified: {
                type:Boolean,
                default:false
            },
            vertical: {
                type:Boolean,
                default:false
            }
        },
        computed: {
            classes() {
                const baseCls = !this.vertical?`${prefixCls}`:`${prefixCls}-vertical`

                return [
                    baseCls,
                    {
                        [`${prefixCls}-${this.size}`]: !!this.size,
                        [`${prefixCls}-justified`]: this.justified
                    }
                ];
            }
        }
    }
</script>