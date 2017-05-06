import IMenu from './src/menu';

IMenu.install = (Vue) => {
    Vue.component(IMenu.name,IMenu);
}

export default IMenu;