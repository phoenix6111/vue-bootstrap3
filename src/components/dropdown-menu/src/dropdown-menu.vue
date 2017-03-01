<template lang="html">
    <ul :class="classes"
        v-show="visible" :align="align"><slot></slot></ul>
</template>

<script>
    import { oneOf } from '../../utils/assist';

    export default {
        props: {
            align: {
                type:String,
                validator(value) {
                    return oneOf(value, ['left', 'right']);
                }
            },
            visible: {
                type:Boolean,
                default:false,
            }
        },
        computed: {
            classes:[
                'dropdown-menu',
                {
                    [`dropdown-menu-${this.align}`]: !!this.align
                }
            ]
        }
    }
</script>