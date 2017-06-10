<script>
    export default {
        name:'Buttons',
        methods: {
            btnClick() {
                console.log("Split-button btn clicked");
            },
            caretClick() {
                console.log("Split-button caret btn clicked");
            },
            caretMouseEnter() {
                console.log("Split-button caret mouse entering");
            },
            caretMouseLeave() {
                console.log("Split-button caret mouse leaveing");
            },
        }
    }
</script>
<style scoped>
    .box-demo-show > .btn,
    .box-demo-show > .btn-group,
    .box-demo-show .btn-toolbar > .btn-group{
        margin-right:5px;
    }
    
    
    
</style>

## Button 按钮

基础组件，触发业务逻辑时使用。

### 代码演示

::: demo
<summary>
  #### 按钮类型
  按钮类型有：默认按钮、主按钮、幽灵按钮、虚线按钮、文字按钮以及四种颜色按钮。
  通过设置type为primary、ghost、dashed、text、info、success、warning、error创建不同样式的按钮，不设置为默认样式。
</summary>

```html
<template>
  <i-button type="primary">Primary</i-button>
  <i-button type="secondary">Secondary</i-button>
  <i-button type="info">Info</i-button>
  <i-button type="success">Success</i-button>
  <i-button type="warning">Warning</i-button>
  <i-button type="danger">Danger</i-button>
  <i-button type="inverse">Inverse</i-button>
  <i-button type="link">Link</i-button>
</template>
```
:::

::: demo
<summary>
  #### Outline类型
  设置`outline=true`可将Button设置为outline效果。
</summary>

```html
<template>
  <i-button type="primary" outline>Primary</i-button>
  <i-button type="info" outline>Info</i-button>
  <i-button type="success" outline>Success</i-button>
  <i-button type="warning" outline>Warning</i-button>
  <i-button type="danger" outline>Danger</i-button>
</template>
```
:::

::: demo
<summary>
  #### Loading 状态
  设置`loading=true`可将`Button`的状态设置为加载中，此时Button不可点击。
</summary>

```html
<template>
  <i-button type="primary" :loading="true">Primary</i-button>
  <i-button type="secondary" :loading="true">Secondary</i-button>
  <i-button type="info" :loading="true">Primary</i-button>
  <i-button type="success" :loading="true">Primary</i-button>
  <i-button type="warning" :loading="true">Primary</i-button>
  <i-button type="danger" :loading="true">Primary</i-button>
</template>
```
:::


::: demo
<summary>
  #### Disable Stat
  按钮类型有：默认按钮、主按钮、幽灵按钮、虚线按钮、文字按钮以及四种颜色按钮。
  通过设置type为primary、ghost、dashed、text、info、success、warning、error创建不同样式的按钮，不设置为默认样式。
</summary>

```html
<template>
  <i-button disabled>Default</i-button>
  <i-button type="primary" disabled>Default</i-button>
  <i-button type="info" disabled>Default</i-button>
  <i-button type="success" disabled>Default</i-button>
  <i-button type="warning" disabled>Default</i-button>
  <i-button type="danger" disabled>Default</i-button>
</template>
```
:::

::: demo
<summary>
  #### 带 Icons Button 
  设置`icon-text=true`，并且为Button添加icon值，则Button就有了文字和图标效果
</summary>

```html
<template>
  <i-button type="primary" icon-text icon="home">Home</i-button>
  <i-button type="secondary" icon-text icon="search">Home</i-button>
  <i-button type="info" icon-text icon="more-vert">Home</i-button>
  <i-button type="success" icon-text icon="arrow-forward">Home</i-button>
  <i-button type="warning" icon-text icon="refresh">Home</i-button>
  <i-button type="danger" icon-text icon="check">Home</i-button>
  

  <br/>
  <br/>
  <br/>

  <i-button type="primary" icon="home"></i-button>
  <i-button type="info" icon="search"></i-button>
  <i-button type="success" icon="more-vert"></i-button>
  <i-button type="warning" icon="arrow-forward"></i-button>
  <i-button type="danger" icon="arrow-back"></i-button>

</template>
```
:::

::: demo
<summary>
  #### 圆形 Button
  设置`shape=circle`，可将Button设置为圆形。
</summary>

