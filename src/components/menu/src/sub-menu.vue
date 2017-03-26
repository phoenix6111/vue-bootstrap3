<template lang="html">
    <li :class="classes">
        <a href="javascript:void(0)" @click="handleClick">
            <slot name="title">
                <Icon :type="icon" v-if="!!icon"></Icon>
                {{title}}
            </slot>
        </a>
        <ul v-show="toggled">
            <slot></slot>
        </ul>
    </li>
</template>

<script>
    import Icon from '../../icon';
    import Emitter from '../../../mixins/emitter';
    import MenuMixins from './menu-mixins';

    export default {
        name: 'SubMenu',
        componentName: 'SubMenu',
        mixins: [Emitter, MenuMixins],
        components: {Icon},
        props: {
            icon: String,
            title: String,
            path: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                items: {},
                subMenus: {}
            };
        },
        computed: {
            active: {
                cache: false,
                get() {
                    const items = this.items;

                    Object.keys(items).forEach(_path => {
                        if (items[_path].active) {
                            return true;
                        }
                    });

                    const submenus = this.subMenus;
                    Object.keys(submenus).forEach(_path => {
                        if (submenus[_path].active) {
                            return true;
                        }
                    });

                    return false;

                }
            },
            toggled() {
                return this.rootMenu.openedMenus.indexOf(this.path) > -1;
            },
            classes() {
                return [
                    'sub-menu',
                    {
                        'active': this.active,
                        'toggled': this.toggled
                    }
                ];
            }
        },
        methods: {
            addItem(item) {
                this.$set(this.items, item.path, item);
            },
            removeItem(item) {
                delete this.items[item.path];
            },
            addSubMenu(item) {
                this.$set(this.subMenus, item.path, item);
            },
            removeSubMenu(item) {
                delete this.subMenus[item.path];
            },
            handleClick() {
                this.dispatch('Menu', 'submenu-click', this);
            },
        },
        created() {
            this.parentMenu.addSubMenu(this);
            this.rootMenu.addSubMenu(this);
        },
        beforeDestroy() {
            this.parentMenu.removeSubMenu(this);
            this.rootMenu.removeSubMenu(this);
        }
    }
</script>