<tempalte lang="html">
    <div class="alert alert-success alert-dismissible" role="alert"
         transition="fade"
         :style="{width:width}">
        <button type="button" class="close" v-show="dismissable"
                @click="show = false">
            <span>&times;</span>
        </button>
        <slot></slot>
    </div>
</tempalte>

<script>
    export default {
        props: {
            type: {
                type: String
            },
            dismissable: {
                type: Boolean,
                default: false
            },
            show: {
                type: Boolean,
                default: true
            },
            duration: {
                type: Number,
                default: 0
            },
            width: {
                type: String
            },
            placement: {
                type: String
            }
        },
        watch: {
            show (val) {
                if (this._timeout) clearTimeout(this._timeout)
                if (val && Boolean(this.duration)) {
                    this._timeout = setTimeout(() => { this.show = false }, this.duration)
                }
            }
        }
    }
</script>

<style>
    .fade-transition {
        transition: opacity .3s ease;
    }
    .fade-enter,
    .fade-leave {
        height: 0;
        opacity: 0;
    }
    /*.alert.top {
        position: fixed;
        top: 30px;
        margin: 0 auto;
        left: 0;
        right: 0;
        z-index: 1050;
    }
    .alert.top-right {
        position: fixed;
        top: 30px;
        right: 50px;
        z-index: 1050;
    }*/
</style>