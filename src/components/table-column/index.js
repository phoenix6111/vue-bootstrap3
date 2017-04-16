import ElTableColumn from '../table/src/table-column';

ElTableColumn.install = Vue => {
    Vue.component(ElTableColumn.name,ElTableColumn);
}

export default ElTableColumn;