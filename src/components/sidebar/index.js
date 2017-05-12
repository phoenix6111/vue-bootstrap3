import Sidebar from './src/sidebar';

Sidebar.install = Vue => {
    Vue.component(Sidebar.name,Sidebar);
}

export default Sidebar;