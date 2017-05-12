<template>
    <aside id="sidebar" :class="classes">
        <slot></slot>
    </aside>
</template>

<script>
    import {oneOf} from '../../../utils/assist';
    const prefixCls = 'sidebar';

    export default {
        name:'Sidebar',
        props: {
            placement: {
                validator(val) {
                    return oneOf(val,['left','right']);
                },
                default:'left'
            }
        },
        data() {
            return {
                toggled:false
            }
        },
        computed: {
            classes() {
                return [
                    `${prefixCls}`,'c-overflow',
                    {
                        'toggled':this.toggled,
                        [`sidebar-${this.placement}`]:!!this.placement
                    }
                ];
            }
        },
        watch: {
            toggled(val) {
                console.log("toggled "+val);
            }
        }

    }
</script>