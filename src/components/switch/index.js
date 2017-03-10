import ISwitch from './src/switch';

ISwitch.install = (Vue) => {
    Vue.install(ISwitch.name,ISwitch);
}

export default ISwitch;