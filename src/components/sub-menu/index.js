import ISubMenu from '../menu/src/sub-menu';

ISubMenu.install = (Vue) => {
    Vue.component(ISubMenu.name,ISubMenu);
}

export default ISubMenu;