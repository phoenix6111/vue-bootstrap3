<template>
    <transition name="move-notice">
        <div :class="wrapClasses"
             :style="{ top: top ? top + 'px' : 'auto' }"
             v-show="visible"
             @mouseenter="clearTimer()"
             @mouseleave="startTimer()">
            <button type="button" class="close" @click="close"
                    style="display: block; z-index: 1030;">
                <span aria-hidden="true">×</span>
                <span class="sr-only">Close</span>
            </button>
            <span class="fa fa-comments"></span>
            <span>{{title}}</span>
            <span>
                <slot>{{ message }}</slot>
            </span>
            <a href="javascript:void(0)"></a>
        </div>
    </transition>


</template>
<script>
    export default {

        data() {
            return {
                visible: false,
                title: '',
                message: '',
                duration: 4500,
                type: 'inverse',
                customClass: '',
                iconClass: '',
                onClose: null,
                closed: false,
                top: null,
                timer: null
            };
        },

        computed: {
            wrapClasses() {
                return [
                    "alert alert-dismissable message",
                    {
                        [`alert-${this.type}`]:!!this.type
                    }
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
                    this.onClose();
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
            if (this.duration > 0) {
                this.timer = setTimeout(() => {
                    if (!this.closed) {
                        this.close();
                    }
                }, this.duration);
            }

            console.log("this.type == "+this.type);
        }
    }
</script>