import IMenuItem from '../menu/src/menu-item';

IMenuItem.install = (Vue) => {
    Vue.component(IMenuItem.name,IMenuItem);
}

export default IMenuItem;