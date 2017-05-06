import Notification from '../base/notification';

const prefixCls = 'snackbar';
const iconPrefixCls = 'zmdi';
const prefixKey = 'i_snackbar_key_';

let top = 24;
let defaultDuration = 3000;
let noticeInstance;
let name = 1;

const iconTypes = {
    'inverse':'notifications',
    'info': 'info',
    'success': 'check-circle',
    'warning': 'alert-circle',
    'danger': 'close-circle'
};

function getNoticeInstance () {
    noticeInstance = noticeInstance || Notification.newInstance({
            prefixCls: prefixCls,
            styles: {
                width:'100%',
                top:0,
            }
        });

    return noticeInstance;
}

function notice (type, options) {
    const title = options.title || '';
    const noticeKey = options.name || `${prefixKey}${name}`;
    const onClose = options.onClose || function () {};
    const showIcon = options.showIcon || true;
    // todo const btn = options.btn || null;
    const duration = (options.duration === 0) ? 0 : options.duration || defaultDuration;

    name++;

    let instance = getNoticeInstance();

    let content = "";

    const iconType = iconTypes[type];

    if(showIcon) {
        content += `
                <span class="alert-icon">
                    <i class="${iconPrefixCls} ${iconPrefixCls}-${iconType}"></i>
                </span>
             `;
    }

    if(!!title) {
        content += `
                <div class="alert-msg">${title}</div>
            `;
    }

    instance.notice({
        name: noticeKey.toString(),
        type:type,
        duration: duration,
        styles: {'position':'fixed','top':0,'left':0,'right':0},
        transitionName: 'move-up',
        content: content,
        onClose: onClose,
        closable: true,
        showIcon:options.showIcon || false,
    });
}

export default {
    open (options) {
        return notice('inverse', options);
    },
    info (options) {
        return notice('info', options);
    },
    success (options) {
        return notice('success', options);
    },
    warning (options) {
        return notice('warning', options);
    },
    danger (options) {
        return notice('danger', options);
    },
    config (options) {
        if (options.top) {
            top = options.top;
        }
        if (options.duration || options.duration === 0) {
            defaultDuration = options.duration;
        }
    },
    close (name) {
        if (name) {
            name = name.toString();
            if (noticeInstance) {
                noticeInstance.remove(name);
            }
        } else {
            return false;
        }
    },
    destroy () {
        let instance = getNoticeInstance();
        noticeInstance = null;
        instance.destroy();
    }
};