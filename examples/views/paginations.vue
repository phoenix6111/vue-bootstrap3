<template lang="html">
    <div class="paginations-demo">
        <div class="block-header">
            <h2>Pagination 分页
                <small>当数据量过多时，使用分页分解数据。</small>
            </h2>
        </div>

        <div>
            <h4>基础用法</h4>
            <div>
                <div class="page-block">
                    <span class="demonstration">页数较少时的效果</span>
                    <Pagination :total="50"></Pagination>

                    

                    <!--<div>
                        <ul class="pagination">
                            <li><a href="">2</a></li>
                            <li><a href="">3</a></li>
                            <li><a href="">4</a></li>
                            <li v-for="pager in pagers"><a href="">{{pager}}</a></li>
                        </ul>
                    </div>-->


                </div>
                <div class="page-block">
                    <span class="demonstration">大于 7 页时的效果</span>

                    <Pagination :total="100" show-sizer></Pagination>
                </div>
            </div>


            <br><br>

            <h4>小型分页</h4>
            <p>在空间有限的情况下，可以使用简单的小型分页。</p>
            <div>
                <div class="page-block">
                    <span class="demonstration">Small</span>
                    <Pagination size="sm" :total="50"></Pagination>
                </div>
                <div class="page-block">
                    <span class="demonstration">Default</span>
                    <Pagination :total="50"></Pagination>
                </div>
                <div class="page-block">
                    <span class="demonstration">Large</span>
                    <Pagination size="lg" :total="50"></Pagination>
                </div>
            </div>


            <br><br>


            <h4>附加功能</h4>
            <p>根据场景需要，可以添加其他功能模块。</p>
            <div>
                <div class="page-block">
                    <span class="demonstration">显示总数</span>
                    <pagination
                            @page-size-change="handleSizeChange"
                            @page-change="handleCurrentChange"
                            :current="currentPage1"
                            :page-size="100"
                            :showTotal="true"

                            :total="1000">
                    </pagination>
                </div>
                <div class="page-block">
                    <span class="demonstration">调整每页显示条数</span>
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
                <div class="page-block">
                    <span class="demonstration">直接前往</span>
                    <pagination
                            @on-page-size-change="handleSizeChange"
                            @on-page-change="handleCurrentChange"
                            :current="currentPage3"
                            :page-size="100"
                            :show-elevator="true"
                            :total="1000">
                    </pagination>
                </div>
                <div class="page-block">
                    <span class="demonstration">完整功能</span>
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

        </div>
    </div>
</template>
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

<style>
    .page-block {
        padding: 30px 24px;
        border-bottom: 1px solid #eff2f6;
    }

    .demonstration {
        font-size: 14px;
        color: #8492a6;
        line-height: 44px;
    }
</style>