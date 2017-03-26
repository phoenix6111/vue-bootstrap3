<template>
    <transition name="fade">
        <div :class="classes">
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
            showClose: {
                type: Boolean,
                default: false
            },
            color: {
                validator (value) {
                    return oneOf(value, ['blue', 'green', 'red', 'yellow']);
                }
            },
            type: {
                validator (value) {
                    return oneOf(value, ['border', 'dot']);
                }
            }
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.color}`]: !!this.color,
                        [`${prefixCls}-${this.type}`]: !!this.type,
                        [`${prefixCls}-closable`]: this.showClose
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
                return !!this.type && this.type === 'dot';
            }
        },
        methods: {
            close (e) {
                this.$emit('on-close', e);
            }
        }
    };
</script>