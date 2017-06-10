import Vue from 'vue';
import { addClass, removeClass } from '../dom';

let hasBackdrop = false;

const getBackdrop = function() {
    if (Vue.prototype.$isServer) return;

    let backdropDom = PopupManager.backdropDom;
    if (backdropDom) {
        hasBackdrop = true;
    } else {
        hasBackdrop = false;
        backdropDom = new Vue({
            render(h) {
                let backdropVNode = (
                    <div class={this.classes}
                         v-show={this.visible}
                         on-click={this.handleClick}
                        on-touchmove={this.handleTouchmove}
                        style={this.styles}></div>
                );
                let backdropTran = '';
                if(this.fade) {
                    backdropTran = (
                        <transition name="fade">
                            {backdropVNode}
                        </transition>
                    );
                } else {
                    backdropTran = backdropVNode;
                }

                return backdropTran;
            },
            data:{
                visible:false,
                zIndex:2000,
                customClass:[],
                fade:true
            },
            computed: {
                classes() {
                    return [
                        'modal-backdrop',this.customClass
                    ]
                },
                styles() {
                    return {zIndex:this.zIndex};
                }
            },
            methods: {
                handleClick(e) {
                    PopupManager.doOnBackdropClick && PopupManager.doOnBackdropClick();
                },
                handleTouchmove(e) {
                    e.preventDefault();
                    e.stopPropagation();
                },
                show() {
                    this.visible = true;
                },
                hidden() {
                    this.visible = false;
                }
            }
        }).$mount();

        PopupManager.backdropDom = backdropDom;
    }

    return backdropDom;

};

const instances = {};

const PopupManager = {
    zIndex: 2000,

    backdropFade: true,

    getInstance: function(id) {
        return instances[id];
    },

    addOpenedModal:function (id) {
        PopupManager.openedModalStack.push(id);
    },

    removeOpenedModal:function (id) {
        var index = PopupManager.openedModalStack.indexOf(id);
        if(index >=0) {
            PopupManager.openedModalStack.splice(index,1);
        }
    },

    getTopOpenedModal:function () {
        if(PopupManager.openedModalStack.length > 0) {
            var id = PopupManager.openedModalStack[PopupManager.openedModalStack.length-1];
            return PopupManager.getInstance(id);
        } else {
            return '';
        }
    },

    register: function(id, instance) {
        if (id && instance) {
            instances[id] = instance;
        }
    },

    deregister: function(id) {
        if (id) {
            instances[id] = null;
            delete instances[id];
        }
    },

    nextZIndex: function() {
        return PopupManager.zIndex++;
    },

    openedModalStack:[],

    backdropStack: [],

    doOnBackdropClick: function() {
        if(PopupManager.openedModalStack.length > 0) {
            const topItem = PopupManager.getTopOpenedModal();
            if (topItem && topItem.closeOnClickOutside) {
                topItem.handleClose
                    ? topItem.handleClose()
                    : (topItem.handleAction ? topItem.handleAction('cancel') : topItem.close());
            }
        }
    },

    openBackdrop: function(id, zIndex, dom, backdropClass, backdropFade) {
        if (Vue.prototype.$isServer) return;
        if (!id || zIndex === undefined) return;

        this.backdropFade = backdropFade;
        const backdropStack = this.backdropStack;
        for (let i = 0, j = backdropStack.length; i < j; i++) {
            const item = backdropStack[i];
            if (item.id === id) {
                return;
            }
        }

        const backdropDom = getBackdrop();

        if (backdropClass) {
            backdropDom.customClass = backdropClass;
        }

        if (dom && dom.parentNode && dom.parentNode.nodeType !== 11) {
            dom.parentNode.appendChild(backdropDom.$el);
        } else {
            document.body.appendChild(backdropDom.$el);
        }

        if (zIndex) {
            backdropDom.zIndex = zIndex;
        }
        if(!this.backdropFade) {
            backdropDom.fade = false;
        }

        if (!hasBackdrop) {
            backdropDom.show();
        }

        this.backdropStack.push({ id: id, zIndex: zIndex, backdropClass: backdropClass });
    },

    closeBackdrop: function(id) {
        const backdropStack = this.backdropStack;
        const backdropDom = getBackdrop();

        if (backdropStack.length > 0) {
            const topItem = backdropStack[backdropStack.length - 1];
            if (topItem.id === id) {
                if (topItem.backdropClass) {
                    backdropDom.customClass = null;
                }

                backdropStack.pop();
                if (backdropStack.length > 0) {
                    backdropDom.zIndex = backdropStack[backdropStack.length - 1].zIndex;
                }
            } else {
                for (let i = backdropStack.length - 1; i >= 0; i--) {
                    if (backdropStack[i].id === id) {
                        backdropStack.splice(i, 1);
                        break;
                    }
                }
            }
        }

        if (backdropStack.length === 0) {
            backdropDom.hidden();
            if (backdropDom.parentNode) backdropDom.parentNode.removeChild(backdropDom);
            PopupManager.backdropDom = undefined;
        }
    }
};
!Vue.prototype.$isServer && window.addEventListener('keydown', function(event) {
    if (event.keyCode === 27) { // ESC
        if(PopupManager.openedModalStack.length > 0) {
            const topItem = PopupManager.getTopOpenedModal();
            if (topItem && topItem.closeOnPressEsc) {
                topItem.handleClose
                    ? topItem.handleClose()
                    : (topItem.handleAction ? topItem.handleAction('cancel') : topItem.close());
            }
        }
    }
});

export default PopupManager;