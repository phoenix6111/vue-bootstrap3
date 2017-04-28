<template>
    <div class="icons-demo">
        <div class="page-block">
            <div class="block-header">
                <h2>File</h2>
            </div>

            <div>
                <div class="row">

                    <div class="col-sm-4" data-name="cloud-box" data-code="f217">
                        <p>
                            <Icon type="cloud-box" @click="iconClick"></Icon>
                            <span>cloud-circle</span>
                        </p>
                    </div>

                    <div class="col-sm-4" data-name="cloud-circle" data-code="f218">
                        <p>
                            <Icon type="cloud-circle"></Icon>
                            <span>cloud-circle</span>
                        </p>
                    </div>

                    <div class="col-sm-4" data-name="cloud-done" data-code="f219">
                        <p>
                            <Icon type="cloud-done"></Icon>
                            <span>cloud-done</span>
                        </p>
                    </div>

                    <div class="col-sm-4" data-name="cloud-download" data-code="f21a">
                        <p>
                            <Icon type="cloud-download"></Icon>
                            <span>cloud-download</span>
                        </p>
                    </div>

                    <div class="col-sm-4" data-name="cloud-off" data-code="f21b"><p><i
                            class="zmdi zmdi-cloud-off"></i> <span>cloud-off</span></p></div>

                    <div class="col-sm-4" data-name="cloud-outline-alt" data-code="f21c"><p><i class="zmdi zmdi-cloud-outline-alt"></i> <span>cloud-outline-alt</span></p></div>

                    <div class="col-sm-4" data-name="cloud-outline" data-code="f21d"><p><i class="zmdi zmdi-cloud-outline"></i> <span>cloud-outline</span></p></div>

                    <div class="col-sm-4" data-name="cloud-upload" data-code="f21e"><p><i class="zmdi zmdi-cloud-upload"></i> <span>cloud-upload</span></p></div>

                    <div class="col-sm-4" data-name="cloud" data-code="f21f"><p><i class="zmdi zmdi-cloud"></i> <span>cloud</span></p></div>

                    <div class="col-sm-4" data-name="download" data-code="f220"><p><i class="zmdi zmdi-download"></i> <span>download</span></p></div>

                    <div class="col-sm-4" data-name="file-plus" data-code="f221"><p><i class="zmdi zmdi-file-plus"></i> <span>file-plus</span></p></div>

                    <div class="col-sm-4" data-name="file-text" data-code="f222"><p><i class="zmdi zmdi-file-text"></i> <span>file-text</span></p></div>

                    <div class="col-sm-4" data-name="file" data-code="f223"><p><i class="zmdi zmdi-file"></i> <span>file</span></p></div>

                    <div class="col-sm-4" data-name="folder-outline" data-code="f224"><p><i class="zmdi zmdi-folder-outline"></i> <span>folder-outline</span></p></div>

                    <div class="col-sm-4" data-name="folder-person" data-code="f225"><p><i class="zmdi zmdi-folder-person"></i> <span>folder-person</span></p></div>

                    <div class="col-sm-4" data-name="folder-star-alt" data-code="f226"><p><i class="zmdi zmdi-folder-star-alt"></i> <span>folder-star-alt</span></p></div>

                    <div class="col-sm-4" data-name="folder-star" data-code="f227"><p><i class="zmdi zmdi-folder-star"></i> <span>folder-star</span></p></div>

                    <div class="col-sm-4" data-name="folder" data-code="f228"><p><i class="zmdi zmdi-folder"></i> <span>folder</span></p></div>

                    <div class="col-sm-4" data-name="gif" data-code="f229"><p><i class="zmdi zmdi-gif"></i> <span>gif</span></p></div>

                    <div class="col-sm-4" data-name="upload" data-code="f22a"><p><i class="zmdi zmdi-upload"></i> <span>upload</span></p></div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'Icons',
        methods: {
            iconClick() {
                console.log("icon clicked ");
            }
        }
    }
</script>

<style>
    .icons-demo .page-block:first-child {
        padidng-top:20px;
    }
</style>