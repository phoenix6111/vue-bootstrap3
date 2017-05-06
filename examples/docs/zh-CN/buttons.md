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
  <i-button>Button</i-button>
  <i-button type="primary">Primary</i-button>
  <i-button type="secondary">Default</i-button>
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
  #### 按钮类型
  按钮类型有：默认按钮、主按钮、幽灵按钮、虚线按钮、文字按钮以及四种颜色按钮。
  通过设置type为primary、ghost、dashed、text、info、success、warning、error创建不同样式的按钮，不设置为默认样式。
</summary>

```html
<template>
  <button class="btn btn-primary btn-outline">Primary</button>
  <button class="btn btn-info btn-outline">Info</button>
  <button class="btn btn-success btn-outline">Success</button>
  <button class="btn btn-warning btn-outline">Warning</button>
  <button class="btn btn-danger btn-outline">Danger</button>
</template>
```
:::

::: demo
<summary>
  #### 按钮类型
  按钮类型有：默认按钮、主按钮、幽灵按钮、虚线按钮、文字按钮以及四种颜色按钮。
  通过设置type为primary、ghost、dashed、text、info、success、warning、error创建不同样式的按钮，不设置为默认样式。
</summary>

```html
<template>
  <i-button type="primary" shape="circle">Primary</i-button>
  <i-button type="info" shape="circle">Primary</i-button>
  <i-button type="success" shape="circle">Primary</i-button>
  <i-button type="warning" shape="circle">Primary</i-button>
  <i-button type="danger" shape="circle">Primary</i-button>
</template>
```
:::

::: demo
<summary>
  #### 按钮类型
  按钮类型有：默认按钮、主按钮、幽灵按钮、虚线按钮、文字按钮以及四种颜色按钮。
  通过设置type为primary、ghost、dashed、text、info、success、warning、error创建不同样式的按钮，不设置为默认样式。
</summary>

```html
<template>
  <i-button type="primary" :loading="true">Primary</i-button>
  <i-button type="info" :loading="true">Primary</i-button>
  <i-button type="success" :loading="true">Primary</i-button>
  <i-button type="warning" :loading="true">Primary</i-button>
  <i-button type="danger" :loading="true">Primary</i-button>
</template>
```
:::

::: demo
<summary>
  #### 按钮类型
  按钮类型有：默认按钮、主按钮、幽灵按钮、虚线按钮、文字按钮以及四种颜色按钮。
  通过设置type为primary、ghost、dashed、text、info、success、warning、error创建不同样式的按钮，不设置为默认样式。
</summary>

```html
<template>
  <i-button class="bgm-cyan">Cyan</i-button>
  <i-button class="bgm-teal">Teal</i-button>
  <i-button class="bgm-amber">Amber</i-button>
  <i-button class="bgm-orange">Orange</i-button>
  <i-button class="bgm-deeporange">Deep Orange</i-button>
  <i-button class="bgm-red">Red</i-button>
  <i-button class="bgm-pink">Pink</i-button>
  <i-button class="bgm-lightblue">Light Blue</i-button>
  <i-button class="bgm-blue">Blue</i-button>
  <i-button class="bgm-indigo">Indigo</i-button>
  <br><br>
  <i-button class="bgm-lime">Lime</i-button>
  <i-button class="bgm-lightgreen">Light Green</i-button>
  <i-button class="bgm-green">Green</i-button>
  <i-button class="bgm-purple">Purple</i-button>
  <i-button class="bgm-deeppurple">Deep Purple</i-button>
  <i-button class="bgm-gray">Gray</i-button>
  <i-button class="bgm-bluegray">Blue Gray</i-button>
  <i-button class="bgm-black">Black</i-button>
</template>
```
:::

::: demo
<summary>
  #### 按钮类型
  按钮类型有：默认按钮、主按钮、幽灵按钮、虚线按钮、文字按钮以及四种颜色按钮。
  通过设置type为primary、ghost、dashed、text、info、success、warning、error创建不同样式的按钮，不设置为默认样式。
</summary>

