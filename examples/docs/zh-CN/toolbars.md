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
<style>
    .toolbar-demo {
        height:350px;
        box-shadow: 0 1px 3px rgba(0,0,0,.2),0 1px 1px rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12)!important;
        overflow:hidden;
    }
    
    .toolbar-demo .content-container {
        padding-left: 0;
        overflow: hidden;
        position: relative;
    }
    
    .toolbar-demo .sidebar {
        width: 268px;
        height: calc(100% - 70px);
        border:1px solid #f3f3f3;
        
        -webkit-transform: translate3d(-288px, 0, 0);
        transform: translate3d(-288px, 0, 0);
        box-shadow: 0 0 20px rgba(14, 18, 21, .38)
    }
    
    .toolbar-demo .sidebar.toggled {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }
</style>

## Toolbar 顶部工具栏

顶部工具栏。

### 代码演示

::: demo
<summary>
  #### 基本
  最简单的用法。
</summary>

```html
<template>
    <div class="toolbar-demo">
        <toolbar ref="toolbar" 
            @toggle-left="handleToggleLeft" 
            @toggle-right="handleToggleRight">
            <toolbar-items>
                <toolbar-item icon="search" @item-click="toggleSearch"></toolbar-item>
                <dropdown tag="li" placement="bottom-end">
                    <a href="javascript:void(0)">
                        <i class="him-icon zmdi zmdi-email"></i>
                        <i class="him-counts">6</i>
                    </a>
                    <dropdown-menu slot="dropdown" class="dropdown-menu-lg">
                        <div class="list-group">
                            <div class="lg-header">
                                Messages
                            </div>
                            <div class="lg-body">
                                <a class="list-group-item media" href="">
                                    <div class="pull-left">
                                        <img class="lgi-img" src="img/demo/profile-pics/1.jpg" alt="">
                                    </div>
                                    <div class="media-body">
                                        <div class="lgi-heading">David Belle</div>
                                        <small class="lgi-text">Cum sociis natoque penatibus et magnis dis parturient montes</small>
                                    </div>
                                </a>
                                <a class="list-group-item media" href="">
                                    <div class="pull-left">
                                        <img class="lgi-img" src="img/demo/profile-pics/2.jpg" alt="">
                                    </div>
                                    <div class="media-body">
                                        <div class="lgi-heading">Jonathan Morris</div>
                                        <small class="lgi-text">Nunc quis diam diamurabitur at dolor elementum, dictum turpis vel</small>
                                    </div>
                                </a>
                                <a class="list-group-item media" href="">
                                    <div class="pull-left">
                                        <img class="lgi-img" src="img/demo/profile-pics/3.jpg" alt="">
                                    </div>
                                    <div class="media-body">
                                        <div class="lgi-heading">Fredric Mitchell Jr.</div>
                                        <small class="lgi-text">Phasellus a ante et est ornare accumsan at vel magnauis blandit turpis at augue ultricies</small>
                                    </div>
                                </a>
                                <a class="list-group-item media" href="">
                                    <div class="pull-left">
                                        <img class="lgi-img" src="img/demo/profile-pics/4.jpg" alt="">
                                    </div>
                                    <div class="media-body">
                                        <div class="lgi-heading">Glenn Jecobs</div>
                                        <small class="lgi-text">Ut vitae lacus sem ellentesque maximus, nunc sit amet varius dignissim, dui est consectetur neque</small>
                                    </div>
                                </a>
                                <a class="list-group-item media" href="">
                                    <div class="pull-left">
                                        <img class="lgi-img" src="img/demo/profile-pics/4.jpg" alt="">
                                    </div>
                                    <div class="media-body">
                                        <div class="lgi-heading">Bill Phillips</div>
                                        <small class="lgi-text">Proin laoreet commodo eros id faucibus. Donec ligula quam, imperdiet vel ante placerat</small>
                                    </div>
                                </a>
                            </div>
                            <a class="view-more" href="">View All</a>
                        </div>
                    </dropdown-menu>
                </dropdown>
            </toolbar-items>
        </toolbar>
        <sidebar ref="leftSidebar"></sidebar>
    </div>
</template>
```
:::

## API

### Affix Props
| 参数        | 说明           | 类型               | 默认值       |
|------------|----------------|-------------------|-------------|
| offsetTop    | 距离窗口顶部达到指定偏移量后触发 | Number | - |
| offsetBottom | 距离窗口底部达到指定偏移量后触发 | Number | - |

### Affix Events
| 参数        | 说明           | 回调参数               |
|------------|----------------|-------------------|
| change | 固定状态改变时触发的事件 | affixed |
