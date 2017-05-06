<script>
export default {
   
}
</script>
<style scoped>
    .card-demo {
        background-color:#f3f3f3;
        padding:20px;
    }
</style>

## Card 卡片

通用卡片容器。

### 何时使用
最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。

### 代码演示

::: demo
<summary>
  #### 基础用法
  最简单的用法。
</summary>

```html
<template>
  <div class="card-demo">
    <i-card>
        <template slot="title">Card title</template>
        <template slot="subtitle">Praesent commodo cursus magna scelerisque consectetur.</template>
        <template>
            Cras leo sem, egestas a accumsan eget, euismod at nunc. Praesent vel mi
            blandit,
            tempus ex gravida, accumsan dui. Sed sed aliquam augue. Nullam vel suscipit
            purus,
            eu facilisis ante. Mauris nec commodo felis.
        </template>
    </i-card>
</div>
</template>
```
:::

::: demo
<summary>
  #### CARD WITH ACTIONS
  Cards can also contains action links in icon format.
</summary>

```html
<template>
  <div class="card-demo">
    <div class="row">
        <div class="col-sm-5 m-l-20">
            <i-card title="Card title" subtitle="Praesent commodo cursus magna scelerisque consectetur.">
                <template slot="actions">
                    <ul class="actions">
                        <Dropdown align="right">
                            <a href="" data-toggle="dropdown" aria-expanded="false">
                                <i class="zmdi zmdi-more-vert"></i>
                            </a>
                            <Dropdown-menu slot="list">
                                <Dropdown-item>Refresh</Dropdown-item>
                                <Dropdown-item>Manage Widgets</Dropdown-item>
                                <Dropdown-item>Widgets Settings</Dropdown-item>
                            </Dropdown-menu>
                        </Dropdown>
                    </ul>
                </template>

                <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Donec sed odio dui.</p>

            </i-card>
        </div>

        <div class="col-sm-5 m-l-20">
            <i-card title="Card title" subtitle="Praesent commodo cursus magna scelerisque consectetur.">
                <template slot="actions">
                    <ul class="actions">
                        <li>
                            <a href="">
                                <i class="zmdi zmdi-refresh-alt"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="zmdi zmdi-download"></i>
                            </a>
                        </li>
                        <Dropdown align="right">
                            <a href="" data-toggle="dropdown" aria-expanded="false">
                                <i class="zmdi zmdi-more-vert"></i>
                            </a>
                            <Dropdown-menu slot="list">
                                <Dropdown-item>Refresh</Dropdown-item>
                                <Dropdown-item>Manage Widgets</Dropdown-item>
                                <Dropdown-item>Widgets Settings</Dropdown-item>
                            </Dropdown-menu>
                        </Dropdown>
                    </ul>
                </template>

                <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Donec sed odio dui.</p>

            </i-card>
        </div>

        <div class="col-sm-5 m-l-20">
            <i-card type="primary"
                   inverse
                   title="Card title"
                   subtitle="Praesent commodo cursus magna scelerisque consectetur.">
                <template slot="actions">
                    <ul class="actions">
                        <Dropdown align="right">
                            <a href="" data-toggle="dropdown" aria-expanded="false">
                                <i class="zmdi zmdi-more-vert"></i>
                            </a>
                            <Dropdown-menu slot="list">
                                <Dropdown-item>Refresh</Dropdown-item>
                                <Dropdown-item>Manage Widgets</Dropdown-item>
                                <Dropdown-item>Widgets Settings</Dropdown-item>
                            </Dropdown-menu>
                        </Dropdown>
                    </ul>
                </template>

                <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Donec sed odio dui.</p>

            </i-card>
        </div>
    </div>
  </div>
</template>
```
:::

::: demo
<summary>
  #### BLOCKS
  The building block of a card is the .card-block. Use it whenever you need a padded section within a card.
</summary>

