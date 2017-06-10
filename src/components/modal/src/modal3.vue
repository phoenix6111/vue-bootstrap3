<template>
    <div :class="modalClasses" @click="handleWrapperClick" v-show="visible" aria-hidden="true">
        <transition name="dialog-fade">
            <div :class="[prefixCls + '-dialog']" v-show="visible" :style="mainStyles" ref="dialog">
                <div :class="[prefixCls + '-content']">
                    <button type="button" class="close" v-if="showClose" @click="handleClose" aria-label="Close">
                        <slot name="close"><span aria-hidden="true">&times;</span></slot>
                    </button>
                    <div :class="[prefixCls + '-header']" v-if="showHeader">
                        <slot name="header">
                            <h4 class="modal-title">{{title}}</h4>
                        </slot>
                    </div>
                    <div :class="[prefixCls + '-body']" v-if="rendered"><slot></slot></div>
                    <div :class="[prefixCls + '-footer']" v-show="!hideFooter">
                        <slot name="footer">
                            <i-button type="link" @click="cancel">{{cancelText}}
                            </i-button>
                            <i-button type="primary" @click="ok">{{okText}}</i-button>
                        </slot>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import Popup from '../../../utils/popup1';
    import emitter from '../../../mixins/emitter';

    const prefixCls = 'modal';

    export default {
        name: 'ElDialog',
        mixins: [Popup, emitter],
        props: {
            title: {
                type: String,
                default: ''
            },
            modal: {
                type: Boolean,
                default: true
            },

            modalAppendToBody: {
                type: Boolean,
                default: true
            },
            lockScroll: {
                type: Boolean,
                default: true
            },
            closeOnClickModal: {
                type: Boolean,
                default: true
            },
            closeOnPressEscape: {
                type: Boolean,
                default: true
            },
            showClose: {
                type: Boolean,
                default: true
            },
            size: {
                type: String,
                default: 'small'
            },
            customClass: {
                type: String,
                default: ''
            },
            top: {
                type: String,
                default: '15%'
            },
            hideFooter: {//隐藏footer
                type: Boolean,
                default: false
            },
            okText: {//确认按钮的text
                type: String,
                default: '确认'
            },
            cancelText: {//取消按钮的text
                type: String,
                default: '关闭'
            },
            beforeClose: Function
        },
        data() {
            return {
                prefixCls: prefixCls,
            }
        },
        watch: {
            visible(val) {
                this.$emit('update:visible', val);
                if (val) {
                    this.$emit('open');
                    this.$el.addEventListener('scroll', this.updatePopper);
                    this.$nextTick(() => {
                        this.$refs.dialog.scrollTop = 0;
                    });
                } else {
                    this.$el.removeEventListener('scroll', this.updatePopper);
                    this.$emit('close');
                }
            }
        },
        computed: {
            modalClasses() {
                return [
                    'modal', `${this.prefixCls}-wrap`, !!this.customClass,
                    {
                        [`${this.prefixCls}-${this.size}`]: !!this.size,
                        [`${this.customClass}`]: !!this.customClass
                    }
                ];
            },
            mainStyles () {
                let style = {};

                const styleWidth = {};
                if (this.width) {
                    styleWidth.width = `${this.width}px`;
                }

                const styleTop = {};
                if (this.top) {
                    styleTop.top = `${this.top}px`;
                }

                const customStyles = this.customStyles ? this.customStyles : {};

                Object.assign(style, styleWidth, styleTop, customStyles);

                return style;
            },
            showHeader() {
                return (this.title) || (this.$slots.header !== undefined);
            }
        },
        methods: {
            ok () { // click ok button
                this.$emit('on-ok');
                this.handleClose();
            },
            cancel () {//click cancel button close
                this.$emit('on-cancel');
                this.handleClose();
            },
            handleWrapperClick() {
                if (!this.closeOnClickModal) return;
                this.handleClose();
            },
            handleClose() {
                if (typeof this.beforeClose === 'function') {
                    this.beforeClose(this.hide);
                } else {
                    this.hide();
                }
            },
            hide(cancel) {
                if (cancel !== false) {
                    this.$emit('update:visible', false);
                    this.$emit('visible-change', false);
                }
            },
            updatePopper() {
                this.broadcast('ElSelectDropdown', 'updatePopper');
                this.broadcast('ElDropdownMenu', 'updatePopper');
            }
        },
        mounted() {
            if (this.visible) {
                this.rendered = true;
                this.open();
            }
        }
    };
</script>