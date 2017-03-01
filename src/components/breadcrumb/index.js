import Breadcrumb from './src/breadcrumb';
import BreadcrumbItem from './src/breadcrumb-item';

Breadcrumb.item = BreadcrumbItem;

Breadcrumb.install = (Vue) => {
    Vue.component(Breadcrumb.name,Breadcrumb);
}

export default Breadcrumb;