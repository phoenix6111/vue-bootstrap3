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
   
</style>


## Menu 导航菜单

为网站提供导航功能的菜单。

### 何时使用
导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。

### 代码演示

::: demo
<summary>
  #### 顶部导航
  水平的顶部导航菜单。
</summary>

```html
<template>
  <div class="row">
      <div class="col-sm-6">
          <i-menu :default-active="activeIndex"
                class="horizontal-menu-demo"
                mode="horizontal"
                menu-trigger="click"
                @select="handleSelect">
              <i-menu-item path="1">处理中心</i-menu-item>
              <i-sub-menu path="2">
                  <template slot="title">我的工作台</template>
                  <i-menu-item path="2-1">选项1</i-menu-item>
                  <i-menu-item path="2-2">选项2</i-menu-item>
                  <i-menu-item path="2-3">选项3</i-menu-item>
              </i-sub-menu>
              <i-menu-item path="3"><a href="https://www.ele.me" target="_blank">订单管理</a></i-menu-item>
          </i-menu>
      </div>
    </div>
</template>
```
:::

::: demo
<summary>
  #### 侧栏导航
  垂直导航菜单，可以内嵌子菜单。
</summary>

```html
<template>
  <div class="row">
      <div class="col-sm-4">
          <p class="text-center m-b-20">带icon</p>
          <i-menu default-active="1"
                @open="handleOpen"
                @close="handleClose"
                class="menu-demo">
              <i-menu-item icon="home" title="导航一" path="1"></i-menu-item>
              <i-sub-menu path="2" title="导航二" icon="format-underlined">
                  <i-menu-item path="2-1" title="选择一"></i-menu-item>
                  <i-menu-item path="2-2" title="选项二"></i-menu-item>
                  <i-menu-item path="2-3" title="选项三"></i-menu-item>
                  <i-sub-menu path="2-4" title="i-sub-menu2">
                      <i-menu-item path="2-4-1" title="选项四"></i-menu-item>
                      <i-menu-item path="2-4-2" title="选项五"></i-menu-item>
                      <i-sub-menu path="2-4-3" title="i-sub-menu3">
                          <i-menu-item path="2-4-3-1" title="选项六"></i-menu-item>
                          <i-menu-item path="2-4-3-2" title="选项七"></i-menu-item>
                      </i-sub-menu>
                  </i-sub-menu>
              </i-sub-menu>

              <i-sub-menu path="3" title="导航三" icon="account">
                  <i-menu-item-group>
                      <template slot="title">分组一</template>
                      <i-menu-item path="3-1">选项1</i-menu-item>
                      <i-menu-item path="3-2">选项2</i-menu-item>
                  </i-menu-item-group>
                  <i-menu-item-group title="分组2">
                      <i-menu-item path="3-3">选项3</i-menu-item>
                  </i-menu-item-group>
              </i-sub-menu>
          </i-menu>
      </div>

      <div class="col-sm-4">
          <p class="text-center m-b-20">分组</p>
          <i-menu mode="vertical" default-active="1" class="menu-demo">
              <i-menu-item-group title="分组一">
                  <i-menu-item path="1" title="导航一" icon="notifications-active"></i-menu-item>
                  <i-menu-item path="2" title="导航二" icon="notifications-active"></i-menu-item>
              </i-menu-item-group>
              <i-menu-item-group title="分组二">
                  <i-menu-item path="3" title="导航三" icon="notifications-active"></i-menu-item>
                  <i-menu-item path="4" title="导航四" icon="notifications-active"></i-menu-item>
              </i-menu-item-group>
          </i-menu>

      </div>

      <div class="col-sm-4">
          <p class="text-center m-b-20">只展开一个菜单项</p>
          <i-menu default-active="/posts" @open="handleOpen" @close="handleClose"
                unique-opened class="menu-demo">
              <i-menu-item icon="home" title="Home" path="/home"></i-menu-item>
              <i-sub-menu path="content-manager" title="内容管理" icon="format-underlined">
                  <i-menu-item path="/modules" title="模块管理"></i-menu-item>
                  <i-menu-item path="/categories" title="类别管理"></i-menu-item>
                  <i-menu-item path="/posts" title="文章管理"></i-menu-item>
              </i-sub-menu>

              <i-sub-menu path="/user-manager" title="用户管理" icon="account">
                  <i-menu-item path="/admins" title="管理员管理"></i-menu-item>
                  <i-menu-item path="/roles" title="角色管理"></i-menu-item>
                  <i-menu-item path="/permissions" title="权限管理"></i-menu-item>
              </i-sub-menu>
          </i-menu>
      </div>
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