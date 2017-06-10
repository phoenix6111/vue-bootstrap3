<template>
    <div v-show="isActive" :class="classes">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        props: {
            label: {
                type:String,
                required:true
            },
            active: {
                type:Boolean,
                default:false
            },
            name: {
                type:[String,Number]
            },
            icon: {
                type:String
            }
        },
        data() {
            return {
                isActive:false,
                tabName:''
            }
        },
        computed: {
            classes() {
                return [
                    'tab-pane',
                    {'active':this.isActive}
                ];
            }
        },
        mounted() {
            this.isActive = this.active;
            if(typeof this.name != 'undefined' && this.name ) {
                this.tabName = this.name;
            }
        },
    }
</script>