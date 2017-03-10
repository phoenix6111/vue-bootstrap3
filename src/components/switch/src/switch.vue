<template lang="html">
    <span :class="wrapClasses" @click="toggle">
        <span :class="innerClasses">
            <slot name="open" v-if="checked"></slot>
            <slot name="close" v-if="!checked"></slot>
        </span>
    </span>
</template>

<script>
    import { oneOf } from '../../../utils/assist';

    const prefixCls = 'i-switch';
    export default {
        props: {
            isChecked: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            size: {
                validator (value) {
                    return oneOf(value, ['large', 'small']);
                }
            }
        },
        data() {
            return {
                checked:false
            }
        },
        mounted() {
            this.checked = this.isChecked;
        },
        computed: {
            wrapClasses () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-checked`]: this.checked,
                        [`${prefixCls}-disabled`]: this.disabled,
                        [`${prefixCls}-${this.size}`]: !!this.size
                    }
                ];
            },
            innerClasses () {
                return `${prefixCls}-inner`;
            }
        },
        methods: {
            toggle () {
                if (this.disabled) {
                    return false;
                }
                this.checked = !this.checked;
                this.$emit('on-change', this.checked);
//                this.$dispatch('on-form-change', this.checked);
            }
        }
    }
</script>