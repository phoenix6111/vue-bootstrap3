<template>
    <li :class="classes"
        @click.stop="select"
        @mouseout.stop="blur"
        v-show="!hidden">
        <slot>
            {{ showLabel }}
        </slot>
    </li>
</template>
<script>
    import Emitter from '../../../mixins/emitter2';

    const prefixCls = 'i-select-item';

    export default {
        name: 'BsOption',
        componentName: 'BsOption',
        mixins: [Emitter],
        props: {
            value: {
                type: [String, Number],
                required: true
            },
            label: {
                type: [String, Number]
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                selected: false,
                index: 0,    // for up and down to focus
                isFocus: false,
                hidden: false,    // for search
                searchLabel: ''    // the value is slot,only for search
            };
        },
        computed: {
            classes () {
                return [
                    'select-item',
                    {
                        [`${prefixCls}-selected`]: this.selected,
                        'disabled': this.disabled,
                        [`${prefixCls}-focus`]: this.isFocus
                    }
                ];
            },
            showLabel () {
                return (this.label) ? this.label : this.value;
            }
        },
        methods: {
            select () {
                if (this.disabled) {
                    return false;
                }

                this.dispatch('BsSelect', 'on-select-selected', this.value);
            },
            blur () {
                this.isFocus = false;
            },
            queryChange (val) {
                const parsedQuery = val.replace(/(\^|\(|\)|\[|\]|\$|\*|\+|\.|\?|\\|\{|\}|\|)/g, '\\$1');
                this.hidden = !new RegExp(parsedQuery, 'i').test(this.searchLabel);
            }
        },
        mounted () {
            this.searchLabel = this.$el.innerHTML;
            this.$on('on-select-close', () => {
                this.isFocus = false;
            });
            this.$on('on-query-change', (val) => {
                this.queryChange(val);
            });
        }
    };
</script>
