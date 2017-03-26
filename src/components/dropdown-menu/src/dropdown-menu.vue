<template lang="html">
    <transition :name="transition">
        <ul :class="classes" v-show="visible">
            <slot></slot>
        </ul>
    </transition>
</template>

<script>
    import { oneOf } from '../../../utils/assist';

    export default {
        name:'DropdownMenu',
        computed: {
            classes(){
                return [
                    'dropdown-menu',
                    {
                        [`dropdown-menu-${this.align}`]: !!this.align
                    }
                ];
            },
            visible() {
                let parent = this.$parent;
                return parent && parent.visible;
            },
            direction() {
                let parent = this.$parent;
                return parent && parent.direction;
            },
            align() {
                let parent = this.$parent;
                return parent && parent.align;
            },
            transition () {
                return this.direction === 'up' ? 'slide-down' : 'slide-up';
            }
        }
    }
</script>