<template lang="html">
    <transition :name="transition" @after-leave="doDestroy">
        <ul :class="classes" v-show="showPopper">
            <slot></slot>
        </ul>
    </transition>
</template>

<script>
    import { oneOf } from '../../../utils/assist';
    import Popper from '../../../utils/vue-popper';

    export default {
        name:'DropdownMenu',
        componentName:'DropdownMenu',
        mixins: [Popper],
        data() {
            return {
                transition:'zoom-in-top'
            }
        },
        created() {
            this.$on('updatePopper', this.updatePopper);
            this.$on('visible', val => {
                this.showPopper = val;
            });
        },
        mounted() {
            this.$parent.popperElm = this.popperElm = this.$el;
            this.referenceElm = this.$parent.$el;

            this.transition = this.$parent.transition || 'zoom-in-top';

        },
        computed: {
            classes(){
                return [
                    'dropdown-menu',this.$parent.dropdownClass
                ];
            }
        },
        watch: {
            '$parent.placement': {
                immediate: true,
                handler(val) {
                    this.currentPlacement = val;
                }
            }
        }
    }
</script>