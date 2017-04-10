<template>
    <div :class="wrapClasses">
        <div class="input-group-btn" v-if="controls && sepMode">
            <IButton v-repeat-click="decrease" :disabled="minDisabled">
                <Icon type="minus"></Icon>
            </IButton>
        </div>
        <input type="text"
               class="form-control"
               :value="currentValue"
               @keydown.up.native.prevent="increase"
               @keydown.down.native.prevent="decrease"
               @blur="handleBlur"
               @input="handleInput"
               :disabled="disabled"
               :size="size"
               :max="max"
               :min="min"
               ref="input"
               aria-label="Input Number">
        <div class="input-group-btn" v-if="controls">
            <IButton v-repeat-click="decrease" :disabled="disabled || minDisabled" v-if="!sepMode">
                <Icon type="minus"></Icon>
            </IButton>
            <IButton v-repeat-click="increase" :disabled="disabled || maxDisabled">
                <Icon type="plus"></Icon>
            </IButton>
        </div>
    </div>
</template>

<script>
    import Icon from '../../icon';
    import IButton from '../../button';
    import {oneOf} from '../../../utils/assist';
    import { once, on } from '../../../utils/dom';

    export default {
        name: 'InputNumber',
        directives: {
            repeatClick: {
                bind(el, binding, vnode) {
                    let interval = null;
                    let startTime;
                    const handler = () => vnode.context[binding.expression].apply();
                    const clear = () => {
                        if (new Date() - startTime < 100) {
                            handler();
                        }
                        clearInterval(interval);
                        interval = null;
                    };

                    on(el, 'mousedown', () => {
                        startTime = new Date();
                        once(document, 'mouseup', clear);
                        interval = setInterval(handler, 100);
                    });
                }
            }
        },

        props: {
            step: {
                type: Number,
                default: 1
            },
            max: {
                type: Number,
                default: Infinity
            },
            min: {
                type: Number,
                default: -Infinity
            },
            value: {
                default: 0
            },
            disabled: Boolean,
            size: {//大小
                validator(val) {
                    return oneOf(val,['sm','lg']);
                }
            },
            sepMode: Boolean,//按钮是否分两边显示
            controls: {//是否显示控制按钮
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                currentValue: 0
            };
        },
        watch: {
            value: {
                immediate: true,
                handler(value) {
                    let newVal = Number(value);
                    if (isNaN(newVal)) return;
                    if (newVal >= this.max) newVal = this.max;
                    if (newVal <= this.min) newVal = this.min;
                    this.currentValue = newVal;
                    this.$emit('input', newVal);
                }
            }
        },
        computed: {
            wrapClasses() {
                return [
                    'input-group',
                    {
                        [`input-group-${this.size}`]:!!this.size,
                        'disabled':this.disabled
                    }
                ];
            },
            minDisabled() {
                return this._decrease(this.value, this.step) < this.min;
            },
            maxDisabled() {
                return this._increase(this.value, this.step) > this.max;
            },
            precision() {
                const { value, step, getPrecision } = this;
                return Math.max(getPrecision(value), getPrecision(step));
            }
        },
        methods: {
            toPrecision(num, precision) {
                if (precision === undefined) precision = this.precision;
                return parseFloat(parseFloat(Number(num).toFixed(precision)));
            },
            getPrecision(value) {
                const valueString = value.toString();
                const dotPosition = valueString.indexOf('.');
                let precision = 0;
                if (dotPosition !== -1) {
                    precision = valueString.length - dotPosition - 1;
                }
                return precision;
            },
            _increase(val, step) {
                if (typeof val !== 'number') return this.currentValue;

                const precisionFactor = Math.pow(10, this.precision);

                return this.toPrecision((precisionFactor * val + precisionFactor * step) / precisionFactor);
            },
            _decrease(val, step) {
                if (typeof val !== 'number') return this.currentValue;

                const precisionFactor = Math.pow(10, this.precision);

                return this.toPrecision((precisionFactor * val - precisionFactor * step) / precisionFactor);
            },
            increase() {
                if (this.disabled || this.maxDisabled) return;
                const value = this.value || 0;
                const newVal = this._increase(value, this.step);
                if (newVal > this.max) return;
                this.setCurrentValue(newVal);
            },
            decrease() {
                if (this.disabled || this.minDisabled) return;
                const value = this.value || 0;
                const newVal = this._decrease(value, this.step);
                if (newVal < this.min) return;
                this.setCurrentValue(newVal);
            },
            handleBlur(event) {
//                this.$refs.input.setCurrentValue(this.currentValue);
//                this.$refs.input.$el.value = this.currentValue;
                console.log(this.currentValue);
                event.target.value = this.currentValue;
            },
            setCurrentValue(newVal) {
                const oldVal = this.currentValue;
                if (newVal >= this.max) newVal = this.max;
                if (newVal <= this.min) newVal = this.min;
                if (oldVal === newVal) return;
                this.$emit('on-change', newVal, oldVal);
                this.$emit('input', newVal);
                this.currentValue = newVal;
            },
            handleInput(event) {
                const value = event.target.value.trim();
                const newVal = Number(value);
                console.log("newVal "+newVal);
                if (!isNaN(newVal)) {
                    this.setCurrentValue(newVal);
                }

//                console.log("currentValue "+this.currentValue);
            }
        }
    }
</script>