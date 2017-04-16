<template lang="html">
    <button class="btn" :class="classes" :disabled="disabled" v-if="!href"
            :type="htmlType" @click="_click">
        <i class="zmdi zmdi-refresh zmdi-hc-spin" v-if="loading"></i>
        <Icon :type="icon" v-if="icon && !loading"></Icon>
        <slot></slot>
    </button>

    <a class="btn" :class="classes" :href="href" :disabled="disabled"
        :target="target"  @click="_click" v-else>
        <Icon :type="icon" v-if="icon"></Icon>
        <slot></slot>
    </a>
</template>

<script>
//    <button class="btn btn-default btn-icon btn-icon-text btn-lg" disabled="disabled">
    import Icon from '../../icon';
    import { oneOf } from '../../../utils/assist';

    const prefixCls = 'btn';

    export default {
        components: {
            Icon
        },
        props: {
            type: {
                validator (value) {
                    return oneOf(value, ['default', 'primary','secondary', 'info', 'success', 'warning', 'danger','link','text','inverse']);
                },
            },
            shape: {
                validator (value) {
                    return oneOf(value, ['circle', 'icon']);
                }
            },
            size: {
                validator (value) {
                    return oneOf(value, ['lg', 'sm','xs']);
                },
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
            loading:{
                type:Boolean,
                default:false
            },
            long: {
                type: Boolean,
                default: false
            },
            outline: {//outline样式的按钮
                type:Boolean,
                default:false
            }
        },
        data () {
            return {
                showSlot: true
            };
        },
        methods: {
            _click(e) {
                this.$emit('click',e);
            }
        },
        computed: {
            classes () {
                return [
                    {
                        'btn-outline':this.outline,
                        'is-loading':this.loading,
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