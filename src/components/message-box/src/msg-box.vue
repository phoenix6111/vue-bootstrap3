<template>
    <div :class="modalClasses" @click.self="handleWrapperClick" aria-hidden="true">
        <transition :name="transition">
            <div :class="dialogClasses" :style="mainStyles" v-show="visible" ref="dialog">
                <div :class="[prefixCls + '-content']">
                    <button type="button" class="close" v-if="showClose" @click="handleAction('cancel')" aria-label="Close">
                        <slot name="close"><span aria-hidden="true">&times;</span></slot>
                    </button>
                    <div :class="[prefixCls + '-header']" v-if="title !== undefined">
                        <h4 class="modal-title">{{title}}</h4>
                    </div>
                    <div :class="[prefixCls + '-body']" v-if="message !== ''">
                        <i class="message-box__status" :class="[ typeClass ]"></i>
                        <div class="message-box__message"
                             :style="{ 'margin-left': typeClass ? '50px' : '0' }">
                            <slot><p>{{ message }}</p></slot>
                        </div>
                        <div class="message-box__input" v-show="showInput">
                            <bs-input v-model="inputValue" @keyup.enter.native="handleAction('confirm')"
                                      :placeholder="inputPlaceholder" ref="input"></bs-input>
                            <div class="message-box__errormsg"
                                 :style="{ visibility: !!editorErrorMessage ? 'visible' : 'hidden' }">
                                {{editorErrorMessage }}
                            </div>
                        </div>
                    </div>
                    <div :class="[prefixCls + '-footer']">
                        <i-button type="link"
                                  :class="[ cancelButtonClass ]"
                                  :loading="cancelButtonLoading"
                                  v-show="showCancelButton"
                                  @click.native="handleAction('cancel')">
                            {{ cancelButtonText || t('el.messagebox.cancel') }}
                        </i-button>
                        <i-button type="primary"
                                  :class="[ confirmButtonClass ]"
                                  :loading="confirmButtonLoading"
                                  ref="confirm"
                                  v-show="showConfirmButton"
                                  @click.native="handleAction('confirm')">
                            {{ confirmButtonText || t('el.messagebox.confirm') }}
                        </i-button>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import {oneOf,getScrollBarSize} from '../../../utils/assist';
    import IButton from '../../button/src/button';
    import BsInput from '../../input/src/input';
    import Popup from '../../../utils/popup';
    import emitter from '../../../mixins/emitter';
    import {addClass, removeClass} from '../../../utils/dom';
    import Locale from '../../../mixins/locale';
    import {t} from '../../../locale';

    const prefixCls = 'modal';

    const typeMap = {
        info: 'info',
        success: 'check-circle',
        warning: 'alert-circle',
        danger: 'close-circle'
    };

    export default {
        name: 'MessageBox',
        mixins: [ Locale,Popup, emitter],
        components: { IButton,BsInput },
        props: {
            backdrop: {
                type:Boolean,
                default: true
            },
            scrollable: {
                type:Boolean,
                default: false
            },
            showClose: {
                type: Boolean,
                default: true
            },
            closeOnClickOutside: {
                type:Boolean,
                default: true
            },
            closeOnPressEsc: {
                type:Boolean,
                default: true
            },
            transition: {
                type:String,
                default:'dialog-fade'
            },
            noAnimation: {
                type:Boolean,
                default:false
            }
        },
        data() {
            return {
                wrapShow: false,
                prefixCls:prefixCls,

                uid: 1,
                title: undefined,
                message: '',
                type: '',
                customClass: '',
                customStyles:'',
                showInput: false,
                inputValue: null,
                inputPlaceholder: '',
                inputPattern: null,
                inputValidator: null,
                inputErrorMessage: '',
                showConfirmButton: true,
                showCancelButton: false,
                action: '',
                confirmButtonText: '',
                cancelButtonText: '',
                confirmButtonLoading: false,
                cancelButtonLoading: false,
                confirmButtonClass: '',
                confirmButtonDisabled: false,
                cancelButtonClass: '',
                editorErrorMessage: null,
                callback: null
            }
        },
        computed: {
            modalClasses() {
                return [
                    `${this.prefixCls}`,'message-box',`${this.prefixCls}-wrap`,
                    {
                        [`${this.prefixCls}-hidden`]:!this.wrapShow,
                        [`${this.customClass}`]: !!this.customClass
                    }
                ];
            },
            mainStyles () {
                let style = {};

                const styleWidth = {};
                if(this.width) {
                    styleWidth.width = `${this.width}px`;
                }

                const styleTop = {};
                if(this.top) {
                    styleTop.top = `${this.top}px`;
                }

                const customStyles = this.customStyles ? this.customStyles : {};

                Object.assign(style, styleWidth, styleTop, customStyles);

                return style;
            },
            dialogClasses() {
                return [
                    this.prefixCls + '-dialog',
                    {
                        'noanimation':this.noAnimation,
                        [`modal-${this.size}`]: !!this.size,
                    }
                ];
            },
            typeClass() {
                return this.type && typeMap[this.type] ? `zmdi zmdi-${ typeMap[this.type] }` : '';
            }
        },
        methods: {
            getSafeClose() {
                const currentId = this.uid;
                return () => {
                    this.$nextTick(() => {
                        if (currentId === this.uid) this.doClose();
                    });
                };
            },
            doClose() {
                if (!this.visible) return;
                this.visible = false;
                this._closing = true;

                this.onClose && this.onClose();

                if (!this.scrollable) {
                    setTimeout(() => {
                        if (this.backdrop && this.bodyOverflow !== 'hidden') {
                            document.body.style.overflow = this.bodyOverflow;
                            document.body.style.paddingRight = this.bodyPaddingRight;
                        }
                        this.bodyOverflow = null;
                        this.bodyPaddingRight = null;
                    }, 200);
                }
                this.opened = false;

                this.doAfterClose();
                this.timer = setTimeout(() => {
                    this.wrapShow = false;
                }, 300);

                if (this.action) this.callback(this.action, this);
            },
            handleWrapperClick() {
                if (this.closeOnClickOutside) {
                    this.action = '';
                    this.doClose();
                }
            },

            handleAction(action) {
                if (this.$type === 'prompt' && action === 'confirm' && !this.validate()) {
                    return;
                }
                this.action = action;
                if (typeof this.beforeClose === 'function') {
                    this.close = this.getSafeClose();
                    this.beforeClose(action, this, this.close);
                } else {
                    this.doClose();
                }
            },
            validate() {
                if (this.$type === 'prompt') {
                    var inputPattern = this.inputPattern;
                    if (inputPattern && !inputPattern.test(this.inputValue || '')) {
                        this.editorErrorMessage = this.inputErrorMessage || t('el.messagebox.error');
                        addClass(this.$refs.input.$el.querySelector('input'), 'invalid');
                        return false;
                    }
                    var inputValidator = this.inputValidator;
                    if (typeof inputValidator === 'function') {
                        var validateResult = inputValidator(this.inputValue);
                        if (validateResult === false) {
                            this.editorErrorMessage = this.inputErrorMessage || t('el.messagebox.error');
                            addClass(this.$refs.input.$el.querySelector('input'), 'invalid');
                            return false;
                        }
                        if (typeof validateResult === 'string') {
                            this.editorErrorMessage = validateResult;
                            return false;
                        }
                    }
                }
                this.editorErrorMessage = '';
                removeClass(this.$refs.input.$el.querySelector('input'), 'invalid');
                return true;
            }
        },
        watch: {
            visible(val) {
                if (val) {
                    this.uid++;
                    if (this.timer) clearTimeout(this.timer);
                    this.wrapShow = true;
                }

                if (this.$type === 'alert' || this.$type === 'confirm') {
                    this.$nextTick(() => {
                        this.$refs.confirm.$el.focus();
                    });
                }
                if (this.$type !== 'prompt') return;
                if (val) {
                    setTimeout(() => {
                        if (this.$refs.input && this.$refs.input.$el) {
                            this.$refs.input.$el.querySelector('input').focus();
                        }
                    }, 500);
                } else {
                    this.editorErrorMessage = '';
                    removeClass(this.$refs.input.$el.querySelector('input'), 'invalid');
                }
            },
            inputValue: {
                immediate: true,
                handler(val) {
                    this.$nextTick(_ => {
                        if (this.$type === 'prompt' && val !== null) {
                            this.validate();
                        }
                    });
                }
            }
        },
        mounted() {
            console.log("noAnimation == "+this.noAnimation);
            if(this.noAnimation) {
                this.backdropFade = false;
            }

            console.log("this.BackdropFade == "+this.backdropFade);

            if (this.visible) {
                this.rendered = true;
                this.open();
            }
        }
    }
</script>