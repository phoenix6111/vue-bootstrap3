<template lang="html">
    <div :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>

<script>
    import { getStyle } from '../../../utils/assist';

    export default {
        name:'select-dropdown',
        data () {
            return {
                width: '',
                visible:false
            };
        },
        computed: {
            classes(){
                return [
                    'dropdown-menu',
                    {
                        [`dropdown-menu-${this.align}`]: !!this.align
                    }
                ];
            },
            styles () {
                let style = {};
                if (this.width) style.minWidth = `${this.width}px`;
                return style;
            }
        },
        methods:{
            update() {
                // set a height for parent is Modal and Select's width is 100%
                if (this.$parent.$options.name === 'BsSelect') {
                    this.width = parseInt(getStyle(this.$parent.$el, 'width'));
                }
            }
        },
        created() {
            this.$on('on-update',this.update);
        }
    }
</script>