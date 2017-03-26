<template lang="html">
    <div class="card m-t-30">
        <div class="card-header">
            <h2>Checkbox 多选框
                <small>一组备选项中进行多选</small>
            </h2>
        </div>

        <div class="card-body card-padding">

            <div>
                <Checkbox v-model="checked">备选项</Checkbox>
            </div>

            <br><br>
            <hr>
            <br><br>

            <div>
                <Checkbox v-model="checked1" disabled>备选项1</Checkbox>
                <Checkbox v-model="checked2" disabled>备选项</Checkbox>
            </div>

            <br><br>
            <hr>
            <br><br>

            <checkbox-group v-model="checkList">
                <Checkbox label="复选框 A"></Checkbox>
                <Checkbox label="复选框 B"></Checkbox>
                <Checkbox label="复选框 C"></Checkbox>
                <Checkbox label="禁用" disabled></Checkbox>
                <Checkbox label="选中且禁用" disabled></Checkbox>
            </checkbox-group>

            <br><br>
            <hr>
            <br><br>

            <Checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</Checkbox>
            <div style="margin: 15px 0;"></div>
            <!--<checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                <Checkbox v-for="(city,key) in cities" :label="city">{{city}}</Checkbox>
            </checkbox-group>-->
        </div>
    </div>
</template>
<script>
    const cityOptions = ['上海', '北京', '广州', '深圳'];

    export default {
        name:'Checkboxs',
        data() {
            return {
                checked: true,
                checked1: false,
                checked2: true,
                checkList: ['选中且禁用','复选框 A'],

                checkAll: true,
                checkedCities: ['上海', '北京'],
                cities: cityOptions,
                isIndeterminate: true
            };
        },
        methods: {
            handleCheckAllChange(event) {
                this.checkedCities = event.target.checked ? cityOptions : [];
                this.isIndeterminate = false;
            },
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.cities.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
            }
        }
    }
</script>