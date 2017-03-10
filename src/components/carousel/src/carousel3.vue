<template>
    <div class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
            <li v-for="(item,$index) in items" :class="{'active':$index==index}"
                @click.prevent.stop="changeSlide($index)"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
            <slot></slot>
        </div>

        <!-- Controls -->
        <a class="left carousel-control" role="button" data-slide="prev"
           v-show="controls" @click.prevent.stop="prev">
            <span class="zmdi zmdi-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" role="button" data-slide="next"
           v-show="controls" @click.prevent.stop="next">
            <span class="zmdi zmdi-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</template>

<script>

    export default {
        props: {
            indicators: {
                type: Boolean,
                default: true
            },
            controls: {
                type: Boolean,
                default: true
            },
            interval: {
                type: [Number,String],
                default: 3000
            },
            currentIndex: {
                type: [Number,String],
                default: 0
            }
        },
        data() {
            return {
                index: 0,
                items: [],
                animating: false,
                reverse:false
            }
        },
        mounted() {
            this.items = this.$children;
            this.index = this.currentIndex;

            this.start();
        },
        methods: {
            // previous slide
            prev() {
                if (this.animating) return;

                this.index--;
                if (this.index < 0) {
                    this.index = this.items.length - 1;
                }

                this.reverse = true;
            },
            // next slide
            next() {
                if (this.animating) return;

                this.index++;
                if (this.index > this.items.length - 1) {
                    this.index = 0;
                }

                this.reverse = false;
            },
            // on slide change
            changeSlide($index) {
                if($index == this.index) return;
                this.reverse = ($index < this.index);

                this.index = $index;
            },
            // pause auto rotation
            pause() {
                if (this.interval === 0 || typeof this.interval === 'undefined') return;

                clearInterval(this._intervalId);
            },
            // start auto rotate slides
            start() {
                if (this.interval === 0 || typeof this.interval === 'undefined') return;

                this._intervalId = setInterval(() => {
                    this.next();
                }, this.interval);
            }
        },
        watch: {
            index(val, oldVal) {
                /*this.items[oldVal].active = false;
                this.items[oldVal].reverse = this.reverse;
                this.items[val].active = true;
                this.items[val].reverse = this.reverse;*/
                this.items.forEach((item,$index) => {
                    item.active = (val==$index);
                    item.reverse = this.reverse;
                });

            }
        },
        destroyed() {
            clearInterval(this._intervalId);
        }
    }

</script>