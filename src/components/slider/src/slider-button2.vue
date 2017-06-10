<template>
    <div class="slider-origin"
         :style="wrapperStyle"
         @mouseenter="handleMouseEnter"
         @mouseleave="handleMouseLeave"
         ref="button">
        <tooltip placement="top" ref="tooltip" :disabled="!showTooltip" :diy-content="true">
            <div slot="content" class="slider__thumb--label light"><span>{{ formatValue }}</span></div>
            <div class="slider-handle" :class="{'slider-active':dragging}"></div>
        </tooltip>
    </div>
</template>

<script>
    import Tooltip from '../../tooltip';

    const isTouch = 'ontouchstart' in window
    const mouseEvents = (isTouch) ?
        {
            down: 'touchstart',
            move: 'touchmove',
            up: 'touchend',
            over: 'touchstart',
            out: 'touchend'
        }
        :
        {
            down: 'mousedown',
            move: 'mousemove',
            up: 'mouseup',
            over: 'mouseover',
            out: 'mouseout'
        };

    export default {
        name:'SliderButton',
        components:[Tooltip],
        props: {
            value: {
                type: Number,
                default: 0
            }
        },

        data() {
            return {
                hovering: false,
                dragging: false,//正在拖动状态
                startX: 0,//鼠标按下时的X点坐标
                currentX: 0,//拖动时一直记录X点坐标
                startY: 0,
                currentY: 0,
                startPosition: 0,//startPosition为currentPosition百分比数，即：90% -> 90
                newPosition: null,//拖动进行中，拖动新位置，百分比数，同startPosition
                oldValue: this.value,//拖动一次直到松开鼠标后，新位置的值,
                app:{}
            };
        },

        computed: {
            disabled() {
                return this.$parent.disabled;
            },

            max() {
                return this.$parent.max;
            },

            min() {
                return this.$parent.min;
            },

            step() {
                return this.$parent.step;
            },
            //精确度
            precision() {
                return this.$parent.precision;
            },

            showTooltip() {
                return this.$parent.showTooltip;
            },

            currentPosition() {
                return `${ (this.value - this.min) / (this.max - this.min) * 100 }%`;
            },

            enableFormat() {
                return this.$parent.formatTooltip instanceof Function;
            },

            formatValue() {
                return this.enableFormat && this.$parent.formatTooltip(this.value) || this.value;
            },

            wrapperStyle() {
                return this.vertical ? { bottom: this.currentPosition } : { left: this.currentPosition };
            }
        },

        watch: {
            dragging(val) {
                this.$parent.dragging = val;
            }
        },

        mounted() {
            this.$refs.button.addEventListener(mouseEvents.down,this.onButtonDown,false);
        },

        beforeDestroy() {
            this.$refs.button.removeEventListener(mouseEvents.down,this.onButtonDown);
        },

        methods: {
            displayTooltip() {
                this.$refs.tooltip && (this.$refs.tooltip.showPopper = true);
            },

            hideTooltip() {
                this.$refs.tooltip && (this.$refs.tooltip.showPopper = false);
            },

            handleMouseEnter() {
                this.hovering = true;
                this.displayTooltip();
            },

            handleMouseLeave() {
                this.hovering = false;
                this.hideTooltip();
            },

            onButtonDown(event) {
                if (this.disabled) return;
                event.preventDefault();
                this.onDragStart(event);
                window.addEventListener(mouseEvents.move, this.onDragging,false);
                window.addEventListener(mouseEvents.up, this.onDragEnd,false);
                window.addEventListener('contextmenu', this.onDragEnd);
            },

            onDragStart(event) {
                this.dragging = true;
                event = event.changedTouches? event.changedTouches[0]:event;
                this.startX = event.clientX;//记录开始拖动点

                //startPosition为currentPosition百分比数，即：90% -> 90
                this.startPosition = parseFloat(this.currentPosition);
            },

            onDragging(event) {
                if (this.dragging) {
                    this.displayTooltip();

                    event = event.changedTouches? event.changedTouches[0]:event;
                    //拖动时一直记录X点坐标
                    this.currentX = event.clientX;
                    const diff = (this.currentX - this.startX) / this.$parent.$sliderWidth * 100;
                    //拖动之后的新位置，百分比数，同startPosition
                    this.newPosition = this.startPosition + diff;
                    this.setPosition(this.newPosition);
                }
            },

            onDragEnd() {
                if (this.dragging) {
                    /*
                     * 防止在 mouseup 后立即触发 click，导致滑块有几率产生一小段位移
                     * 不使用 preventDefault 是因为 mouseup 和 click 没有注册在同一个 DOM 上
                     */
                    setTimeout(() => {
                        this.dragging = false;
                        this.hideTooltip();
                        this.setPosition(this.newPosition);
                    }, 0);
                    window.removeEventListener(mouseEvents.down, this.onDragging);
                    window.removeEventListener(mouseEvents.up, this.onDragEnd);
                    window.removeEventListener('contextmenu', this.onDragEnd);
                }
            },

            setPosition(newPosition) {
                if (newPosition < 0) {
                    newPosition = 0;
                } else if (newPosition > 100) {
                    newPosition = 100;
                }
                const lengthPerStep = 100 / ((this.max - this.min) / this.step);
                const steps = Math.round(newPosition / lengthPerStep);
                let value = steps * lengthPerStep * (this.max - this.min) * 0.01 + this.min;
                value = parseFloat(value.toFixed(this.precision));
                this.$emit('input', value);
                this.$refs.tooltip && this.$refs.tooltip.updatePopper();
                this.tooltipVisible = true;
                if (!this.dragging && this.value !== this.oldValue) {
                    this.oldValue = this.value;
                }
            }
        }
    }
</script>