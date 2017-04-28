<template lang="html">
    <div class="menus-demo">
        <div class="block-header">
            <h2>Menu 导航菜单
                <small>为网站提供导航功能的菜单。</small>
            </h2>
        </div>

        <div>

            <h4 class="m-b-30">顶部导航</h4>
            <small>水平的顶部导航菜单。</small>
            <div class="row">
                <div class="col-sm-6">
                    <Menu :default-active="activeIndex"
                          class="horizontal-menu-demo"
                          mode="horizontal"
                          menu-trigger="click"
                          @select="handleSelect">
                        <menu-item path="1">处理中心</menu-item>
                        <sub-menu path="2">
                            <template slot="title">我的工作台</template>
                            <menu-item path="2-1">选项1</menu-item>
                            <menu-item path="2-2">选项2</menu-item>
                            <menu-item path="2-3">选项3</menu-item>
                        </sub-menu>
                        <menu-item path="3"><a href="https://www.ele.me" target="_blank">订单管理</a></menu-item>
                    </Menu>
                </div>
            </div>

            <br><br>
            <hr>
            <br><br>

            <h4 class="m-b-30">垂直菜单，可内嵌子菜单。</h4>
            <div class="row">
                <div class="col-sm-4">
                    <p class="text-center m-b-20">带icon</p>
                    <Menu default-active="1"
                          @open="handleOpen"
                          @close="handleClose"
                          class="menu-demo">
                        <MenuItem icon="home" title="导航一" path="1"></MenuItem>
                        <SubMenu path="2" title="导航二" icon="format-underlined">
                            <MenuItem path="2-1" title="选择一"></MenuItem>
                            <MenuItem path="2-2" title="选项二"></MenuItem>
                            <MenuItem path="2-3" title="选项三"></MenuItem>
                            <SubMenu path="2-4" title="SubMenu2">
                                <MenuItem path="2-4-1" title="选项四"></MenuItem>
                                <MenuItem path="2-4-2" title="选项五"></MenuItem>
                                <SubMenu path="2-4-3" title="SubMenu3">
                                    <MenuItem path="2-4-3-1" title="选项六"></MenuItem>
                                    <MenuItem path="2-4-3-2" title="选项七"></MenuItem>
                                </SubMenu>
                            </SubMenu>
                        </SubMenu>

                        <SubMenu path="3" title="导航三" icon="account">
                            <menu-item-group>
                                <template slot="title">分组一</template>
                                <menu-item path="3-1">选项1</menu-item>
                                <menu-item path="3-2">选项2</menu-item>
                            </menu-item-group>
                            <menu-item-group title="分组2">
                                <menu-item path="3-3">选项3</menu-item>
                            </menu-item-group>
                        </SubMenu>
                    </Menu>
                </div>

                <div class="col-sm-4">
                    <p class="text-center m-b-20">分组</p>
                    <Menu mode="vertical" default-active="1" class="menu-demo">
                        <menu-item-group title="分组一">
                            <menu-item path="1" title="导航一" icon="notifications-active"></menu-item>
                            <menu-item path="2" title="导航二" icon="notifications-active"></menu-item>
                        </menu-item-group>
                        <menu-item-group title="分组二">
                            <menu-item path="3" title="导航三" icon="notifications-active"></menu-item>
                            <menu-item path="4" title="导航四" icon="notifications-active"></menu-item>
                        </menu-item-group>
                    </Menu>

                </div>

                <div class="col-sm-4">
                    <p class="text-center m-b-20">只展开一个菜单项</p>
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
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            handleOpen(key, keyPath) {
//                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
//                console.log(key, keyPath);
            }
        }

    }
</script>

<style>
    .menu-demo {
        width:230px;
        border:1px solid #f5f5f5;
    }
    .page-block {
        padding: 30px 24px;
        border-bottom: 1px solid #eff2f6;
    }

    .demonstration {
        font-size: 14px;
        color: #8492a6;
        line-height: 44px;
    }
</style>

