<template lang="html">
    <div class="card m-t-30">
        <div class="card-header">
            <h2>Form 表单
                <small>具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。</small>
            </h2>
        </div>

        <div class="card-body card-padding">
            <h4>
                典型表单
                <small class="m-l-20">包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。</small>
            </h4>
            <br>
            <bs-form ref="form" :model="form" label-width="80px">
                <form-item label="活动名称">
                    <bs-input v-model="form.name"></bs-input>
                </form-item>
                <form-item label="活动区域">
                    <bs-select v-model="form.region" placeholder="请选择活动区域">
                        <bs-option label="区域一" value="shanghai"></bs-option>
                        <bs-option label="区域二" value="beijing"></bs-option>
                    </bs-select>
                </form-item>


                <form-item label="即时配送">
                    <i-switch on-text="" off-text="" v-model="form.delivery"></i-switch>
                </form-item>
                <form-item label="活动性质">
                    <checkbox-group v-model="form.type">
                        <Checkbox label="美食/餐厅线上活动" name="type"></Checkbox>
                        <Checkbox label="地推活动" name="type"></Checkbox>
                        <Checkbox label="线下主题活动" name="type"></Checkbox>
                        <Checkbox label="单纯品牌曝光" name="type"></Checkbox>
                    </checkbox-group>
                </form-item>
                <form-item label="特殊资源">
                    <radio-group v-model="form.resource">
                        <radio label="线上品牌商赞助"></radio>
                        <radio label="线下场地免费"></radio>
                    </radio-group>
                </form-item>
                <form-item label="活动形式">
                    <bs-input type="textarea" v-model="form.desc"></bs-input>
                </form-item>
                <form-item>
                    <i-button type="primary" @click="onSubmit">立即创建</i-button>
                    <i-button>取消</i-button>
                </form-item>
            </bs-form>

            <br><br>
            <hr>
            <br><br>

            <h4 class="m-b-10">行内表单</h4>
            <bs-form :inline="true" :model="formInline" class="demo-form-inline">
                <form-item label="审批人">
                    <bs-input v-model="formInline.user" placeholder="审批人"></bs-input>
                </form-item>
                <form-item label="活动区域">
                    <bs-select v-model="formInline.region" placeholder="活动区域">
                        <bs-option label="区域一" value="shanghai"></bs-option>
                        <bs-option label="区域二" value="beijing"></bs-option>
                    </bs-select>
                </form-item>
                <form-item>
                    <i-button type="primary" @click="onSubmit">查询</i-button>
                </form-item>
            </bs-form>

            <br><br>
            <hr>
            <br><br>

            <h4 class="m-b-10">对齐方式</h4>
            <radio-group v-model="labelPosition" type="button">
                <radio label="left">左对齐</radio>
                <radio label="right">右对齐</radio>
                <radio label="top">顶部对齐</radio>
            </radio-group>
            <div style="margin: 20px;"></div>
            <bs-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                <form-item label="名称">
                    <bs-input v-model="formLabelAlign.name"></bs-input>
                </form-item>
                <form-item label="活动区域">
                    <bs-input v-model="formLabelAlign.region"></bs-input>
                </form-item>
                <form-item label="活动形式">
                    <bs-input v-model="formLabelAlign.type"></bs-input>
                </form-item>
            </bs-form>

            <br><br>
            <hr>
            <br><br>

            <h4 class="m-b-10">表单验证</h4>

            <bs-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <form-item label="活动名称" prop="name">
                    <bs-input v-model="ruleForm.name"></bs-input>
                </form-item>
                <form-item label="活动区域" prop="region">
                    <bs-select v-model="ruleForm.region" placeholder="请选择活动区域">
                        <bs-option label="区域一" value="shanghai"></bs-option>
                        <bs-option label="区域二" value="beijing"></bs-option>
                    </bs-select>
                </form-item>

                <form-item label="即时配送" prop="delivery">
                    <i-switch on-text="" off-text v-model="ruleForm.delivery"></i-switch>
                </form-item>
                <form-item label="活动性质" prop="type">
                    <checkbox-group v-model="ruleForm.type">
                        <checkbox label="美食/餐厅线上活动" name="type"></checkbox>
                        <checkbox label="地推活动" name="type"></checkbox>
                        <checkbox label="线下主题活动" name="type"></checkbox>
                        <checkbox label="单纯品牌曝光" name="type"></checkbox>
                    </checkbox-group>
                </form-item>
                <form-item label="特殊资源" prop="resource">
                    <radio-group v-model="ruleForm.resource">
                        <radio label="线上品牌商赞助"></radio>
                        <radio label="线下场地免费"></radio>
                    </radio-group>
                </form-item>
                <form-item label="活动形式" prop="desc">
                    <bs-input type="textarea" v-model="ruleForm.desc"></bs-input>
                </form-item>
                <form-item>
                    <i-button type="primary" @click="submitForm('ruleForm')">立即创建</i-button>
                    <i-button @click="resetForm('ruleForm')">重置</i-button>
                </form-item>
            </bs-form>


            <br><br>
            <hr>
            <br><br>

            <h4 class="m-b-10">自定义校验规则</h4>

            <bs-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                <form-item label="密码" prop="pass">
                    <bs-input type="password" v-model="ruleForm2.pass" auto-complete="off"></bs-input>
                </form-item>
                <form-item label="确认密码" prop="checkPass">
                    <bs-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></bs-input>
                </form-item>
                <form-item label="年龄" prop="age">
                    <bs-input v-model.number="ruleForm2.age"></bs-input>
                </form-item>
                <form-item>
                    <i-button type="primary" @click="submitForm('ruleForm2')">提交</i-button>
                    <i-button @click="resetForm('ruleForm2')">重置</i-button>
                </form-item>
            </bs-form>


            <br><br>
            <hr>
            <br><br>

            <h4 class="m-b-10">数字类型验证</h4>

            <bs-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
                <form-item
                        label="年龄"
                        prop="age"
                        :rules="[
                          { required: true, message: '年龄不能为空'},
                          { type: 'number', message: '年龄必须为数字值'}
                        ]"
                >
                    <bs-input type="number" v-model.number="numberValidateForm.age" auto-complete="off"></bs-input>
                </form-item>
                <form-item>
                    <i-button type="primary" @click="submitForm('numberValidateForm')">提交</i-button>
                    <i-button @click="resetForm('numberValidateForm')">重置</i-button>
                </form-item>
            </bs-form>

        </div>
    </div>
</template>
<script>
    export default {
        data() {

            var checkAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('年龄不能为空'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('请输入数字值'));
                    } else {
                        if (value < 18) {
                            callback(new Error('必须年满18岁'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm2.checkPass !== '') {
                        this.$refs.ruleForm2.validateField('checkPass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm2.pass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };

            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                formInline: {
                    user: '',
                    region: ''
                },
                labelPosition: 'right',
                formLabelAlign: {
                    name: '',
                    region: '',
                    type: ''
                },

                ruleForm: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入活动名称', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    region: [
                        { required: true, message: '请选择活动区域', trigger: 'change' }
                    ],
                    date1: [
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ],
                    date2: [
                        { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
                    ],
                    type: [
                        { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                    ],
                    resource: [
                        { required: true, message: '请选择活动资源', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: '请填写活动形式', trigger: 'blur' }
                    ]
                },
                ruleForm2: {
                    pass: '',
                    checkPass: '',
                    age: ''
                },
                rules2: {
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    checkPass: [
                        { validator: validatePass2, trigger: 'blur' }
                    ],
                    age: [
                        { validator: checkAge, trigger: 'blur' }
                    ]
                },
                numberValidateForm: {
                    age: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },

            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

