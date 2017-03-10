<template>
    <div class="carousel slide" data-ride="carousel" v-on:mouseenter="pause()" v-on:mouseleave="start()">

        <!-- Indicators -->
        <ol class="carousel-indicators" v-show="indicators">
            <li v-for="(item,$index) in slides" v-bind:class="{'active': item == index}" v-on:click="changeSlide($index)"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
            <slot></slot>
        </div>

        <!-- Controls -->
        <a class="left carousel-control" href="#" role="button" v-on:click.stop.prevent="prev" v-show="controls">
            <span class="icon-prev" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#" role="button" v-on:click.stop.prevent="next" v-show="controls">
            <span class="icon-next" aria-hidden="true"></span>
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
    const TRANSITION_DURATION = csstransitions() ? 600 : 0

    // when next is set, we want to move from right to left
    // when previous is set, we want to move from left to right
    const DIRECTION = {
        rtl: {
            outgoing: 'left',
            incoming: 'right',
            overlay: 'next',
        },
        ltr: {
            outgoing: 'right',
            incoming: 'left',
            overlay: 'prev',
        }
    }

    // export carosuel object
    export default {
        replace: true,
        computed: {

        },
        data() {
            return {
                index: 0,
                slidesCount: 0,
                animating: false,
                slides: [],
                direction: DIRECTION.rtl,
            }
        },
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
        },
        methods: {
            // previous slide
            prev() {
                if (this.animating) return
                this.index--
                if (this.index < 0) {
                    this.index = this.slidesCount
                }
            },
            // next slide
            next() {
                if (this.animating) return
                this.index++
                if (this.index > this.slidesCount) {
                    this.index = 0
                }
            },
            // on slide change
            changeSlide(index) {
                this.index = index
            },
            // pause auto rotation
            pause() {
                if (this.interval === 0 || typeof this.interval === 'undefined') return
                clearInterval(this._intervalId)
            },
            // start auto rotate slides
            start() {
                if (this.interval === 0 || typeof this.interval === 'undefined') return
                this._intervalId = setInterval(() => {
                    this.next()
                }, this.interval)
            }
        },
        mounted() {
            this.$nextTick(() => {
                // get all slides
                this._items = this.$el.querySelectorAll('.item')
                this.slidesCount = this._items.length - 1
                this.slides = Array.apply(null, {length: this._items.length}).map(Number.call, Number)

                // set first slide as active
                this._items[0].classList.add('active')

                // auto rotate slides
                this.start()
            });
        },
        watch: {
            index(val, oldVal) {
                this.animating = true
                this.direction = DIRECTION.rtl

                // when previous is pressed we want to move from left to right
                if (val < oldVal) {
                    this.direction = DIRECTION.ltr
                }

                // lets animate
                // prepare next slide to animate (position it on the opposite side of the direction as a starting point)
                this._items[val].classList.add(this.direction.incoming, this.direction.overlay,'active');
                // force reflow
                this._items[val].offsetWidth;

                // trigger animation on outgoing and incoming slide
                this._items[oldVal].classList.add(this.direction.outgoing)
                this._items[val].classList.remove(this.direction.incoming)
                // wait for animation to finish and cleanup classes
                this._carouselAnimation = setTimeout(() => {
                    this._items[oldVal].classList.remove(this.direction.outgoing, 'active')
                    this._items[val].classList.remove(this.direction.overlay)
                    this.animating = false
                    // trigger an event
//                    this.$dispatch('slid::carousel', val)
                }, TRANSITION_DURATION)
            }
        },
        destroyed() {
            clearTimeout(this._carouselAnimation)
            clearInterval(this._intervalId)
        }
    }


</script>