<template>
    <div :class="wrapClasses">

        <div :class="barClasses" v-if="type === 'line'">
            <div :class="outerClasses">
                <div :class="innerClasses" :style="innerStyle">
                    <div :class="innerTextClasses" v-if="!hideInfo && textInside">
                        {{percent}}%
                    </div>
                </div>
            </div>
        </div>

        <div :class="cycleClasses" :style="{height: width + 'px', width: width + 'px'}" v-else>
            <svg viewBox="0 0 100 100">
                <path :d="trackPath" stroke="#e5e9f2"
                      :stroke-width="relativeStrokeWidth" fill="none"></path>
                <path :d="trackPath" stroke-linecap="round"
                      :stroke="stroke" :stroke-width="relativeStrokeWidth" fill="none"
                      :style="circlePathStyle"></path>
            </svg>
        </div>

        <span v-if="!hideInfo && !textInside" :class="textClasses" :style="{fontSize: progressTextSize + 'px'}">
            <slot>
                <span v-if="isStatus" :class="textInnerClasses">
                    <Icon :type="statusIcon"></Icon>
                </span>
                <span v-else :class="textInnerClasses">
                    {{ percent }}%
                </span>
            </slot>
        </span>
    </div>
</template>
<script>
    import Icon from '../../icon';
    import { oneOf } from '../../../utils/assist';
    const prefixCls = 'i-progress';

    export default {
        components: { Icon },
        props: {
            type: {
                type: String,
                default: 'line',
                validator(value) {
                    return oneOf(value, ['line', 'circle']);
                }
            },
            percent: {
                type: Number,
                default: 0
            },
            status: {
                validator (value) {
                    return oneOf(value, ['normal', 'active', 'wrong', 'success']);
                },
                default: 'normal'
            },
            hideInfo: {
                type: Boolean,
                default: false
            },
            textInside: {
                type: Boolean,
                default: false
            },
            width: {
                type: Number,
                default: 126
            },
            strokeWidth: {
                type: Number,
                default: 10
            }
        },
        computed: {
            isStatus () {
                return this.status == 'wrong' || this.status == 'success';
            },
            statusIcon () {
                let type = '';
                switch (this.status) {
                    case 'wrong':
                        type = 'close-circle';
                        break;
                    case 'success':
                        type = 'check-circle';
                        break;
                }
                return type;
            },
            innerStyle () {
                return {
                    width: `${this.percent}%`,
                    height: `${this.strokeWidth}px`
                };
            },
            wrapClasses () {
                return [
                    `${prefixCls}`,
                    `${prefixCls}-${this.status}`,
                    {
                        [`${prefixCls}-show-info`]: !this.hideInfo,
                    }
                ];
            },
            textClasses () {
                return `${prefixCls}-text`;
            },
            textInnerClasses () {
                return `${prefixCls}-text-inner`;
            },
            barClasses () {
                return `${prefixCls}-bar`;
            },
            outerClasses () {
                return `${prefixCls}-outer`;
            },
            innerClasses () {
                return `${prefixCls}-inner`;
            },
            innerTextClasses () {
                return `${prefixCls}-inner-text`;
            },
            cycleClasses() {
                return `${prefixCls}-circle`;
            },
            stroke() {
                var ret;
                switch (this.status) {
                    case 'success':
                        ret = '#13ce66';
                        break;
                    case 'exception':
                        ret = '#ff4949';
                        break;
                    default:
                        ret = '#20a0ff';
                }
                return ret;
            },
            relativeStrokeWidth() {
                return (this.strokeWidth / this.width * 100).toFixed(1);
            },
            trackPath() {
                var radius = parseInt(50 - parseFloat(this.relativeStrokeWidth) / 2, 10);
                return `M 50 50 m 0 -${radius} a ${radius} ${radius} 0 1 1 0 ${radius * 2} a ${radius} ${radius} 0 1 1 0 -${radius * 2}`;
            },
            perimeter() {
                var radius = 50 - parseFloat(this.relativeStrokeWidth) / 2;
                return 2 * Math.PI * radius;
            },
            circlePathStyle() {
                var perimeter = this.perimeter;
                return {
                    strokeDasharray: `${perimeter}px,${perimeter}px`,
                    strokeDashoffset: (1 - this.percent / 100) * perimeter + 'px',
                    transition: 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
                };
            },
            progressTextSize() {
                return 10 + this.strokeWidth * 0.3;
                /*return this.type === 'line'
                    ? 14 + this.strokeWidth * 0.4
                    : this.width * 0.111111 + 6;*/
            }
        },
        mounted () {
            this.handleStatus();
        },
        methods: {
            handleStatus (isDown) {
                if (isDown) {
                    this.status = 'normal';
                } else {
                    if (parseInt(this.percent, 10) == 100) {
                        this.status = 'success';
                    }
                }
            }
        },
        watch: {
            percent (val, oldVal) {
                if (val < oldVal) {
                    this.handleStatus(true);
                } else {
                    this.handleStatus();
                }
            }
        }
    };
</script>