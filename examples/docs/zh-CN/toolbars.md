<template>
    <div>
        <toolbar ref="toolbar" @toggle-left="handleToggleLeft" @toggle-right="handleToggleRight">
        </toolbar>
        <sidebar ref="leftSidebar" id="sidebar"></sidebar>
        <sidebar ref="rightSidebar" id="chat"></sidebar>
    </div>
</template>


<script>
    export default {
        methods: {
            toggleSearch() {
                console.log(this.$refs);
                this.$refs.toolbar.toggleSearch();
            },
            handleToggleRight(toggled) {
                console.log("toggle right");
                this.$refs.rightSidebar.toggled = toggled;
            },
            handleToggleLeft(toggled) {
                console.log("toggle left = "+toggled);
                this.$refs.leftSidebar.toggled = toggled;
            }
        }
    }
</script>