```html
<template>
  <i-button type="primary" size="lg">Large</i-button>
  <i-button type="primary">Normal</i-button>
  <i-button type="primary" size="sm">Small</i-button>
  <i-button type="primary" size="xs">Extra Small</i-button>
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
  #### Disable Stat
  按钮类型有：默认按钮、主按钮、幽灵按钮、虚线按钮、文字按钮以及四种颜色按钮。
  通过设置type为primary、ghost、dashed、text、info、success、warning、error创建不同样式的按钮，不设置为默认样式。
</summary>

```html
<template>
  <i-button type="primary" icon-text icon="home">Home</i-button>
  <i-button type="default" icon-text icon="search">Home</i-button>
  <!--<button class="btn btn-default btn-icon-text">
      <i class="zmdi zmdi-search"></i> Search
  </button>-->
  <button class="btn btn-default btn-icon-text">
      <i class="zmdi zmdi-more-vert"></i> More
  </button>
  <button class="btn btn-default btn-icon-text">
      <i class="zmdi zmdi-arrow-forward"></i>
      Forward
  </button>
  <button class="btn btn-default btn-icon-text"><i class="zmdi zmdi-arrow-back"></i> Back
  </button>
  <button class="btn btn-default btn-icon-text"><i class="zmdi zmdi-refresh"></i> Sync
  </button>
  <button class="btn btn-default btn-icon-text"><i class="zmdi zmdi-check"></i> Check
  </button>
  <button class="btn btn-default btn-icon-text"><i class="zmdi zmdi-close"></i> Check
  </button>
  <button class="btn btn-default btn-icon-text"><i class="zmdi zmdi-menu"></i> Menu
  </button>
  <button class="btn btn-default btn-icon-text"><i class="zmdi zmdi-apps"></i> Apps
  </button>
  <button class="btn btn-default btn-icon-text"><i class="zmdi zmdi-check-all"></i> Done
  </button>
  <button class="btn btn-default btn-icon-text"><i class="zmdi zmdi-trending-up"></i> Up
  </button>
  <button class="btn btn-default btn-icon-text"><i class="zmdi zmdi-apps"></i> Get
  </button>
  <button class="btn btn-default btn-icon-text"><i class="zmdi zmdi-phone"></i> Call
  </button>

  <br/>
  <br/>
  <br/>

  <i-button type="default" icon="home"></i-button>
  <i-button type="default" icon="search"></i-button>
  <i-button type="default" icon="more-vert"></i-button>
  <i-button type="default" icon="arrow-forward"></i-button>
  <i-button type="default" icon="arrow-back"></i-button>
  <i-button type="default" icon="refresh"></i-button>
  <i-button type="default" icon="check"></i-button>
  <i-button type="default" icon="close"></i-button>
  <i-button type="default" icon="menu"></i-button>
  <i-button type="default" icon="apps"></i-button>
  <i-button type="default" icon="check-all"></i-button>
  <i-button type="default" icon="trending-up"></i-button>
  <i-button type="default" icon="apps"></i-button>
  <i-button type="default" icon="phone"></i-button>

  <br/>
  <br/>
  <i-button type="primary" icon="home"></i-button>
  <i-button type="info" icon="search"></i-button>
  <i-button type="success" icon="more-vert"></i-button>
  <i-button type="warning" icon="arrow-forward"></i-button>
  <i-button type="danger" icon="arrow-back"></i-button>
  <i-button class="bgm-teal" icon="refresh"></i-button>
  <i-button class="bgm-orange" icon="check"></i-button>
  <i-button class="bgm-cyan" icon="close"></i-button>
  <i-button class="bgm-lightgreen" icon="menu"></i-button>
  <i-button class="bgm-lime" icon="apps"></i-button>
  <i-button class="bgm-amber" icon="check-all"></i-button>
  <i-button class="bgm-gray" icon="trending-up"></i-button>
  <i-button class="bgm-lightblue" icon="apps"></i-button>
  <i-button class="bgm-deeporange" icon="phone"></i-button>


  <br/>
  <br/>
  <br/>
  <i-button type="default" shape="icon" icon="home"></i-button>
  <i-button type="default" shape="icon" icon="search"></i-button>
  <i-button type="default" shape="icon" icon="more-vert"></i-button>
  <i-button type="default" shape="icon" icon="arrow-forward"></i-button>

  <button class="btn btn-default btn-icon"><i class="zmdi zmdi-arrow-back"></i></button>
  <button class="btn btn-default btn-icon"><i class="zmdi zmdi-refresh"></i></button>
  <button class="btn btn-default btn-icon"><i class="zmdi zmdi-check"></i></button>
  <button class="btn btn-default btn-icon"><i class="zmdi zmdi-close"></i></button>
  <button class="btn btn-default btn-icon"><i class="zmdi zmdi-menu"></i></button>
  <button class="btn btn-default btn-icon"><i class="zmdi zmdi-apps"></i></button>
  <button class="btn btn-default btn-icon"><i class="zmdi zmdi-check-all"></i></button>
  <button class="btn btn-default btn-icon"><i class="zmdi zmdi-trending-up"></i></button>
  <button class="btn btn-default btn-icon"><i class="zmdi zmdi-apps"></i></button>
  <button class="btn btn-default btn-icon"><i class="zmdi zmdi-phone"></i></button>

  <br/>
  <br/>

  <button class="btn btn-primary btn-icon"><i class="zmdi zmdi-home"></i></button>
  <button class="btn btn-info btn-icon"><i class="zmdi zmdi-search"></i></button>
  <button class="btn btn-success btn-icon"><i class="zmdi zmdi-more-vert"></i></button>
  <button class="btn btn-warning btn-icon"><i class="zmdi zmdi-arrow-forward"></i>
  </button>
  <button class="btn btn-danger btn-icon"><i class="zmdi zmdi-arrow-back"></i></button>
  <button class="btn bgm-teal btn-icon"><i class="zmdi zmdi-refresh"></i></button>
  <button class="btn bgm-orange btn-icon"><i class="zmdi zmdi-check"></i></button>
  <button class="btn bgm-cyan btn-icon"><i class="zmdi zmdi-close"></i></button>
  <button class="btn bgm-lightgreen btn-icon"><i class="zmdi zmdi-menu"></i></button>
  <button class="btn bgm-lime btn-icon"><i class="zmdi zmdi-apps"></i></button>
  <button class="btn bgm-amber btn-icon"><i class="zmdi zmdi-check-all"></i></button>
  <button class="btn bgm-gray btn-icon"><i class="zmdi zmdi-trending-up"></i></button>
  <button class="btn bgm-lightblue btn-icon"><i class="zmdi zmdi-apps"></i></button>
  <button class="btn bgm-deeporange btn-icon"><i class="zmdi zmdi-phone"></i></button>
