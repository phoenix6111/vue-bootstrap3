<template lang="html">
    <div :class="classes" transition="fade" v-show="visible">
        <button type="button" class="close" v-if="closable"
                aria-label="Close" aria-hidden="true" @click="close">
            <span>&times;</span>
        </button>
        <slot></slot>
    </div>
</template>

<script>
    import { oneOf } from '../../../utils/assist';

    const prefixCls = 'alert';

    export default {
        props: {
            type: {
                validator(value) {
                    return oneOf(value,['success','warning','info','danger','inverse']);
                },
                default:'info'
            },
            closable: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                visible: true
            }
        },
        computed: {
            classes() {
                return [
                    `${prefixCls}`,
                    `${prefixCls}-${this.type}`,
                    {
                        [`${prefixCls}-dismissible`]: this.closable
                    }
                ];
            }
        },
        methods: {
            close(e) {
                this.visible = false;
                this.$emit('close', e);
            }
        }
    }
</script>
