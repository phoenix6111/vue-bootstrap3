<template lang="html">
    <div class="radio" :class="classes">
        <label>
            <input type="radio" :name="name" :disabled="disabled" :value="value">
            <i class="input-helper"></i>
            <slot></slot>
        </label>
    </div>
</template>

<script>
    export default {
        props: {
            name: String,
            value: [String, Boolean, Number],
            mdValue: {
                type: [String, Boolean, Number],
                required: true
            },
            disabled: Boolean
        },
        computed: {
            classes() {
                return {
                    'disabled': this.disabled
                };
            }
        },
        methods: {
            toggleCheck($event) {
                if (!this.disabled) {
                    this.$emit('change', this.value, $event);
                    this.$emit('input', this.value, $event);
                }
            }
        }
    }
</script>