```html
<template>
  <i-button type="primary" shape="circle">Primary</i-button>
  <i-button type="info" shape="circle">Primary</i-button>
  <i-button type="success" shape="circle">Primary</i-button>
  <i-button type="warning" shape="circle">Primary</i-button>
  <i-button type="danger" shape="circle">Primary</i-button>

  <br><br>

  <i-button type="primary" shape="circle" icon="home"></i-button>
  <i-button type="secondary" shape="circle" icon="search"></i-button>
  <i-button type="info" shape="circle" icon="more-vert"></i-button>
  <i-button type="success" shape="circle" icon="arrow-forward"></i-button>
  <i-button type="warning" shape="circle" icon="refresh"></i-button>
  <i-button type="danger" shape="circle" icon="check"></i-button>
</template>
```
:::

::: demo
<summary>
  #### 按钮尺寸
  按钮有`lg,default,sm,xs`四种尺寸，默认为default。
</summary>

```html
<template>
  <i-button type="primary" size="lg">Large</i-button>
  <i-button type="primary">Normal</i-button>
  <i-button type="primary" size="sm">Small</i-button>
  <i-button type="primary" size="xs">Extra Small</i-button>
  
  <br><br>
  
  <i-button type="primary" size="lg" shape="circle">Large</i-button>
  <i-button type="primary" shape="circle">Normal</i-button>
  <i-button type="primary" size="sm" shape="circle">Small</i-button>
  <i-button type="primary" size="xs" shape="circle">Extra Small</i-button>
  
  <br><br>
  
  <i-button type="primary" size="lg" shape="circle" icon="home"></i-button>
  <i-button type="primary" shape="circle" icon="home"></i-button>
  <i-button type="primary" size="sm" shape="circle" icon="home"></i-button>
  <i-button type="primary" size="xs" shape="circle" icon="home"></i-button>
</template>
```
:::

::: demo
<summary>
  #### Button Groups
  按钮组
</summary>

