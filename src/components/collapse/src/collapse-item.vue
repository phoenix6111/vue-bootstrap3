<template>
    <div class="panel panel-collapse">
        <div :class="headClasses" role="tab" @click="handleHeadClick">
            <h4 class="panel-title">
                <a aria-expanded="true" href="javascript:void(0)" aria-controls="collapseOne" :class="{'collapsed':!isActive}">
                    <slot name="title">{{title}}</slot>
                </a>
            </h4>
        </div>
        <CollapseTransition>
            <div :class="bodyClasses" v-show="isActive" aria-labelledby="headingOne">
                <div class="panel-body">
                    <slot></slot>
                </div>
            </div>
        </CollapseTransition>

    </div>
</template>

<script>
    import CollapseTransition from '../../../transitions/collapse-transition';

    export default {
        components:{CollapseTransition},
        props: {
            title:String,
            name: {
                type: [String, Number],
                default() {
                    return this._uid;
                }
            },
            active: {
                type:Boolean,
                default:false
            }
        },
        data() {
            return {
                isActive:false
            }
        },
        computed: {
            headClasses() {
                return [
                    'panel-heading',
                    {
                        'active':this.isActive
                    }
                ];
            },
            bodyClasses() {
                return [
                    'collapse'
                ]
            }
        },
        methods: {
            handleHeadClick() {
                this.$emit('item-click',this);
            }
        },
        mounted() {
            console.log(this.$slots);
        }
    }
</script>