<template>

    <!-- form inline-->
    <!--<form class="form-inline label-left">
        <div class="form-group form-item">
            <label class="control-label">Name</label>
            <div class="form-item-content">
                <div class="fg-line">
                    <input type="text" class="form-control" placeholder="Jane Doe">
                </div>
            </div>
        </div>
    </form>-->

    <div :class="classes">
        <label :for="prop" class="control-label" :style="labelStyle" v-if="label">
            {{label + form.labelSuffix}}
        </label>
        <div class="form-item-content" :style="contentStyle">
            <slot></slot>
            <transition name="fade">
                <small class="help-block" v-if="validateState === 'error' && showMessage && form.showMessage">
                    {{validateMessage }}
                </small>
            </transition>
            <!--<transition name="fade">
                <span class="zmdi zmdi-close form-control-feedback" v-if="validateState === 'error' && showMessage && form.showMessage"></span>
            </transition>-->

        </div>
    </div>

    <!-- -->

</template>

<script>
    import AsyncValidator from 'async-validator';
    import emitter from '../../../mixins/emitter';

    function noop() {
    }

    function getPropByPath(obj, path) {
        let tempObj = obj;
        path = path.replace(/\[(\w+)\]/g, '.$1');
        path = path.replace(/^\./, '');

        let keyArr = path.split('.');
        let i = 0;

        for (let len = keyArr.length; i < len - 1; ++i) {
            let key = keyArr[i];
            if (key in tempObj) {
                tempObj = tempObj[key];
            } else {
                throw new Error('please transfer a valid prop path to form item!');
            }
        }
        return {
            o: tempObj,
            k: keyArr[i],
            v: tempObj[keyArr[i]]
        };
    }

    const prefixCls = "form-group";

    const validateFlag = {
        'warning': {
            msgCls:'has-warning',
            icon:'alert-triangle',
        },
        'success': {
            msgCls:'has-success',
            icon:'check',
        },
        'error': {
            msgCls:'has-error',
            icon:'close',
        },
    };

    export default {
        name: 'FormItem',

        componentName: 'FormItem',

        mixins: [emitter],

        props: {
            prefixCls: prefixCls,
            label: String,
            labelWidth: String,
            prop: String,
            required: Boolean,
            rules: [Object, Array],
            error: String,
            validateStatus: String,
            showMessage: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                validateState: '',
                validateMessage: '',
                validateDisabled: false,
                validator: {},
                isRequired: false
            };
        },
        watch: {
            error(value) {
                this.validateMessage = value;
                this.validateState = value ? 'error' : '';
            },
            validateStatus(value) {
                this.validateState = value;
            }
        },
        computed: {
            classes () {
                return [
//                    'form-group form-item has-success has-feedback'
                    `form-group`,
                    {
                        'form-item':this.form.labelPosition !== 'top',
                        [`is-required`]: this.required || this.isRequired,//required 显示warning信息
                        [`has-error`]: this.validateState === 'error',//error 显示error信息
                        //[`has-success has-feedback`]: this.validateState === 'success',//success 显示success信息
                        [`${prefixCls}-validating`]: this.validateState === 'validating'
                    }
                ];
            },
            labelStyle() {
                var ret = {};
                if (this.form.labelPosition === 'top') return ret;
                var labelWidth = this.labelWidth || this.form.labelWidth;
                if (labelWidth) {
                    ret.width = labelWidth;
                }
                return ret;
            },
            contentStyle() {
                var ret = {};
                if (this.form.labelPosition === 'top' || this.form.inline) return ret;
                var labelWidth = this.labelWidth || this.form.labelWidth;
                if (labelWidth) {
                    ret.marginLeft = labelWidth;
                }
                return ret;
            },
            form() {
                var parent = this.$parent;
                while (parent.$options.componentName !== 'BsForm') {
                    parent = parent.$parent;
                }
                return parent;
            },
            fieldValue: {
                cache: false,
                get() {
                    var model = this.form.model;
                    if (!model || !this.prop) {
                        return;
                    }

                    var path = this.prop;
                    if (path.indexOf(':') !== -1) {
                        path = path.replace(/:/, '.');
                    }

                    return getPropByPath(model, path).v;
                }
            }
        },
        methods: {
            validate(trigger, callback = noop) {
                var rules = this.getFilteredRule(trigger);
                if (!rules || rules.length === 0) {
                    callback();
                    return true;
                }

                this.validateState = 'validating';

                var descriptor = {};
                descriptor[this.prop] = rules;

                var validator = new AsyncValidator(descriptor);
                var model = {};

                model[this.prop] = this.fieldValue;

                validator.validate(model, {firstFields: true}, (errors, fields) => {
                    this.validateState = !errors ? 'success' : 'error';
                    this.validateMessage = errors ? errors[0].message : '';

                    callback(this.validateMessage);
                });
            },
            resetField() {
                this.validateState = '';
                this.validateMessage = '';

                let model = this.form.model;
                let value = this.fieldValue;
                let path = this.prop;
                if (path.indexOf(':') !== -1) {
                    path = path.replace(/:/, '.');
                }

                let prop = getPropByPath(model, path);

                if (Array.isArray(value) && value.length > 0) {
                    this.validateDisabled = true;
                    prop.o[prop.k] = [];
                } else if (value !== '') {
                    this.validateDisabled = true;
                    prop.o[prop.k] = this.initialValue;
                }
            },
            getRules() {
                var formRules = this.form.rules;
                var selfRuels = this.rules;

                formRules = formRules ? formRules[this.prop] : [];

                return [].concat(selfRuels || formRules || []);
            },
            getFilteredRule(trigger) {
                var rules = this.getRules();

                return rules.filter(rule => {
                    return !rule.trigger || rule.trigger.indexOf(trigger) !== -1;
                });
            },
            onFieldBlur() {
                this.validate('blur');
            },
            onFieldChange() {
                if (this.validateDisabled) {
                    this.validateDisabled = false;
                    return;
                }

                this.validate('change');
            }
        },
        mounted() {
            if (this.prop) {
                this.dispatch('BsForm', 'bs.form.addField', [this]);

                Object.defineProperty(this, 'initialValue', {
                    value: this.fieldValue
                });

                let rules = this.getRules();

                if (rules.length) {
                    rules.every(rule => {
                        if (rule.required) {
                            this.isRequired = true;
                            return false;
                        }
                    });
                    this.$on('bs.form.blur', this.onFieldBlur);
                    this.$on('bs.form.change', this.onFieldChange);
                }
            }
        },
        beforeDestroy() {
            this.dispatch('BsForm', 'bs.form.removeField', [this]);
        }
    };
</script>