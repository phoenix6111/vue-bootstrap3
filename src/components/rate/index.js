import Rate from './src/rate';

Rate.install = (Vue) => {
    Vue.component(Rate.name,Rate);
}

export default Rate;