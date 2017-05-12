<template>
    <transition :name="transitionName">
        <div :class="classes" :style="styles">
            <button type="button" class="close" @click="close" v-if="closable">
                <span aria-hidden="true">×</span>
                <span class="sr-only">Close</span>
            </button>
            <div :class="contentClasses" ref="content" v-html="content"></div>
        </div>
    </transition>
</template>
<script>
    import { oneOf } from '../../../utils/assist';

    export default {
        props: {
            prefixCls: {
                type: String,
                default: ''
            },
            type: {
                type:String,
                default:'info'
            },
            duration: {
                type: Number,
                default: 2000
            },
            content: {
                type: String,
                default: ''
            },
            withIcon: {
                type:Boolean,
                default:false
            },
            styles: {
                type: Object,
                default: function() {
                    return {
                        width: '100%'
                    };
                }
            },
            closable: {
                type: Boolean,
                default: false
            },
            className: {
                type: String
            },
            name: {
                type: String,
                required: true
            },
            onClose: {
                type: Function
            },
            transitionName: {
                type: String
            },
            theme: {
                validator(value) {
                    return oneOf(value,['default','light']);
                },
                default:'default'
            }
        },
        data () {
            return {
                withDesc: false,
            };
        },
        computed: {
            baseClass () {
                return `${this.prefixCls}`;
            },
            classes () {
//                'alert alert-info alert-dismissible notification with-desc with-icon',
                return [
                    this.baseClass,'alert',
                    {
                        [`${this.className}`]: !!this.className,
                        [`alert-${this.type}`]:!!this.type,
                        [`alert-theme-${this.theme}`]:!!this.theme,
                        'alert-dismissible':this.closable,
                        'with-desc': this.withDesc,
                        'with-icon':this.withIcon
                    }
                ];
            },
            contentClasses () {
                return `${this.baseClass}-content`;
            }
        },
        methods: {
            clearCloseTimer () {
                if (this.closeTimer) {
                    clearTimeout(this.closeTimer);
                    this.closeTimer = null;
                }
            },
            close () {
                this.clearCloseTimer();
                this.onClose();
                this.$parent.close(this.name);
            }
        },
        mounted () {
            this.clearCloseTimer();

            if (this.duration !== 0) {
                this.closeTimer = setTimeout(() => {
                    this.close();
                }, this.duration);
            }

            // check if with desc in Notice component
            if (this.prefixCls === 'notification') {
                let _desc = this.$refs.content.querySelectorAll(`.alert-desc`);
                this.withDesc = _desc && _desc[0];
            }
        },
        beforeDestroy () {
            this.clearCloseTimer();
        }
    };
</script>