```html
<template>
  <button-group>
      <i-button type="secondary">Left</i-button>
      <i-button type="secondary">Middle</i-button>
      <i-button type="secondary">Right</i-button>
  </button-group>

  <button-group>
      <i-button type="primary">Left</i-button>
      <i-button type="primary">Middle</i-button>
      <i-button type="primary">Right</i-button>
  </button-group>

  <button-group>
      <i-button type="info">Left</i-button>
      <i-button type="info">Middle</i-button>
      <i-button type="info">Right</i-button>
  </button-group>
  
  <button-group>
      <i-button type="success">Left</i-button>
      <i-button type="success">Middle</i-button>
      <i-button type="success">Right</i-button>
  </button-group>

  <button-group>
      <i-button type="warning">Left</i-button>
      <i-button type="warning">Middle</i-button>
      <i-button type="warning">Right</i-button>
  </button-group>

  <button-group>
      <i-button type="danger">Left</i-button>
      <i-button type="danger">Middle</i-button>
      <i-button type="danger">Right</i-button>
  </button-group>
  
  <br><br>
  
  <button-group vertical class="m-r-20">
        <i-button type="secondary">Button</i-button>
        <i-button type="secondary">Button</i-button>
        <dropdown class="btn-group">
            <i-button type="secondary" class="dropdown-toggle">Button <span class="caret"></span></i-button>
            <dropdown-menu slot="dropdown">
                <dropdown-item>dropdown item</dropdown-item>
                <dropdown-item>dropdown item</dropdown-item>
                <dropdown-item>dropdown item</dropdown-item>
            </dropdown-menu>
        </dropdown>
        <dropdown class="btn-group">
            <i-button type="secondary" class="dropdown-toggle">Button <span class="caret"></span></i-button>
            <dropdown-menu slot="dropdown">
                <dropdown-item>dropdown item</dropdown-item>
                <dropdown-item>dropdown item</dropdown-item>
                <dropdown-item>dropdown item</dropdown-item>
            </dropdown-menu>
        </dropdown>
        <dropdown class="btn-group">
            <i-button type="secondary" class="dropdown-toggle">Button <span class="caret"></span></i-button>
            <dropdown-menu slot="dropdown">
                <dropdown-item>dropdown item</dropdown-item>
                <dropdown-item>dropdown item</dropdown-item>
                <dropdown-item>dropdown item</dropdown-item>
            </dropdown-menu>
        </dropdown>
  </button-group>
  
  <button-group vertical class="m-r-20">
          <i-button type="primary">Button</i-button>
          <i-button type="primary">Button</i-button>
          <dropdown class="btn-group">
              <i-button type="primary" class="dropdown-toggle">Button <span class="caret"></span></i-button>
              <dropdown-menu slot="dropdown">
                  <dropdown-item>dropdown item</dropdown-item>
                  <dropdown-item>dropdown item</dropdown-item>
                  <dropdown-item>dropdown item</dropdown-item>
              </dropdown-menu>
          </dropdown>
          <dropdown class="btn-group">
              <i-button type="primary" class="dropdown-toggle">Button <span class="caret"></span></i-button>
              <dropdown-menu slot="dropdown">
                  <dropdown-item>dropdown item</dropdown-item>
                  <dropdown-item>dropdown item</dropdown-item>
                  <dropdown-item>dropdown item</dropdown-item>
              </dropdown-menu>
          </dropdown>
          <dropdown class="btn-group">
              <i-button type="primary" class="dropdown-toggle">Button <span class="caret"></span></i-button>
              <dropdown-menu slot="dropdown">
                  <dropdown-item>dropdown item</dropdown-item>
                  <dropdown-item>dropdown item</dropdown-item>
                  <dropdown-item>dropdown item</dropdown-item>
              </dropdown-menu>
          </dropdown>
    </button-group>
    
  <button-group vertical class="m-r-20">
        <i-button type="info">Button</i-button>
        <i-button type="info">Button</i-button>
        <dropdown class="btn-group">
            <i-button type="info" class="dropdown-toggle">Button <span class="caret"></span></i-button>
            <dropdown-menu slot="dropdown">
                <dropdown-item>dropdown item</dropdown-item>
                <dropdown-item>dropdown item</dropdown-item>
                <dropdown-item>dropdown item</dropdown-item>
            </dropdown-menu>
        </dropdown>
        <dropdown class="btn-group">
            <i-button type="info" class="dropdown-toggle">Button <span class="caret"></span></i-button>
            <dropdown-menu slot="dropdown">
                <dropdown-item>dropdown item</dropdown-item>
                <dropdown-item>dropdown item</dropdown-item>
                <dropdown-item>dropdown item</dropdown-item>
            </dropdown-menu>
        </dropdown>
        <dropdown class="btn-group">
            <i-button type="info" class="dropdown-toggle">Button <span class="caret"></span></i-button>
            <dropdown-menu slot="dropdown">
                <dropdown-item>dropdown item</dropdown-item>
                <dropdown-item>dropdown item</dropdown-item>
                <dropdown-item>dropdown item</dropdown-item>
            </dropdown-menu>
        </dropdown>
  </button-group>
  
  <button-group vertical class="m-r-20">
        <i-button type="success">Button</i-button>
        <i-button type="success">Button</i-button>
        <dropdown class="btn-group">
            <i-button type="success" class="dropdown-toggle">Button <span class="caret"></span></i-button>
            <dropdown-menu slot="dropdown">
                <dropdown-item>dropdown item</dropdown-item>
                <dropdown-item>dropdown item</dropdown-item>
                <dropdown-item>dropdown item</dropdown-item>
            </dropdown-menu>
        </dropdown>
        <dropdown class="btn-group">
            <i-button type="success" class="dropdown-toggle">Button <span class="caret"></span></i-button>
            <dropdown-menu slot="dropdown">
                <dropdown-item>dropdown item</dropdown-item>
                <dropdown-item>dropdown item</dropdown-item>
                <dropdown-item>dropdown item</dropdown-item>
            </dropdown-menu>
        </dropdown>
        <dropdown class="btn-group">
            <i-button type="success" class="dropdown-toggle">Button <span class="caret"></span></i-button>
            <dropdown-menu slot="dropdown">
                <dropdown-item>dropdown item</dropdown-item>
                <dropdown-item>dropdown item</dropdown-item>
                <dropdown-item>dropdown item</dropdown-item>
            </dropdown-menu>
        </dropdown>
  </button-group>
  
  <button-group vertical class="m-r-20">
        <i-button type="warning">Button</i-button>
        <i-button type="warning">Button</i-button>
        <dropdown class="btn-group">
            <i-button type="warning" class="dropdown-toggle">Button <span class="caret"></span></i-button>
            <dropdown-menu slot="dropdown">
                <dropdown-item>dropdown item</dropdown-item>
                <dropdown-item>dropdown item</dropdown-item>
                <dropdown-item>dropdown item</dropdown-item>
            </dropdown-menu>
        </dropdown>
        <dropdown class="btn-group">
            <i-button type="warning" class="dropdown-toggle">Button <span class="caret"></span></i-button>
            <dropdown-menu slot="dropdown">
                <dropdown-item>dropdown item</dropdown-item>
                <dropdown-item>dropdown item</dropdown-item>
                <dropdown-item>dropdown item</dropdown-item>
            </dropdown-menu>
        </dropdown>
        <dropdown class="btn-group">
            <i-button type="warning" class="dropdown-toggle">Button <span class="caret"></span></i-button>
            <dropdown-menu slot="dropdown">
                <dropdown-item>dropdown item</dropdown-item>
                <dropdown-item>dropdown item</dropdown-item>
                <dropdown-item>dropdown item</dropdown-item>
            </dropdown-menu>
        </dropdown>
  </button-group>
  
  <button-group vertical class="m-r-20">
        <i-button type="danger">Button</i-button>
        <i-button type="danger">Button</i-button>
        <dropdown class="btn-group">
            <i-button type="danger" class="dropdown-toggle">Button <span class="caret"></span></i-button>
            <dropdown-menu slot="dropdown">
                <dropdown-item>dropdown item</dropdown-item>
                <dropdown-item>dropdown item</dropdown-item>
                <dropdown-item>dropdown item</dropdown-item>
            </dropdown-menu>
        </dropdown>
        <dropdown class="btn-group">
            <i-button type="danger" class="dropdown-toggle">Button <span class="caret"></span></i-button>
            <dropdown-menu slot="dropdown">
                <dropdown-item>dropdown item</dropdown-item>
                <dropdown-item>dropdown item</dropdown-item>
                <dropdown-item>dropdown item</dropdown-item>
            </dropdown-menu>
        </dropdown>
        <dropdown class="btn-group">
            <i-button type="danger" class="dropdown-toggle">Button <span class="caret"></span></i-button>
            <dropdown-menu slot="dropdown">
                <dropdown-item>dropdown item</dropdown-item>
                <dropdown-item>dropdown item</dropdown-item>
                <dropdown-item>dropdown item</dropdown-item>
            </dropdown-menu>
        </dropdown>
  </button-group>
</template>
```
:::

