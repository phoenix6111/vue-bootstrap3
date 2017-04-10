<template>
  <ul class="select-group__wrap">
    <li class="select-group__title" v-show="visible">{{ label }}</li>
    <li>
      <ul class="select-group">
        <slot></slot>
      </ul>
    </li>
  </ul>
</template>

<script type="text/babel">
    import Emitter from '../../../mixins/emitter';

  export default {
    mixins: [Emitter],

    name: 'BsOptionGroup',

    componentName: 'BsOptionGroup',

    props: {
      label: String,
      disabled: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        visible: true
      };
    },

    watch: {
      disabled(val) {
        this.broadcast('BsOption', 'handleGroupDisabled', val);
      }
    },

    methods: {
      queryChange() {
        this.visible = this.$children &&
          Array.isArray(this.$children) &&
          this.$children.some(option => option.visible === true);
      }
    },

    created() {
      this.$on('queryChange', this.queryChange);
    },

    mounted() {
      if (this.disabled) {
        this.broadcast('BsOption', 'handleGroupDisabled', this.disabled);
      }
    }
  };
</script>
