<template>
    <div :style="containerStyles" :class="containerClasses">
        <svg viewBox="0 0 100 100">

            <defs>
                <radialGradient :id="'radial-gradient' + _uid"
                                :fx="gradient.fx"
                                :fy="gradient.fy"
                                :cx="gradient.cx"
                                :cy="gradient.cy"
                                :r="gradient.r">
                    <stop offset="30%" :stop-color="startColor"/>
                    <stop offset="100%" :stop-color="stopColor"/>
                </radialGradient>
            </defs>

            <path :d="pathString"
                  :stroke="trailColor"
                  :stroke-width="trailWidth"
                  :fill-opacity="0"/>
            <path :d="pathString"
                  :stroke-linecap="strokeLinecap"
                  :stroke="'url(#radial-gradient' + _uid + ')'"
                  :stroke-width="strokeWidth"
                  fill-opacity="0"
                  :style="progressStyle"/>
        </svg>
        <div :class="innerClasses">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    import {oneOf} from '../../../utils/assist';

    const prefixCls = 'i-chart-circle';

    export default {
        name: 'ICircle',
        props: {
            size: { //圆环的直径
                type: Number,
                default: 120
            },
            strokeWidth: {  //背景圆环的宽度
                type: Number,
                default: 6
            },
            /*strokeColor: {  //背景圆环背景色
                type: String,
                default: '#2db7f5'
            },*/
            startColor: {   //
                type:String,
                default:'#2db7f5'
            },
            stopColor: {
                type:String,
                default:'#2279f5'
            },
            strokeLinecap: {    //进度环末端的样式：圆形或方形
                validator (value) {
                    return oneOf(value, ['square', 'round']);
                },
                default: 'round'
            },
            trailWidth: {   //进度环的宽度
                type: Number,
                default: 5
            },
            trailColor: {
                type: String,
                default: '#eaeef2'
            },
            totalSteps: {   //总steps
                type: Number,
                default: 100
            },
            completedSteps: {   //已经完成的steps
                type: Number,
                required: true,
                default: 0
            },
            fps: {  //每秒执行的鍞数
                type: Number,
                required: false,
                default: 60
            },
            animateSpeed: {     //The amount of time in milliseconds to animate one step.
                type:[String,Number],
                default:600
            },
            timingFunc: {   //The transition timing function to use for the CSS transition. See transition-timing-function.
                type:String,    // see 'https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function'
                default:'linear'
            },
        },
        data() {
            return {
                gradient: {
                    fx: 0.99,
                    fy: 0.5,
                    cx: 0.5,
                    cy: 0.5,
                    r: 0.65
                },
                gradientAnimation: null,
                currentAngle: 0,
                strokeDashoffset: 0
            }
        },
        computed: {
            containerStyles () {
                return {
                    width: `${this.size}px`,
                    height: `${this.size}px`
                };
            },
            radius () {
                return 50 - this.strokeWidth / 2;
            },
            pathString () {
                return `M 50,50 m 0,-${this.radius}
                a ${this.radius},${this.radius} 0 1 1 0,${2 * this.radius}
                a ${this.radius},${this.radius} 0 1 1 0,-${2 * this.radius}`;
            },
            len () {
                return Math.PI * 2 * this.radius;
            },
            progressStyle () {
                return {
                    'stroke-dasharray': `${this.len}px ${this.len}px`,
                    'stroke-dashoffset': this.strokeDashoffset,
//                    'stroke-dashoffset': `${((100 - this.completedSteps) / 100 * this.len)}px`,
                    'transition': `stroke-dashoffset ${this.animateSpeed}ms ${this.timingFunc}`
                };
            },
            innerCircleRadius () {      //背景圆环的半径
                return this.innerCircleDiameter / 2;
            },

            innerCircleDiameter () {    //背景圆环的直径
                return this.size - (this.strokeWidth * 2);
            },

            circumference () {  //背景圆环的长度
                return Math.PI * this.innerCircleDiameter
            },

            stepSize () {   // 每一step的长度
                if (this.totalSteps === 0) {
                    return 0
                }

                return 100 / this.totalSteps
            },

            finishedPercentage () { //进度环的百分比
                return this.stepSize * this.completedSteps
            },

            circleSlice () {    //每个step的角度值
                return 2 * Math.PI / this.totalSteps;
            },

            animateSlice () {   //每个point的角度值
                return this.circleSlice / this.totalPoints
            },

            totalPoints () {    //执行一个step需要多少个 points
                return this.animateSpeed / this.animationIncrements;
            },

            animationIncrements () {   //执行一frame需要多少时间，单位为ms
                return 1000 / this.fps;
            },

            containerClasses () {
                return `${prefixCls}`;
            },
            innerClasses () {
                return `${prefixCls}-inner`;
            },
        },
        methods: {
            getPointOfCircle (angle) {
                const radius = 0.5;

                const x = radius + (radius * Math.cos(angle));
                const y = radius + (radius * Math.sin(angle));

                return { x, y };
            },

            gotoPoint () {
                const point = this.getPointOfCircle(this.currentAngle);

                this.gradient.fx = point.x;
                this.gradient.fy = point.y;
            },

            changeProgress ({ isAnimate = true }) {
                //剩余背景的长度，即背景圆环长度 - 已完成圆环的长度
//                this.strokeDashoffset = ((100 - this.finishedPercentage) / 100) * this.circumference;
                this.strokeDashoffset = (100 - this.completedSteps) / 100 * this.len+'px';

                if (this.gradientAnimation) {
                    clearInterval(this.gradientAnimation);
                }

                if (!isAnimate) {
                    this.gotoNextStep();
                    return;
                }

                const angleOffset = (this.completedSteps - 1) * this.circleSlice;
                let i = (this.currentAngle - angleOffset) / this.animateSlice;
                const incrementer = Math.abs(i - this.totalPoints) / this.totalPoints;
                const isMoveForward = i < this.totalPoints;

                this.gradientAnimation = setInterval(() => {
                    if (isMoveForward && i >= this.totalPoints ||
                        !isMoveForward && i < this.totalPoints) {
                        clearInterval(this.gradientAnimation);
                        return
                    }

                    this.currentAngle = angleOffset + (this.animateSlice * i);
                    this.gotoPoint();

                    i += isMoveForward ? incrementer : -incrementer;
                }, this.animationIncrements);
            },

            gotoNextStep () {
                this.currentAngle = this.completedSteps * this.circleSlice;
                this.gotoPoint();
            }
        },
        watch: {
            totalSteps () {
                this.changeProgress({ isAnimate: true });
            },

            completedSteps () {
                this.changeProgress({ isAnimate: true });
            },

            diameter () {
                this.changeProgress({ isAnimate: true });
            },

            strokeWidth () {
                this.changeProgress({ isAnimate: true });
            }
        },

        created () {
            this.changeProgress({ isAnimate: false });
        }
    };
</script>
