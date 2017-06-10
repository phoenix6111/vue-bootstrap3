<template lang="html">
    <button :class="classes" :disabled="disabled" v-if="!href"
            :type="htmlType" @click="handleClick">
        <i class="zmdi zmdi-refresh zmdi-hc-spin" v-if="loading"></i>
        <Icon :type="icon" v-if="icon && !loading"></Icon>
        <slot></slot>
    </button>

    <a :class="classes" :href="href" :disabled="disabled"
        :target="target"  @click="handleClick" v-else>
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
                default:'secondary'
            },
            shape: {
                validator (value) {
                    return oneOf(value, ['circle']);
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
            handleClick(e) {
                this.$emit('click',e);
            }
        },
        computed: {
            classes () {
                const typeClass = !this.outline?`${prefixCls}-${this.type}`:`${prefixCls}-outline-${this.type}`;
                return [
                    `${prefixCls}`,typeClass,
                    {
                        'is-loading':this.loading != null && this.loading,
                        [`${prefixCls}-icon-only`]: !this.showSlot && (!!this.icon || this.loading),
                        [`${prefixCls}-${this.size}`]: !!this.size,
                        [`${prefixCls}-${this.shape}`]: !!this.shape,
                        [`${prefixCls}-block`]: this.long,
                        [`${prefixCls}-icon-text`]: this.iconText,
                        'disabled':this.disabled
                    }
                ];
            }
        },
        mounted () {
            this.showSlot = this.$slots.default !== undefined;
        }
    }


</script>