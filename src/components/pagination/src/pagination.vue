<template>
    <div class="pagination-wrap">
        <span class="pagination-total" v-if="showTotal">
            <slot>{{t('el.pagination.total', {total: total})}}</slot>
        </span>
        <span class="pagination-sizes" v-if="showSizer">
            <bs-select v-model="currentPageSize" :size="size" @on-change="changeSize" style="width:90px">
                <bs-option v-for="item in pageSizeOpts"
                           :key="item"
                           :value="item"
                           style="text-align:center;">
                    {{ item }} {{ t('el.page.page') }}
                </bs-option>
            </bs-select>
        </span>
        <Pager ref="pagerRef"
               :current="currentPage"
               :page-count="pageCount"
               :size="size"
               :shape="shape"
               :class-name="className"
               :styles="styles"
               :simple="simple"
               @on-change="changePage"></Pager>
        <span class="page-options-elevator" v-if="showElevator" >
            {{ t('el.page.goto') }}
            <input type="text"
                   ref="pageInput"
                   :value="currentPage"
                   :min="1"
                   :max="pageCount"
                   @keyup.enter="inputChangePage"
                   @blur="inputChangePage"
                   @change="inputChangePage">
            {{ t('el.page.p') }}
        </span>
    </div>
</template>

<script>
    import {oneOf} from '../../../utils/assist';
    import Pager from './pager';
    import {BsSelect,BsOption} from '../../select';
    import Locale from '../../../mixins/locale';

    function isValueNumber (value) {
        return (/^[1-9][0-9]*$/).test(value + '');
    }

    export default {
        name:'Pagination',
        mixins: [ Locale ],
        components: {Pager,BsSelect,BsOption},

        props: {
            current: {
                type: Number,
                default: 1
            },
            pageSize: {
                type: Number,
                default: 10
            },
            size: {
                validator (value) {
                    return oneOf(value, ['sm','lg']);
                }
            },
            total: Number,
            pageSizeOpts: {
                type: Array,
                default() {
                    return [10, 20, 30, 40, 50, 100];
                }
            },
            simple: {
                type: Boolean,
                default: false
            },
            showTotal: {
                type: Boolean,
                default: false
            },
            showElevator: {
                type: Boolean,
                default: false
            },
            showSizer: {
                type: Boolean,
                default: false
            },
            className: {
                type: String
            },
            styles: {
                type: Object
            },
            shape: {
                validator(val) {
                    return oneOf(val,['square','round']);
                },
                default:'round'
            }
        },
        data() {
            return {
                currentPageSize: this.pageSize,
                currentPage:this.current
            }
        },
        watch: {
            current (val) {
                this.currentPage = val;
            },
            currentPage(value) {
                this.$nextTick(_=> {
//                    this.$refs.pageInput.currentPage = value;
                    this.$refs.pagerRef.currentPage = value;
                });
            },
            pageSize (val) {
                this.currentPageSize = val;
            }
        },
        computed: {
            pageCount () {
                const pageCount = Math.ceil(this.total / this.currentPageSize);
                return (pageCount === 0) ? 1 : pageCount;
            }
        },
        methods: {
            changeSize (pageSize) {
                this.currentPageSize = pageSize;
                this.changePage(1);
                this.$emit('on-page-size-change', this.currentPageSize);
            },
            changePage(page) {
                if (this.currentPage != page) {
                    this.currentPage = page;
                    this.$emit('on-page-change', this.currentPage);
                }
            },
            inputChangePage (event) {
                console.log("input change page");
                let val = event.target.value.trim();
                let page = 0;

                if (isValueNumber(val)) {
                    val = Number(val);
                    if (val != this.currentPage) {
                        const pageCount = this.pageCount;

                        if (val > pageCount) {
                            page = pageCount;
                        } else {
                            page = val;
                        }
                    }
                } else {
                    page = 1;
                }

                if (page) {
                    this.changePage(page);
                    event.target.value = page;
                }
            },
            keyDown (e) {
                const key = e.keyCode;
                const condition = (key >= 48 && key <= 57) || key == 8 || key == 37 || key == 39;

                if (!condition) {
                    e.preventDefault();
                }
            },
            keyUp (e) {
                const key = e.keyCode;
                const val = parseInt(e.target.value);

                if (key === 38) {
                    this.prev();
                } else if (key === 40) {
                    this.next();
                } else if (key == 13) {
                    let page = 1;

                    if (val > this.pageCount) {
                        page = this.pageCount;
                    } else if (val <= 0) {
                        page = 1;
                    } else {
                        page = val;
                    }

                    e.target.value = page;
                    this.changePage(page);
                }
            }
        }
    }
</script>

