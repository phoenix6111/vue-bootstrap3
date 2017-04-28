import ICircle from './src/circle.vue';

ICircle.install = Vue => {
    Vue.component(ICircle.name,ICircle);
};

export default ICircle;