import swal from 'sweetalert2';

const VueSwal = {};

VueSwal.install = Vue => {
    Vue.prototype.$swal = swal;
}

export default VueSwal;