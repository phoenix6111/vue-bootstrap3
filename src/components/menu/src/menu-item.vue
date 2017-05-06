<template lang="html">
    <li :class="classes">
        <a href="javascript:void(0)" @click="handleClick" :style="paddingStyle">
            <slot>
                <Icon :type="icon" v-if="!!icon"></Icon>
                {{title}}
            </slot>
        </a>
    </li>
</template>

<script>
    import Icon from '../../icon';
    import Emitter from '../../../mixins/emitter';
    import MenuMixins from './menu-mixins';

    export default {
        name: 'IMenuItem',
        componentName: 'IMenuItem',
        mixins: [Emitter, MenuMixins],
        components: {Icon},
        props: {
            icon: String,
            title: String,
            path: {
                type: String,
                required: true,
            },
            route: Object,
            disabled: {
                type: Boolean,
                required: false
            }
        },
        computed: {
            active() {
                return this.path === this.rootMenu.activedPath;
            },
            classes() {
                return [
                    'menu-item',
                    {
                        'active':this.active,
                        'disabled':this.disabled
                    }
                ];
            }
        },
        methods: {
            handleClick() {
                this.dispatch('IMenu', 'item-click', this);
                this.$emit('click', this);
            }
        },
        created() {
            this.parentMenu.addItem(this);
            this.rootMenu.addItem(this);
        },
        beforeDestroy() {
            this.parentMenu.removeItem(this);
            this.rootMenu.removeItem(this);
        }

    }
</script>