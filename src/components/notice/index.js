import Notification from '../base/notification';

const prefixCls = 'notification';
const iconPrefixCls = 'zmdi';
const prefixKey = 'i_notification_key_';

let top = 24;
let defaultDuration = 4500;
let noticeInstance;
let name = 1;

const iconTypes = {
    'info': 'info',
    'success': 'check-circle',
    'warning': 'alert-circle',
    'danger': 'close-circle'
};

function getNoticeInstance () {
    noticeInstance = noticeInstance || Notification.newInstance({
            prefixCls: prefixCls,
            styles: {
                top: `${top}px`,
                right: 0
            }
        });

    return noticeInstance;
}

function notice (type, options) {
    const title = options.title || '';
    const desc = options.desc || '';
    const noticeKey = options.name || `${prefixKey}${name}`;
    const onClose = options.onClose || function () {};
    // todo const btn = options.btn || null;
    const duration = (options.duration === 0) ? 0 : options.duration || defaultDuration;
    const theme = options.theme || 'default';

    name++;

    let instance = getNoticeInstance();

    let content = "";

    if (type == 'normal') {
        content = `
            <div class="${prefixCls}-heading">${title}</div>
            <div class="${prefixCls}-desc">${desc}</div>
        `;
    } else {
        const iconType = iconTypes[type] || iconTypes['info'];

        if(options.showIcon) {
            content += `
                <span class="alert-icon">
                    <i class="${iconPrefixCls} ${iconPrefixCls}-${iconType}"></i>
                </span>
             `;
        }

        if(!!title) {
            content += `
                <div class="alert-heading">${title}</div>
            `;
        }

        if(!!desc) {
            content += `
                <div class="alert-desc">${desc}</div>
            `;
        }

    }

    instance.notice({
        name: noticeKey.toString(),
        type:type,
        duration: duration,
        styles: {},
        transitionName: 'move-notice',
        content: content,
        onClose: onClose,
        closable: true,
        showIcon:options.showIcon || false,
        theme:theme
    });
}

export default {
    open (options,type) {
        const _type = type || 'default';
        return notice(_type, options);
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
    inverse (options) {
        return notice('inverse', options);
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