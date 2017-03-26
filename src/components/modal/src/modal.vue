<template lang="html">
    <div>
        <div :class="modalClasses"
             aria-hidden="true" @click="handleOutsideClick" v-show="wrapShow">
            <transition name="ease" v-if="animation">
                <div class="modal-dialog" v-show="visible" :style="mainStyles">
                    <div class="modal-content">
                        <button type="button" class="close" @click="close('close')"
                                aria-label="Close" v-show="showClose">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div class="modal-header" v-if="!(!title&&!$slots.header)">
                            <slot name="header">
                                <h4 class="modal-title">{{title}}</h4>
                            </slot>
                        </div>
                        <div class="modal-body">
                            <slot></slot>
                        </div>
                        <div class="modal-footer" v-show="!hideFooter">
                            <slot name="footer">
                                <i-button type="default" @click="cancel">{{cancelText}}
                                </i-button>
                                <i-button type="primary" @click="ok">{{okText}}</i-button>
                            </slot>
                        </div>
                    </div>
                </div>
            </transition>
            <div class="modal-dialog" v-show="visible" :style="mainStyles" v-else>
                <div class="modal-content">
                    <button type="button" class="close" @click="close('close')"
                            aria-label="Close" v-show="showClose">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="modal-header" v-if="!(!title&&!$slots.header)">
                        <slot name="header">
                            <h4 class="modal-title">{{title}}</h4>
                        </slot>
                    </div>
                    <div class="modal-body">
                        <slot></slot>
                    </div>
                    <div class="modal-footer" v-show="!hideFooter">
                        <slot name="footer">
                            <i-button type="default" @click="cancel">{{cancelText}}
                            </i-button>
                            <i-button type="primary" @click="ok">{{okText}}</i-button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>


        <transition name="fade" v-if="animation">
            <div class="modal-backdrop" v-show="backdropShow"></div>
        </transition>
        <div class="modal-backdrop" v-show="backdropShow" v-else></div>

    </div>


</template>

<script>
    import {oneOf,getScrollBarSize} from '../../../utils/assist';
    import IButton from '../../button/src/button';

    export default {
        props: {
            value: {//v-model值
                type: Boolean,
                default: false
            },
            title: String,//标题
            size: {// modal的三种固定大小
                validator(val) {
                    return oneOf(val, ['default', 'lg', 'sm']);
                },
                default: 'default'
            },
            width: {//modal的自定义宽度
                type:[String,Number],
            },
            top:{//距离窗口顶部的距离，单位:px
                type:[Number,String],
                default:100
            },
            backdrop: {//是否需要遮罩层
                type:Boolean,
                default:true
            },
            showClose: {//是否可关闭
                type: Boolean,
                default: true,
            },
            closeOnClickEsc: {//esc键是否可关闭
                type:Boolean,
                default:true,
            },
            closeOnClickOutside: {//点击空白区域是否可以关闭Modal
                type: Boolean,
                default: true
            },
            okText: {//确认按钮的text
                type: String,
                default: '确认'
            },
            cancelText: {//取消按钮的text
                type: String,
                default: '关闭'
            },
            hideFooter:{//隐藏footer
                type:Boolean,
                default:false
            },
            customClass: [String,Array],//modal的自定义classes
            customStyles: [String,Object],//modal的自定义styles
            dataModalColor: {//modal的颜色
                required: false,
                validator(val) {
                    return oneOf(val, ['normal', 'blue', 'cyan', 'green', 'lightgreen', 'lightblue',
                        'amber', 'teal', 'orange', 'bluegray', 'red']);
                },
                default: 'normal'
            },
            lockScroll: {//弹出modal时，背景层是否锁定，不可滚动
                type: Boolean,
                default: true
            },
            animation: {//是否包含动画
                type:Boolean,
                default:true
            }
        },
        data() {
            return {
                visible: this.value,
                wrapShow: false,
                scrollable:!this.lockScroll
            }
        },
        methods: {
            open() {// open modal
                this.visible = true;
            },
            close (reason='cancel') {// close modal
                this.visible = false;
                this.$emit('on-close',reason);
            },
            ok () { // click ok button
                this.visible = false;
                this.$emit('on-ok');
            },
            cancel () {//click cancel button close
                this.$emit('on-cancel');
                this.close('cancel');
            },
            clickOutside () {//click outside close
                if (this.closeOnClickOutside) {
                    this.close('overlay');
                }
            },
            handleOutsideClick (event) {
                const className = event.target.classList;
                if (className && className.contains("modal")) this.clickOutside();
            },
            escClose (e) {
                if (this.visible && this.closeOnClickEsc) {
                    if (e.keyCode === 27) {
                        this.close('esc');
                    }
                }
            },
            checkScrollBar () {
                let fullWindowWidth = window.innerWidth;
                if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
                    const documentElementRect = document.documentElement.getBoundingClientRect();
                    fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
                }
                this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
                if (this.bodyIsOverflowing) {
                    this.scrollBarWidth = getScrollBarSize();
                }
            },
            setScrollBar () {
                if (this.bodyIsOverflowing && this.scrollBarWidth !== undefined) {
                    document.body.style.paddingRight = `${this.scrollBarWidth}px`;
                }
            },
            resetScrollBar () {
                document.body.style.paddingRight = '';
            },
            addScrollEffect () {
                this.checkScrollBar();
                this.setScrollBar();
                document.body.style.overflow = 'hidden';
            },
            removeScrollEffect() {
                document.body.style.overflow = '';
                this.resetScrollBar();
            }
        },
        watch: {
            value(val) {
                this.visible = val;
            },
            visible(val) {
                this.$emit('input', val);

                if (val === false) {
                    this.timer = setTimeout(() => {
                        this.wrapShow = false;
                        this.removeScrollEffect();
                    }, 300);

                } else {
                    if (this.timer) clearTimeout(this.timer);
                    this.wrapShow = true;
                    if (!this.scrollable) {
                        this.addScrollEffect();
                    }

                    this.$emit('on-open');
                }
            },
            scrollable (val) {
                if (!val) {
                    this.addScrollEffect();
                } else {
                    this.removeScrollEffect();
                }
            }
        },
        computed: {
            modalClasses() {
                return [
                    'modal',!!this.customClass,
                    {
                        'fade in':this.wrapShow,
                        [`modal-${this.size}`]: !!this.size
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
            backdropShow() {
                return this.backdrop && this.visible;
            },
            transitionName() {
                return this.animation?"ease":"";
            }
        },
        mounted() {
            this.$nextTick(() => {
                if(this.dataModalColor !== 'normal') {
                    let modal = this.$el.querySelector('.modal');
                    modal.setAttribute("data-modal-color",this.dataModalColor);
                }
            });

            if(this.closeOnClickEsc) {
                // ESC close
                document.addEventListener('keydown', this.escClose);
            }

        },
        beforeDestroy () {
            if(this.closeOnClickEsc) {
                // ESC close
                document.removeEventListener('keydown', this.escClose);
            }
            this.removeScrollEffect();
        },
    }
</script>