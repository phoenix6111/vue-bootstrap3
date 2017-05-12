<template>
    <ul :class="wrapClasses" :style="styles">
        <li
                :title="t('el.page.prev')"
                :class="prevClasses"
                @click="prev">
            <a><i class="zmdi zmdi-chevron-left"></i></a>
        </li>
        <li
                :class="firstPageClasses"
                title="1"
                @click="changePage(1)">
            <a>1</a>
        </li>
        <li     :class="[prefixCls + '-item-jump-prev']"
                :title="t('el.page.prev5')"
                v-if="showPrevMore"
                @click="fastPrev">
            <a><i class="zmdi zmdi-arrow-left"></i></a>
        </li>
        <li
                v-for="pager in pagers"
                :class="[{ active: currentPage === pager},prefixCls + '-item']"
                :title="pager"
                @click="changePage(pager)">
            <a>{{ pager }}</a>
        </li>
        <li
                :class="[prefixCls + '-item-jump-next']"
                :title="t('el.page.next5')"
                v-if="showNextMore"
                @click="fastNext">
            <a><i class="zmdi zmdi-arrow-right"></i></a>
        </li>
        <li
                :title="pageCount"
                :class="lastPageClasses"
                v-if="pageCount > 1"
                @click="changePage(pageCount)">
            <a>{{ currentPageCount }}</a>
        </li>
        <li
                :title="t('el.page.next')"
                :class="nextClasses"
                @click="next">
            <a><i class="zmdi zmdi-chevron-right"></i></a>
        </li>
    </ul>
</template>

<script>
    import Locale from '../../../mixins/locale';
    import { oneOf } from '../../../utils/assist';

    const prefixCls = 'page';

    export default {
        name: 'Pager',

        mixins: [ Locale ],

        props: {
            current: {
                type: Number,
                default: 1
            },
            pageCount: Number,
            size: {
                validator (value) {
                    return oneOf(value, ['sm','lg']);
                }
            },
            simple: {
                type: Boolean,
                default: false
            },
            shape: {
                validator(val) {
                    return oneOf(val,['square','round']);
                },
                default:'round'
            },
            className:String,
            styles:Object
        },

        data() {
            return {
                currentPage: this.current,
                currentPageCount:this.pageCount,
                showPrevMore: false,
                showNextMore: false,
                prefixCls:prefixCls
            };
        },

        watch: {
            current (val) {
                this.currentPage = val;
            },
            pageCount(val) {
                this.currentPageCount = val;
            }
        },

        computed: {
            isSmall () {
                return !!this.size;
            },
            wrapClasses () {
                return [
                    `pagination`,
                    {
                        [`${this.className}`]: !!this.className,
                        [`pagination-${this.size}`]: !!this.size,
                        [`pagination-${this.shape}`]:!!this.shape
                    }
                ];
            },
            prevClasses () {
                return [
                    `${prefixCls}-prev`,
                    {
                        'disabled': this.currentPage === 1
                    }
                ];
            },
            nextClasses () {
                return [
                    `${prefixCls}-next`,
                    {
                        'disabled': this.currentPage === this.currentPageCount
                    }
                ];
            },
            firstPageClasses () {
                return [
                    `${prefixCls}-item`,
                    {
                        'active': this.currentPage === 1
                    }
                ];
            },
            lastPageClasses () {
                return [
                    `${prefixCls}-item`,
                    {
                        'active': this.currentPage === this.currentPageCount
                    }
                ];
            },
            pagers() {
                const pagerCount = 7;

                const currentPage = Number(this.currentPage);
                const pageCount = Number(this.currentPageCount);

                let showPrevMore = false;
                let showNextMore = false;

                if (pageCount > pagerCount) {
                    if (currentPage > pagerCount - 2) {
                        showPrevMore = true;
                    }

                    if (currentPage < pageCount - 2) {
                        showNextMore = true;
                    }
                }

                const array = [];

                if (showPrevMore && !showNextMore) {
                    const startPage = pageCount - (pagerCount - 2);
                    for (let i = startPage; i < pageCount; i++) {
                        array.push(i);
                    }
                } else if (!showPrevMore && showNextMore) {
                    for (let i = 2; i < pagerCount; i++) {
                        array.push(i);
                    }
                } else if (showPrevMore && showNextMore) {
                    const offset = Math.floor(pagerCount / 2) - 1;
                    for (let i = currentPage - offset; i <= currentPage + offset; i++) {
                        array.push(i);
                    }
                } else {
                    for (let i = 2; i < pageCount; i++) {
                        array.push(i);
                    }
                }

                this.showPrevMore = showPrevMore;
                this.showNextMore = showNextMore;

                return array;
            }
        },

        methods: {
            changePage (page) {
                const pageCount = this.currentPageCount;
                /* istanbul ignore if */
                if (!isNaN(page)) {
                    if (page < 1) {
                        page = 1;
                    }

                    if (page > pageCount) {
                        page = pageCount;
                    }
                }


                if (this.currentPage != page) {
                    this.currentPage = page;
                    this.$emit('on-change', page);
                }
            },
            prev () {
                const current = this.currentPage;
                if (current <= 1) {
                    return false;
                }
                this.changePage(current - 1);
            },
            next () {
                const current = this.currentPage;
                if (current >= this.currentPageCount) {
                    return false;
                }
                this.changePage(current + 1);
            },
            fastPrev () {
                const page = this.currentPage - 5;
                if (page > 0) {
                    this.changePage(page);
                } else {
                    this.changePage(1);
                }
            },
            fastNext () {
                const page = this.currentPage + 5;
                if (page > this.currentPageCount) {
                    this.changePage(this.currentPageCount);
                } else {
                    this.changePage(page);
                }
            },

        },
    };
</script>
