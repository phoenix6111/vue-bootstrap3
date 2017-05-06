import IMenuItemGroup from '../menu/src/menu-item-group';

IMenuItemGroup.install = Vue => {
    Vue.component(IMenuItemGroup.name,IMenuItemGroup);
}

export default IMenuItemGroup;