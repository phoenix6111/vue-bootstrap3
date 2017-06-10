<script>
    import {oneOf,getScrollBarSize} from '../../../utils/assist';
    import IButton from '../../button/src/button';
    import TransferDom from '../../../directives/transfer-dom';
    import Locale from '../../../mixins/locale';

    const prefixCls = 'modal';

    export default {
        name: 'Modal',
        mixins: [ Locale],
        components: { IButton },
        directives: { TransferDom },
        props: {
            value: {//v-model值
                type: Boolean,
                default: false
            },
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
            customClass: [String,Array],//modal的自定义classes
            customStyles: [String,Object],//modal的自定义styles
            backdrop: {//是否需要遮罩层
                type:Boolean,
                default:true
            },
            backdropAppendToBody: {
                type: Boolean,
                default: true
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
                default:false
            },
            beforeClose: Function//关闭前执行Function,
        },
        data() {
            return {
                visible: this.value,
                wrapShow: false,
                showHead: true,
                prefixCls:prefixCls
            }
        },
        computed: {
            modalClasses() {
                return [
                    'modal',`${this.prefixCls}-wrap`,!!this.customClass,
                    {
                        [`${this.prefixCls}-hidden`]:!this.wrapShow,
                        [`modal-${this.size}`]: !!this.size,
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
            maskClasses() {
                return [
                    `${prefixCls}-backdrop`
                ];
            },
            backdropShow() {
                return this.backdrop && this.visible;
            },
            showHeader() {
                return (this.title) || (this.$slots.header !== undefined);
            },
            transitionName() {
                return !this.noAnimation?this.transition:"";
            }
        },
        methods: {
            close () {// close modal
                this.visible = false;
                this.$emit('input', false);
                this.$emit('on-cancel');
            },
            ok () { // click ok button
                this.visible = false;
                this.$emit('input', false);
                this.$emit('on-ok');
            },
            cancel () {//click cancel button close
                this.close();
            },
            mask () {
                if (this.closeOnClickOutside) {
                    this.close();
                }
            },
            handleWrapClick (event) {
                // use indexOf,do not use === ,because ivu-modal-wrap can have other custom className
                const className = event.target.getAttribute('class');
                if (className && className.indexOf(`${prefixCls}-wrap`) > -1) {
                    this.mask();
                }
            },
            escClose (e) {
                if (this.visible && this.closeOnPressEsc) {
                    if (e.keyCode === 27) {
                        this.close();
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
        mounted() {
            this.$nextTick(() => {
                if(this.modalColor !== 'normal') {
                    let modal = this.$el.querySelector('.modal');
                    modal.setAttribute("data-modal-color",this.modalColor);
                }
            });

            if(this.closeOnPressEsc) {
                // ESC close
                document.addEventListener('keydown', this.escClose);
            }

        },
        beforeDestroy () {
            // ESC close
            document.removeEventListener('keydown', this.escClose);
            this.removeScrollEffect();
        },
        render(h) {

            let modal = (
                    <div class={this.prefixCls + '-dialog'}
                         v-show={this.visible}
                         style={this.mainStyles}>
                        <div class={this.prefixCls + '-content'}>
                            {
                                this.showClose?<button type="button" class="close"
                                                       aria-label="Close"
                                                       on-click={this.close}>
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

                            <div class={this.prefixCls+'-body'}>
                                {this.$slots.default}
                            </div>
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
            );

            if(!this.noAnimation) {
                modal = (
                        <transition name={this.transitionName}>
                            {modal}
                        </transition>
                );
            }

            let modalWrap = (
                    <div class={this.modalClasses}
                         on-click={this.handleWrapClick}
                         aria-hidden="true">
                        {modal}
                    </div>
            );

            let backdropVNode = null;
            if(!this.noAnimation) {
                backdropVNode = (
                        <transition name="fade">
                            <div class={this.maskClasses} nativeOn-click={this.mask} v-show={this.backdropShow}></div>
                        </transition>
                );
            } else {
                backdropVNode = (
                        <div class={this.maskClasses} nativeOn-click={this.mask} v-show={this.backdropShow}></div>
                );
            }

            const directives = [
                {name:'transfer-dom'}
            ];
            return (
                    <div {...{directives}}>
                        {modalWrap}
                        {backdropVNode}
                    </div>
            );
        }
    }
</script>