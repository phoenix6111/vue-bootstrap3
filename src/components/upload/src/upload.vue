<template>
    <div>

        <div class="dropzone dz-clickable" ref="dropzoneContainer" v-if="type === 'drag'">
            <div class="dz-default dz-message"><span>{{tip}}</span></div>

            <!--<UploadList :files="fileList" @on-file-remove="handleFileRemove"></UploadList>-->
            <template v-if="showUploadlist && showPreview">
                <div class="dz-preview" :class="file.classes" v-for="file in fileList">
                    <div class="dz-image">
                        <img :alt="file.name"
                             :src="file.thumbnail">
                    </div>
                    <div class="dz-details">
                        <div class="dz-size"><span v-html="file.formatedSize"></span></div>
                        <div class="dz-filename"><span>{{file.name}}</span></div>
                    </div>
                    <div class="dz-progress"><span class="dz-upload"
                                                   :style="{width:parsePercentage(file.percentage)+'%'}"></span>
                    </div>
                    <div class="dz-error-message"><span>{{file.errorMsg}}</span></div>
                    <div class="dz-success-mark">
                        <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1"
                             xmlns="http://www.w3.org/2000/svg"
                             xmlns:xlink="http://www.w3.org/1999/xlink"
                             xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"><title>Check</title>
                            <defs></defs>
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none"
                               fill-rule="evenodd" sketch:type="MSPage">
                                <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z"
                                      id="Oval-2" stroke-opacity="0.198794158" stroke="#747474"
                                      fill-opacity="0.816519475" fill="#FFFFFF"
                                      sketch:type="MSShapeGroup"></path>
                            </g>
                        </svg>
                    </div>
                    <div class="dz-error-mark">
                        <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1"
                             xmlns="http://www.w3.org/2000/svg"
                             xmlns:xlink="http://www.w3.org/1999/xlink"
                             xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"><title>Error</title>
                            <defs></defs>
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none"
                               fill-rule="evenodd" sketch:type="MSPage">
                                <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474"
                                   stroke-opacity="0.198794158" fill="#FFFFFF"
                                   fill-opacity="0.816519475">
                                    <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z"
                                          id="Oval-2" sketch:type="MSShapeGroup"></path>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <a class="dz-remove" href="javascript:undefined;"
                       v-if="showRemoveLink" @click="handleFileRemove(file)">
                        Remove file
                    </a>
                </div>
            </template>
        </div>

        <div v-if="type === 'select'">
            <button class="btn btn-primary btn-sm" ref="selectBtn">点击上传</button>
            <br>
            <small class="c-gray f-12 m-t-5">{{tip}}</small>
        </div>

        <UploadList v-if="showUploadlist && !showPreview"
                    :files="fileList"
                    @on-file-remove="handleFileRemove"></UploadList>

    </div>
</template>

