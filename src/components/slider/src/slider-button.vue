<template>
    <div class="slider-origin"
         :style="wrapperStyle"
         @mouseenter="handleMouseEnter"
         @mouseleave="handleMouseLeave"
         @mousedown="onButtonDown"
         @touchstart="onButtonDown"
         ref="button">
        <tooltip placement="top" ref="tooltip" :disabled="!showTooltip" :diy-content="true">
            <div slot="content" class="slider__thumb--label light"><span>{{ formatValue }}</span></div>
            <div class="slider-handle" :class="{'slider-active':dragging}"></div>
        </tooltip>
    </div>
</template>

<script>
    import Tooltip from '../../tooltip';

    import { addOnceEventListener } from '../../../utils/helpers';

    export default {
        name:'SliderButton',
        components:[Tooltip],
        props: {
            value: {
                type: Number,
                default: 0
            },
            vertical: {
                type:Boolean,
                default:false
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

            onButtonDown(e) {
                if (this.disabled) return;
                event.preventDefault();
                this.onDragStart(e);

                if ('touches' in e) {
                    window.addEventListener('touchmove', this.onDragging, false);
                    addOnceEventListener(window, 'touchend', this.onDragEnd);
                    window.addEventListener('contextmenu', this.onDragEnd);
                } else {
                    window.addEventListener('mousemove', this.onDragging, false);
                    addOnceEventListener(window, 'mouseup', this.onDragEnd,false);
                    window.addEventListener('contextmenu', this.onDragEnd);
                }
            },

            onDragStart(e) {
                this.dragging = true;
                if(this.vertical) {
                    this.startY = 'touches' in e ? e.touches[0].clientY : e.clientY;//记录开始拖动点
                } else {
                    this.startX = 'touches' in e ? e.touches[0].clientX : e.clientX;//记录开始拖动点
                }

                //startPosition为currentPosition百分比数，即：90% -> 90
                this.startPosition = parseFloat(this.currentPosition);
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
                    window.removeEventListener('mousemove', this.onDragging);
                    window.removeEventListener('touchmove', this.onDragging);
                    window.removeEventListener('contextmenu', this.onDragEnd);
                }
            },

            onDragging(e) {
                if (this.dragging) {
                    this.displayTooltip();
                    let diff = 0;
                    if(this.vertical) {
                        //拖动时一直记录X点坐标
                        this.currentY = 'touches' in e ? e.touches[0].clientY : e.clientY;
                        diff = (this.startY - this.currentY) / this.$parent.$sliderSize * 100;
                    } else {
                        //拖动时一直记录X点坐标
                        this.currentX = 'touches' in e ? e.touches[0].clientX : e.clientX;
                        diff = (this.currentX - this.startX) / this.$parent.$sliderSize * 100;
                    }

                    //拖动之后的新位置，百分比数，同startPosition
                    this.newPosition = this.startPosition + diff;
                    this.setPosition(this.newPosition);
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
                if (!this.dragging && this.value !== this.oldValue) {
                    this.oldValue = this.value;
                }
            }
        }
    }
</script>