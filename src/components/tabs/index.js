import Tabs from './src/tabs';
import TabPane from './src/tab-pane';

Tabs.install = (Vue) => {
    Vue.component(Tabs.name,Tabs);
}

Tabs.TabPane = TabPane;

export default Tabs;
