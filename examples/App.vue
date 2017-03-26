<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="side-nav m-t-30">
            <ul>
              <li class="nav-item"><a>基础组件</a><!---->
                <div class="nav-group">
                  <div class="nav-group__title">Basic</div>
                  <ul class="pure-menu-list" style="height: auto;">
                    <li class="nav-item"><a href="#/zh-CN/component/layout" class="active">Layout 布局</a>
                    </li>
                    <li class="nav-item"><a href="#/zh-CN/component/color" class="">Color 色彩</a></li>
                    <li class="nav-item"><a href="#/zh-CN/component/typography" class="">Typography字体</a></li>
                    <li class="nav-item"><router-link to="/icons">Icon 图标</router-link></li>
                    <li class="nav-item"><router-link to="/buttons">Button 按钮</router-link></li>
                    <li class="nav-item"><router-link to="/alerts">Alert 警告提示</router-link></li>
                    <li class="nav-item"><router-link to="/carousels">Carousel 走马灯</router-link></li>
                    <li class="nav-item"><router-link to="/switchs">Switch 开关</router-link></li>
                    <li class="nav-item"><router-link to="/rates">Rate 评分</router-link></li>
                    <li class="nav-item"><router-link to="/tags">Tag 标签</router-link></li>
                    <li class="nav-item"><router-link to="/tooltips">Tooltip 文字提示</router-link></li>
                    <li class="nav-item"><router-link to="/popovers">Poptip 气泡提示</router-link></li>
                    <li class="nav-item"><router-link to="/progresses">Progress 进度条</router-link></li>
                    <li class="nav-item"><router-link to="/collapses">Collapse 折叠面板</router-link></li>
                    <li class="nav-item"><router-link to="/tabsdemo">Tabs 标签页</router-link></li>
                    <li class="nav-item"><router-link to="/menus">Menu 导航菜单</router-link></li>
                    <li class="nav-item"><router-link to="/modals">Modal 对话框</router-link></li>
                    <li class="nav-item"><router-link to="/swals">Sweetalert 对话框</router-link></li>
                    <li class="nav-item"><router-link to="/radios">Radio 单选框</router-link></li>
                    <li class="nav-item"><router-link to="/checkboxs">Checkbox 多选框</router-link></li>
                    <li class="nav-item"><router-link to="/dropdowns">Dropdown 下拉菜单</router-link></li>
                    <li class="nav-item"><router-link to="/sliders">Slider 滑块</router-link></li>
                    <li class="nav-item"><router-link to="/messages">Message 通知提醒</router-link></li>
                  </ul>
                </div>
              </li>
            </ul>
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




  .side-nav {
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

  .side-nav .nav-dropdown.is-active i,.side-nav .nav-dropdown.is-active span,.side-nav .nav-dropdown:hover i,.side-nav .nav-dropdown:hover span {
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
  }
</style>
