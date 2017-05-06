<template>
    <div class="i-timeline-item">
        <div :class="timeClasses">
            <slot name="time">
                <span class="d-block">2015</span>
                22/04
            </slot>
        </div>

        <div :class="tagClasses" :style="customColor" ref="dot">
            <slot name="dot"></slot>
        </div>
        <div :class="tailClasses"></div>

        <div :class="bodyClasses">
            <h2 class="i-timeline-item-title"><slot name="title">{{title}}</slot></h2>
            <slot></slot>
        </div>

    </div>
</template>

<script>
    const prefixCls = 'i-timeline-item';
    import {oneOf} from '../../../utils/assist';

    export default {
        name:'TimelineItem',
        props: {
            title:String,
            time:[String,Date],
            type: {
                validator(val) {
                    return oneOf(val,['default','primary','info','success','warning','danger']);
                },
                default:'default'
            },
            color:String
        },
        data () {
            return {
                dot: false,
                year:'',
                monthAndDay:''
            };
        },
        mounted () {
            this.dot = this.$refs.dot.innerHTML.length ? true : false;
        },
        watch: {
            time(val) {

            }
        },
        computed: {
            classes() {
                return `${prefixCls}`;
            },
            timeClasses() {
                return `${prefixCls}-time`;
            },
            tagClasses() {
                return [
                    `${prefixCls}-tag`,
                    {
                        [`${prefixCls}-tag-custom`]: this.dot,
                        [`${prefixCls}-tag-${this.type}`]: this.type
                    }
                ];
            },
            customColor () {
                let style = {};
                if (this.color && !this.type) {
                    style = {
                        'color': this.color,
                        'border-color': this.color
                    };
                }

                return style;
            },
            tailClasses() {
                return `${prefixCls}-tail`;
            },
            bodyClasses() {
                return `${prefixCls}-body`;
            }
        }
    }
</script>