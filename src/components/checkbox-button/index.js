import CheckboxButton from './src/checkbox-button';

CheckboxButton.install = Vue => {
    Vue.component(CheckboxButton.name,CheckboxButton);
}

export default CheckboxButton;