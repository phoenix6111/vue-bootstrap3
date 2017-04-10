<template>
    <!--<div class="upload-list dz-clickable">
        <div :class="itemClasses(file)" v-for="file in files">
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
    </div>-->
    <ul class="upload-list">
        <li v-for="file in files"
            class="upload-list-item"
            @click="handleClick(file)">
            <span @click="handlePreview(file)">
                <icon :type="format(file)"></icon> {{file.name}}
            </span>
            <Icon type="close"
                  class="upload-list-remove"
                  @click.native="handleRemove(file)"></Icon>

            <transition name="fade">
                <Progress
                        v-if="file.showProgress"
                        :stroke-width="2"
                        :percent="parsePercentage(file.percentage)"
                        :status="status(file)"
                        :auto-status="false"></Progress>
            </transition>
        </li>
    </ul>
</template>

<script>
    import Icon from '../../icon/src/icon.vue';
    import Progress from '../../progress/src/progress.vue';

    export default {
        name:'UploadList',
        props: {
            files: {
                type:Array,
                default:[]
            }
        },
        methods: {
            itemClasses(file) {
                return [
                    'upload-list-item',
                    {
                        [`${prefixCls}-list-item-finish`]: file.status === 'success'
                    }
                ]
            },
            status(file) {
                let status;
                if(file.status === 'success') {
                    status = 'success';
                } else if(file.status === 'error') {
                    status = 'error';
                } else {
                    status = 'normal';
                }
                return status;
            },
            handleRemove(file) {
                this.$emit("on-file-remove",file);
            },
            handleClick(file) {
                this.$emit("on-file-click",file);
            },
            handlePreview(file) {
                this.$emit("on-file-preview",file);
            },
            parsePercentage (val) {
                return parseInt(val, 10);
            },
            format (file) {
                const format = file.name.split('.').pop().toLocaleLowerCase() || '';
                let type = 'document';

                if (['gif','jpg','jpeg','png','bmp','webp'].indexOf(format) > -1) {
                    type = 'image';
                } else if (['mp4','m3u8','rmvb','avi','swf','3gp','mkv','flv'].indexOf(format) > -1) {
                    type = 'movie';
                } else if (['mp3','wav','wma','ogg','aac','flac'].indexOf(format) > -1) {
                    type = 'collection-music';
                } else if (['doc','txt','docx','pages','epub','pdf'].indexOf(format) > -1) {
                    type = 'file-text';
                } else if (['numbers','csv','xls','xlsx'].indexOf(format) > -1) {
                    type = 'equalizer';
                } else if (['keynote','ppt','pptx'].indexOf(format) > -1) {
                    type = 'satellite';
                } else {
                    type = 'file'
                }

                return type;
            },
        }

    }

</script>

<style>
    .upload-list-item>span {
        cursor: pointer;
        transition: color .2s ease-in-out;
    }

    .upload-list-item:hover>span {
        color: #39f;
    }

    .upload-list-remove {
        opacity: 0;
        font-size: 16px;
        cursor: pointer;
        float: right;
        margin-right: 4px;
        color: #999;
        transition: all .2s ease;
    }

    .upload-list-item {
        padding: 4px;
        color: #657180;
        border-radius: 4px;
        transition: background-color .2s ease-in-out;
        overflow: hidden;
        position: relative;
    }

    .upload-list-item:hover {
        background: #f3f3f3;
    }

    .upload-list-item>span i {
        display: inline-block;
        width: 12px;
        height: 12px;
        color: #657180;
        text-align: center;
    }

    .upload-list-item:hover .upload-list-remove {
        opacity: 1;
    }

    .upload-list {
        margin-top: 10px;
        padding-left: 0;
    }
</style>