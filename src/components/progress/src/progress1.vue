<template>
    <div :class="wrapClasses">
        <div :class="[prefixCls + '-bar']">
            <div :class="[prefixCls + '-bar__outer']" :style="{height: strokeWidth + 'px'}">
                <div :class="[prefixCls + '-bar__inner']" :style="barStyle">
                    <div :class="[prefixCls + '-bar__innerText']" v-if="showText && textInside">
                        {{percent}}%
                    </div>
                </div>
            </div>
        </div>
        <div
                :class="[prefixCls + '__text']"
                v-if="showText && !textInside"
                :style="{fontSize: progressTextSize + 'px'}">
            <slot>
                <template v-if="!curStatus">{{percent}}%</template>
                <Icon :type="statusIcon" v-else></Icon>
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
        components:[Icon],
        props: {
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
            statusIcon() {
                let type = '';
                switch (this.curStatus) {
                    case 'error':
                        type = 'close-circle';
                        break;
                    case 'success':
                        type = 'check-circle';
                        break;
                }

                return type;
            },
            progressTextSize() {
                return 10 + this.strokeWidth * 0.4;

            },
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