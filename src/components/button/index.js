import IButton from './src/button';

IButton.install = (Vue) => {
    Vue.component(IButton.name,IButton);
}

export default IButton;