import Modal from './src/modal';

Modal.install = (Vue) => {
    Vue.component(Modal.name,Modal);
};

export default Modal;