<template>
    <transition :name="transition">
        <div :class="classes" v-show="active">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
    export default {
        props: {
            isActive: {
                type: Boolean,
                default :false
            },
            transition: {
                type: String,
                default: 'c-slide'
            }
        },
        data() {
            return {
                active:false,
                reverse:false,
            }
        },
        mounted() {
            this.active = this.isActive;
        },
        computed: {
            classes() {
                return [
                  'item',
                    {
                        'reverse': this.reverse
                    }
                ];
            }
        }
    }
</script>