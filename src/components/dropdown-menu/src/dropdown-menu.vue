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
                return this.$parent.visible;
            },
            direction() {
                return this.$parent.direction;
            },
            align() {
                return this.$parent.align;
            },
            transition () {
                return this.direction === 'up' ? 'slide-down' : 'slide-up';
            }
        }
    }
</script>