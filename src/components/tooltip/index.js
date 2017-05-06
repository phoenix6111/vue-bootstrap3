import Tooltip from './src/main.js';

Tooltip.install = (Vue) => {
    Vue.component(Tooltip.name,Tooltip);
}

export default Tooltip;