import Popper from '../../../utils/vue-popper';
import debounce from 'throttle-debounce/debounce';
import {getFirstComponentChild} from '../../../utils/vdom';
import {oneOf} from '../../../utils/assist';
import Vue from 'vue';

export default {
    name: 'Tooltip',

    mixins: [Popper],

    props: {
        placement: {
            validator (value) {
                return oneOf(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start',
                    'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']);
            },
            default: 'bottom'
        },
        openDelay: {
            type: Number,
            default: 0
        },
        disabled: Boolean,
        manual: Boolean,
        effect: {
            type: String,
            default: 'dark'
        },
        popperClass: String,
        content: String,
        transition: {
            type: String,
            default: 'fade'
        },
        enterable: { //鼠标是否可以进入tooltip内部
            type: Boolean,
            default: true
        },
        diyContent: {
            type:Boolean,
            default:false
        }
    },

    beforeCreate() {
        if (this.$isServer) return;

        this.popperVM = new Vue({
            data: {node: ''},
            render(h) {
                return this.node;
            }
        }).$mount();

        this.debounceClose = debounce(200, () => this.handleClosePopper());
    },

    render(h) {
        if (this.popperVM) {
            if(!this.diyContent) {
                this.popperVM.node = (
                    <transition
                        name={ this.transition }
                        onAfterLeave={ this.doDestroy }>
                        <div ref="popper"
                             class={this.classes}
                             v-show={!this.disabled && this.showPopper}
                             onMouseleave={ () => { this.setExpectedState(false); this.debounceClose(); } }
                             onMouseenter={ () => { this.setExpectedState(true); } }>
                            <div class="tooltip-arrow"></div>
                            <div class="tooltip-inner">
                                { this.$slots.content || this.content }
                            </div>
                        </div>
                    </transition>);
            } else {
                this.popperVM.node = (
                    <transition
                        name={ this.transition }
                        onAfterLeave={ this.doDestroy }>
                        <div ref="popper"
                             class="tooltip-container"
                             v-show={!this.disabled && this.showPopper}
                             onMouseleave={ () => { this.setExpectedState(false); this.debounceClose(); } }
                             onMouseenter={ () => { this.setExpectedState(true); } }>
                            { this.$slots.content}
                        </div>
                    </transition>);
            }
        }

        if (!this.$slots.default || !this.$slots.default.length) return this.$slots.default;

        const vnode = getFirstComponentChild(this.$slots.default);
        if (!vnode) return vnode;
        const data = vnode.data = vnode.data || {};
        const on = vnode.data.on = vnode.data.on || {};

        on.mouseenter = this.addEventHandle(on.mouseenter, () => { this.setExpectedState(true); this.handleShowPopper(); });
        on.mouseleave = this.addEventHandle(on.mouseleave, () => { this.setExpectedState(false); this.debounceClose(); });
        data.staticClass = this.concatClass(data.staticClass, 'tooltip-rel');

        return vnode;
    },

    mounted() {
        this.referenceElm = this.$el;
    },

    computed: {
        classes() {
            return [
                'tooltip',this.popperClass,
                {
                    [`tooltip-${this.effect}`]:!!this.effect,
                }
            ];
        }
    },

    methods: {
        addEventHandle(old, fn) {
            return old ? Array.isArray(old) ? old.concat(fn) : [old, fn] : fn;
        },

        concatClass(a, b) {
            if (a && a.indexOf(b) > -1) return a;
            return a ? b ? (a + ' ' + b) : a : (b || '');
        },

        handleShowPopper() {
            if (!this.expectedState || this.manual) return;

            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                this.showPopper = true;
            }, this.openDelay);
        },

        handleClosePopper() {
            if (this.enterable && this.expectedState || this.manual) return;

            clearTimeout(this.timeout);
            this.showPopper = false;
        },

        setExpectedState(expectedState) {
            this.expectedState = expectedState;
        }
    }
};
