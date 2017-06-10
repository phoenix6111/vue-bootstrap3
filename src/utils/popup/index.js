import Vue from 'vue';
import merge from '../merge';
import PopupManager from './popup-manager';
import getScrollBarWidth from '../scrollbar-width';

let idSeed = 1;

let scrollBarWidth;

const getDOM = function(dom) {
    if (dom.nodeType === 3) {
        dom = dom.nextElementSibling || dom.nextSibling;
        getDOM(dom);
    }
    return dom;
};

export default {
    model: {
        prop: 'visible',
        event: 'visible-change'
    },
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        transition: {
            type: String,
            default: ''
        },
        openDelay: {},
        closeDelay: {},
        zIndex: {},
        backdrop: {
            type: Boolean,
            default: false
        },
        backdropFade: {
            type: Boolean,
            default: true
        },
        backdropClass: {},
        backdropAppendToBody: {
            type: Boolean,
            default: false
        },
        scrollable: {
            type: Boolean,
            default: true
        },
        closeOnPressEsc: {
            type: Boolean,
            default: false
        },
        closeOnClickOutside: {
            type: Boolean,
            default: false
        }
    },

    beforeMount() {
        this._popupId = 'popup-' + idSeed++;
        PopupManager.register(this._popupId, this);
    },

    mounted() {
        /*if(this.noAnimation) {
            this.backdropFade = false;
        }*/
    },

    beforeDestroy() {
        PopupManager.deregister(this._popupId);
        PopupManager.removeOpenedModal(this._popupId);
        PopupManager.closeBackdrop(this._popupId);
        if (this.backdrop && this.bodyOverflow !== null && this.bodyOverflow !== 'hidden') {
            document.body.style.overflow = this.bodyOverflow;
            document.body.style.paddingRight = this.bodyPaddingRight;
        }
        this.bodyOverflow = null;
        this.bodyPaddingRight = null;
    },

    data() {
        return {
            opened: false,
            bodyOverflow: null,
            bodyPaddingRight: null,
            rendered: false
        };
    },

    watch: {
        visible(val) {
            if (val) {
                if (this._opening) return;
                if (!this.rendered) {
                    this.rendered = true;
                    Vue.nextTick(() => {
                        this.open();
                    });
                } else {
                    this.open();
                }
            } else {
                this.close();
            }
        }
    },

    methods: {
        open(options) {
            if (!this.rendered) {
                this.rendered = true;
                this.$emit('visible-change', true);
            }

            const props = merge({}, this.$props || this, options);

            if (this._closeTimer) {
                clearTimeout(this._closeTimer);
                this._closeTimer = null;
            }
            clearTimeout(this._openTimer);

            const openDelay = Number(props.openDelay);
            if (openDelay > 0) {
                this._openTimer = setTimeout(() => {
                    this._openTimer = null;
                    this.doOpen(props);
                }, openDelay);
            } else {
                this.doOpen(props);
            }
        },

        doOpen(props) {
            if (this.$isServer) return;

            if (this.willOpen && !this.willOpen()) return;
            if (this.opened) return;

            this._opening = true;

            this.$emit('visible-change', true);

            const dom = getDOM(this.$el);

            const backdrop = props.backdrop;

            const zIndex = props.zIndex;
            if (zIndex) {
                PopupManager.zIndex = zIndex;
            }

            if (backdrop) {
                if (this._closing) {
                    PopupManager.closeBackdrop(this._popupId);
                    this._closing = false;
                }
                if(this.noAnimation) {
                    props.backdropFade = false;
                }
                console.log("this.Noanimation === "+this.noAnimation+" backdropFade "+this.backdropFade);
                PopupManager.openBackdrop(this._popupId, PopupManager.nextZIndex(),
                    this.backdropAppendToBody ? undefined : dom, props.backdropClass, props.backdropFade);
                if (!props.scrollable) {
                    if (!this.bodyOverflow) {
                        this.bodyPaddingRight = document.body.style.paddingRight;
                        this.bodyOverflow = document.body.style.overflow;
                    }
                    scrollBarWidth = getScrollBarWidth();
                    let bodyHasOverflow = document.documentElement.clientHeight < document.body.scrollHeight;
                    if (scrollBarWidth > 0 && bodyHasOverflow) {
                        document.body.style.paddingRight = scrollBarWidth + 'px';
                    }
                    document.body.style.overflow = 'hidden';
                }
            }

            if (getComputedStyle(dom).position === 'static') {
                dom.style.position = 'absolute';
            }

            dom.style.zIndex = PopupManager.nextZIndex();
            this.opened = true;

            this.onOpen && this.onOpen();

            this.doAfterOpen();
        },

        doAfterOpen() {
            PopupManager.addOpenedModal(this._popupId);
            this._opening = false;
        },

        close() {
            if (this.willClose && !this.willClose()) return;

            if (this._openTimer !== null) {
                clearTimeout(this._openTimer);
                this._openTimer = null;
            }
            clearTimeout(this._closeTimer);

            const closeDelay = Number(this.closeDelay);

            if (closeDelay > 0) {
                this._closeTimer = setTimeout(() => {
                    this._closeTimer = null;
                    this.doClose();
                }, closeDelay);
            } else {
                this.doClose();
            }
        },

        doClose() {
            this.$emit('visible-change', false);
            this._closing = true;

            this.onClose && this.onClose();

            if (!this.scrollable) {
                setTimeout(() => {
                    if (this.backdrop && this.bodyOverflow !== 'hidden') {
                        document.body.style.overflow = this.bodyOverflow;
                        document.body.style.paddingRight = this.bodyPaddingRight;
                    }
                    this.bodyOverflow = null;
                    this.bodyPaddingRight = null;
                }, 200);
            }

            this.opened = false;

            this.doAfterClose();
        },

        doAfterClose() {
            /*const props = merge({}, this.$props || this);
            if(props.backdrop) {
                PopupManager.closeBackdrop()(this._popupId);
            }*/
            PopupManager.closeBackdrop(this._popupId);
            PopupManager.removeOpenedModal(this._popupId);
            this._closing = false;
        }
    }
};

export {
    PopupManager
};