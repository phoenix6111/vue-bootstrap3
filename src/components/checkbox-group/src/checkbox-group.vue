<template lang="html">
    <div class="checkbox-group">
        <slot></slot>
    </div>
</template>

<script>
    import Emitter from '../../../mixins/emitter';

    export default {
        name:'CheckboxGroup',
        componentName:'CheckboxGroup',
        mixins:[Emitter],
        props: {
            value:{},
            min: Number,
            max: Number,
            size: String,
            fill: String,
            textColor: String
        },
        watch: {
            value(value) {
                this.dispatch('FormItem', 'bs.form.change', [value]);
            }
        }
    }
</script>