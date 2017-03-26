<template>
    <div :class="wrapClasses">
        <button type="button"
                ref="btn"
                :class="btnClasses"
                @click="handleBtnClick"
                @mouseenter="handleBtnMouseEnter"
                @mouseleave="handleBtnMouseLeave">
            <slot></slot>
        </button>
        <button type="button"
                ref="caret"
                :class="caretClasses"
                data-toggle="dropdown"
                aria-expanded="false"
                @click="handleCaretClick"
                @mouseenter="handleCaretMouseEnter"
                @mouseleave="handleCaretMouseLeave">
            <span class="caret"></span>
            <span class="sr-only">Split button dropdowns</span>
        </button>
    </div>
</template>

<script>
    import { oneOf } from '../../../utils/assist';

    export default {
        props: {
            type: {
                validator (value) {
                 return oneOf(value, ['default', 'primary', 'info', 'success', 'warning', 'danger']);
                 },
                 default:'default',
            },
            size: {
                validator (value) {
                    return oneOf(value, ['lg', 'sm','xs']);
                },
            },
            disabled: {
                type:Boolean,
                default:false
            }
        },
        computed: {
            wrapClasses() {
                return [
                    'btn-group',
                    {
                        [`btn-group-${this.size}`]: !!this.size,
                    }
                ];
            },
            btnClasses() {
                return [
                    'btn',
                    {
                        [`btn-${this.type}`]: !!this.type,
                        'disabled':this.disabled
                    }
                ];
            },
            caretClasses() {
                return [
                    'btn','dropdown-toggle',
                    {
                        [`btn-${this.type}`]: !!this.type,
                        'disabled':this.disabled
                    }
                ];
            }
        },
        methods: {
            handleBtnClick() {
                this.$emit('btn-click');
            },
            handleBtnMouseEnter() {
                this.$emit('btn-mouse-enter');
            },
            handleBtnMouseLeave() {
                this.$emit('btn-mouse-leave');
            },
            handleCaretClick() {
                this.$emit('caret-click');
            },
            handleCaretMouseEnter() {
                this.$emit('caret-mouse-enter');
            },
            handleCaretMouseLeave() {
                this.$emit('caret-mouse-leave');
            },
        }
    }
</script>