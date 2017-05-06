import IProgress from './src/progress';

IProgress.install = (Vue) => {
    Vue.component(IProgress.name,IProgress);
}

export default IProgress;