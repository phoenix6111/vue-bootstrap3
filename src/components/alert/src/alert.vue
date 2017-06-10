<template lang="html">
    <transition :name="transitionName">
        <div :class="classes" v-show="visible">
            <button type="button" class="close" @click="close" v-if="closable && !customClose">
                <span aria-hidden="true">×</span>
                <span class="sr-only">Close</span>
            </button>
            <a v-if="closable && customClose" class="close-text" @click="close">
                <slot name="close"></slot>
            </a>
            <div class="alert-content">
                <span :class="[`${baseClass}-icon`]" v-if="withIcon">
                    <slot name="icon">
                        <i :class="iconClasses"></i>
                    </slot>
                </span>
                <div :class="[`${baseClass}-heading`]">
                    <slot></slot>
                </div>
                <div :class="[`${baseClass}-desc`]">
                    <slot name="desc"></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import { oneOf } from '../../../utils/assist';

    const prefixCls = 'alert';
    const iconPrefixCls = 'zmdi';
    const iconTypes = {
        'info': 'info',
        'success': 'check-circle',
        'warning': 'alert-circle',
        'danger': 'close-circle'
    };

    export default {
        props: {
            type: {
                validator(value) {
                    return oneOf(value,['success','warning','info','danger','inverse']);
                },
                default:'info'
            },
            closable: {
                type: Boolean,
                default: false
            },
            showIcon: {
                type:Boolean,
                default:false
            },
            transitionName: {
                type: String,
                default:'fade'
            },
            theme: {
                validator(value) {
                    return oneOf(value,['default','light']);
                },
                default:'default'
            }
        },
        data() {
            return {
                visible: true
            }
        },
        computed: {
            baseClass () {
                return `${prefixCls}`;
            },
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${this.className}`]: !!this.className,
                        [`alert-type-${this.type}`]:!!this.type,
                        [`alert-theme-${this.theme}`]:!!this.theme,
                        'alert-dismissible':this.closable,
                        'with-desc': this.withDesc,
                        'with-icon':this.withIcon
                    }
                ];
            },
            iconClasses() {
                return [
                    `${iconPrefixCls}`,`${iconPrefixCls}-${iconTypes[this.type]}`
                ];
            },
            withDesc() {
                return this.$slots.desc !== undefined ;
            },
            withIcon() {
                return (this.showIcon || this.$slots.icon !== undefined);
            },
            customClose() {
                return this.$slots.close !== undefined;
            }
        },
        methods: {
            close(e) {
                this.visible = false;
                this.$emit('close', e);
            }
        }
    }
</script>
