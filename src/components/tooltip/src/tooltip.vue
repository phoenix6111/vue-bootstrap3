<template>
    <div @mouseenter="handleShowPopper" @mouseleave="handleClosePopper" class="tooltip-wrap">
        <div class="tooltip-rel" ref="reference">
            <slot></slot>
        </div>
        <transition :name="transition" :onAfterLeave="doDestroy">
            <div :class="classes" role="tooltip" ref="popper" v-show="!disabled && showPopper">
                <div class="tooltip-arrow" v-if="visibleArrow"></div>
                <div class="tooltip-inner">
                    <slot name="content">{{content}}</slot>
                </div>
            </div>
        </transition>
    </div>

</template>
<script>
    import Popper from '../../../utils/vue-popper';
    import debounce from 'throttle-debounce/debounce';
    import {oneOf} from '../../../utils/assist';

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
            openDelay: {//廷迟显示
                type: Number,
                default: 0
            },
            disabled: Boolean,
            manual: Boolean,//手动控制显示
            effect: {//主题：dark 或 light
                validator(value) {
                    return oneOf(value,['dark','light']);
                },
                default: 'dark'
            },
            popperClass: String,//为 Tooltip 的 popper 添加类名
            content: String,//显示的内容
            visibleArrow: {//是否显示 Tooltip 箭头
                type:Boolean,
                default: true
            },
            transition: {//定义渐变动画
                type: String,
                default: 'fade'
            },
            popperOptions: {//popper.js 的参数
                type:Object,
                default() {
                    return {
                        boundariesPadding: 10,
                        gpuAcceleration: false
                    };
                }
            },
            appendToBody:false
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
            debounceClose() {
                console.log("debounceClose...outer ");
                debounce(200, () => {
                    console.log("debounceClose...");
                    this.handleClosePopper();
                });
            },
            handleShowPopper() {
                if (this.manual) return;
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.showPopper = true;
                }, this.openDelay);
            },

            handleClosePopper() {
                if (this.manual) return;
                clearTimeout(this.timeout);
                this.showPopper = false;
            },

            togglePreventClose() {
                this.preventClose = !this.preventClose;
            }
        }
    }
</script>