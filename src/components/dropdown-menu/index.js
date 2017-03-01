import DropdownMenu from './src/dropdown-menu';

DropdownMenu.install = (Vue) => {
    Vue.component(DropdownMenu.name,DropdownMenu);
}

export default DropdownMenu;