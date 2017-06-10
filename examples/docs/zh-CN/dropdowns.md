<script>
export default {
    
}
</script>

## Dropdown 下拉菜单

展示一组折叠的下拉菜单。

### 代码演示

::: demo
<summary>
  #### 基础用法
  需要配合 Dropdown-menu 和 Dropdown-item 两个组件来使用，并且给列表设置具名 slot 为 list。
  触发对象可以是链接、按钮等各种元素。
  本例还展示了禁用项和分隔线。
</summary>

```html
<template>
  <Dropdown>
      <a href="javascript:void(0)">
          下拉菜单
          <Icon type="chevron-down"></Icon>
      </a>
      <Dropdown-menu slot="dropdown">
          <Dropdown-item>驴打滚</Dropdown-item>
          <Dropdown-item>炸酱面</Dropdown-item>
          <Dropdown-item disabled>豆汁儿</Dropdown-item>
          <Dropdown-item>冰糖葫芦</Dropdown-item>
          <Dropdown-item>北京烤鸭</Dropdown-item>
      </Dropdown-menu>
  </Dropdown>
  <Dropdown style="margin-left: 20px">
      <i-button type="primary">
          下拉菜单
          <Icon type="chevron-down"></Icon>
      </i-button>
      <Dropdown-menu slot="dropdown">
          <Dropdown-item>驴打滚</Dropdown-item>
          <Dropdown-item>炸酱面</Dropdown-item>
          <Dropdown-item disabled>豆汁儿</Dropdown-item>
          <Dropdown-item>冰糖葫芦</Dropdown-item>
          <Dropdown-item>北京烤鸭</Dropdown-item>
      </Dropdown-menu>
  </Dropdown>
</template>
```
:::

::: demo
<summary>
  #### 触发方式
  通过设置属性 trigger 可以更改触发方式，可选项为 click 、 hover(默认) 或 custom(自定义)。
  触发方式设置为 custom 自定义时，需手动设置 visible 属性来控制下拉框的显示。
</summary>

```html
<template>
  <Dropdown>
      <a href="javascript:void(0)">
          hover 触发
          <Icon type="chevron-down"></Icon>
      </a>
      <Dropdown-menu slot="dropdown">
          <Dropdown-item>驴打滚</Dropdown-item>
          <Dropdown-item>炸酱面</Dropdown-item>
          <Dropdown-item>豆汁儿</Dropdown-item>
          <Dropdown-item>冰糖葫芦</Dropdown-item>
          <Dropdown-item>北京烤鸭</Dropdown-item>
      </Dropdown-menu>
  </Dropdown>
  <Dropdown trigger="click" style="margin-left: 20px">
      <a href="javascript:void(0)">
          click 触发
          <Icon type="chevron-down"></Icon>
      </a>
      <Dropdown-menu slot="dropdown">
          <Dropdown-item>驴打滚</Dropdown-item>
          <Dropdown-item>炸酱面</Dropdown-item>
          <Dropdown-item>豆汁儿</Dropdown-item>
          <Dropdown-item>冰糖葫芦</Dropdown-item>
          <Dropdown-item>北京烤鸭</Dropdown-item>
      </Dropdown-menu>
    </Dropdown>
</template>
```
:::

::: demo
<summary>
  #### 对齐方向
  通过设置属性 placement 可以更改下拉菜单出现的方向，与 Poptip 和 Tooltip 配置一致，支持 12 个方向，详见 API。
</summary>

```html
<template>
  <Dropdown placement="bottom-start">
      <a href="javascript:void(0)">
          菜单(左)
          <Icon type="chevron-down"></Icon>
      </a>
      <Dropdown-menu slot="dropdown" placement="bottom">
          <Dropdown-item>驴打滚</Dropdown-item>
          <Dropdown-item>炸酱面</Dropdown-item>
          <Dropdown-item>豆汁儿</Dropdown-item>
          <Dropdown-item>冰糖葫芦</Dropdown-item>
          <Dropdown-item>北京烤鸭</Dropdown-item>
      </Dropdown-menu>
  </Dropdown>
  <Dropdown style="margin-left: 20px" placement="bottom">
      <a href="javascript:void(0)">
          菜单(居中)
          <Icon type="chevron-down"></Icon>
      </a>
      <Dropdown-menu slot="dropdown">
          <Dropdown-item>驴打滚</Dropdown-item>
          <Dropdown-item>炸酱面</Dropdown-item>
          <Dropdown-item>豆汁儿</Dropdown-item>
          <Dropdown-item>冰糖葫芦</Dropdown-item>
          <Dropdown-item>北京烤鸭</Dropdown-item>
      </Dropdown-menu>
  </Dropdown>
  <Dropdown style="margin-left: 20px" placement="bottom-end">
      <a href="javascript:void(0)">
          菜单(右)
          <Icon type="chevron-down"></Icon>
      </a>
      <Dropdown-menu slot="dropdown">
          <Dropdown-item>驴打滚</Dropdown-item>
          <Dropdown-item>炸酱面</Dropdown-item>
          <Dropdown-item>豆汁儿</Dropdown-item>
          <Dropdown-item>冰糖葫芦</Dropdown-item>
          <Dropdown-item>北京烤鸭</Dropdown-item>
      </Dropdown-menu>
  </Dropdown>
  <Dropdown style="margin-left: 20px" placement="top">
      <a href="javascript:void(0)">
          菜单(上)
          <Icon type="chevron-down"></Icon>
      </a>
      <Dropdown-menu slot="dropdown">
          <Dropdown-item>驴打滚</Dropdown-item>
          <Dropdown-item>炸酱面</Dropdown-item>
          <Dropdown-item>豆汁儿</Dropdown-item>
          <Dropdown-item>冰糖葫芦</Dropdown-item>
          <Dropdown-item>北京烤鸭</Dropdown-item>
      </Dropdown-menu>
  </Dropdown>
</template>
```
:::

::: demo
<summary>
  #### split 菜单
  split 样式的菜单
</summary>

```html
<template>
  <Dropdown style="margin-left: 20px" 
            placement="top" 
            split-button type="primary">
      split 菜单(上)
      <Dropdown-menu slot="dropdown">
          <Dropdown-item>驴打滚</Dropdown-item>
          <Dropdown-item>炸酱面</Dropdown-item>
          <Dropdown-item>豆汁儿</Dropdown-item>
          <Dropdown-item>冰糖葫芦</Dropdown-item>
          <Dropdown-item>北京烤鸭</Dropdown-item>
      </Dropdown-menu>
  </Dropdown>

  <Dropdown style="margin-left: 20px" placement="top"
            split-button type="primary" size="sm">
      split 菜单(上)
      <Dropdown-menu slot="dropdown">
          <Dropdown-item>驴打滚</Dropdown-item>
          <Dropdown-item>炸酱面</Dropdown-item>
          <Dropdown-item>豆汁儿</Dropdown-item>
          <Dropdown-item>冰糖葫芦</Dropdown-item>
          <Dropdown-item>北京烤鸭</Dropdown-item>
      </Dropdown-menu>
  </Dropdown>
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
