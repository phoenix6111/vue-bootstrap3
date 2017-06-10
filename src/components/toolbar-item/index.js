import ToolbarItem from '../toolbar/src/toolbar-item';

ToolbarItem.install = Vue => {
    Vue.component(ToolbarItem.name,ToolbarItem);
}

export default ToolbarItem;