<template>
    <div :class="[prefixCls]" @mouseenter="handleShowPopper" @mouseleave="handleClosePopper">
        <div :class="[prefixCls + '-rel']" ref="reference">
            <slot></slot>
        </div>
        <transition name="fade">
            <div :class="[prefixCls]" ref="popper"
                 v-show="!disabled && (showPopper || always)">
                <div class="[prefixCls + '-arrow']"></div>
                <div class="[prefixCls + '-inner']">
                    <slot name="content">{{ content }}</slot>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
    import Popper from '../../../utils/vue-popper';
    import {oneOf} from '../../../utils/assist';

    const prefixCls = 'i-tooltip';

    export default {
        name: 'Tooltip',
        mixins: [Popper],
        props: {
            placement: {
                validator (value) {
                    return oneOf(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end'
                        , 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']);
                },
                default: 'bottom'
            },
            content: {
                type: [String, Number],
                default: ''
            },
            delay: {
                type: Number,
                default: 0
            },
            disabled: {
                type: Boolean,
                default: false
            },
            controlled: {    // under this prop,Tooltip will not close when mouseleave
                type: Boolean,
                default: false
            },
            always: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                prefixCls: prefixCls
            };
        },
        methods: {
            handleShowPopper() {
                this.timeout = setTimeout(() => {
                    this.showPopper = true;
                }, this.delay);
            },
            handleClosePopper() {
                clearTimeout(this.timeout);
                if (!this.controlled) {
                    this.showPopper = false;
                }
            }
        }
    };
</script>
