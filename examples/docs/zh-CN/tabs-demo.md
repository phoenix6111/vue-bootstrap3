<script>
export default {
    methods: {
        onChange(tabKey) {
            console.log("tab changed : " + tabKey);
        },
        onTabClick(tabKey) {
            console.log("tab clicked : " + tabKey);
        },
        onAdd() {
            this.tabPanes.push({
                key: 'newTab' + this.keyIndex,
                tab: '新选项卡' + this.keyIndex,
                content: '新选项卡' + this.keyIndex++ + '内容'
            });
        },
        onRemove(tabKey) {
            for (let i = 0; i < this.tabPanes.length; i++) {
                if (this.tabPanes[i].key == tabKey) {
                    this.tabPanes.splice(i, 1);
                    break;
                }
            }
        },
        onCustomAdd() {
            this.customTabPanes.push({
                key: 'newTab' + this.customKeyIndex,
                tab: '新选项卡' + this.customKeyIndex,
                content: '新选项卡' + this.customKeyIndex++ + '内容'
            });
        },
        onCustomRemove(tabKey) {
            this.customActiveKey = 'newTab' + this.customKeyIndex;
            for (let i = 0; i < this.customTabPanes.length; i++) {
                if (this.customTabPanes[i].key == tabKey) {
                    this.customTabPanes.splice(i, 1);
                    break;
                }
            }
        }
    },
    data() {
        return {
            position: 'top',
            positionOptions: [
                {label: 'top', value: 'top'},
                {label: 'bottom', value: 'bottom'},
                {label: 'left', value: 'left'},
                {label: 'right', value: 'right'}
            ],
            keyIndex: 1,
            tabPanes: [
                {key: 'tab1', tab: '选项卡1', content: '选项卡1的内容'},
                {key: 'tab2', tab: '选项卡2', content: '选项卡2的内容'},
                {key: 'tab3', tab: '选项卡3', content: '选项卡3的内容'}
            ],
            customPosition: 'top',
            customActiveKey: 'tab1',
            customKeyIndex: 1,
            customTabPanes: [
                {key: 'tab1', tab: '选项卡1', content: '选项卡1的内容'},
                {key: 'tab2', tab: '选项卡2', content: '选项卡2的内容'},
                {key: 'tab3', tab: '选项卡3', content: '选项卡3的内容'}
            ]
        }
    }
}
</script>
<style>
    #components-tabs-demo-card-top {
        background: #ECECEC;
        overflow: hidden;
        padding: 24px;
    }

    #components-tabs-demo-card-top > .card-container > .tabs-card > .tabs-content {
        height: 120px;
        margin-top: -16px;
    }

    #components-tabs-demo-card-top > .card-container > .tabs-card > .tabs-content > .tabs-tabpane {
        background: #fff;
        padding: 16px;
    }

    #components-tabs-demo-card-top > .card-container > .tabs-card > .tabs-bar .tabs-tab {
        border-color: transparent;
    }

    #components-tabs-demo-card-top > .card-container > .tabs-card > .tabs-bar .tabs-tab-active {
        border-color: #fff;
    }
</style>
## Tabs 标签页

选项卡切换组件，常用于平级区域大块内容的的收纳和展现。。

### 代码演示

::: demo
<summary>
  #### 基本
  默认选中第一项。
</summary>

```html
<template>
  <tabs active-tab-key="key1" @change="onChange" @tab-click="onTabClick">
      <tab-pane tab-key="key1" tab="选项卡一">选项卡一内容</tab-pane>
      <tab-pane tab-key="key2" tab="选项卡二">选项卡二内容</tab-pane>
      <tab-pane tab-key="key3" tab="选项卡三">选项卡三内容</tab-pane>
  </tabs>
</template>
<script>
    export default {
        methods: {
            onChange(tabKey) {
                console.log("tab changed : " + tabKey);
            },
            onTabClick(tabKey) {
                console.log("tab clicked : " + tabKey);
            }
        }
    };
</script>
```
:::

::: demo
<summary>
  #### 禁用
  禁用某一项。
</summary>

```html
<template>
    <tabs active-tab-key="1">
        <tab-pane tab-key="1" tab="选项卡一">选项卡一内容</tab-pane>
        <tab-pane tab-key="2" tab="选项卡二" disabled>选项卡二内容</tab-pane>
        <tab-pane tab-key="3" tab="选项卡三">选项卡三内容</tab-pane>
        <tab-pane tab-key="4" tab="选项卡四" disabled>选项卡四内容</tab-pane>
    </tabs>
</template>
```
:::

::: demo
<summary>
  #### 图标
  有图标的标签。
</summary>

```html
<template>
    <tabs active-tab-key="1">
        <tab-pane tab-key="1" icon="apple" tab="选项卡一">选项卡一内容</tab-pane>
        <tab-pane tab-key="2" icon="android" tab="选项卡二">选项卡二内容</tab-pane>
    </tabs>
</template>
```
:::

