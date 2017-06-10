<template lang="html">
    <!--<li role="presentation"
        :class="classes"
        @click="handleClick">
        <a href="javascript:void(0)" v-if="!divided"><slot></slot></a>
    </li>-->
    <a :class="classes" @click="handleClick">
        <template v-if="icon">
            <Icon type="icon" v-if="icon"></Icon>
            <slot></slot>
        </template>
        <template v-else>
            <slot></slot>
        </template>
    </a>
</template>

<script>
    import Emitter from '../../../mixins/emitter';
    import Icon from '../../icon';

    export default {
        name:'DropdownItem',

        mixins: [Emitter],
        components: {
            Icon
        },

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
            },
            icon: {
                type:String
            }
        },
        computed: {
            classes() {
                return [
                    'dropdown-item',
                    {
                        'active':this.selected,
                        'disabled': this.disabled,
                        'divider': this.divider,
                        'dropdown-item-icon':this.icon
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