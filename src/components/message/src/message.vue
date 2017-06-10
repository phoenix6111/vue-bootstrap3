<template>
    <transition name="message-fade">
        <div :class="wrapClasses" v-show="visible">
            <div :class="classes">
                <button type="button" class="close" @click="close" v-if="closable">
                    <span aria-hidden="true">×</span>
                    <span class="sr-only">Close</span>
                </button>
                <div class="alert-content">
                    <span :class="[`${baseClass}-icon`]">
                        <i :class="iconClasses"></i>
                    </span>
                    <div :class="[`${baseClass}-heading`]">
                        {{ message }}
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    import { oneOf } from '../../../utils/assist';

    const prefixCls = 'alert';
    const iconPrefixCls = 'zmdi';
    const iconTypes = {
        'info': 'info',
        'success': 'check-circle',
        'warning': 'alert-circle',
        'danger': 'close-circle'
    };

    export default {

        data() {
            return {
                visible: false,
                message: '',
                duration: 3000,
                type: 'info',
                customClass: '',
                iconClass: '',
                onClose: null,
                closed: false,
                top: null,
                timer: null,
                transition: "move-up",
                theme:'light',
                closable:false
            };
        },

        computed: {
            wrapClasses() {
                return ['message-wrap'];
            },
            baseClass () {
                return `${prefixCls}`;
            },
            classes() {
                return [
                    `${prefixCls}`,'message','with-icon',
                    {
                        [`${this.customClass}`]: !!this.customClass,
                        [`alert-type-${this.type}`]:!!this.type,
                        [`alert-theme-${this.theme}`]:!!this.theme,
                        'alert-dismissible':this.closable
                    }
                ];
            },
            iconClasses() {
                return [
                    `${iconPrefixCls}`,`${iconPrefixCls}-${iconTypes[this.type]}`
                ];
            }
        },

        watch: {
            closed(newVal) {
                if (newVal) {
                    this.visible = false;
                    this.$el.addEventListener('transitionend', this.destroyElement);
                }
            }
        },

        methods: {
            destroyElement() {
                this.$el.removeEventListener('transitionend', this.destroyElement);
                this.$destroy(true);
                this.$el.parentNode.removeChild(this.$el);
            },

            close() {
                this.closed = true;
                if (typeof this.onClose === 'function') {
                    this.onClose(this);
                }
            },

            clearTimer() {
                clearTimeout(this.timer);
            },

            startTimer() {
                if (this.duration > 0) {
                    this.timer = setTimeout(() => {
                        if (!this.closed) {
                            this.close();
                        }
                    }, this.duration);
                }
            }
        },

        mounted() {
            this.startTimer();
        }
    }
</script>