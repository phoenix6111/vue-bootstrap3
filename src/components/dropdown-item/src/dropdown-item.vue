<template lang="html">
    <li role="presentation"
        :class="classes"
        @click="handleClick">
        <a href="javascript:void(0)" v-if="!divided"><slot></slot></a>
    </li>
</template>

<script>
    import Emitter from '../../../mixins/emitter';

    export default {
        name:'DropdownItem',

        mixins: [Emitter],

        props: {
            command:String,
            disabled: {
                type: Boolean,
                default: false
            },
            divided: {
                type: Boolean,
                default: false
            },
            selected: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            classes() {
                return [
                    {
                        'active':this.selected,
                        'disabled': this.disabled,
                        'divider': this.divider
                    }
                ];
            }
        },
        methods: {
            handleClick() {
                //如果是disabled则点击不关闭dropdown-menu
                if(this.disabled) {
                    this.$nextTick(()=> {
                        $parent.visible = true;
                    });
                } else {
                    this.dispatch('Dropdown', 'menu-item-click', [this.command, this]);
                }
            }
        }
    }
</script>