</template>
```
:::

::: demo
<summary>
  #### Button Groups
  按钮类型有：默认按钮、主按钮、幽灵按钮、虚线按钮、文字按钮以及四种颜色按钮。
  通过设置type为primary、ghost、dashed、text、info、success、warning、error创建不同样式的按钮，不设置为默认样式。
</summary>

```html
<template>
  <button-group>
      <i-button type="default">Left</i-button>
      <i-button type="default">Middle</i-button>
      <i-button type="default">Right</i-button>
  </button-group>

  <div class="btn-group">
      <button type="button" class="btn btn-primary">Left</button>
      <button type="button" class="btn btn-primary">Middle</button>
      <button type="button" class="btn btn-primary">Right</button>
  </div>

  <div class="btn-group">
      <button type="button" class="btn btn-info">Left</button>
      <button type="button" class="btn btn-info">Middle</button>
      <button type="button" class="btn btn-info">Right</button>
  </div>

  <div class="btn-group">
      <button type="button" class="btn btn-success">Left</button>
      <button type="button" class="btn btn-success">Middle</button>
      <button type="button" class="btn btn-success">Right</button>
      <button type="button" class="btn btn-success">Right</button>
  </div>

  <div class="btn-group">
      <button type="button" class="btn btn-warning">Left</button>
      <button type="button" class="btn btn-warning">Middle</button>
      <button type="button" class="btn btn-warning">Right</button>
  </div>
</template>
```
:::

::: demo
<summary>
  #### split-buttons examples
  按钮类型有：默认按钮、主按钮、幽灵按钮、虚线按钮、文字按钮以及四种颜色按钮。
  通过设置type为primary、ghost、dashed、text、info、success、warning、error创建不同样式的按钮，不设置为默认样式。
</summary>

```html
<template>
  <split-button type="primary" size="xs">
      split-button
  </split-button>
  <split-button type="primary" size="sm">
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

::: demo
<summary>
  #### split-buttons examples
  按钮类型有：默认按钮、主按钮、幽灵按钮、虚线按钮、文字按钮以及四种颜色按钮。
  通过设置type为primary、ghost、dashed、text、info、success、warning、error创建不同样式的按钮，不设置为默认样式。
</summary>

