import Alert from './src/alert';

Alert.install = (Vue) => {
    Vue.component(Alert.name,Alert);
}

export default Alert;