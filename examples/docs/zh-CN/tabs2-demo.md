<script>
    export default {
        data () {
            return {
                modal1: false,
                loading: true,
                ccc: true
            }
        },
        methods: {
            ok () {
                setTimeout(() => {
                    this.modal1 = false;
                }, 2000);
            },
            clickTag() {
                console.log('click tag');
            },
            clickTagClose() {
                this.ccc = false;
                console.log('click tag close-icon');
            }
        }
    }
</script>

## Tabs 标签页

分隔内容上有关联但属于不同类别的数据集合。

### 何时使用
- 当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。
- 页面可视范围过小时，慎用此功能以免遮挡页面内容。

### 代码演示

::: demo
<summary>
  #### 基本
  最简单的用法。
</summary>

```html
<template>
  <tabs >
      <tab-pane label="Home">
          <p>Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.
              Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nulla
              sit amet est. Praesent ac massa at ligula laoreet iaculis.
          </p>
      </tab-pane>
      <tab-pane label="Profile">
          <p>Morbi mattis ullamcorper velit. Etiam rhoncus. Phasellus leo dolor, tempus
              non, auctor et, hendrerit quis, nisi. Cras id dui. Curabitur turpis.
          </p>
      </tab-pane>
      <tab-pane label="Messages">
          <p>Etiam rhoncus. Phasellus leo dolor, tempus non, auctor et, hendrerit quis,
              nisi. Cras id dui. Curabitur turpis.
          </p>
      </tab-pane>
  </tabs>
  
  <br><br><br><br>
  
  <tabs align="right">
      <tab-pane label="Home">
          <p>Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.
              Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nulla
              sit amet est. Praesent ac massa at ligula laoreet iaculis.
          </p>
      </tab-pane>
      <tab-pane label="Profile">
          <p>Morbi mattis ullamcorper velit. Etiam rhoncus. Phasellus leo dolor, tempus
              non, auctor et, hendrerit quis, nisi. Cras id dui. Curabitur turpis.
          </p>
      </tab-pane>
      <tab-pane label="Messages">
          <p>Etiam rhoncus. Phasellus leo dolor, tempus non, auctor et, hendrerit quis,
              nisi. Cras id dui. Curabitur turpis.
          </p>
      </tab-pane>
  </tabs>
  
  <br><br><br><br>
  
  <tabs align="center" active-tab="1">
      <tab-pane label="Home">
          <p>Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.
              Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nulla
              sit amet est. Praesent ac massa at ligula laoreet iaculis.
          </p>
      </tab-pane>
      <tab-pane label="Profile">
          <p>Morbi mattis ullamcorper velit. Etiam rhoncus. Phasellus leo dolor, tempus
              non, auctor et, hendrerit quis, nisi. Cras id dui. Curabitur turpis.
          </p>
      </tab-pane>
      <tab-pane label="Messages">
          <p>Etiam rhoncus. Phasellus leo dolor, tempus non, auctor et, hendrerit quis,
              nisi. Cras id dui. Curabitur turpis.
          </p>
      </tab-pane>
  </tabs>
  
  <br><br><br><br>
  
  <tabs justified>
      <tab-pane label="Home">
          <p>Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.
              Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nulla
              sit amet est. Praesent ac massa at ligula laoreet iaculis.
          </p>
      </tab-pane>
      <tab-pane label="Profile">
          <p>Morbi mattis ullamcorper velit. Etiam rhoncus. Phasellus leo dolor, tempus
              non, auctor et, hendrerit quis, nisi. Cras id dui. Curabitur turpis.
          </p>
      </tab-pane>
      <tab-pane label="Messages">
          <p>Etiam rhoncus. Phasellus leo dolor, tempus non, auctor et, hendrerit quis,
              nisi. Cras id dui. Curabitur turpis.
          </p>
      </tab-pane>
  </tabs>
  
  <br><br><br><br>
  
  <tabs :show-icon="true" align="center">
      <tab-pane label="Home" icon="home">
          <p>Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.
              Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nulla
              sit amet est. Praesent ac massa at ligula laoreet iaculis.
          </p>
      </tab-pane>
      <tab-pane label="Profile" icon="pin">
          <p>Morbi mattis ullamcorper velit. Etiam rhoncus. Phasellus leo dolor, tempus
              non, auctor et, hendrerit quis, nisi. Cras id dui. Curabitur turpis.
          </p>
      </tab-pane>
      <tab-pane label="Messages" icon="star">
          <p>Etiam rhoncus. Phasellus leo dolor, tempus non, auctor et, hendrerit quis,
              nisi. Cras id dui. Curabitur turpis.
          </p>
      </tab-pane>
  </tabs>
  
  <br><br><br><br>
  
  
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
