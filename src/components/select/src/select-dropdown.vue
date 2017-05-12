<template lang="html">
    <div :class="classes" :style="styles">
        <slot></slot>
    </div>
</template>

<script>
    import { getStyle } from '../../../utils/assist';
    import Popper from '../../../utils/vue-popper';

    export default {
        name:'SelectDropdown',
        mixins: [Popper],
        props: {
            placement: {
                default: 'bottom-start'
            },

            boundariesPadding: {
                default: 0
            },

            popperOptions: {
                default() {
                    return {
                        forceAbsolute: true,
                        gpuAcceleration: false
                    };
                }
            }
        },
        data () {
            return {
                width: '',
            };
        },
        computed: {
            classes(){
                return [
                    'dropdown-menu',this.popperClass,
                    {
                        [`dropdown-menu-${this.align}`]: !!this.align
                    }
                ];
            },
            styles () {
                let style = {};
                if (this.width) style.minWidth = `${this.width}px`;
                return style;
            },
            popperClass() {
                return this.$parent.popperClass;
            }
        },
        methods:{
            update() {
                // set a height for parent is Modal and Select's width is 100%
                if (this.$parent.$options.name === 'BsSelect') {
                    this.width = parseInt(getStyle(this.$parent.$el, 'width'));
                }

                this.updatePopper();
            }
        },
        /*created() {
            this.$on('on-update',this.update);
        },*/
        mounted() {
            this.referenceElm = this.$parent.$refs.reference;
            this.$parent.popperElm = this.popperElm = this.$el;
            this.$on('updatePopper', this.update);
            this.$on('destroyPopper', this.destroyPopper);
        },
        beforeDestroy () {
            this.doDestroy();
        }
    }
</script>