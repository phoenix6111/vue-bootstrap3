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
            value:{}
        },
        watch: {
            value(value) {
                this.dispatch('FormItem', 'form.change', [value]);
            }
        }
    }
</script>