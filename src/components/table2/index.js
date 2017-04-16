import ElTable from './src/table';

ElTable.install = Vue => {
    Vue.component(ElTable.name,ElTable);
}

export default ElTable;