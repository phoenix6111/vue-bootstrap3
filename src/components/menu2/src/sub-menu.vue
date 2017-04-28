<template lang="html">
    <li :class="classes">
        <a href="javascript:void(0)" @click="handleClick">
            <slot name="title">
                <Icon :type="icon" v-if="!!icon"></Icon>
                {{title}}
            </slot>
        </a>
        <transition v-on:before-enter="beforeEnter"
                    v-on:enter="enter"
                    v-on:after-enter="afterEnter"
                    v-on:before-leave="beforeLeave"
                    v-on:leave="leave"
                    v-on:after-leave="afterLeave">
            <ul v-show="toggled">
                <slot></slot>
            </ul>
        </transition>

    </li>
</template>

<script>
    import Icon from '../../icon';
    import Emitter from '../../../mixins/emitter';
    import MenuMixins from './menu-mixins';
    import {addClass, removeClass} from '../../../utils/dom';

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

            beforeEnter(el) {
                addClass(el, 'collapse-transition');
                if (!el.dataset) el.dataset = {};

                el.dataset.oldPaddingTop = el.style.paddingTop;
                el.dataset.oldPaddingBottom = el.style.paddingBottom;

                el.style.height = '0';
                el.style.paddingTop = 0;
                el.style.paddingBottom = 0;
            },

            enter(el) {
                el.dataset.oldOverflow = el.style.overflow;
                if (el.scrollHeight !== 0) {
                    el.style.height = el.scrollHeight + 'px';
                    el.style.paddingTop = el.dataset.oldPaddingTop;
                    el.style.paddingBottom = el.dataset.oldPaddingBottom;
                } else {
                    el.style.height = '';
                    el.style.paddingTop = el.dataset.oldPaddingTop;
                    el.style.paddingBottom = el.dataset.oldPaddingBottom;
                }

                el.style.overflow = 'hidden';
            },

            afterEnter(el) {
                // for safari: remove class then reset height is necessary
                removeClass(el, 'collapse-transition');
                el.style.height = '';
                el.style.overflow = el.dataset.oldOverflow;
            },

            beforeLeave(el) {
                if (!el.dataset) el.dataset = {};
                el.dataset.oldPaddingTop = el.style.paddingTop;
                el.dataset.oldPaddingBottom = el.style.paddingBottom;
                el.dataset.oldOverflow = el.style.overflow;

                el.style.height = el.scrollHeight + 'px';
                el.style.overflow = 'hidden';
            },

            leave(el) {
                if (el.scrollHeight !== 0) {
                    // for safari: add class after set height, or it will jump to zero height suddenly, weired
                    addClass(el, 'collapse-transition');
                    el.style.height = 0;
                    el.style.paddingTop = 0;
                    el.style.paddingBottom = 0;
                }
            },

            afterLeave(el) {
                removeClass(el, 'collapse-transition');
                el.style.height = '';
                el.style.overflow = el.dataset.oldOverflow;
                el.style.paddingTop = el.dataset.oldPaddingTop;
                el.style.paddingBottom = el.dataset.oldPaddingBottom;
            }
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