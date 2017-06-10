<template>
    <div class="side-nav">
        <i-menu mode="vertical" :default-active="defaultActive" :router="true">
            <template v-for="item in datas">
                <i-menu-item v-if="item.path" :key="item.path" :path="base+item.path" :title="item.title"></i-menu-item>
                <i-menu-item-group v-if="item.children" :title="item.name">
                    <i-menu-item title="itemNav.title" :key="itemNav.path" :path="base+itemNav.path" v-for="itemNav in item.children"></i-menu-item>
                </i-menu-item-group>
                <i-sub-menu v-if="item.groups" :title="item.name" path="item.name">
                    <i-menu-item-group v-for="group in item.groups" :key="group.groupName" :title="group.groupName">
                        <i-menu-item v-for="navItem in group.list" :title="navItem.title" :key="navItem.path" :path="base+navItem.path"></i-menu-item>
                    </i-menu-item-group>
                </i-sub-menu>
            </template>
        </i-menu>
    </div>
</template>

<script>
    export default {
        name:'SideNav',
        props: {
            datas: Array,
            base: {
                type: String,
                default: ''
            },
            defaultActive: {
                type: String,
                default: ''
            },
        }
    }
</script>

<style>
    .side-nav .menu-vertical {
        width:100%;
        border-right:1px solid #e9e9e9;
    }

    .side-nav .menu-vertical .menu-item > a {
        padding:12px 20px;
    }

    .side-nav .menu-vertical .sub-menu.open > a.sub-menu-title:after,
    .side-nav .menu-vertical .sub-menu > a.sub-menu-title:before {
        content:'';
    }
</style>

