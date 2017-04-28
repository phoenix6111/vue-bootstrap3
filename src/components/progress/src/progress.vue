<template>
    <div :class="wrapClasses">
        <div class="progress-outer">
            <div :class="progressClasses" :style="{height: strokeWidth + 'px'}">
                <div :class="barClasses"
                     :style="barStyle"
                     role="progressbar"
                     :aria-valuenow="percent"
                     aria-valuemin="0"
                     aria-valuemax="100" >
                    <div class="progress-bar-innertext" v-if="showText && textInside">
                        {{percent}}%
                    </div>
                </div>

            </div>
        </div>

        <div class="progress-bar-text"
                v-if="showText && !textInside"
                :style="{fontSize: progressTextSize + 'px'}">
            <slot>
                <template v-if="!isStatus">{{percent}}%</template>
                <Icon :type="statusIcon" v-else></Icon>
            </slot>
        </div>
    </div>

</template>

<script>
    import {oneOf} from '../../../utils/assist';

    const prefixCls = 'progress';

    export default {
        props: {
            percent: {
                type: Number,
                default: 0,
                required: true,
                validator: val => val >= 0 && val <= 100
            },
            status: {
                validator (value) {
                    return oneOf(value, ['normal', 'success','info','warning','danger' ]);
                },
                default: 'normal'
            },
            strokeWidth: {
                type: Number,
                default: 10
            },
            textInside: {
                type: Boolean,
                default: false
            },
            showText: {
                type: Boolean,
                default: true
            },
            autoStatus: {
                type:Boolean,
                default:true
            },
            striped:Boolean,  //有条纹的，
            active:Boolean   //活动状态，进度条动画
        },
        data () {
            return {
                curStatus: this.status
            };
        },
        computed: {
            wrapClasses() {
                return [
                    'progress-wrap',
                    {
                        [`progress-${this.curStatus}`]:!!this.curStatus,
                        [`${prefixCls}-show-info`]: !!this.showText,
                    }
                ];
            },
            progressClasses() {
                return [
                    `${prefixCls}`,
                    {
                        'active':this.active,
                        [`${prefixCls}-striped`]:this.striped,
                        [`${prefixCls}-text-inside`]: this.textInside,
                    }
                ];
            },
            wrapStyle() {

            },
            barClasses() {
                return [
                    `progress-bar`,
                    {
                        [`progress-bar-${this.curStatus}`]:!!this.curStatus,
                    }
                ];
            },
            barStyle() {
                var style = {};
                style.width = this.percent + '%';
                return style;
            },
            isStatus () {
                return this.curStatus == 'danger' || this.curStatus == 'success' || this.curStatus === 'info' || this.curStatus === 'warning';
            },
            statusIcon() {
                let type = '';
                switch (this.curStatus) {
                    case 'success':
                        type = 'check-circle';
                        break;
                    case 'info':
                        type = 'info';
                        break;
                    case 'warning':
                        type = 'alert';
                        break;
                    case 'danger':
                        type = 'close-circle';
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
        },
        mounted () {
            this.handleStatus();
        },
        methods: {
            handleStatus (isDown) {
                if (isDown) {
                    this.curStatus = 'normal';
                    this.$emit('on-status-change', 'normal');
                } else {
                    if (this.autoStatus && parseInt(this.percent, 10) == 100) {
                        this.curStatus = 'success';
                        this.$emit('on-status-change', 'success');
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
            },
            status(val) {
                this.curStatus = val;
            }
        }
    }
</script>