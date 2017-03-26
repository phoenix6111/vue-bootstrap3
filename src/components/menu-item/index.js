import MenuItem from '../menu/src/menu-item';

MenuItem.install = (Vue) => {
    Vue.component(MenuItem.name,MenuItem);
}

export default MenuItem;