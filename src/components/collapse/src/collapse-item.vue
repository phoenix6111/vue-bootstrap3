<template>
    <div class="panel panel-collapse">
        <div :class="headClasses" role="tab" @click="handleHeadClick">
            <h4 class="panel-title">
                <a aria-expanded="true" href="javascript:void(0)" aria-controls="collapseOne" :class="{'collapsed':!isActive}">
                    <slot name="title">{{title}}</slot>
                </a>
            </h4>
        </div>
        <transition name="collapse-transition">
            <div :class="bodyClasses" v-show="isActive" aria-labelledby="headingOne">
                <div class="panel-body">
                    <slot></slot>
                </div>
            </div>
        </transition>

    </div>
</template>

<script>
    export default {
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
                    'collapse',
                    {
                        'in':this.isActive
                    }
                ]
            }
        },
        methods: {
            handleHeadClick() {
                this.$emit('item-click',this);
            }
        }
    }
</script>