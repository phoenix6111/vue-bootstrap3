<template lang="html">
    <div class="card m-t-30">
        <div class="card-header">
            <h2>Table 表格
                <small>用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。</small>
            </h2>
        </div>

        <div class="card-body card-padding">

            <h4>普通表格</h4>
            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column
                        prop="date"
                        label="日期"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址">
                </el-table-column>
            </el-table>

            <br><br>
            <hr>
            <br><br>

            <h4>SMALL表格</h4>
            <el-table
                    :data="tableData"
                    size="sm"
                    style="width: 100%">
                <el-table-column
                        prop="date"
                        label="日期"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址">
                </el-table-column>
            </el-table>

            <br><br>
            <hr>
            <br><br>

            <h4>斑马纹表格</h4>
            <el-table
                    :data="tableData"
                    stripe
                    :table-hover="false"
                    style="width: 100%">
                <el-table-column
                        prop="date"
                        label="日期"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址">
                </el-table-column>
            </el-table>

            <br><br>
            <hr>
            <br><br>

            <h4>带边框表格</h4>
            <el-table
                    :data="tableData"
                    border
                    style="width: 100%">
                <el-table-column
                        prop="date"
                        label="日期"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址">
                </el-table-column>
            </el-table>

            <br><br>
            <hr>
            <br><br>

            <h4>带状态表格</h4>
            <small>可将表格内容 highlight 显示，方便区分「成功、信息、警告、危险」等内容。</small>
            <br>
            <el-table
                    :data="tableData2"
                    style="width: 100%"
                    :row-class-name="tableRowClassName">
                <el-table-column
                        prop="date"
                        label="日期"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址">
                </el-table-column>
            </el-table>


            <br><br>
            <hr>
            <br><br>

            <h4>固定表头</h4>
            <el-table
                    :data="tableData3"
                    height="250"
                    border
                    style="width: 100%">
                <el-table-column
                        prop="date"
                        label="日期"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址">
                </el-table-column>
            </el-table>



            <br><br>
            <hr>
            <br><br>
            <h4>流体高度</h4>
            <el-table
                    :data="tableData4"
                    border
                    style="width: 100%"
                    max-height="250">
                <el-table-column
                        fixed
                        prop="date"
                        label="日期"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="province"
                        label="省份"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="city"
                        label="市区"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址"
                        width="300">
                </el-table-column>
                <el-table-column
                        prop="zip"
                        label="邮编"
                        width="120">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        width="120">
                    <template scope="scope">
                        <i-button
                                @click.native.prevent="deleteRow(scope.$index, tableData4)"
                                type="text"
                                size="xs">
                            移除
                        </i-button>
                    </template>
                </el-table-column>
            </el-table>

            <br><br>
            <hr>
            <br><br>

            <h4>多级表头</h4>

            <el-table
                    :data="tableData3"
                    border
                    style="width: 100%">
                <el-table-column
                        prop="date"
                        label="日期"
                        width="150">
                </el-table-column>
                <el-table-column label="配送信息">
                    <el-table-column
                            prop="name"
                            label="姓名"
                            width="120">
                    </el-table-column>
                    <el-table-column label="地址">
                        <el-table-column
                                prop="province"
                                label="省份"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="city"
                                label="市区"
                                width="120">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="地址"
                                width="300">
                        </el-table-column>
                        <el-table-column
                                prop="zip"
                                label="邮编"
                                width="120">
                        </el-table-column>
                    </el-table-column>
                </el-table-column>
            </el-table>


            <br><br>
            <hr>
            <br><br>

            <h4>单选</h4>
            <el-table
                    :data="tableData"
                    highlight-current-row
                    @current-change="handleCurrentChange"
                    style="width: 100%">
                <el-table-column
                        type="index"
                        width="50">
                </el-table-column>
                <el-table-column
                        property="date"
                        label="日期"
                        width="120">
                </el-table-column>
                <el-table-column
                        property="name"
                        label="姓名"
                        width="120">
                </el-table-column>
                <el-table-column
                        property="address"
                        label="地址">
                </el-table-column>
            </el-table>


            <br><br>
            <hr>
            <br><br>

            <h4>多选</h4>
            <el-table
                    :data="tableData3"
                    border
                    tooltip-effect="dark"
                    style="width: 100%"
                    @selection-change="handleSelectionChange">
                <el-table-column
                        type="selection"
                        width="55">
                </el-table-column>
                <el-table-column
                        label="日期"
                        width="120">
                    <template scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址"
                        show-overflow-tooltip>
                </el-table-column>
            </el-table>


            <br><br>
            <hr>
            <br><br>

            <h4>排序</h4>
            <el-table
                    :data="tableData"
                    border
                    style="width: 100%"
                    :default-sort = "{prop: 'date', order: 'descending'}">
                <el-table-column
                        prop="date"
                        label="日期"
                        sortable
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        sortable
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址"
                        :formatter="formatter">
                </el-table-column>
            </el-table>


            <br><br>
            <hr>
            <br><br>

            <h4>筛选</h4>
            <el-table
                    :data="tableData"
                    border
                    style="width: 100%">
                <el-table-column
                        prop="date"
                        label="日期"
                        sortable
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址"
                        :formatter="formatter">
                </el-table-column>
                <el-table-column
                        prop="tag"
                        label="标签"
                        width="100"
                        :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
                        :filter-method="filterTag">
                    <template scope="scope">
                        <tag :color="scope.row.tag === '家' ? 'blue' : 'green'">{{scope.row.tag}}</tag>
                    </template>
                </el-table-column>
            </el-table>

            <br><br>
            <hr>
            <br><br>

            <h4>自定义模板</h4>
            <el-table
                    :data="tableData"
                    border
                    style="width: 100%">
                <el-table-column
                        label="日期"
                        width="180">
                    <template scope="scope">
                        <icon type="time"></icon>
                        <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                </el-table-column>
                <el-table-column
                        label="姓名"
                        width="180">
                    <template scope="scope">
                        <popover trigger="hover" placement="top">
                            <div slot="content">
                                <p>姓名: {{ scope.row.name }}</p>
                                <p>住址: {{ scope.row.address }}</p>
                            </div>
                            <div class="name-wrapper">
                                <tag>{{ scope.row.name }}</tag>
                            </div>
                        </popover>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template scope="scope">
                        <i-button
                                type="primary"
                                size="xs"
                                @click="handleEdit(scope.$index, scope.row)">编辑</i-button>
                        <i-button
                                size="xs"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">删除</i-button>
                    </template>
                </el-table-column>
            </el-table>


            <br><br>
            <hr>
            <br><br>

            <h4>展开行</h4>
            <el-table
                    :data="tableData5"
                    style="width: 100%">
                <el-table-column type="expand">
                    <template scope="props">

                        <form class="form-horizontal">
                            <div class="form-group col-sm-6">
                                <label class="col-sm-4 control-label">商品名称</label>
                                <div class="col-sm-8">
                                    <p class="form-control-static">{{ props.row.name }}</p>
                                </div>
                            </div>
                            <div class="form-group col-sm-6">
                                <label class="col-sm-4 control-label text-left">所属店铺</label>
                                <div class="col-sm-8">
                                    <p class="form-control-static">{{ props.row.shop }}</p>
                                </div>
                            </div>
                            <div class="form-group col-sm-6">
                                <label class="col-sm-4 control-label">商品 ID</label>
                                <div class="col-sm-8">
                                    <p class="form-control-static">{{ props.row.id }}</p>
                                </div>
                            </div>
                            <div class="form-group col-sm-6">
                                <label class="col-sm-4 control-label">店铺 ID</label>
                                <div class="col-sm-8">
                                    <p class="form-control-static">{{ props.row.shopId }}</p>
                                </div>
                            </div>
                            <div class="form-group col-sm-6">
                                <label class="col-sm-4 control-label">商品分类</label>
                                <div class="col-sm-8">
                                    <p class="form-control-static">{{ props.row.category }}</p>
                                </div>
                            </div>
                            <div class="form-group col-sm-6">
                                <label class="col-sm-4 control-label">店铺地址</label>
                                <div class="col-sm-8">
                                    <p class="form-control-static">{{ props.row.address }}</p>
                                </div>
                            </div>
                            <div class="form-group col-sm-6">
                                <label class="col-sm-4 control-label">商品介绍</label>
                                <div class="col-sm-8">
                                    <p class="form-control-static">{{ props.row.desc }}</p>
                                </div>
                            </div>
                        </form>
                    </template>
                </el-table-column>
                <el-table-column
                        label="商品 ID"
                        prop="id">
                </el-table-column>
                <el-table-column
                        label="商品名称"
                        prop="name">
                </el-table-column>
                <el-table-column
                        label="描述"
                        prop="desc">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            tableRowClassName(row, index) {
                if (index === 1) {
                    return 'info c-white';
                } else if (index === 3) {
                    return 'warning c-white';
                }
                return '';
            },
            handleClick() {
                console.log(1);
            },
            handleCurrentChange(val) {
                this.currentRow = val;
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            formatter(row, column) {
                return row.address;
            },
            filterTag(value, row) {
                return row.tag === value;
            },
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        },
        data() {
            return {
                currentRow: null,
                multipleSelection: [],
                tableData: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                    tag: '家'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                    tag: '公司'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                    tag: '家'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                    tag: '公司'
                }],
                tableData2: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
                tableData3: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-06',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }],
                tableData4: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-06',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }],
                tableData5: [{
                    id: '12987122',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: '12987123',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: '12987125',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: '12987126',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }]
            }
        }
    }
</script>

<style>
    .el-table .info-row {
        background: #c9e5f5;
    }

    .el-table .positive-row {
        background: #e2f0e4;
    }

    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }

    .el-table__expanded-cell .control-label {
        text-align: left;
        font-weight: 500;
    }
</style>