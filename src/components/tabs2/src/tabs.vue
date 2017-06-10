<template>
    <div role="tabpanel">
        <ul :class="ulClasses" role="tablist">
            <li v-for="tab in tabs" :class="{'active':tab.isActive}">
                <a href="javascript:void(0)" @click="selectTab(tab)">
                    <Icon v-if="showIcon && !!tab.icon" :type="tab.icon"></Icon>
                    <span>
                        {{tab.label}}
                    </span>
                </a>
            </li>
        </ul>

        <div class="tab-content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    import Icon from '../../icon';
    import { oneOf } from '../../../utils/assist';

    export default {
        props: {
            justified: {
                type:Boolean,
                default:false
            },
            showIcon: {
                type:Boolean,
                default:false
            },
            activeTab: {
                type:[String,Number],
                default:'0'
            },
            align: {
                validator(value) {
                    return oneOf(value,['left','center','right']);
                },
                default:'left'
            }
        },
        data() {
            return {
                tabs: []
            }
        },
        mounted() {
            this.tabs = this.$children;
            this.tabs.forEach((tab, index) => {
                if(typeof tab.tabName == 'undefined' || !tab.tabName) {
                    tab.tabName = index;
                }
                tab.isActive = (tab.tabName == this.activeTab);
            });

        },
        methods: {
            selectTab(selectedTab) {
                this.tabs.forEach(tab => {
                    tab.isActive = (tab.tabName == selectedTab.tabName);
                });
            }
        },
        computed: {
            ulClasses() {
                return [
                    'tab-nav',
                    {
                        'tn-justified':this.justified,
                        'tn-icon':this.showIcon,
                        [`tab-nav-${this.align}`]:!!this.align
                    }
                ];
            }
        }
    }
</script>