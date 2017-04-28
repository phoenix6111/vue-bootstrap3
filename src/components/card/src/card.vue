<template>
    <div :class="classes">
        <template v-if="cardImgOverlay">
            <slot name="card-img"></slot>

            <div class="card-img-overlay">
                <div class="card-header" v-if="showHead">
                    <h2 class="card-title" v-if="title || $slots.title">
                        <slot name="title">{{title}}</slot>
                    </h2>
                    <small class="card-subtitle" v-if="subtitle || $slots.subtitle">
                        <slot name="subtitle">{{subtitle}}</slot>
                    </small>
                    <slot name="actions"></slot>
                </div>

                <div class="card-block">
                    <slot></slot>
                </div>
            </div>
        </template>

        <template v-else>
            <slot name="card-img-top"></slot>
            <div class="card-header" v-if="showHead">
                <h2 class="card-title" v-if="title || $slots.title">
                    <slot name="title">{{title}}</slot>
                </h2>
                <small class="card-subtitle" v-if="subtitle || $slots.subtitle">
                    <slot name="subtitle">{{subtitle}}</slot>
                </small>

                <slot name="actions"></slot>
            </div>

            <div class="card-block">
                <slot></slot>
            </div>
            <slot name="card-img-bottom"></slot>
            <div class="card-footer" v-if="$slots.footer">
                <!--<a class="card-link" href="#">Card link</a>
                <a class="card-link" href="#">Another link</a>-->
                <slot name="footer"></slot>
            </div>
        </template>


    </div>

</template>

<script>
    import {oneOf} from '../../../utils/assist';

    export default {
        name:'ICard',
        props: {
            title:String,
            subtitle:String,
            type: {
                validator(value) {
                    return oneOf(value,['primary','secondary','info','success','warning','danger']);
                }
            },
            outline: {//outline类型
                type:Boolean,
                default:false
            },
            cardImgOverlay: { //仅仅显示图片与图片信息的Card
                type:Boolean,
                default:false
            },
            inverse: { //如果背景不是白色的，则设置inverse可以将文字设置为白色
                type:Boolean,
                default:false
            }

        },
        data() {
            return {
                showHead:false,
            }
        },
        computed: {
            classes() {
                return [
                    'card',
                    {
                        [`card-${this.type}`]:!!this.type,
                        [`card-outline-${this.type}`]:this.outline && !!this.type,
                        'card-inverse':this.inverse,
                    }
                ];
            }
        },
        mounted() {
            this.showHead = this.title || this.subtitle || (this.$slots.title !== undefined) || (this.$slots.subtitle !== undefined);
        }

    }
</script>