<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                type: String
            },
            selected: {
                type:Boolean,
                default:false
            }
        },
        data() {
            return {
                isActive:false,
            }
        },
        mounted() {
            this.isActive = this.selected;
        },
        computed: {
            classes() {
                return [
                  'item',
                    {'active':this.isActive}
                ];
            }
        }
    }
</script>