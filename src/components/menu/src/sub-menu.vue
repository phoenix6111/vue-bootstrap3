<template lang="html">
    <li :class="classes" v-clickoutside="handleClose">
        <template v-if="rootMenu.mode === 'horizontal'">
            <a class="dropdown-toggle"
               ref="submenu-title"
               href="javascript:void(0)"
               aria-haspopup="true"
               aria-expanded="false">
                <slot name="title">
                    <Icon :type="icon" v-if="!!icon"></Icon>
                    {{title}}
                </slot>
            </a>
            <transition name="slide-up">
                <ul v-show="opened" class="dropdown-menu">
                    <slot></slot>
                </ul>
            </transition>
        </template>

        <template v-else>
            <a class="sub-menu-title"
               ref="submenu-title"
               :style="paddingStyle"
               href="javascript:void(0)">
                <slot name="title">
                    <Icon :type="icon" v-if="!!icon"></Icon>
                    {{title}}
                </slot>
            </a>
            <CollapseTransition>
                <ul v-show="opened" class="menu">
                    <slot></slot>
                </ul>
            </CollapseTransition>
        </template>

    </li>
</template>

<script>
    import Icon from '../../icon';
    import Emitter from '../../../mixins/emitter';
    import MenuMixins from './menu-mixins';
    import {addClass, removeClass} from '../../../utils/dom';
    import CollapseTransition from '../../../transitions/collapse-transition';
    import clickoutside from '../../../directives/clickoutside';

    export default {
        name: 'ISubMenu',
        componentName: 'ISubMenu',
        mixins: [Emitter, MenuMixins],
        components: {Icon,CollapseTransition},
        directives: {clickoutside},
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
                timeout: null,
                items: {},
                subMenus: {}
            };
        },
        computed: {
            active: {
                cache: false,
                get() {
                    let isActive = false;
                    const items = this.items;

                    Object.keys(items).forEach(_path => {
                        if (items[_path].active) {
                            isActive = true;
                        }
                    });

                    const submenus = this.subMenus;
                    Object.keys(submenus).forEach(_path => {
                        if (submenus[_path].active) {
                            isActive = true;
                        }
                    });

                    return isActive;

                }
            },
            opened() {
                return this.rootMenu.openedMenus.indexOf(this.path) > -1;
            },
            classes() {
                return [
                    'sub-menu',
                    {
                        'dropdown':this.rootMenu.mode === 'horizontal',
                        'menu-item':this.rootMenu.mode === 'horizontal',
                        'active': this.active,
                        'open': this.opened
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
                this.dispatch('IMenu', 'submenu-click', this);
            },
            handleClose() {
                if(this.rootMenu.mode === 'horizontal') {
                    clearTimeout(this.timeout);
                    this.rootMenu.closeMenu(this.path, this.indexPath);
                }
            },
            handleMouseenter() {
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.rootMenu.openMenu(this.path, this.indexPath);
                }, 300);
            },
            handleMouseleave() {
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.rootMenu.closeMenu(this.path, this.indexPath);
                }, 300);
            },
            initEvents() {
                let {
                    rootMenu,
                    handleMouseenter,
                    handleMouseleave,
                    handleClick
                } = this;
                let triggerElm;

                if (rootMenu.mode === 'horizontal' && rootMenu.menuTrigger === 'hover') {
                    triggerElm = this.$el;
                    triggerElm.addEventListener('mouseenter', handleMouseenter);
                    triggerElm.addEventListener('mouseleave', handleMouseleave);
                } else {
                    triggerElm = this.$refs['submenu-title'];
                    triggerElm.addEventListener('click', handleClick);
                }
            },
        },
        created() {
            this.parentMenu.addSubMenu(this);
            this.rootMenu.addSubMenu(this);
        },
        beforeDestroy() {
            this.parentMenu.removeSubMenu(this);
            this.rootMenu.removeSubMenu(this);
        },
        mounted() {
            this.initEvents();
        }
    }
</script>