::: demo
<summary>
  #### 滑动
  可以左右滑动，容纳更多标签。
</summary>

```html
<template>
    <tabs active-tab-key="1">
        <tab-pane tab-key="1" tab="选项一">选项卡一内容</tab-pane>
        <tab-pane tab-key="2" tab="选项二">选项卡二内容</tab-pane>
        <tab-pane tab-key="3" tab="选项三">选项卡三内容</tab-pane>
        <tab-pane tab-key="4" tab="选项四">选项卡四内容</tab-pane>
        <tab-pane tab-key="5" tab="选项五">选项卡五内容</tab-pane>
        <tab-pane tab-key="6" tab="选项六">选项卡六内容</tab-pane>
        <tab-pane tab-key="7" tab="选项七">选项卡七内容</tab-pane>
        <tab-pane tab-key="8" tab="选项八">选项卡八内容</tab-pane>
        <tab-pane tab-key="9" tab="选项九">选项卡九内容</tab-pane>
        <tab-pane tab-key="10" tab="选项十">选项卡十内容</tab-pane>
        <tab-pane tab-key="11" tab="选项十">选项卡十内容</tab-pane>
        <tab-pane tab-key="12" tab="选项十">选项卡十内容</tab-pane>
        <tab-pane tab-key="13" tab="选项十">选项卡十内容</tab-pane>
        <tab-pane tab-key="14" tab="选项十">选项卡十内容</tab-pane>
        <tab-pane tab-key="15" tab="选项十">选项卡十内容</tab-pane>
    </tabs>
</template>
```
:::

::: demo
<summary>
  #### 附加内容
  可以在页签右边添加附加操作。
</summary>

```html
<template>
    <tabs active-tab-key="1">
        <i-button slot="tabBarExtraContent" style="margin-right: 5px;" size="sm">额外的操作</i-button>
        <tab-pane tab-key="1" tab="选项卡一">选项卡一内容</tab-pane>
        <tab-pane tab-key="2" tab="选项卡二">选项卡二内容</tab-pane>
        <tab-pane tab-key="3" tab="选项卡三">选项卡三内容</tab-pane>
    </tabs>
</template>
```
:::

::: demo
<summary>
  #### 迷你型
  用在弹出框等较狭窄的容器内。
</summary>

```html
<template>
    <tabs active-tab-key="1" size="small">
        <tab-pane tab-key="1" tab="选项一">选项卡一内容</tab-pane>
        <tab-pane tab-key="2" tab="选项二">选项卡二内容</tab-pane>
        <tab-pane tab-key="3" tab="选项三">选项卡三内容</tab-pane>
        <tab-pane tab-key="4" tab="选项四">选项卡四内容</tab-pane>
        <tab-pane tab-key="5" tab="选项五">选项卡五内容</tab-pane>
        <tab-pane tab-key="6" tab="选项六">选项卡六内容</tab-pane>
        <tab-pane tab-key="7" tab="选项七">选项卡七内容</tab-pane>
        <tab-pane tab-key="8" tab="选项八">选项卡八内容</tab-pane>
        <tab-pane tab-key="9" tab="选项九">选项卡九内容</tab-pane>
        <tab-pane tab-key="10" tab="选项十">选项卡十内容</tab-pane>
    </tabs>
</template>
```
:::

::: demo
<summary>
  #### 位置
  有四个位置，`position="left|right|top|bottom`。
</summary>

```html
<template>
    <div style="margin-bottom: 16px;">
        Tab的位置：<bs-select :data="positionOptions" v-model="position" style="width: 200px;">
            <bs-option v-for="item in positionOptions" :value="item.value" :key="item">{{item.label}}</bs-option>
        </bs-select>    
    </div>
    <tabs active-tab-key="1" :position="position">
        <tab-pane tab-key="1" tab="选项卡一">选项卡一内容</tab-pane>
        <tab-pane tab-key="2" tab="选项卡二">选项卡二内容</tab-pane>
        <tab-pane tab-key="3" tab="选项卡三">选项卡三内容</tab-pane>
    </tabs>
</template>

<script>
    export default {
        data() {
            return {
                position: 'top',
                positionOptions: [
                    {label: 'top', value: 'top'},
                    {label: 'bottom', value: 'bottom'},
                    {label: 'left', value: 'left'},
                    {label: 'right', value: 'right'}
                ]
            }
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 卡片式页签
  另一种样式的页签，不提供对应的垂直样式。
</summary>

```html
<template>
    <tabs active-tab-key="1" type="card">
        <tab-pane tab-key="1" tab="选项卡一">选项卡一内容</tab-pane>
        <tab-pane tab-key="2" tab="选项卡二">选项卡二内容</tab-pane>
        <tab-pane tab-key="3" tab="选项卡三">选项卡三内容</tab-pane>
    </tabs>
