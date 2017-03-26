<template lang="html">
    <div class="card m-t-30">
        <div class="card-header">
            <h2>Menu 导航菜单
                <small>为网站提供导航功能的菜单。</small>
            </h2>
        </div>

        <div class="card-body card-padding">

            <div class="row">
                <div class="col-sm-6">
                    <Menu default-active="posts" @open="handleOpen" @close="handleClose"
                          class="menu-demo">
                        <MenuItem icon="home" title="Home" path="/home"></MenuItem>
                        <SubMenu path="content-manager" title="内容管理" icon="format-underlined">
                            <MenuItem path="modules" title="模块管理"></MenuItem>
                            <MenuItem path="categories" title="类别管理"></MenuItem>
                            <MenuItem path="posts" title="文章管理"></MenuItem>
                        </SubMenu>

                        <SubMenu path="user-manager" title="用户管理" icon="account">
                            <MenuItem path="admins" title="管理员管理"></MenuItem>
                            <MenuItem path="roles" title="角色管理"></MenuItem>
                            <MenuItem path="permissions" title="权限管理"></MenuItem>
                        </SubMenu>
                    </Menu>
                </div>

                <div class="col-sm-6">
                    <Menu default-active="posts" @open="handleOpen" @close="handleClose"
                          unique-opened class="menu-demo">
                        <MenuItem icon="home" title="Home" path="/home"></MenuItem>
                        <SubMenu path="content-manager" title="内容管理" icon="format-underlined">
                            <MenuItem path="modules" title="模块管理"></MenuItem>
                            <MenuItem path="categories" title="类别管理"></MenuItem>
                            <MenuItem path="posts" title="文章管理"></MenuItem>
                        </SubMenu>

                        <SubMenu path="user-manager" title="用户管理" icon="account">
                            <MenuItem path="admins" title="管理员管理"></MenuItem>
                            <MenuItem path="roles" title="角色管理"></MenuItem>
                            <MenuItem path="permissions" title="权限管理"></MenuItem>
                        </SubMenu>
                    </Menu>
                </div>
            </div>


        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }

    }
</script>

<style>
    .menu-demo {
        width:230px;
    }
</style>

