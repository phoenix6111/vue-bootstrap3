import Tooltip from './src/tooltip';

Tooltip.install = (Vue) => {
    Vue.component(Tooltip.name,Tooltip);
}

export default Tooltip;