<template>
    <div class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
            <li v-for="(item,index) in items" :class="{'active':item.isActive}" @click="selectItem(item)"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
            <slot></slot>
        </div>

        <!-- Controls -->
        <a class="left carousel-control" role="button" data-slide="prev" v-show="controls">
            <span class="zmdi zmdi-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" role="button" data-slide="next" v-show="controls">
            <span class="zmdi zmdi-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</template>

<script>
    export default {
        props: {
            indicators: {
                type: Boolean,
                default: true
            },
            controls: {
                type: Boolean,
                default: true
            },
            interval: {
                type:Number,
                default: 3000
            }
        },
        data() {
            return {
                items: []
            }
        },
        mounted() {
            this.items = this.$children;
        },
        methods: {
            selectItem(selectedItem) {
                this.items.forEach(item => {
                    item.isActive = (selectedItem.name==item.name);
                });
            }
        }
    }

</script>