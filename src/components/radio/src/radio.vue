<template lang="html">

    <div :class="classes" v-if="vertical">
        <label>
            <input type="radio"
                   :name="name"
                   :value="label"
                   :disabled="isDisabled"
                   v-model="model">
            <i class="input-helper"></i>
            <slot>{{label}}</slot>
        </label>
    </div>

    <label :class="classes" v-else>
        <input type="radio"
               :name="name"
               :value="label"
               :disabled="isDisabled"
               v-model="model">
        <i class="input-helper"></i>
        <slot>{{label}}</slot>
    </label>

</template>

<script>
    import Emitter from '../../../mixins/emitter';

    const prefixCls = 'ivu-radio';

    export default {
        name:'Radio',
        componentName:'Radio',
        mixins:[Emitter],
        props: {
            name: String,
            value: [String, Boolean, Number],
            label:[String,Number],
            disabled: Boolean,
            customClass:{}
        },
        computed: {
            classes() {
                return [
                    'radio',this.customClass,
                    {
                        'disabled': this.isDisabled,
                        'radio-inline':!this.vertical,
                        'checked':this.model==this.label
                    }
                ];
            },

            wrapClasses () {
                return [
                    `${prefixCls}-wrapper`,
                    {
                        [`${prefixCls}-group-item`]: this.isGroup,
                        [`${prefixCls}-wrapper-checked`]: this.model == this.label,
                        [`${prefixCls}-wrapper-disabled`]: this.isDisabled
                    }
                ];
            },
            radioClasses () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-checked`]: this.model == this.label,
                        [`${prefixCls}-disabled`]: this.isDisabled
                    }
                ];
            },
            innerClasses () {
                return `${prefixCls}-inner`;
            },
            inputClasses () {
                return `${prefixCls}-input`;
            },

            isGroup() {
                let parent = this.$parent;
                while (parent) {
                    if (parent.$options.componentName !== 'RadioGroup') {
                        parent = parent.$parent;
                    } else {
                        this._radioGroup = parent;
                        return true;
                    }
                }
                return false;
            },

            model: {
                get() {
                    return this.isGroup ? this._radioGroup.value : this.value;
                },

                set(val) {
                    if (this.isGroup) {
                        this.dispatch('RadioGroup', 'input', [val]);
                    } else {
                        this.$emit('input', val);
                    }
                }
            },

            isDisabled() {
                return this.isGroup
                    ? this._radioGroup.disabled || this.disabled
                    : this.disabled;
            },
            vertical() {
                return this.isGroup?this._radioGroup.vertical : false;
            }
        }
    }
</script>