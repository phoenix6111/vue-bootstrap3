<template lang="html">
    <div class="card m-t-30">
        <div class="card-header">
            <h2>Select 选择器
                <small>使用模拟的增强下拉选择器来代替浏览器原生的选择器。
                    选择器支持单选、多选、搜索，以及键盘快捷操作。</small>
            </h2>
        </div>

        <div class="card-body card-padding">

            <h4>基础用法</h4>
            <BsSelect v-model="model1" style="width:200px">
                <BsOption v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</BsOption>
            </BsSelect>

            <br>
            <br>
            <hr>
            <br>
            <br>


            <h4>尺寸</h4>
            <BsSelect v-model="model2" size="small" style="width:100px">
                <BsOption v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</BsOption>
            </BsSelect>
            <BsSelect v-model="model3" style="width:100px">
                <BsOption v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</BsOption>
            </BsSelect>
            <BsSelect v-model="model4" size="large" style="width:100px">
                <BsOption v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</BsOption>
            </BsSelect>

            <br>
            <br>
            <hr>
            <br>
            <br>
            <h4>禁用</h4>
            <BsSelect v-model="model5" disabled style="width:200px">
                <BsOption v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</BsOption>
            </BsSelect>
            <BsSelect v-model="model6" style="width:200px">
                <BsOption value="beijing">北京市</BsOption>
                <BsOption value="shanghai" disabled>上海市</BsOption>
                <BsOption value="shenzhen">深圳市</BsOption>
            </BsSelect>

            <br>
            <br>
            <hr>
            <br>
            <br>
            <h4>分组 </h4>
            <BsSelect v-model="model7" style="width:200px">
                <Option-group label="热门城市">
                    <BsOption v-for="item in cityList1" :value="item.value" :key="item">{{ item.label }}</BsOption>
                </Option-group>
                <Option-group label="其它城市">
                    <BsOption v-for="item in cityList2" :value="item.value" :key="item">{{ item.label }}</BsOption>
                </Option-group>
            </BsSelect>

            <br>
            <br>
            <hr>
            <br>
            <br>

            <h4>可清空</h4>
            <BsSelect v-model="model8" clearable style="width:200px">
                <BsOption v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</BsOption>
            </BsSelect>

            <br>
            <br>
            <hr>
            <br>
            <br>
            <h4>自定义模板</h4>
            <BsSelect v-model="model9" style="width:200px">
                <BsOption value="beijing" label="北京市">
                    <span>北京</span>
                    <span style="float:right;color:#ccc">Beiing</span>
                </BsOption>
                <BsOption value="shanghai" label="上海市">
                    <span>上海</span>
                    <span style="float:right;color:#ccc">ShangHai</span>
                </BsOption>
                <BsOption value="shenzhen" label="深圳市">
                    <span>深圳</span>
                    <span style="float:right;color:#ccc">ShenZhen</span>
                </BsOption>
            </BsSelect>

            <br>
            <br>
            <hr>
            <br>
            <br>
            <h4>多选</h4>
            <BsSelect v-model="model10" multiple style="width:260px">
                <BsOption v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</BsOption>
            </BsSelect>

            <br>
            <br>
            <hr>
            <br>
            <br>
            <h4>可搜索</h4>
            <div class="row m-b-30">
                <div class="col-sm-6" style="padding-right:10px">
                    <BsSelect v-model="model11" filterable>
                        <BsOption v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</BsOption>
                    </BsSelect>
                </div>
                <div class="col-sm-6" >
                    <BsSelect v-model="model12" filterable multiple>
                        <BsOption v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</BsOption>
                    </BsSelect>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                cityList1: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    }
                ],
                cityList2: [
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model7: '',
                model1: '',
                form:"",
                model2: '',
                model3: '',
                model4: '',
                model5: '',
                model6: '',
                model8: '',
                model9: '',
                model10: [],
                model11: '',
                model12: []
            }
        }
    }
</script>