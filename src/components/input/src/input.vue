<template>

    <div :class="inputGroupClasses" v-if="$slots.prepend || $slots.append">
        <span class="input-group-addon" v-if="$slots.prepend" ref="prepend">
            <slot name="prepend"></slot>
        </span>
        <div class="fg-line">
            <input :type="type"
                   :class="inputClasses"
                   :placeholder="placeholder"
                   :disabled="disabled"
                   :readonly="readonly"
                   :autofocus="autofocus"
                   :maxlength="maxlength"
                   :minlength="minlength"
                   :min="min"
                   :max="max"
                   :step="step"
                   :name="name"
                   :value="currentValue"
                   :number="number"
                   @keyup.enter="handleEnter"
                   @focus="handleFocus"
                   @blur="handleBlur"
                   @input="handleInput"
                   @change="handleChange">
        </div>
        <span class="input-group-addon last" v-if="$slots.append" ref="append">
            <slot name="append"></slot>
        </span>
    </div>

    <div :class="inputWrapClasses" v-else>
        <!-- textarea -->
        <input v-if="type !== 'textarea'"
               :type="type"
               :class="inputClasses"
               :placeholder="placeholder"
               :disabled="disabled"
               :readonly="readonly"
               :autofocus="autofocus"
               :maxlength="maxlength"
               :minlength="minlength"
               :min="min"
               :max="max"
               :step="step"
               :name="name"
               :value="currentValue"
               :number="number"
               @keyup.enter="handleEnter"
               @focus="handleFocus"
               @blur="handleBlur"
               @input="handleInput"
               @change="handleChange">
        <textarea v-else
                  class="form-control"
                  ref="textarea"
                  :style="textareaStyles"
                  :placeholder="placeholder"
                  :disabled="disabled"
                  :readonly="readonly"
                  :autofocus="autofocus"
                  :rows="rows"
                  :maxlength="maxlength"
                  :minlength="minlength"
                  :name="name"
                  :value="value"
                  @keyup.enter="handleEnter"
                  @focus="handleFocus"
                  @blur="handleBlur"
                  @input="handleInput">

        </textarea>
        <Icon :type="icon" v-if="icon" @click="handleIconClick"></Icon>
    </div>

</template>

<script>
    import Icon from '../../icon';
    import { oneOf, findComponentUpward } from '../../../utils/assist';
    import emitter from '../../../mixins/emitter';
    import calcTextareaHeight from '../../../utils/calcTextareaHeight';
    import merge from '../../../utils/merge';

    export default {
        name: 'BsInput',
        componentName: 'BsInput',
        mixins: [emitter],
        props: {
            type: {
                validator (value) {
                    return oneOf(value, ['text', 'textarea', 'password','number']);
                },
                default: 'text'
            },
            value: {
                type: [String, Number],
                default: ''
            },
            size: {
                validator (value) {
                    return oneOf(value, ['sm', 'lg']);
                }
            },
            placeholder: {
                type: String,
                default: ''
            },
            maxlength: Number,
            minlength: Number,
            max: {},
            min: {},
            step: {},
            readonly: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            focused: {
                type:Boolean,
                default:false
            },
            icon: String,
            autosize: {
                type: [Boolean, Object],
                default: false
            },
            autofocus: {
                type:Boolean,
                default:false
            },
            rows: {
                type: Number,
                default: 2
            },
            name: {
                type: String
            },
            number: {
                type: Boolean,
                default: false
            },
            onIconClick:Function,
            validateEvent: {
                type: Boolean,
                default: true
            }
        },
        data () {
            return {
                currentValue: this.value,
                currentFocused:false,
                textareaCalcStyle: {}
            };
        },
        computed: {
            inputGroupClasses() {
                return [
                    'input-group',
                    {
                        [`input-group-${this.size}`]:!!this.size
                    }
                ];
            },
            inputWrapClasses() {
                return [
                    'fg-line',
                    {
                        'fg-toggled':this.focused || this.currentFocused,
                        'disabled':this.disabled,
                        'with-icon':this.icon
                    }
                ];
            },
            inputClasses() {
                return [
                    'form-control',
                    {
                        [`input-${this.size}`]:!!this.size,
                        'disabled':this.disabled
                    }
                ];
            },
            textareaStyles() {
                return merge({}, this.textareaCalcStyle, {resize: this.resize});
            }
        },
        methods: {
            handleEnter (event) {
                this.$emit('on-enter', event);
            },
            handleIconClick (event) {
                if (this.onIconClick) {
                    this.onIconClick(event);
                }
                this.$emit('on-click', event);
            },
            handleFocus (event) {
                this.currentFocused = true;
                this.$emit('on-focus', event);
            },
            handleBlur (event) {
                this.$emit('on-blur', event);
                this.currentFocused = false;
                if (this.validateEvent && !findComponentUpward(this, ['DatePicker', 'TimePicker', 'Cascader', 'Search'])) {
                    this.dispatch('FormItem', 'bs.form.blur', this.currentValue);
                }
            },
            handleInput (event) {
                let value = event.target.value;
                if (this.number) value = Number.isNaN(Number(value)) ? value : Number(value);
                this.$emit('input', value);
                this.setCurrentValue(value);
                this.$emit('on-change', event);
            },
            handleChange (event) {
                this.$emit('on-input-change', event);
            },
            setCurrentValue (value) {
                if (value === this.currentValue) return;
                this.$nextTick(() => {
                    this.resizeTextarea();
                });
                this.currentValue = value;
                if (this.validateEvent && !findComponentUpward(this, ['DatePicker', 'TimePicker', 'Cascader', 'Search'])) {
                    this.dispatch('FormItem', 'bs.form.change', value);
                }
            },
            resizeTextarea () {
                var {autosize, type} = this;
                if (!autosize || type !== 'textarea') return;
                const minRows = autosize.minRows;
                const maxRows = autosize.maxRows;

                this.textareaCalcStyle = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
            }
        },
        watch: {
            value (val) {
                this.setCurrentValue(val);
            }
        },
        mounted () {
            this.resizeTextarea();
        }
    }
</script>