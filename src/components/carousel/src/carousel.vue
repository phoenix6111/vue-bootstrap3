<template lang="html">
    <div class="carousel slide" data-ride="carousel" @mouseenter="pause" @mouseleave="start">
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
    import {csstransitions} from '../../../utils/helpers.js'

    // import polyfill for IE9
    //    import '../../utils/ie9_polyfill.js'

    // this is directly linked to the bootstrap animation timing in _carousel.scss
    // for browsers that do not support transitions like IE9 just change slide immediately
    const TRANSITION_DURATION = csstransitions() ? 600 : 0;

    const DIRECTION = {
        prev: {
            type:'prev',
            direction:'right'
        },
        next: {
            type:'next',
            direction:'left'
        }
    }

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
                direction:DIRECTION.next
            }
        },
        mounted() {
            this.$nextTick(function () {
                // get all slides
                this.items = this.$el.querySelectorAll('.item');
                this.index = this.currentIndex;

                // set first slide as active
                this.items[this.index].classList.add('active');

                this.start();
            });
        },
        methods: {
            // previous slide
            prev() {
                if (this.animating) return;

                this.index--;
                if (this.index < 0) {
                    this.index = this.items.length - 1;
                }

                this.direction = DIRECTION.prev;
            },
            // next slide
            next() {
                if (this.animating) return;

                this.index++;
                if (this.index > this.items.length - 1) {
                    this.index = 0;
                }

                this.direction = DIRECTION.next;
            },
            // on slide change
            changeSlide($index) {
                if($index == this.index || this.animating) return;

                this.direction = ($index<this.index)?DIRECTION.prev:DIRECTION.next;

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
                this.animating = true;

                const newValDynClasses = this.items[val].classList;
                newValDynClasses.add(this.direction.type);
                this.items[val].offsetWidth // force reflow

                const oldValDynClasses = this.items[oldVal].classList;
                oldValDynClasses.add(this.direction.direction);
                newValDynClasses.add(this.direction.direction);

                // wait for animation to finish and cleanup classes
                const _this = this;
                this._carouselAnimation = setTimeout(() => {
                    newValDynClasses.remove(_this.direction.type, _this.direction.direction);
                    newValDynClasses.add('active');
                    oldValDynClasses.remove('active', _this.direction.direction);
                    this.animating = false;
                    // trigger an event
                    this.$emit('change', val, oldVal);
                }, TRANSITION_DURATION);
            }
        },
        destroyed() {
            clearTimeout(this._carouselAnimation);
            clearInterval(this._intervalId);
        }
    }
</script>