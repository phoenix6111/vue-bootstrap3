<tempalte lang="html">
    <div class="checkbox" @click.stop="toggleCheck">
        <label>
            <input type="checkbox" :checked="active"
                   :value="value"
                   :name="name"
                   :readonly="readonly"
                   :disabled="disabled">
            <i class="input-helper"></i>
            <slot></slot>
        </label>
    </div>
</tempalte>

<script>
    export default {
        props: {
            name: String,
            value: [String, Boolean],
            id: String,
            disabled: Boolean
        },
        data() {
            return {
                checked: this.value
            };
        },
        computed: {
            classes() {
                return {
                    'disabled': this.disabled
                };
            }
        },
        watch: {
            value() {
                this.checked = !!this.value;
            }
        },
        methods: {
            toggleCheck($event) {
                if (!this.disabled) {
                    this.checked = !this.checked;
                    this.$emit('change', this.checked, $event);
                    this.$emit('input', this.checked, $event);
                }
            }
        }
    }
</script>