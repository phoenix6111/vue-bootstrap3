<template lang="html">
    <li role="presentation"
        :class="classes" @click="handleClick">
        <slot></slot>
    </li>
</template>

<script>
    export default {
        props: {
            key: {
                type:[String,Number]
            },
            disabled: {
                type: Boolean,
                default: false
            },
            divided: {
                type: Boolean,
                default: false
            },
            /*selected: {
                type: Boolean,
                default: false
            }*/
        },
        computed: {
            classes() {
                return [
                    {
                        'disabled': this.disabled,
                        'divider': this.divider
                    }
                ];
            }
        },
        methods: {
            handleClick() {
                const $parent = this.$parent;
                const hasChildren = this.$parent && this.$parent.$options.name == 'DropdownMenu';

                //如果是disabled则点击不关闭dropdown-menu
                if(this.disabled) {
                    this.$nextTick(()=> {
                        $parent.visible = true;
                    });
                } else {
                    if($parent && $parent.options.name === 'DropdownMenu') {
                        $parent.$emit('on-hover-click');
                    }
                }

                $parent.$emit('on-click',this.key);
            }
        }
    }
</script>