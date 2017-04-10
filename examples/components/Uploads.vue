<template lang="html">
    <div class="card m-t-30">
        <div class="card-header">
            <h2>Upload 文件上传
                <small>文件选择上传和拖拽上传控件。</small>
            </h2>
        </div>

        <div class="card-body card-padding">
        <h4>拖拽上传加文件预览</h4>
        <Upload :action="action" :max-files="1"></Upload>

            <br><br>
            <hr>
            <br><br>
        <h4>拖拽上传加文件列表</h4>
        <Upload :action="action" :show-preview="false"></Upload>

        <br><br>
        <hr>
        <br><br>
        <h4>按钮选择上传加文件列表</h4>
        <Upload :action="action" :show-preview="false" type="select" tip="只能上传jpg/png文件，且不超过500kb"></Upload>

        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                action:'http://localhost:8080'
            }
        }
    }
</script>