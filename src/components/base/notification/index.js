import Notification from './notification.vue';
import Vue from 'vue';
import { camelcaseToHyphen } from '../../../utils/assist';

Notification.newInstance = properties => {
    const _props = properties || {};

    console.log(_props);

    let props = '';
    Object.keys(_props).forEach(prop => {
        props += ' :' + camelcaseToHyphen(prop) + '=' + prop;
    });

    console.log(props);

    const div = document.createElement('div');
    div.innerHTML = `<notification${props}></notification>`;
    document.body.appendChild(div);

    /*const notificationVNode = new Vue({
        render(h) {
            return (
                <notification {...}></notification>
            );
        },
        data:_props,
        components: {Notification}
    });*/

    const notification = new Vue({
        el: div,
        data: _props,
        components: { Notification }
    }).$children[0];

    return {
        notice (noticeProps) {
            notification.add(noticeProps);
        },
        remove (name) {
            notification.close(name);
        },
        component: notification,
        destroy () {
            document.body.removeChild(div);
        }
    };
};

export default Notification;
