<template>
    <form :class="classes">
        <slot></slot>
    </form>
</template>

<script>
    import {oneOf} from '../../../utils/assist';

    export default {
        name: 'BsForm',

        componentName: 'BsForm',
        props: {
            model: Object,
            rules: Object,
            labelWidth: String,
            labelPosition: {
                validator (value) {
                    return oneOf(value, ['left', 'right', 'top']);
                },
                default: 'right'
            },
            labelSuffix: {
                type: String,
                default: ''
            },
            inline: Boolean,
            showMessage: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                fields: []
            };
        },
        computed: {
            classes() {
                return [
                    {
                        'form-inline':this.inline,
                        'form-horizontal':!this.inline && this.labelPosition!=='top',
                        [`label-${this.labelPosition}`]:!!this.labelPosition
                    }
                ];
            }
        },
        watch: {
            rules() {
                this.validate();
            }
        },
        created() {
            this.$on('bs.form.addField', (field) => {
                if (field) {
                    this.fields.push(field);
                }
            });
            /* istanbul ignore next */
            this.$on('bs.form.removeField', (field) => {
                if (field.prop) {
                    this.fields.splice(this.fields.indexOf(field), 1);
                }
            });
        },
        methods: {
            resetFields() {
                this.fields.forEach(field => {
                    field.resetField();
                });
            },
            validate(callback) {
                let valid = true;
                let count = 0;
                this.fields.forEach((field, index) => {
                    field.validate('', errors => {
                        if (errors) {
                            valid = false;
                        }
                        if (typeof callback === 'function' && ++count === this.fields.length) {
                            callback(valid);
                        }
                    });
                });
            },
            validateField(prop, cb) {
                var field = this.fields.filter(field => field.prop === prop)[0];
                if (!field) { throw new Error('must call validateField with valid prop string!'); }

                field.validate('', cb);
            }
        }
    }
</script>