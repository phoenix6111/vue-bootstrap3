<template>
    <div :class="wrapClasses">
        <div :class="[prefixCls + '-bar']" v-if="type === 'line'">
            <div :class="[prefixCls + '-bar__outer']" :style="{height: strokeWidth + 'px'}">
                <div :class="[prefixCls + '-bar__inner']" :style="barStyle">
                    <div :class="[prefixCls + '-bar__innerText']" v-if="showText && textInside">
                        {{percent}}%
                    </div>
                </div>
            </div>
        </div>
        <div :class="[prefixCls + '-circle']" :style="{height: width + 'px', width: width + 'px'}" v-else>
            <svg viewBox="0 0 100 100">
                <path :d="trackPath" stroke="#e5e9f2"
                      :stroke-width="relativeStrokeWidth" fill="none"></path>
                <path :d="trackPath" stroke-linecap="round"
                      :stroke="stroke" :stroke-width="relativeStrokeWidth" fill="none"
                      :style="circlePathStyle"></path>
            </svg>
        </div>
        <div
                :class="[prefixCls + '__text']"
                v-if="showText && !textInside"
                :style="{fontSize: progressTextSize + 'px'}">
            <slot>
                <template v-if="!curStatus">{{percent}}%</template>
                <Icon :type="statusIcon" :style="circleIconStyle" v-else></Icon>
            </slot>
        </div>
    </div>
</template>
<script>
    import Icon from '../../icon';
    import { oneOf } from '../../../utils/assist';
    const prefixCls = 'i-progress';

    export default {
        name: 'Progress',
        props: {
            type: {
                type: String,
                default: 'line',
                validator: val => oneOf(val, ['line', 'circle'])
            },
            percent: {
                type: Number,
                default: 0,
                required: true,
                validator: val => val >= 0 && val <= 100
            },
            status: {
                type: String,
                default:'normal',
                validator: val => oneOf(val, ['normal','error', 'success'])
            },
            strokeWidth: {
                type: Number,
                default: 6
            },
            textInside: {
                type: Boolean,
                default: false
            },
            width: {
                type: Number,
                default: 126
            },
            showText: {
                type: Boolean,
                default: true
            },
            active: {
                type: Boolean,
                default: false
            },
            autoStatus: {
                type:Boolean,
                default:true
            }
        },
        data() {
            return {
                prefixCls: prefixCls,
                curStatus:this.status
            }
        },
        computed: {
            wrapClasses() {
                return [
                    `${prefixCls}`,
                    {
                        'is-active':this.active,
                        [`is-${this.curStatus}`]: !!this.curStatus,
                        [`${prefixCls}--${this.type}`]:!!this.type,
                        [`${prefixCls}-show-info`]: !this.hideInfo,
                        [`${prefixCls}--without-text`]: !this.showText,
                        [`${prefixCls}--text-inside`]: this.textInside,
                    }
                ];
            },
            barStyle() {
                var style = {};
                style.width = this.percent + '%';
                return style;
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
            stroke() {
                var ret;
                switch (this.curStatus) {
                    case 'success':
                        ret = '#13ce66';
                        break;
                    case 'error':
                        ret = '#ff4949';
                        break;
                    default:
                        ret = '#20a0ff';
                }
                return ret;
            },
            statusIcon() {
                let type = '';
                switch (this.curStatus) {
                    case 'error':
                        type = (this.type === 'line')?'close-circle' : 'close';
                        break;
                    case 'success':
                        type = (this.type === 'line')?'check-circle' : 'check';
                        break;
                }

                console.log('type '+type);

                return type;
            },
            progressTextSize() {
                return this.type === 'line'
                    ? 10 + this.strokeWidth * 0.4
                    : this.width * 0.111111 + 6;
            },
            circleIconStyle() {
                if(this.type === 'line') return;
                return {
                    fontSize: this.width * 0.111111 + 12+"px",
                    fontWeight: 'bold'
                };

            }
        },
        mounted () {
            this.handleStatus();
        },
        methods: {
            handleStatus (isDown) {
                if (isDown) {
                    this.curStatus = 'normal';
                } else {
                    if (this.autoStatus && parseInt(this.percent, 10) == 100) {
                        this.curStatus = 'success';
                    }
                }
            }
        },
        watch: {
            percent (val, oldVal) {
                console.log("progress status "+this.curStatus);
                if (val < oldVal) {
                    this.handleStatus(true);
                } else {
                    this.handleStatus();
                }
            },
            status(val) {
                this.curStatus = val;
            }
        }
    };
</script>