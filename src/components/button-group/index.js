import ButtonGroup from './src/button-group';

/**
 * 用于按钮组
 * @param Vue
 */
ButtonGroup.install = (Vue) => {
    Vue.component(ButtonGroup.name,ButtonGroup);
}

export default ButtonGroup;