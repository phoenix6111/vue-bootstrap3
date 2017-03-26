<template>
    <transition :name="transitionName">
        <div :class="classes" :style="styles">
            <button type="button" class="close" @click="close" v-if="closable">
                <span aria-hidden="true">×</span>
                <span class="sr-only">Close</span>
            </button>
            <div :class="[baseClass + '-content']" ref="content" v-html="content"></div>
        </div>
    </transition>
</template>
<script>
    export default {
        props: {
            prefixCls: {
                type: String,
                default: ''
            },
            duration: {
                type: Number,
                default: 2000
            },
            content: {
                type: String,
                default: ''
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
            }
        },
        data () {
            return {
                withDesc: false
            };
        },
        computed: {
            baseClass () {
                return `${this.prefixCls}-notice`;
            },
            classes () {
                return [
                    this.baseClass,
                    {
                        [`${this.className}`]: !!this.className,
                        [`${this.baseClass}-with-desc`]: this.withDesc
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
            if (this.prefixCls === 'i-notice') {
                this.withDesc = this.$refs.content.querySelectorAll(`.${this.prefixCls}-desc`)[0].innerHTML !== '';
            }
        },
        beforeDestroy () {
            this.clearCloseTimer();
        }
    };
</script>
