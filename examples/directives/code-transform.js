export default {
    install(Vue) {
        Vue.directive('code-transform', {
            bind(el,binding,vnode) {
                /*console.log("bind....");
                console.log(el);*/
                // console.log(vnode.context);
            },
            inserted(el,binding,vnode) {
                console.log("inserted....");
                console.log(el);
            },
            /*update(el,binding,vnode) {
                console.log("update....");
                console.log(el);
            },
            componentUpdated(el,binding,vnode) {
                console.log("componentUpdated....");
                console.log(el);
            },*/

        });
    }
}