import MenuItemGroup from '../menu/src/menu-item-group';

MenuItemGroup.install = Vue => {
    Vue.component(MenuItemGroup.name,MenuItemGroup);
}

export default MenuItemGroup;