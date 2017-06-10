<script>
    import {oneOf,getScrollBarSize} from '../../../utils/assist';
    import IButton from '../../button/src/button';
    import TransferDom from '../../../directives/transfer-dom';
    import Popup from '../../../utils/popup';
    import emitter from '../../../mixins/emitter';
    import Locale from '../../../mixins/locale';

    const prefixCls = 'modal';

    export default {
        name: 'Modal',
        mixins: [ Locale,Popup, emitter],
        components: { IButton },
        directives: { TransferDom },
        props: {
            title: String,//标题
            size: {// modal的三种固定大小
                validator(val) {
                    return oneOf(val, ['default', 'lg', 'sm','full']);
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
            showClose: {//是否可关闭
                type: Boolean,
                default: true,
            },
            closeOnPressEsc: {//esc键是否可关闭
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
            backdrop: {//是否需要遮罩层
                type:Boolean,
                default:true
            },
            backdropAppendToBody: {
                type: Boolean,
                default: true
            },
            backdropFade: { //backdrop是否显示动画
                type:Boolean,
                default:true
            },
            modalColor: {//modal的颜色
                required: false,
                validator(val) {
                    return oneOf(val, ['normal', 'blue', 'cyan', 'green', 'lightgreen', 'lightblue',
                        'amber', 'teal', 'orange', 'bluegray', 'red']);
                },
                default: 'normal'
            },
            scrollable: {//弹出modal时，背景层是否锁定，不可滚动
                type: Boolean,
                default: false
            },
            noAnimation: {//不使用包含动画
                type:Boolean,
                default:false
            },
            transition: {
                type:String,
                default:'ease'
            },
            appendToBody: { //是否将modal append 到body
                type:Boolean,
                default:true
            },
            beforeClose: Function,//关闭前执行Function,
            customClass: [String,Array],//modal的自定义classes
            customStyles: [String,Object],//modal的自定义styles
        },
        data() {
            return {
                wrapShow: false,
                showHead: true,
                prefixCls:prefixCls
            }
        },
        computed: {
            modalClasses() {
                return [
                    `${this.prefixCls}`,`${this.prefixCls}-wrap`,
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
            showHeader() {
                return (this.title) || (this.$slots.header !== undefined);
            },
            transitionName() {
                return !this.noAnimation?this.transition:"";
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
            handleWrapperClick (event) {
                if (!this.closeOnClickOutside) return;

                // use indexOf,do not use === ,because ivu-modal-wrap can have other custom className
                const className = event.target.getAttribute('class');
                if (className && className.indexOf(`${prefixCls}-wrap`) > -1) {
                    this.handleClose();
                }
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
                    this.timer = setTimeout(() => {
                        this.wrapShow = false;
                    }, 300);

                    this.$emit('update:visible', false);
                    this.$emit('visible-change', false);
                }
            },
            updatePopper() {
                this.broadcast('SelectDropdown', 'updatePopper');
                this.broadcast('DropdownMenu', 'updatePopper');
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

                    if (this.timer) clearTimeout(this.timer);
                     this.wrapShow = true;
                } else {
                    this.$el.removeEventListener('scroll', this.updatePopper);
                    this.$emit('close');
                }
            }
        },
        mounted() {
            this.$nextTick(() => {
                if(this.modalColor !== 'normal') {
                    let modal = this.$el.querySelector('.modal');
                    this.$el.setAttribute("data-modal-color",this.modalColor);
                }
            });

            if (this.visible) {
                this.rendered = true;
                this.open();
            }
        },
        render(h) {

            let modal = (
                    <transition name={this.transitionName}>
                        <div class={this.dialogClasses}
                             v-show={this.visible}
                             ref="dialog"
                             style={this.mainStyles}>
                            <div class={this.prefixCls + '-content'}>
                                {
                                    this.showClose?<button type="button" class="close"
                                                          aria-label="Close"
                                                          on-click={this.handleClose}>
                                        {this.$slots.close?this.$slots.close:<span aria-hidden="true">&times;</span>}
                                    </button>:''}
                                {
                                    this.showHeader?
                                            <div class={this.prefixCls+'-header'}>
                                                {
                                                    this.$slots.header?this.$slots.header:
                                                            <h4 class={this.prefixCls+'-title'}>{this.title}</h4>
                                                }
                                            </div>:''
                                }

                                {
                                    this.rendered?<div class={this.prefixCls+'-body'}>
                                        {this.$slots.default}
                                    </div>:''
                                }
                                {
                                    !this.hideFooter?<div class={this.prefixCls+"-footer"}>
                                        {
                                            this.$slots.footer?this.$slots.footer:
                                                    <div>
                                                        <i-button type="link" nativeOn-click={this.cancel}>{this.cancelText}</i-button>
                                                        <i-button type="primary" nativeOn-click={this.ok}>{this.okText}</i-button>
                                                    </div>
                                        }
                                    </div>:''
                                }
                            </div>
                        </div>
                    </transition>
            );

            const directives = [];
            if(this.appendToBody) {
                directives.push({name:'transfer-dom'});
            }

            return (
                    <div class={this.modalClasses}
                         on-click={this.handleWrapperClick}
                         aria-hidden="true"
                         {...{directives}}>
                        {modal}
                    </div>
            );

        }
    }
</script>