<template lang="html">
    <!--<div class="dropdown dropup">
        <a href="#" class="dropdown-toggle btn btn-warning">Warning</a>
        <ul class="dropdown-menu dropdown-menu-right">
            <li><a role="menuitem" tabindex="-1" href="#">Action</a>
            </li>
            <li><a role="menuitem" tabindex="-1" href="#">Another
                action</a></li>
            <li><a role="menuitem" tabindex="-1" href="#">Something else
                here</a></li>
            <li class="divider"></li>
            <li><a role="menuitem" tabindex="-1" href="#">Separated
                link</a></li>
        </ul>
    </div>-->
    <div class="dropdown" :class="{'dropup':dropup}"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave">
        <slot name="trigger"></slot>
        <slot name="menu"></slot>
    </div>
</template>
<script>
    import DropdownMenu from '../../dropdown-menu/src/dropdown-menu';
    import { oneOf } from '../../utils/assist';

    export default {
        name:'Dropdown',
        props: {
            trigger: {
                validator(value) {
                    return oneOf(value,['click','hover','custom']);
                },
                default:'hover'
            },
            visible: {
                type:Boolean,
                default:false,
            }
        },
        methods: {
            handleClick () {
                if (this.trigger === 'custom') return false;
                if (this.trigger !== 'click') {
                    return false;
                }
                this.visible = !this.visible;
            },
            handleMouseenter () {
                if (this.trigger === 'custom') return false;
                if (this.trigger !== 'hover') {
                    return false;
                }
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.visible = true;
                }, 250);
            },
            handleMouseleave () {
                if (this.trigger === 'custom') return false;
                if (this.trigger !== 'hover') {
                    return false;
                }
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.visible = false;
                }, 150);
            },
            handleClose () {
                if (this.trigger === 'custom') return false;
                if (this.trigger !== 'click') {
                    return false;
                }
                this.visible = false;
            },
            hasParent () {
                const $parent = this.$parent.$parent;
                if ($parent && $parent.$options.name === 'Dropdown') {
                    return $parent;
                } else {
                    return false;
                }
            }
        },
        watch: {
            visible(value) {
                this.$emit('on-visible-change', val);
            }
        }
    }
</script>