<template lang="html">
    <label :class="classes">
        <input v-if="trueLabel || falseLabel"
               type="checkbox"
               :name="name"
               :disabled="disabled"
               v-model="model"
               @change="handleChange"
               @focus="focus = true"
               @blur="focus = false"
               :true-value="trueLabel"
               :false-value="falseLabel">
        <input
                v-else
                type="checkbox"
                :name="name"
                :disabled="disabled"
                :value="label"
                v-model="model"
                @change="handleChange"
                @focus="focus = true"
                @blur="focus = false">
        <i class="input-helper"></i>
        <slot>
            {{label}}
        </slot>
    </label>
</template>

<script>
    import Emitter from '../../../mixins/emitter';

    export default {

        mixins:[Emitter],

        props: {
            value: {},
            label: {},
            indeterminate: Boolean,
            disabled: Boolean,
            checked: Boolean,
            name: String,
            trueLabel: [String, Number],
            falseLabel: [String, Number]
        },
        data() {
            return {
                selfModel: false,
                focus: false
            };
        },
        computed: {
            classes() {
                return [
                    'checkbox checkbox-inline',
                    {
                        'disabled':this.disabled,
                        'indeterminate':this.indeterminate
                    }
                ];
            },
            model: {
                get() {
                    return this.isGroup
                        ? this.store : this.value !== undefined
                        ? this.value : this.selfModel;
                },

                set(val) {
                    if (this.isGroup) {
                        this.dispatch('CheckboxGroup', 'input', [val]);
                    } else if (this.value !== undefined) {
                        this.$emit('input', val);
                    } else {
                        this.selfModel = val;
                    }
                }
            },

            isChecked() {
                if ({}.toString.call(this.model) === '[object Boolean]') {
                    return this.model;
                } else if (Array.isArray(this.model)) {
                    return this.model.indexOf(this.label) > -1;
                } else if (this.model !== null && this.model !== undefined) {
                    return this.model === this.trueLabel;
                }
            },

            isGroup() {
                let parent = this.$parent;
                while (parent) {
                    if (parent.$options.componentName !== 'CheckboxGroup') {
                        parent = parent.$parent;
                    } else {
                        this._checkboxGroup = parent;
                        return true;
                    }
                }
                return false;
            },

            store() {
                return this._checkboxGroup ? this._checkboxGroup.value : this.value;
            }
        },
        methods: {
            addToStore() {
                if (
                    Array.isArray(this.model) &&
                    this.model.indexOf(this.label) === -1
                ) {
                    this.model.push(this.label);
                } else {
                    this.model = this.trueLabel || true;
                }
            },
            handleChange(ev) {
                this.$emit('change', ev);
                if (this.isGroup) {
                    this.$nextTick(_ => {
                        this.dispatch('CheckboxGroup', 'change', [this._checkboxGroup.value]);
                    });
                }
            }
        },

        created() {
            this.checked && this.addToStore();
        }
    }
</script>