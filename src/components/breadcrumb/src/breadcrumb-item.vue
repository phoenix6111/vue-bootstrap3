<template>
    <li :class="classes">
        <a v-if="href" @click="handleClick">
            <slot></slot>
        </a>
        <template v-else>
            <slot></slot>
        </template>

        <span :class="separatorClasses" v-html="separator" v-if="!showSeparator"></span>
        <span :class="separatorClasses" v-else>
            <slot name="separator"></slot>
        </span>
    </li>
</template>

<script>
    const prefixCls = 'breadcrumb-item';

    export default {
        name:'BreadcrumbItem',
        props: {
            href: {
                type: String
            },
            replace: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                router:false,
                separator: '',
                showSeparator: false
            }
        },
        computed: {
            classes() {
                return [
                    {'active':!this.href}
                ];
            },
            separatorClasses () {
                return `${prefixCls}-separator`;
            }
        },
        mounted () {
            this.showSeparator = this.$slots.separator !== undefined;
        },
        methods: {
            handleClick () {
                const isRoute = this.$parent.router;//是否以VueRouter方式跳转
                if (isRoute && this.$router) {
                    this.replace ? this.$router.replace(this.href) : this.$router.push(this.href);
                } else {
                    window.location.href = this.href;
                }
            }
        }
    }
</script>