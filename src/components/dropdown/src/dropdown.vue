<template>
    <div :class="classes"
         v-clickoutside="handleClose">

        <!--<ButtonGroup v-if="splitButton" :size="size">
            <IButton :type="type">
                <slot></slot>
            </IButton>
            <IButton :type="type"
                     class="dropdown-toggle"
                     @click="handleClick"
                     @mouseenter.native="handleMouseEnter"
                     @mouseleave.native="handleMouseLeave">
                <span class="caret"></span>
                <span class="sr-only">Split button dropdowns</span>
            </IButton>
        </ButtonGroup>-->
        <SplitButton v-if="splitButton"
                     :size="size"
                     :type="type"
                     @caret-click="handleClick"
                     @caret-mouse-enter="handleMouseEnter"
                     @caret-mouse-leave="handleMouseLeave">
            <slot></slot>
        </SplitButton>

        <span class="dropdown-trigger"
              @click="handleClick"
              @mouseenter="handleMouseEnter"
              @mouseleave="handleMouseLeave"
              v-else>
            <slot></slot>
        </span>

        <slot name="list"></slot>
    </div>
</template>
<script>
    import clickoutside from '../../../directives/clickoutside';
    import {oneOf} from '../../../utils/assist';
    import Emitter from '../../../mixins/emitter';
    import SplitButton from '../../split-button';

    const prefixCls = 'dropdown';

    export default {
        name: 'Dropdown',
        componentName: 'Dropdown',
        mixins: [Emitter],
        directives: {clickoutside},
        props: {
            trigger: {
                validator (value) {
                    return oneOf(value, ['click', 'hover']);
                },
                default: 'hover'
            },
            align: {
                validator (value) {
                    return oneOf(value, ['left', 'right']);
                },
                default: 'left'
            },
            direction: {
                validator(value) {
                    return oneOf(value, ['down', 'up']);
                },
                default: 'down'
            },
            hideOnClick: {
                type: Boolean,
                default: true
            },
            splitButton: {
                type: Boolean,
                default: false
            },
            type: {
                validator (value) {
                    return oneOf(value, ['default', 'primary', 'info', 'success', 'warning', 'danger']);
                },
                default: 'default'
            },
            size: {
                validator (value) {
                    return oneOf(value, ['lg', 'sm','xs']);
                },
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                visible: false
            };
        },
        computed: {
            classes() {
                return [
                    'dropdown',
                    {
                        'dropup': this.direction == 'up'
                    }
                ];
            },
        },
        watch: {
            visible(val) {
                this.broadcast('DropdownMenu', 'visible', val);
            }
        },
        methods: {
            handleClick () {
                if (this.trigger !== 'click') {
                    return false;
                }
                this.visible = !this.visible;
            },
            handleMouseEnter () {
                if (this.trigger !== 'hover') {
                    return false;
                }

                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.visible = true;
                }, 250);
            },
            handleMouseLeave () {
                if (this.trigger !== 'hover') {
                    return false;
                }

                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.visible = false;
                }, 150);
            },
            handleClose () {
                if (this.trigger !== 'click') {
                    return false;
                }
                this.visible = false;
            },
            handleMenuItemClick(command, instance) {
                if (this.hideOnClick) {
                    this.visible = false;
                }
                this.$emit('command', command, instance);
            },
            initEvent() {
                if (this.trigger === 'hover') {
                    let dropdownElm = this.$slots.list[0].elm;

                    dropdownElm.addEventListener('mouseenter', this.handleMouseEnter);
                    dropdownElm.addEventListener('mouseleave', this.handleMouseLeave);
                }
            },
        },
        mounted () {
            this.$on('menu-item-click', this.handleMenuItemClick);
            this.initEvent();
        }
    }
</script>