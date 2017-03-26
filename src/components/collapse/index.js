import Collapse from './src/collapse';
import CollapseItem from './src/collapse-item';

Collapse.install = (Vue) => {
    Vue.component(Collapse.name,Collapse);
}

Collapse.item = CollapseItem;

export default Collapse;