<script>
    import UploadList from './upload-list';
    import {oneOf} from '../../../utils/assist';

    export default {
        name: 'Upload',
        components: {UploadList},
        props: {
            uploadSelector: String,//dropzone selector
            action: {//必选参数, 上传的地址
                type: String,
                required: true
            },
            tip: {
                type:String,
                default:'Drop files here to upload'
            },
            clickable: {//点击选择的css选择器
                type:String
            },
            showPreview: {//显示预览图
                type:Boolean,
                default:true
            },
            showUploadlist: {//是否显示列表，如果不显示列表，可以自己定制
                type:Boolean,
                default:true
            },
            headers: {//可选参数, 设置上传的请求头部
                type: Object,
                default () {
                    return {};
                }
            },
            multiple: {//可选参数, 是否支持多选文件
                type: Boolean,
                default: false
            },
            data: {//可选参数, 上传时附带的额外参数
                type: Object
            },
            paramName: {//可选参数, 上传的文件字段名
                type: String,
                default: 'file'
            },
            type: {//上传控件的类型，可选值为 select（点击选择），drag（支持拖拽）
                type: String,
                validator (value) {
                    return oneOf(value, ['select', 'drag']);
                },
                default: 'drag'
            },
            autoUpload: {//是否在选取文件后立即进行上传
                type: Boolean,
                default: true,
            },
            parallelUploads: {//有多少文件将上载到并行处理
                type: Number,
                default: 4
            },
            showUploadList: {//是否显示已上传文件列表
                type: Boolean,
                default: true
            },
            acceptedFiles: {//accept实现检查文件的 mime 类型或扩展名， 使用逗号分隔文件类型或者扩展名列表. 例如 Eg.: image/*,application/pdf,.psd.
                // 如果 Dropzone 是 clickable[译者注：即配置项clickable是true], 本项将被用作 accept 的参数，就和在 隐藏的 file input 一样.
                type: String
            },
            accept: {//使用一个 file 和一个done 函数 作为参数的函数. 如果不带参数调用 done 函数时，
                // 将处理该文件. 如果你显示一条错误信息，该文件将不会被上传. 如果文件太大或不匹配的 mime 类型，将不调用此函数.
                type: Function
            },
            maxFilesize: {//文件大小限制，单位 kb
                type: Number
            },
            maxFiles: {//设置 Dropzone 最多可以处理多少文件. 如果超过这个限制, maxfilesexceeded 事件将被调用
                type: Number,
            },
            filesizeBase: {//设置在计算文件大小时使用 1000 还是使用 1024作为基本单位,默认值为 1000.1000 是正确的,
                // 因为 1000 Bytes 等于 1 Kilobyte, 1024 Bytes 等于 1 Kibibyte. 如果你不在乎有效性，您可以更改这个选项为 1024 .
                type: Number,
                default: 1024
            },
            createImageThumbnails: {//是否生成缩略图，如果为true,则会为图片自动生成一个base64的缩略图
                type: Boolean,
                default: true
            },
            maxThumbnailFilesize: {//缩略图最大文件大小，超出这里的设置, 将不会生成缩略图.
                type: Number
            },
            thumbnailWidth: {//默认 null, 设置缩略图的缩略比
                type: Number,
                default: 120
            },
            thumbnailHeight: {//就像 thumbnailWidth一样. 如果为空, 将不能重置尺寸.
                type: Number,
                default: 120
            },
            beforeUpload: Function,//上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传
            onProgress: {//文件上传时的钩子，返回字段为 event, file, fileList
                type: Function,
                default () {
                    return {};
                }
            },
            onSuccess: {//文件上传成功时的钩子，返回字段为 response, file, fileList
                type: Function,
                default () {
                    return {};
                }
            },
            onError: {//文件上传失败时的钩子，返回字段为 error, file, fileList
                type: Function,
                default () {
                    return {};
                }
            },
            onRemove: {//文件列表移除文件时的钩子，返回字段为 file, fileList
                type: Function,
                default () {
                    return {};
                }
            },
            onPreview: {//点击已上传的文件链接时的钩子，返回字段为 file， 可以通过 file.response 拿到服务端返回数据
                type: Function,
                default () {
                    return {};
                }
            },
            onExceededSize: {//文件超出指定大小限制时的钩子，返回字段为 file, fileList
                type: Function,
                default () {
                    return {};
                }
            },
            defaultFileList: {//默认已上传的文件列表
                type: Array,
                default() {
                    return [];
                }
            },
            showRemoveLink: {//是否添加删除按钮
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                fileList: [],
                tempIndex: 1,
                dropzoneNode:null,
            }
        },
        computed: {

        },
        methods: {
            handleFileRemove(file) {
                let dropzoneFile;
                this.dropzone.files.every(item => {
                    dropzoneFile = file.uid === item.uid ? item : null;
                    return !dropzoneFile;
                });

                this.dropzone.removeFile(dropzoneFile);
            },
            getFile (file) {
                const fileList = this.fileList;
                let target;
                fileList.every(item => {
                    target = file.uid === item.uid ? item : null;
                    return !target;
                });
                return target;
            },
            dropzoneReset() {
                if(this.type === 'drag' && this.showPreview) {
                    this.dropzoneNode.classList.remove('dz-started');
                }
            },
            dropzoneAddedFile(file) {
                file.uid = Date.now() + this.tempIndex++;
                const _file = {
                    status: file.status,
                    name: file.name,
                    size: file.size,
                    formatedSize:this.dropzone.filesize(file.size),
                    percentage: 0,
                    uid: file.uid,
                    showProgress: true,
                    classes: []
                };

                this.fileList.push(_file);

                if(this.type === 'drag' && this.showPreview) {
                    this.dropzoneNode.classList.add('dz-started');
                }
            },
            dropzoneRemovedFile(file) {
                const _file = this.getFile(file);
                const fileList = this.fileList;
                fileList.splice(fileList.indexOf(_file), 1);

                this.dropzone._updateMaxFilesReachedClass();
            },
            dropzoneThumbnail(file, dataUrl) {
                const _file = this.getFile(file);
                _file.thumbnail = dataUrl;
                let index = _file.classes.indexOf('dz-file-preview');
                if(index >= 0) {
                    _file.classes.splice(index,1);
                }
                _file.classes.push("dz-image-preview");
            },
            dropzoneError(file, message) {
                const _file = this.getFile(file);
                _file.classes.push("dz-error");
                if (typeof message !== "string" && message.error) {
                    message = message.error;
                }

                _file.errorMsg = message;
                _file.status = file.status;
            },
            dropzoneProcessing(file) {
                const _file = this.getFile(file);
                _file.classes.push("dz-processing");
                _file.status = file.status;
            },
            dropzoneUploadProgress(file, progress, bytesSent) {
                const _file = this.getFile(file);
                _file.percentage = progress || 0;
            },
            dropzoneTotalUploadProgress(totalUploadProgress, totalBytes, totalBytesSent) {

            },
            dropzoneSuccess(file) {
                const _file = this.getFile(file);
                _file.classes.push("dz-success");
                _file.status = file.status;
            },
            dropzoneComplete(file) {
                const _file = this.getFile(file);
                _file.classes.push("dz-complete");
            },
            parsePercentage (val) {
                return parseInt(val, 10);
            },
            fileSize(size) {
                var cutoff, i, selectedSize, selectedUnit, unit, units, _i, _len;
                selectedSize = 0;
                selectedUnit = "b";
                if (size > 0) {
                    units = ['TB', 'GB', 'MB', 'KB', 'b'];
                    for (i = _i = 0, _len = units.length; _i < _len; i = ++_i) {
                        unit = units[i];
                        cutoff = Math.pow(this.filesizeBase, 4 - i) / 10;
                        if (size >= cutoff) {
                            selectedSize = size / Math.pow(this.filesizeBase, 4 - i);
                            selectedUnit = unit;
                            break;
                        }
                    }
                    selectedSize = Math.round(10 * selectedSize) / 10;
                }
                return selectedSize + " " + selectedUnit;
            }
        },
        mounted() {

            this.$nextTick(() => {
                var clickable;

                if(this.type === 'select') {
                    this.dropzoneNode = this.$el;
                    clickable = this.clickable || this.$refs.selectBtn;
                } else {
                    console.log(this.$refs);
                    this.dropzoneNode = this.$refs.dropzoneContainer;
                    clickable = this.dropzoneNode;
                }

                var Dropzone = require('dropzone');
                Dropzone.autoDiscover = false;

                this.dropzone = new Dropzone(this.dropzoneNode, {
                    clickable: clickable,
                    url: this.action,
                    paramName: this.paramName,
                    thumbnailWidth: this.thumbnailWidth,
                    thumbnailHeight: this.thumbnailHeight,
                    maxFiles: this.maxFiles,
                    maxFilesize: this.maxFilesize,
                    showRemoveLink: this.showRemoveLink,
                    acceptedFiles: this.acceptedFiles,
                    autoProcessQueue: this.autoUpload,
                    headers: this.headers,
                    filesizeBase: this.filesizeBase,

                    reset: this.dropzoneReset,
                    addedfile: this.dropzoneAddedFile,
                    removedfile: this.dropzoneRemovedFile,
                    thumbnail: this.dropzoneThumbnail,
                    error: this.dropzoneError,
                    processing: this.dropzoneProcessing,
                    uploadprogress: this.dropzoneUploadProgress,
                    totaluploadprogress: this.dropzoneTotalUploadProgress,
                    success: this.dropzoneSuccess,
                    complete: this.dropzoneComplete
                });
            });

        },
        beforeDestroy() {
            if (this.dropzone) {
                /*var files = this.dropzone.getActiveFiles();

                 if (files.length > 0) {
                 // Well, seems like we still have stuff uploading.
                 // This is dirty, but let's keep trying to get rid
                 // of the dropzone until we're done here.
                 this.queueDestroy = true;

                 var destroyInterval = window.setInterval(() => {
                 if (this.queueDestroy = false) {
                 return window.clearInterval(destroyInterval);
                 }

                 if (this.dropzone.getActiveFiles().length === 0) {
                 this.dropzone = this.destroy(this.dropzone);
                 return window.clearInterval(destroyInterval);
                 }
                 }, 500);
                 } else {
                 this.dropzone = this.destroy(this.dropzone);
                 }*/
                this.dropzone.destroy();
            }
        },
        destroy(dropzone) {
            dropzone.off();
            return dropzone.destroy();
        }
    }

</script>