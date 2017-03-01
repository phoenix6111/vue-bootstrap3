import DropdownItem from './src/dropdown-item';

DropdownItem.install = (Vue) => {
    Vue.component(DropdownItem.name,DropdownItem);
}

export default DropdownItem;