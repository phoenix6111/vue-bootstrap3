<template>
    <li class="menu-item-group">
        <div class="menu-item-group-title" :style="{paddingLeft: levelPadding + 'px'}">
            <slot name="title">{{title}}</slot>
        </div>
        <ul class="nav nav-stacked">
            <slot></slot>
        </ul>
    </li>
</template>
<script>
    export default {
        name: 'IMenuItemGroup',

        componentName: 'IMenuItemGroup',

        props: {
            title: {
                type: String
            }
        },
        data() {
            return {
                paddingLeft: 20
            };
        },
        computed: {
            levelPadding() {
                let padding = 10;
                let parent = this.$parent;
                while (parent && parent.$options.componentName !== 'IMenu') {
                    if (parent.$options.componentName === 'ISubMenu' || parent.$options.componentName === 'IMenuItemGroup') {
                        padding += 20;
                    }
                    parent = parent.$parent;
                }
                padding === 10 && (padding = 20);
                return padding;
            }
        }
    };
</script>

