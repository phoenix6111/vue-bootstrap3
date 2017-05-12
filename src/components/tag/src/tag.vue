<template>
    <transition :name="closeTransition?'':'fade'">
        <div :class="classes" :style="{backgroundColor: color}">
            <span :class="dotClasses" v-if="showDot"></span>
            <span :class="textClasses"><slot></slot></span>
            <Icon v-if="closable" type="close" @click.stop="close"></Icon>
        </div>
    </transition>
</template>
<script>
    import Icon from '../../icon';
    import {oneOf} from '../../../utils/assist';
    const prefixCls = 'i-tag';

    export default {
        components: {Icon},
        props: {
            closable: {
                type: Boolean,
                default: false
            },
            closeTransition: {//是否禁用关闭时的渐变动画
                type:Boolean,
                default:false,
            },
            type: {
                validator (value) {
                    return oneOf(value, ['primary','info', 'success', 'danger', 'warning']);
                }
            },
            hit: {
                validator (value) {
                    return oneOf(value, ['border', 'dot','default']);
                },
                default:"default"
            },
            color: String//背景色
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.type}`]: !!this.type,
                        [`${prefixCls}-${this.hit}`]: !!this.hit,
                        [`${prefixCls}-closable`]: this.closable
                    }
                ];
            },
            textClasses () {
                return `${prefixCls}-text`;
            },
            dotClasses () {
                return `${prefixCls}-dot-inner`;
            },
            showDot () {
                return !!this.hit && this.hit === 'dot';
            }
        },
        methods: {
            close (e) {
                this.$emit('on-close', e);
            }
        }
    };
</script>