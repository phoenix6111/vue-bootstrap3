<template>
    <header :data-ma-theme="theme" :class="classes">
        <ul class="header-inner">
            <li :class="leftTriggerClass" @click="toggleLeft" v-if="showToggleLeft">
                <div class="line-wrap">
                    <div class="line top"></div>
                    <div class="line center"></div>
                    <div class="line bottom"></div>
                </div>
            </li>

            <li class="header-inner-logo hidden-xs">
                <slot name="logo"><a href="index.html">Material Admin</a></slot>
            </li>

            <slot></slot>
        </ul>

        <!-- Top Search Content -->
        <transition name="move-up">
            <div class="header-search-wrap" v-show="searchToggled">
                <div class="header-search-wrap-inner">
                    <i class="hsw-close zmdi zmdi-arrow-left" @click="toggleSearch"></i>
                    <input type="text">
                </div>
            </div>
        </transition>

        <div class="ma-backdrop" v-if="showBackdrop"></div>

    </header>
</template>

<script>
    import {oneOf} from '../../../utils/assist';

    export default {
        name:'Toolbar',
        props: {
            theme: { //主题
                validator(val) {
                    return oneOf(val,['lightblue','bluegray','blue','purple','orange','cyan','green','teal','pink']);
                },
                default:'blue'
            },
            showToggleLeft: {   //是否显示切换左侧Sidebar的按钮
                type:Boolean,
                default:true
            },
            fixed: {
                type:Boolean,
                default:false
            }

        },
        data() {
            return {
                searchToggled:false,
                showBackdrop:false,
                leftToggled:false,
                rightToggled:false
            }
        },
        computed: {
            classes() {
                return [
                    'header','clearfix',
                    {
                        'search-toggled':this.searchToggled,
                        'p-fixed':this.fixed
                    }
                ];
            },
            leftTriggerClass() {
                return [
                    'header-inner-trigger ma-trigger',
                    {
                        'toggled':this.leftToggled
                    }
                ]
            },
            rightTriggerClass() {
                return [
                    'hidden-xs ma-trigger',
                    {
                        'toggled':this.rightToggled
                    }
                ]
            }
        },
        methods: {
            toggleLeft() {
                this.leftToggled = !this.leftToggled;
                this.$emit('toggle-left',this.leftToggled);
            },
            toggleRight() {
                this.rightToggled = !this.rightToggled;
                this.$emit('toggle-right',this.rightToggled);
            },
            toggleSearch() {
                this.searchToggled = !this.searchToggled;
                console.log(" search toggled "+this.searchToggled);
                this.$emit('toggle-search',this.searchToggled);
            }
        }
    }
</script>