::: demo
<summary>
  #### size of ButtonGroup
  可选的ButtonGroup的size为：lg,default,sm,xs
</summary>

```html
<template>
  <div class="btn-group-demo">
      <div class="btn-group btn-group-lg" role="group">
          <button type="button" class="btn btn-secondary">Left</button>
          <button type="button" class="btn btn-secondary">Middle</button>
          <button type="button" class="btn btn-secondary">Right</button>
      </div>

      <div class="btn-group btn-group-lg" role="group">
          <button type="button" class="btn btn-primary">Left</button>
          <button type="button" class="btn btn-primary">Middle</button>
          <button type="button" class="btn btn-primary">Right</button>
      </div>
  </div>

  <br/>

  <div class="btn-group-demo">
      <div class="btn-group btn-group" role="group">
          <button type="button" class="btn btn-secondary">Left</button>
          <button type="button" class="btn btn-secondary">Middle</button>
          <button type="button" class="btn btn-secondary">Right</button>
      </div>

      <div class="btn-group btn-group" role="group">
          <button type="button" class="btn btn-primary">Left</button>
          <button type="button" class="btn btn-primary">Middle</button>
          <button type="button" class="btn btn-primary">Right</button>
      </div>
  </div>

  <br/>

  <div class="btn-group-demo">
      <div class="btn-group btn-group-sm" role="group">
          <button type="button" class="btn btn-secondary">Left</button>
          <button type="button" class="btn btn-secondary">Middle</button>
          <button type="button" class="btn btn-secondary">Right</button>
      </div>

      <div class="btn-group btn-group-sm" role="group">
          <button type="button" class="btn btn-primary">Left</button>
          <button type="button" class="btn btn-primary">Middle</button>
          <button type="button" class="btn btn-primary">Right</button>
      </div>
  </div>

  <br/>

  <div class="btn-group-demo">
      <div class="btn-group btn-group-xs" role="group">
          <button type="button" class="btn btn-secondary">Left</button>
          <button type="button" class="btn btn-secondary">Middle</button>
          <button type="button" class="btn btn-secondary">Right</button>
      </div>

      <div class="btn-group btn-group-xs" role="group">
          <button type="button" class="btn btn-primary">Left</button>
          <button type="button" class="btn btn-primary">Middle</button>
          <button type="button" class="btn btn-primary">Right</button>
      </div>
  </div>
</template>
```
:::


