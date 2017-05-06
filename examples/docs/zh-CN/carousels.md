<script>
export default {
    name:'Carousels',
    methods: {
        onchange(newIndex,oldIndex) {
//                console.log("new "+newIndex+" old "+oldIndex);
        }
    }
}
</script>

## Carousel 轮播图

旋转木马，一组轮播的区域。

### 何时使用
- 当有一组平级的内容。
- 当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。
- 常用于一组图片或卡片轮播。

### 代码演示

::: demo
<summary>
  #### 基本
  最简单的用法。
</summary>

```html
<template>
  <carousel interval="3000" @change="onchange">
      <carousel-item>
          <template slot="default">
              <img src="../../../media/carousel/c-1.jpg" alt="">
              <div class="carousel-caption">
                  <h3>First Slide Label</h3>
                  <p>Some sample text goes here...</p>
              </div>
          </template>
      </carousel-item>

      <carousel-item>
          <img src="../../../media/carousel/c-2.jpg" alt="">
      </carousel-item>

      <carousel-item>
          <img src="../../../media/carousel/c-3.jpg" alt="">
      </carousel-item>
  </carousel>
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
