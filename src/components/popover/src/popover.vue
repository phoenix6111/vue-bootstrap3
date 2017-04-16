<template>
    <div class="popover-wrap"
         @mouseenter="handleMouseenter"
         @mouseleave="handleMouseleave"
         v-clickoutside="handleClose">

        <div class="popover-rel"
             ref="reference"
             @click="handleClick"
             @mousedown="handleFocus(false)"
             @mouseup="handleBlur(false)">
            <slot></slot>
        </div>

        <transition :name="transition" @after-leave="doDestroy">
            <div :class="classes"
                 ref="popper"
                 v-show="!disabled && showPopper"
                 :style="{ width: width + 'px' }">
                <div class="arrow"></div>

                <div class="popover-inner" v-if="confirm">
                    <div class="popover-content">
                        <i class="zmdi zmdi-help"></i>
                        <div class="popover-content-msg">
                            <slot name="title">{{title}}</slot>
                        </div>
                    </div>
                    <div class="popover-foot">
                        <i-button type="text" size="sm" @click.native="cancel">{{ cancelText }}</i-button>
                        <i-button type="primary" size="sm" @click.native="ok">{{ okText }}</i-button>
                    </div>
                </div>
                <div class="popover-inner" v-if="!confirm">
                    <h3 class="popover-title" v-if="title || $slots.title">
                        <slot name="title">{{title}}</slot>
                    </h3>

                    <div class="popover-content">
                        <slot name="content">{{ content }}</slot>
                    </div>

                </div>
            </div>
        </transition>
    </div>

</template>
<script>
    import Popper from '../../../utils/vue-popper';
    import {oneOf} from '../../../utils/assist';
    import clickoutside from '../../../directives/clickoutside';
    import { t } from '../../../locale';
    import IButton from '../../button';

    export default {
        name:'Popover',

        mixins: [Popper],
        directives: {clickoutside},
        components: { IButton },

        props: {
            trigger: {
                validator(value) {
                    return oneOf(value,['click', 'focus', 'hover', 'manual']);
                },
                default: 'click',
            },
            placement: {
                validator (value) {
                    return oneOf(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end',
                        'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']);
                },
                default: 'top'
            },
            title: String,
            disabled: Boolean,
            content: String,
            reference: {},
            popperClass: String,
            width: [String,Number],
            visibleArrow: {
                type:Boolean,
                default: true
            },
            transition: {
                type: String,
                default: 'fade'
            },
            confirm: {
                type: Boolean,
                default: false
            },
            okText: {
                type: String,
                default () {
                    return t('el.popover.okText');
                }
            },
            cancelText: {
                type: String,
                default () {
                    return t('el.popover.cancelText');
                }
            },
//            appendToBody:false,
        },

        data() {
            return {
                isInput: false
            }
        },

        computed: {
            classes() {
                return [
                    'popover',this.popperClass,
                    {
                        'popover-confirm':confirm
                    }
                ];
            }
        },

        watch: {
            showPopper(newVal, oldVal) {
                newVal ? this.$emit('on-show') : this.$emit('on-hide');
            }
        },

        methods: {
            handleClick () {
                if (this.confirm) {
                    this.showPopper = !this.showPopper;
                    return true;
                }
                if (this.trigger !== 'click') {
                    return false;
                }
                this.showPopper = !this.showPopper;
            },
            handleClose () {
                if (this.confirm) {
                    this.showPopper = false;
                    return true;
                }
                if (this.trigger !== 'click') {
                    return false;
                }
                this.showPopper = false;
            },
            handleFocus (fromInput = true) {
                if (this.trigger !== 'focus' || this.confirm || (this.isInput && !fromInput)) {
                    return false;
                }
                this.showPopper = true;
            },
            handleBlur (fromInput = true) {
                if (this.trigger !== 'focus' || this.confirm || (this.isInput && !fromInput)) {
                    return false;
                }
                this.showPopper = false;
            },
            handleMouseenter () {
                if (this.trigger !== 'hover' || this.confirm) {
                    return false;
                }
                this.showPopper = true;
            },
            handleMouseleave () {
                if (this.trigger !== 'hover' || this.confirm) {
                    return false;
                }
                this.showPopper = false;
            },
            cancel () {
                this.showPopper = false;
                this.$emit('on-cancel');
            },
            ok () {
                this.showPopper = false;
                this.$emit('on-ok');
            },
            getInputChildren () {
                const $input = this.$refs.reference.querySelectorAll('input');
                const $textarea = this.$refs.reference.querySelectorAll('textarea');
                let $children = null;

                if ($input.length) {
                    $children = $input[0];
                } else if ($textarea.length) {
                    $children = $textarea[0];
                }

                return $children;
            }
        },

        mounted () {
            // if trigger and children is input or textarea,listen focus & blur event
            if (this.trigger === 'focus') {
                const $children = this.getInputChildren();
                if ($children) {
                    $children.addEventListener('focus', this.handleFocus, false);
                    $children.addEventListener('blur', this.handleBlur, false);
                    this.isInput = true;
                }
            }
        },
        beforeDestroy () {
            const $children = this.getInputChildren();
            if ($children) {
                $children.removeEventListener('focus', this.handleFocus, false);
                $children.removeEventListener('blur', this.handleBlur, false);
            }
        }
    }
</script>