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
        visibleArrow: {
            default: true
        },
        transition: {
            type: String,
            default: 'fade'
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
            this.popperVM.node = (
                <transition
                    name={ this.transition }
                    onAfterLeave={ this.doDestroy }>
                    <div onMouseleave={ () => {
                            this.debounceClose();
                            this.togglePreventClose();
                        } }
                         onMouseenter={ this.togglePreventClose }
                         class={this.classes}
                         ref="popper"
                         v-show={!this.disabled && this.showPopper}>
                        <div class="tooltip-arrow"></div>
                        <div class="tooltip-inner">
                            { this.$slots.content || this.content }
                        </div>
                    </div>
                </transition>);
        }

        if (!this.$slots.default || !this.$slots.default.length) return this.$slots.default;

        const vnode = getFirstComponentChild(this.$slots.default);
        if (!vnode) return vnode;
        const data = vnode.data = vnode.data || {};
        const on = vnode.data.on = vnode.data.on || {};

        on.mouseenter = this.addEventHandle(on.mouseenter, this.handleShowPopper);
        on.mouseleave = this.addEventHandle(on.mouseleave, this.debounceClose);
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
            if (this.manual) return;
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                this.showPopper = true;
            }, this.openDelay);
        },

        handleClosePopper() {
            if (this.preventClose || this.manual) return;
            clearTimeout(this.timeout);
            this.showPopper = false;
        },

        togglePreventClose() {
            this.preventClose = !this.preventClose;
        }
    }
};
