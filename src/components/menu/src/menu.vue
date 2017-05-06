<template lang="html">
    <ul :class="classes">
        <slot></slot>
    </ul>
</template>

<script>
    import Emitter from '../../../mixins/emitter';
    import {oneOf} from '../../../utils/assist';

    export default {
        name:'IMenu',
        componentName:'IMenu',
        mixins: [Emitter],
        props: {
            mode: {
                validator(value) {
                    return oneOf(value,['horizontal','vertical']);
                },
                default: 'vertical'
            },
            defaultActive: {
                type: String,
                default: ''
            },
            defaultOpeneds: Array,
            theme: {
                type: String,
                default: 'light'
            },
            uniqueOpened: Boolean,
            router: Boolean,
            menuTrigger: {
                type: String,
                default: 'hover'
            }
        },
        data() {
            return {
                activedPath:this.defaultActive,
                openedMenus:this.defaultOpeneds ? this.defaultOpeneds.slice(0) : [],
                items:{},
                subMenus:{}
            };
        },
        computed: {
            classes() {
                return [
                    'nav',
                    {
                        'nav-stacked':this.mode === 'vertical',
                        'nav-tabs':this.mode === 'horizontal',
                        [`menu-${this.mode}`]:!!this.mode,
                    }
                ];
            }
        },
        watch: {
            defaultActive(value) {
                const item = this.items[value];
                if (item) {
                    this.activedPath = item.path;
                    this.initOpenedMenu();
                } else {
                    this.activedPath = '';
                }

            },
            defaultOpeneds(value) {
                this.openedMenus = value;
            }
        },
        methods: {
            addItem(item) {
                this.$set(this.items,item.path,item);
            },
            removeItem(item) {
                delete this.items[item.path];
            },
            addSubMenu(menu) {
                this.$set(this.subMenus,menu.path,menu);
            },
            removeSubMenu(menu) {
                delete this.subMenus[menu.path];
            },
            openMenu(path,indexPath) {
                let openedMenus = this.openedMenus;
                if(openedMenus.indexOf(path) !== -1) return;

                //如果是uniqueOpened模式，则将其它Menu全部关闭
                if(this.uniqueOpened) {
                    this.openedMenus = this.openedMenus.filter(_path => {
                        return indexPath.indexOf(_path) !== -1;
                    });
                }

                this.openedMenus.push(path);
            },
            closeMenu(path,indexPath) {
                this.openedMenus.splice(this.openedMenus.indexOf(path),1);
            },
            handleItemClick(item) {
                console.log("handle item click");
                let {path,indexPath} = item;
                this.activedPath = item.path;
                this.$emit('select',path,indexPath,item);

                if (this.mode === 'horizontal') {
                    this.openedMenus = [];
                }

                if(this.router) {
                    this.routeToItem(item);
                }
            },
            handleSubMenuClick(subMenu) {
                const {path,indexPath} = subMenu;
                const isOpened = (this.openedMenus.indexOf(path) !== -1);

                if(isOpened) {
                    this.closeMenu(path);
                    this.$emit('close',path,indexPath);
                } else {
                    this.openMenu(path,indexPath);
                    this.$emit('open',path,indexPath);
                }
            },
            routeToItem(item) {
                let route = item.route || item.path;
                try {
                    this.$router.push(route);
                } catch (e) {
                    console.error(e);
                }
            },
            //初始化展开菜单
            initOpenedMenu() {
                if(this.mode === 'horizontal') return;
                const path = this.activedPath;
                const activeItem = this.items[path];
                if (!activeItem) return;

                let indexPath = activeItem.indexPath;
                // 展开该菜单项的路径上所有子菜单
                indexPath.forEach(_path => {
                    let subMenus = this.subMenus[_path];
                    subMenus && this.openMenu(_path, subMenus.indexPath);
                });
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.initOpenedMenu();
                this.$on('item-click', this.handleItemClick);
                this.$on('submenu-click', this.handleSubMenuClick);
            });
        }
    }
</script>