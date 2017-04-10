<template lang="html">
    <li role="presentation"
        :class="classes"
        @mouseenter="hoverItem"
        @click.stop="selectOptionClick"
        v-show="visible">
        <slot>
            <a href="javascript:void(0)" v-if="!divided">{{currentLabel}}</a>
        </slot>
    </li>
</template>

<script>
    import Emitter from '../../../mixins/emitter';

    export default {
        name:'BsOption',

        mixins: [Emitter],

        props: {
            value: {
                required: true
            },
            label: [String, Number],
            created: Boolean,
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                index: -1,
                groupDisabled: false,
                visible: true,
                hitState: false
            };
        },

        computed: {
            classes() {
                return [
                    {
                        'active':this.itemSelected,
                        'disabled': this.disabled,
//                        'divider': this.divider
                    }
                ];
            },
            currentLabel() {
                return this.label || ((typeof this.value === 'string' || typeof this.value === 'number') ? this.value : '');
            },

            currentValue() {
                return this.value || this.label || '';
            },

            parent() {
                let result = this.$parent;
                while (!result.isSelect) {
                    result = result.$parent;
                }
                return result;
            },

            itemSelected() {
                if (!this.parent.multiple) {
                    return this.value === this.parent.value;
                } else {
                    return this.parent.value.indexOf(this.value) > -1;
                }
            },

            limitReached() {
                if (this.parent.multiple) {
                    return !this.itemSelected &&
                        this.parent.value.length >= this.parent.multipleLimit &&
                        this.parent.multipleLimit > 0;
                } else {
                    return false;
                }
            }
        },

        watch: {
            currentLabel() {
                if (!this.created) this.dispatch('BsSelect', 'setSelected');
            },
            value() {
                if (!this.created) this.dispatch('BsSelect', 'setSelected');
            }
        },

        methods: {
            handleGroupDisabled(val) {
                this.groupDisabled = val;
            },

            hoverItem() {
                if (!this.disabled && !this.groupDisabled) {
                    this.parent.hoverIndex = this.parent.options.indexOf(this);
                }
            },

            selectOptionClick() {
                if (!this.disabled && !this.groupDisabled) {
                    this.dispatch('BsSelect', 'handleOptionClick', this);
                }
            },

            queryChange(query) {
                // query 里如果有正则中的特殊字符，需要先将这些字符转义
                let parsedQuery = String(query).replace(/(\^|\(|\)|\[|\]|\$|\*|\+|\.|\?|\\|\{|\}|\|)/g, '\\$1');
                this.visible = new RegExp(parsedQuery, 'i').test(this.currentLabel) || this.created;
                if (!this.visible) {
                    this.parent.filteredOptionsCount--;
                }
            },

            resetIndex() {
                this.$nextTick(() => {
                    this.index = this.parent.options.indexOf(this);
                });
            }
        },

        created() {
            this.parent.options.push(this);
            this.parent.cachedOptions.push(this);
            this.parent.optionsCount++;
            this.parent.filteredOptionsCount++;
            this.index = this.parent.options.indexOf(this);

            this.$on('queryChange', this.queryChange);
            this.$on('handleGroupDisabled', this.handleGroupDisabled);
            this.$on('resetIndex', this.resetIndex);
        },

        beforeDestroy() {
            this.dispatch('BsSelect', 'onOptionDestroy', this);
        }
    }
</script>