<template>
    <div id="app">
        <nav class="navbar navbar-primary">
            <div class="container">
                <div class="navbar-head">
                    <button type="button"
                            class="navbar-toggle collapsed">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">Vue Bootstrap3</a>
                </div>

                <div class="collapse navbar-collapse">
                    <Menu class="navbar-nav navbar-right" mode="horizontal">
                        <MenuItem title="指南" path="/references"></MenuItem>
                        <MenuItem title="组件" path="/components"></MenuItem>
                        <MenuItem title="Github" path="/github"></MenuItem>
                    </Menu>
                </div>
            </div>
        </nav>
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <div class="side-nav">
                        <Menu class="navbar-nav" mode="vertical" default-active="1" :router="true">
                            <MenuItemGroup title="组件">
                                <MenuItemGroup title="Basic">
                                    <MenuItem title="Color 色彩" path="/colors"></MenuItem>
                                    <MenuItem title="Icon 图标" path="/icons"></MenuItem>
                                    <MenuItem title="Button 按钮" path="/buttons"></MenuItem>
                                </MenuItemGroup>
                                <MenuItemGroup title="Form">
                                    <MenuItem title="Input 输入框" path="/inputs"></MenuItem>
                                    <MenuItem title="InputNumber 数字输入框" path="/input_numbers"></MenuItem>
                                    <MenuItem title="Radio 单选框" path="/radios"></MenuItem>
                                    <MenuItem title="Checkbox 多选框" path="/checkboxs"></MenuItem>
                                    <MenuItem title="Switch 开关" path="/switchs"></MenuItem>
                                    <MenuItem title="Select 选择器" path="/selects"></MenuItem>
                                    <MenuItem title="Slider 滑块" path="/sliders"></MenuItem>
                                    <MenuItem title="Rate 评分" path="/rates"></MenuItem>
                                    <MenuItem title="Upload 上传" path="/uploads"></MenuItem>
                                    <MenuItem title="Form 表单" path="/forms"></MenuItem>
                                </MenuItemGroup>
                                <MenuItemGroup title="View">
                                    <MenuItem title="Alert 警告提示" path="/alerts"></MenuItem>
                                    <MenuItem title="Card 卡片" path="/cards"></MenuItem>
                                    <MenuItem title="Message 全局提示" path="/messages"></MenuItem>
                                    <MenuItem title="Snackbar 顶部通知" path="/snackbars"></MenuItem>
                                    <MenuItem title="Notice 通知提醒" path="/notices"></MenuItem>
                                    <MenuItem title="Modal 对话框" path="/modals"></MenuItem>
                                    <MenuItem title="Progress 进度条" path="/progresses"></MenuItem>
                                    <MenuItem title="Collapse 折叠面板" path="/collapses"></MenuItem>
                                    <MenuItem title="Tag 标签" path="/tags"></MenuItem>
                                    <MenuItem title="Tooltip 文字提示" path="/tooltips"></MenuItem>
                                    <MenuItem title="Popover 气泡提示" path="/popovers"></MenuItem>
                                    <MenuItem title="Carousel 轮播" path="/carousels"></MenuItem>
                                </MenuItemGroup>
                                <MenuItemGroup title="Navigation">
                                    <MenuItem title="Menu 导航菜单" path="/menus"></MenuItem>
                                    <MenuItem title="Tabs 标签页" path="/tabsdemo"></MenuItem>
                                    <MenuItem title="Dropdown 下拉菜单" path="/dropdowns"></MenuItem>
                                    <MenuItem title="Page 分页" path="/paginations"></MenuItem>
                                    <MenuItem title="Breadcrumb 面包屑" path="/breadcrumbs"></MenuItem>
                                    <MenuItem title="LoadingBar 加载进度条" path="/loadings"></MenuItem>
                                </MenuItemGroup>
                                <MenuItemGroup title="Chart">
                                    <MenuItem title="Circle 进度环" path="/circles"></MenuItem>
                                </MenuItemGroup>
                                <MenuItemGroup title="Other">
                                    <MenuItem title="Affix 图盯" path="/affixs"></MenuItem>
                                    <MenuItem title="Backtop 返回顶部" path="/backtops"></MenuItem>
                                </MenuItemGroup>
                                <MenuItemGroup title="文档组件">
                                    <MenuItem title="CodeBox 代码示例" path="/codeboxs"></MenuItem>
                                </MenuItemGroup>
                            </MenuItemGroup>
                        </Menu>

                    </div>
                </div>
                <div class="col-md-9">
                    <router-view></router-view>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
    import './bootstrap';
    export default {
        name: 'app'
    }
</script>

<style>
    #app {
        background-color: #fff;
    }
    #app .navbar-primary {
        height: 80px;
    }
    @media (min-width: 768px) {
        #app  .navbar-nav > li > a,
        #app .navbar-brand{
            padding-top: 30px;
            padding-bottom: 30px;
            font-size: 16px;
            font-weight: 500;
        }
    }

    .side-nav .menu-vertical {
        width:100%;
        border-right:1px solid #e5e5e5;
    }

    .page-block {
        padding: 60px 35px;
    }

    /*.side-nav {
        width: 100%;
        box-sizing: border-box;
        padding-right: 30px
    }

    .side-nav li {
        list-style: none
    }

    .side-nav ul {
        padding: 0;
        margin: 0;
        overflow: hidden
    }

    .side-nav .nav-dropdown {
        margin-bottom: 6px;
        width: 100%
    }

    .side-nav .nav-dropdown span {
        display: block;
        width: 100%;
        font-size: 16px;
        color: #5e6d82;
        line-height: 40px;
        transition: .2s;
        padding-bottom: 6px;
        border-bottom: 1px solid #eaeefb
    }

    .side-nav .nav-dropdown span:hover {
        cursor: pointer
    }

    .side-nav .nav-dropdown i {
        transition: .2s;
        font-size: 12px;
        color: #d3dce6
    }

    .side-nav .nav-dropdown.is-active i, .side-nav .nav-dropdown.is-active span, .side-nav .nav-dropdown:hover i, .side-nav .nav-dropdown:hover span {
        color: #20a0ff
    }

    .side-nav .nav-dropdown.is-active i {
        transform: rotate(180deg) translateY(2px)
    }

    .side-nav .nav-item a {
        font-size: 16px;
        color: #5e6d82;
        line-height: 40px;
        height: 40px;
        margin: 0;
        padding: 0;
        text-decoration: none;
        display: block;
        position: relative;
        transition: all .3s
    }

    .side-nav .nav-item a.active {
        color: #20a0ff
    }

    .side-nav .nav-item .nav-item a {
        display: block;
        height: 40px;
        line-height: 40px;
        font-size: 13px;
        padding-left: 24px
    }

    .side-nav .nav-item .nav-item a:hover {
        color: #20a0ff
    }

    .side-nav .nav-group__title {
        font-size: 12px;
        color: #99a9bf;
        padding-left: 8px;
        line-height: 26px;
        margin-top: 10px
    }*/
</style>