</template>
```
:::

::: demo
<summary>
  #### 卡片式页签容器
  用于容器顶部，需要一点额外的样式覆盖。
</summary>

```html
<template>
    <div id="components-tabs-demo-card-top">
        <div class="card-container">
            <tabs active-tab-key="1" type="card">
                <tab-pane tab-key="1" tab="选项卡一">选项卡一内容</tab-pane>
                <tab-pane tab-key="2" tab="选项卡二">选项卡二内容</tab-pane>
                <tab-pane tab-key="3" tab="选项卡三">选项卡三内容</tab-pane>
            </tabs>
        </div>
    </div>
</template>

<style>
    #components-tabs-demo-card-top {
        background: #ECECEC;
        overflow: hidden;
        padding: 24px;
    }

    #components-tabs-demo-card-top > .card-container > .tabs-card > .tabs-content {
        height: 120px;
        margin-top: -16px;
    }

    #components-tabs-demo-card-top > .card-container > .tabs-card > .tabs-content > .tabs-tabpane {
        background: #fff;
        padding: 16px;
    }

    #components-tabs-demo-card-top > .card-container > .tabs-card > .tabs-bar .tabs-tab {
        border-color: transparent;
    }

    #components-tabs-demo-card-top > .card-container > .tabs-card > .tabs-bar .tabs-tab-active {
        border-color: #fff;
    }
</style>
```
:::

::: demo
<summary>
  #### 新增和关闭页签
  只有卡片样式的页签支持新增和关闭选项。
</summary>

```html
<template>
    <tabs active-tab-key="tab1" type="editable-card" @add="onAdd" @remove="onRemove">
        <tab-pane v-for="tabPane in tabPanes" :tab-key="tabPane.key" :key="tabPane.key" :tab="tabPane.tab">{{ tabPane.content }}</tab-pane>
    </tabs>
</template>

<script>
    export default {
        data() {
            return {
                keyIndex: 1,
                tabPanes: [
                    {key: 'tab1', tab: '选项卡1', content: '选项卡1的内容'},
                    {key: 'tab2', tab: '选项卡2', content: '选项卡2的内容'},
                    {key: 'tab3', tab: '选项卡3', content: '选项卡3的内容'}
                ]
            }
        },
        methods: {
            onAdd() {
                this.tabPanes.push({
                    key: 'newTab' + this.keyIndex,
                    tab: '新选项卡' + this.keyIndex,
                    content: '新选项卡' + this.keyIndex++ + '内容'
                });
            },
            onRemove(tabKey) {
                for (let i = 0; i < this.tabPanes.length; i++) {
                    if (this.tabPanes[i].key == tabKey) {
                        this.tabPanes.splice(i, 1);
                        break;
                    }
                }
            }
        }
    }
</script>
```
:::

::: demo
<summary>
  #### 新增和关闭自定义新增页签触发器页签
  隐藏默认的页签增加图标，给自定义触发器绑定事件。
</summary>

```html
<template>
    <div style="margin-bottom: 16px;">
        Tab的位置：<bs-select :data="positionOptions" v-model="customPosition" style="width: 200px;">
                    <bs-option v-for="item in positionOptions" :value="item.value" :key="item">{{item.label}}</bs-option>
                  </bs-select>
        <i-button @click="onCustomAdd">新增</i-button>
    </div>
    
</template>

<script>
    export default {
        data() {
            return {
                customPosition: 'top',
                customActiveKey: 'tab1',
                customKeyIndex: 1,
                positionOptions: [
                    {label: 'top', value: 'top'},
                    {label: 'bottom', value: 'bottom'},
                    {label: 'left', value: 'left'},
                    {label: 'right', value: 'right'}
                ],
                customTabPanes: [
                    {key: 'tab1', tab: '选项卡1', content: '选项卡1的内容'},
                    {key: 'tab2', tab: '选项卡2', content: '选项卡2的内容'},
                    {key: 'tab3', tab: '选项卡3', content: '选项卡3的内容'}
                ]
            }
        },
        methods: {
            onCustomAdd() {
                this.customTabPanes.push({
                    key: 'newTab' + this.customKeyIndex,
                    tab: '新选项卡' + this.customKeyIndex,
                    content: '新选项卡' + this.customKeyIndex++ + '内容'
                });
            },
            onCustomRemove(tabKey) {
                this.customActiveKey = 'newTab' + this.customKeyIndex;
                for (let i = 0; i < this.customTabPanes.length; i++) {
                    if (this.customTabPanes[i].key == tabKey) {
                        this.customTabPanes.splice(i, 1);
                        break;
                    }
                }
            }
        }
    }
</script>
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
