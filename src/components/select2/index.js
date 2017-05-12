import ElSelect from './src/select';
import ElOption from './src/option';
import ElOptionGroup from './src/option-group';

/* istanbul ignore next */
ElSelect.install = function(Vue) {
  Vue.component(ElSelect.name, ElSelect);
};

// export default Select;
export {ElSelect,ElOption,ElOptionGroup}