::: demo
<summary>
  #### Block Button And Justified ButtonGroup
  设置long=true可将Button宽度占满，设置`justified=true`可将ButtonGroup平分占满横向宽度。
</summary>

```html
<template>
    <i-button type="secondary" long>Block Button</i-button>
    <br>
    <i-button type="primary" long>Block Button</i-button>

    <br><br>


  <button-group justified>
    <button-group>
        <i-button type="secondary">Left</i-button>
    </button-group>
    <button-group>
        <i-button type="secondary">Middle</i-button>
    </button-group>
    <button-group>
        <i-button type="secondary">Right</i-button>
    </button-group>
  </button-group>
  
  <br>
  
  <button-group justified>
      <button-group>
          <i-button type="primary">Left</i-button>
      </button-group>
      <button-group>
          <i-button type="primary">Middle</i-button>
      </button-group>
      <button-group>
          <i-button type="primary">Right</i-button>
      </button-group>
  </button-group>
  
  
</template>
```
:::

::: demo
<summary>
  #### ButtonGroup within dropdown
  Place a '.btn-group' within another '.btn-group' when you want dropdown menus mixed with a series of buttons. 
</summary>

```html
<template>
    <button-group>
        <i-button type="secondary">1</i-button>
        <i-button type="secondary">2</i-button>
        <dropdown class="btn-group">
            <i-button type="secondary" class="dropdown-toggle">Dropdown<span class="caret"></span></i-button>
            <dropdown-menu slot="dropdown">
                <dropdown-item>Dropdown link</dropdown-item>
                <dropdown-item>Dropdown link</dropdown-item>
            </dropdown-menu>
        </dropdown>
    </button-group>
    
    <button-group>
        <i-button type="primary">1</i-button>
        <i-button type="primary">2</i-button>
        <dropdown class="btn-group">
            <i-button type="primary" class="dropdown-toggle">Dropdown<span class="caret"></span></i-button>
            <dropdown-menu slot="dropdown">
                <dropdown-item>Dropdown link</dropdown-item>
                <dropdown-item>Dropdown link</dropdown-item>
            </dropdown-menu>
        </dropdown>
    </button-group>
    
    <button-group>
        <i-button type="success">1</i-button>
        <i-button type="success">2</i-button>
        <dropdown class="btn-group">
            <i-button type="success" class="dropdown-toggle">Dropdown<span class="caret"></span></i-button>
            <dropdown-menu slot="dropdown">
                <dropdown-item>Dropdown link</dropdown-item>
                <dropdown-item>Dropdown link</dropdown-item>
            </dropdown-menu>
        </dropdown>
    </button-group>
</template>
```
:::

::: demo
<summary>
  #### split-buttons examples
  SplitButton 可监听btn-click，caret-click，caret-mouse-enter，caret-mouse-leave事件，size可设置尺寸
</summary>

```html
<template>
  <split-button type="primary" size="xs">
      split-button
  </split-button>
  <split-button type="primary" size="sm">
      split-button
  </split-button>
  <split-button type="secondary">
    split-button
  </split-button>
  <split-button type="primary"
               @btn-click="btnClick"
               @caret-click="caretClick"
               @caret-mouse-enter="caretMouseEnter"
               @caret-mouse-leave="caretMouseLeave">
      split-button
  </split-button>
  <split-button type="primary" size="lg">
      split-button
  </split-button>
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
