<template lang="html">
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    import Emitter from '../../../mixins/emitter';
    import { oneOf } from '../../../utils/assist';

    const prefixCls = 'radio-group';

    export default {
        name:'RadioGroup',
        componentName:'RadioGroup',
        mixins:[Emitter],
        props: {
            value: {},
//            fill: String,
//            textColor: String,
            disabled: Boolean,
            vertical: {
                type:Boolean,
                default:false
            },
            size: {
                validator (value) {
                    return oneOf(value, ['sm', 'lg']);
                }
            },
            type: {
                validator (value) {
                    return oneOf(value, ['button']);
                }
            },
        },
        computed: {
            classes() {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.size}`]: !!this.size,
                        [`${prefixCls}-${this.type}`]: !!this.type,
                    }
                ];
            }
        },
        watch: {
            value(value) {
                this.$emit('change', value);
                this.dispatch('FormItem', 'el.form.change', [this.value]);
            }
        }
    }
</script>