```html
<template>
  <div class="btn-toolbar" role="toolbar">
      <div class="btn-group">
          <button type="button" class="btn btn-default">1</button>
          <button type="button" class="btn btn-default">2</button>
          <button type="button" class="btn btn-default">3</button>
      </div>
      <div class="btn-group">
          <button type="button" class="btn btn-default">4</button>
          <button type="button" class="btn btn-default">5</button>
          <button type="button" class="btn btn-default">6</button>
      </div>
      <div class="btn-group">
          <button type="button" class="btn btn-default">7</button>
          <button type="button" class="btn btn-default">8</button>
          <button type="button" class="btn btn-default">9</button>
      </div>
  </div>

  <br/>

  <div class="btn-toolbar" role="toolbar">
      <div class="btn-group">
          <button type="button" class="btn btn-primary">1</button>
          <button type="button" class="btn btn-primary">2</button>
          <button type="button" class="btn btn-primary">3</button>
      </div>
      <div class="btn-group">
          <button type="button" class="btn btn-primary">4</button>
          <button type="button" class="btn btn-primary">5</button>
          <button type="button" class="btn btn-primary">6</button>
      </div>
      <div class="btn-group">
          <button type="button" class="btn btn-primary">7</button>
          <button type="button" class="btn btn-primary">8</button>
          <button type="button" class="btn btn-primary">9</button>
      </div>
  </div>
</template>
```
:::

::: demo
<summary>
  #### split-buttons examples
  按钮类型有：默认按钮、主按钮、幽灵按钮、虚线按钮、文字按钮以及四种颜色按钮。
  通过设置type为primary、ghost、dashed、text、info、success、warning、error创建不同样式的按钮，不设置为默认样式。
</summary>

```html
<template>
  <div class="btn-group-demo">
      <div class="btn-group btn-group-lg" role="group">
          <button type="button" class="btn btn-default">Left</button>
          <button type="button" class="btn btn-default">Middle</button>
          <button type="button" class="btn btn-default">Right</button>
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
          <button type="button" class="btn btn-default">Left</button>
          <button type="button" class="btn btn-default">Middle</button>
          <button type="button" class="btn btn-default">Right</button>
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
          <button type="button" class="btn btn-default">Left</button>
          <button type="button" class="btn btn-default">Middle</button>
          <button type="button" class="btn btn-default">Right</button>
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
          <button type="button" class="btn btn-default">Left</button>
          <button type="button" class="btn btn-default">Middle</button>
          <button type="button" class="btn btn-default">Right</button>
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
  #### split-buttons examples
  按钮类型有：默认按钮、主按钮、幽灵按钮、虚线按钮、文字按钮以及四种颜色按钮。
  通过设置type为primary、ghost、dashed、text、info、success、warning、error创建不同样式的按钮，不设置为默认样式。
</summary>

```html
<template>
  <div class="btn-group btn-group-justified" role="group" aria-label="...">
      <div class="btn-group" role="group">
          <button type="button" class="btn btn-default">Left</button>
      </div>
      <div class="btn-group" role="group">
          <button type="button" class="btn btn-default">Middle</button>
      </div>
      <div class="btn-group" role="group">
          <button type="button" class="btn btn-default">Right</button>
      </div>
  </div>

  <br/>

  <div class="btn-group btn-group-justified" role="group" aria-label="...">
      <div class="btn-group" role="group">
          <button type="button" class="btn btn-primary">Left</button>
      </div>
      <div class="btn-group" role="group">
          <button type="button" class="btn btn-primary">Middle</button>
      </div>
      <div class="btn-group" role="group">
          <button type="button" class="btn btn-primary">Right</button>
      </div>
  </div>
</template>
```
:::

::: demo
<summary>
  #### split-buttons examples
  按钮类型有：默认按钮、主按钮、幽灵按钮、虚线按钮、文字按钮以及四种颜色按钮。
  通过设置type为primary、ghost、dashed、text、info、success、warning、error创建不同样式的按钮，不设置为默认样式。
</summary>

```html
<template>
  <div class="btn-group">
      <button type="button" class="btn btn-default">1</button>
      <button type="button" class="btn btn-default">2</button>

      <div class="btn-group">
          <button type="button" class="btn btn-default dropdown-toggle"
                  data-toggle="dropdown">
              Dropdown
              <span class="caret"></span>
          </button>
          <ul class="dropdown-menu" role="menu">
              <li><a href="#">Dropdown link</a></li>
              <li><a href="#">Dropdown link</a></li>
          </ul>
      </div>
  </div>

  <div class="btn-group">
      <button type="button" class="btn btn-primary">1</button>
      <button type="button" class="btn btn-primary">2</button>

      <div class="btn-group">
          <button type="button" class="btn btn-primary dropdown-toggle"
                  data-toggle="dropdown">
              Dropdown
              <span class="caret"></span>
          </button>
          <ul class="dropdown-menu" role="menu">
              <li><a href="#">Dropdown link</a></li>
              <li><a href="#">Dropdown link</a></li>
          </ul>
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
