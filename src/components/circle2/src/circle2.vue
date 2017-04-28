<template>
    <div class="radial-progress-container" :style="containerStyle">
        <div class="radial-progress-inner" :style="innerCircleStyle">
            <slot></slot>
        </div>
        <svg class="radial-progress-bar"
             :width="diameter"
             :height="diameter"
             version="1.1"
             xmlns="http://www.w3.org/2000/svg">
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
            <circle :r="innerCircleRadius"
                    :cx="radius"
                    :cy="radius"
                    fill="transparent"
                    :stroke="innerStrokeColor"
                    :stroke-dasharray="circumference"
                    stroke-dashoffset="0"
                    stroke-linecap="round"
                    :style="strokeStyle"></circle>
            <circle :transform="'rotate(270, ' + radius + ',' + radius + ')'"
                    :r="innerCircleRadius"
                    :cx="radius"
                    :cy="radius"
                    fill="transparent"
                    :stroke="'url(#radial-gradient' + _uid + ')'"
                    :stroke-dasharray="circumference"
                    :stroke-dashoffset="circumference"
                    stroke-linecap="round"
                    :style="progressStyle"></circle>
        </svg>
    </div>
</template>

<script>
    export default {
        props: {
            diameter: { // circle的直径
                type: Number,
                required: false,
                default: 200
            },
            totalSteps: {   // 总的steps
                type: Number,
                required: true,
                default: 10
            },
            completedSteps: {   //开始的steps 或是 已经完成的steps
                type: Number,
                required: true,
                default: 0
            },
            startColor: {   // 开始的color
                type: String,
                required: false,
                default: '#bbff42'
            },
            stopColor: {    // 结束的color
                type: String,
                required: false,
                default: '#429321'
            },
            strokeWidth: {  // progressbar 的宽度，这里假设progress的宽度和 圆环的宽度一致
                type: Number,
                required: false,
                default: 10
            },
            animateSpeed: {     //动画执行一次的时间
                type: Number,
                required: false,
                default: 600
            },
            innerStrokeColor: {     //圆环背景颜色
                type: String,
                required: false,
                default: '#eaeef2'
            },
            fps: {  //一秒执行多少 frame
                type: Number,
                required: false,
                default: 60
            },
            timingFunc: {   //动画执行的fun，如：linear,ease...
                type: String,
                required: false,
                default: 'linear'
            }
        },

        data () {
            return {
                gradient: { //圆环颜色参数
                    fx: 0.99,
                    fy: 0.5,
                    cx: 0.5,
                    cy: 0.5,
                    r: 0.65
                },
                gradientAnimation: null,    //动画执行interval
                currentAngle: 0,        //  进度环的角度
                strokeDashoffset: 0
            }
        },

        computed: {
            radius () { //半径
                return this.diameter / 2;
            },

            innerCircleRadius () {      //背景圆环的半径
                return this.innerCircleDiameter / 2;
            },

            innerCircleDiameter () {    //背景圆环的直径
                return this.diameter - (this.strokeWidth * 2);
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

            containerStyle () {
                return {
                    height: `${this.diameter}px`,
                    width: `${this.diameter}px`
                }
            },

            progressStyle () {  //进度环的样式
                return {
                    height: `${this.diameter}px`,
                    width: `${this.diameter}px`,
                    strokeWidth: `${this.strokeWidth}px`,
                    strokeDashoffset: this.strokeDashoffset,
                    transition: `stroke-dashoffset ${this.animateSpeed}ms ${this.timingFunc}`
                }
            },

            strokeStyle () {    //背景圆环的样式
                return {
                    height: `${this.diameter}px`,
                    width: `${this.diameter}px`,
                    strokeWidth: `${this.strokeWidth}px`
                }
            },

            innerCircleStyle () {   //圆环内文字的样式，垂直居中
                return {
                    width: `${this.innerCircleDiameter}px`
                }
            }
        },

        methods: {
            getPointOfCircle (angle) {
                const radius = 0.5;

                const x = radius + (radius * Math.cos(angle));
                const y = radius + (radius * Math.sin(angle));

                return { x, y };
            },

            gotoPoint () {  //颜色渲染
                const point = this.getPointOfCircle(this.currentAngle);

                this.gradient.fx = point.x;
                this.gradient.fy = point.y;
            },

            changeProgress ({ isAnimate = true }) {
                this.strokeDashoffset = ((100 - this.finishedPercentage) / 100) * this.circumference;//剩余背景的长度，即背景圆环长度 - 已完成圆环的长度

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
                        clearInterval(this.gradientAnimation)
                        return
                    }

                    this.currentAngle = angleOffset + (this.animateSlice * i)
                    this.gotoPoint();

                    i += isMoveForward ? incrementer : -incrementer;
                }, this.animationIncrements);
            },

            gotoNextStep () {
                this.currentAngle = this.completedSteps * this.circleSlice
                this.gotoPoint()
            }
        },

        watch: {
            totalSteps () {
                this.changeProgress({ isAnimate: true })
            },

            completedSteps () {
                this.changeProgress({ isAnimate: true })
            },

            diameter () {
                this.changeProgress({ isAnimate: true })
            },

            strokeWidth () {
                this.changeProgress({ isAnimate: true })
            }
        },

        created () {
            this.changeProgress({ isAnimate: false })
        }
    }
</script>

<style>
    .radial-progress-container {
        position: relative;
        display: inline-block;
    }

    .radial-progress-inner {
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        position: absolute;
        border-radius: 50%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>