```html
<template>
  <div class="card-demo">
    <div class="row">
        <div class="col-sm-5 m-l-20">
            <i-card>
                <p>Aenean lacinia bibendum nulla sed consectetur. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nulla vitae elit libero</p>
            </i-card>
        </div>

        <div class="col-sm-5 m-l-20">
            <i-card>
                <p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.</p>
            </i-card>
        </div>
    </div>
</div>
</template>
```
:::

::: demo
<summary>
  #### CARD LINKS
  Links are added and placed next to each other by adding .card-link to a `tag.`
</summary>

```html
<template>
  <div class="card-demo">
    <div class="row">
        <div class="col-sm-5 m-l-20">
            <i-card title="Card title" subtitle="Praesent commodo cursus magna scelerisque consectetur">
                <p>Aenean lacinia bibendum nulla sed consectetur. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nulla vitae elit libero</p>
                <template slot="footer">
                    <a class="card-link" href="#">Card link</a>
                    <a class="card-link" href="#">Another link</a>
                </template>
            </i-card>
        </div>

        <div class="col-sm-5 m-l-20">
            <i-card>
                <p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.</p>
                <template slot="footer">
                    <a class="card-link" href="#">Card link</a>
                    <a class="card-link" href="#">Another link</a>
                </template>
            </i-card>
        </div>
    </div>
</div>
</template>
```
:::

::: demo
<summary>
  #### IMAGES
  Cards can also include images in the top and bottom.
</summary>

```html
<template>
  <div class="card-demo">
    <div class="row">
        <div class="col-sm-4 m-l-20">
            <i-card title="Card title" subtitle="Praesent commodo cursus magna scelerisque consectetur">
                <template slot="card-img-top">
                    <img src="http://img02.sogoucdn.com/app/a/100520024/9a2f6687b0e000d8493993807749df57">
                </template>
                <p>Aenean lacinia bibendum nulla sed consectetur. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nulla vitae elit libero</p>
            </i-card>
        </div>

        <div class="col-sm-4 m-l-20">
            <i-card title="Card title" subtitle="Praesent commodo cursus magna scelerisque consectetur">
                <p>Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur.</p>
                <template slot="card-img-bottom">
                    <img src="http://img02.sogoucdn.com/app/a/100520024/9a2f6687b0e000d8493993807749df57">
                </template>
            </i-card>
        </div>
    </div>
</div>
</template>
```
:::

::: demo
<summary>
  #### IMAGE OVERLAYS
  Turn an image into a card background and overlay your card’s text. Depending on the image, you may or may not need .card-inverse
</summary>

```html
<template>
  <div class="card-demo">
    <div class="row">
        <div class="col-sm-4 m-l-20">
            <i-card card-img-overlay inverse
                   title="Card title"
                   subtitle="Praesent commodo cursus magna scelerisque consectetur">
                <template slot="card-img">
                    <img src="http://img02.sogoucdn.com/app/a/100520024/9a2f6687b0e000d8493993807749df57">
                </template>
                <p>Aenean lacinia bibendum nulla sed consectetur. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nulla vitae elit libero</p>
            </i-card>
        </div>
    </div>
</div>
</template>
```
:::

::: demo
<summary>
  #### OUTLINE CARDS
  In need of a colored card, but not the hefty background colors they bring? Replace the default modifier classes with the .card-outline-* ones to style just the border-color of a card.
</summary>

```html
<template>
  <div class="row">
      <div class="col-sm-4 m-l-20">
          <i-card outline type="secondary">
              <p class="card-text">Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          </i-card>
      </div>
      <div class="col-sm-4 m-l-20">
          <i-card outline type="primary">
              <p class="card-text">Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          </i-card>
      </div>
      <div class="col-sm-4 m-l-20">
          <i-card outline type="info">
              <p class="card-text">Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          </i-card>
      </div>
      <div class="col-sm-4 m-l-20">
          <i-card outline type="success">
              <p class="card-text">Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          </i-card>
      </div>
      <div class="col-sm-4 m-l-20">
          <i-card outline type="warning">
              <p class="card-text">Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          </i-card>
      </div>
      <div class="col-sm-4 m-l-20">
          <i-card outline type="danger">
              <p class="card-text">Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          </i-card>
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
