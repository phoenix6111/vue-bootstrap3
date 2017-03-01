import iButton from './src/button';

iButton.install = (Vue) => {
    Vue.component(iButton.name,iButton);
}

export default iButton;