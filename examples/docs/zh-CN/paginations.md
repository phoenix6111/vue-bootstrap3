<script>

    export default {
        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                console.log(`当前页: ${val}`);
            }
        },
        data() {
            return {
                currentPage1: 5,
                currentPage2: 5,
                currentPage3: 5,
                currentPage4: 4,
                pagers:['1','2','3']
            };
        }
    }
</script>
## Pagination 分页

当数据量过多时，使用分页分解数据。

### 代码演示

::: demo
<summary>
  #### 基础用法
  页数较少时的效果。
</summary>

```html
<template>
  <Pagination :total="50"></Pagination>
</template>
```
:::

::: demo
<summary>
  #### 大于 7 页时的效果
  大于 7 页时的效果。
</summary>

```html
<template>
  <Pagination :total="100" show-sizer></Pagination>
</template>
```
:::

::: demo
<summary>
  #### 小型分页
  在空间有限的情况下，可以使用简单的小型分页。
</summary>

```html
<template>
  <div class="row">
    <div class="col-sm-6 text-center">
        <p>Small</p>
        <Pagination size="sm" :total="50"></Pagination>
    </div>
    <div class="col-sm-6 text-center">
        <p>Default</p>
        <Pagination :total="50"></Pagination>
    </div>
    <div class="col-sm-6 text-center m-t-20">
        <p>Large</p>
        <Pagination size="lg" :total="50"></Pagination>
    </div>
  </div>
</template>
```
:::

::: demo
<summary>
  #### 附加功能
  根据场景需要，可以添加其他功能模块。
</summary>

```html
<template>
  <div class="row">
     <div class="col-sm-6 m-t-20">
        <p>显示总数</p>
        <pagination
                @page-size-change="handleSizeChange"
                @page-change="handleCurrentChange"
                :current="currentPage1"
                :page-size="100"
                :show-total="true"
                :total="1000">
        </pagination>
     </div>
     
     <div class="col-sm-6 m-t-20">
         <p>调整每页显示条数</p>
         <pagination
                 @on-page-size-change="handleSizeChange"
                 @on-page-change="handleCurrentChange"
                 :current-page="currentPage2"
                 :page-size-opts="[100, 200, 300, 400]"
                 :page-size="100"
                 :show-sizer="true"
                 :total="1000">
         </pagination>
     </div>
      
     <div class="col-sm-6 m-t-20">
         <p>直接前往</p>
         <pagination
                 @on-page-size-change="handleSizeChange"
                 @on-page-change="handleCurrentChange"
                 :current="currentPage3"
                 :page-size="100"
                 :show-elevator="true"
                 :total="1000">
         </pagination>   
     </div>
       
     <div class="col-sm-6 m-t-20">
         <p>完整功能</p>
         <pagination
                 @on-page-size-change="handleSizeChange"
                 @on-page-change="handleCurrentChange"
                 :current="currentPage4"
                 :page-size-opts="[100, 200, 300, 400]"
                 :page-size="100"
                 :show-total="true"
                 :show-sizer="true"
                 :show-elevator="true"
                 :total="400">
         </pagination>    
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
