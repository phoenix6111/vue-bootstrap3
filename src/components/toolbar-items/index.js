import ToolbarItems from '../toolbar/src/toolbar-items';

ToolbarItems.install = Vue => {
    Vue.component(ToolbarItems.name,ToolbarItems);
}

export default ToolbarItems;