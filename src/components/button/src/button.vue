<template lang="html">
    <button class="btn" :disabled="disabled" v-if="!href"
            :type="htmlType"
            :autofocus="autofocus">
        <Icon :type="icon" v-if="icon"></Icon>
        <span v-if="$slots.default"><slot></slot></span>
    </button>

    <a class="btn" :class="classes" :href="href" :disabled="disabled"
        :target="target" v-else>
        <Icon :type="icon" v-if="icon"></Icon>
        <span v-if="$slots.default"><slot></slot></span>
    </a>
</template>

<script>
//    <button class="btn btn-default btn-icon btn-icon-text btn-lg" disabled="disabled">
    import Icon from '../icon';
    import { oneOf } from '../../utils/assist';

    const prefixCls = 'btn';

    export default {
        components: {
            Icon
        },
        props: {
            type: {
                validator (value) {
                    return oneOf(value, ['default', 'primary', 'info', 'success', 'warning', 'danger']);
                }
            },
            shape: {
                validator (value) {
                    return oneOf(value, ['circle', 'icon']);
                }
            },
            size: {
                validator (value) {
                    return oneOf(value, ['lg', 'sm']);
                }
            },
            iconText:Boolean,
            disabled: Boolean,
            htmlType: {
                default: 'button',
                validator (value) {
                    return oneOf(value, ['button', 'submit', 'reset']);
                }
            },
            icon: String,
            href:String,
            long: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                showSlot: true
            };
        },
        computed: {
            classes () {
                return [
                    {
                        [`${prefixCls}-${this.type}`]: !!this.type,
                        [`${prefixCls}-${this.size}`]: !!this.size,
                        [`${prefixCls}-${this.shape}`]: !!this.shape,
                        [`${prefixCls}-block`]: this.long,
                        [`${prefixCls}-icon-text`]: this.iconText,
                        'disabled':this.disabled
                    }
                ];
            }
        }
    }


</script>