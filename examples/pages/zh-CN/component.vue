<template>
    <div class="container-fluid page-container">
        <div class="row">
            <div class="col-md-2">
                <side-nav :datas="datas[lang]" :base="`/${lang}/component`" :default-active="$route.path"></side-nav>
            </div>
            <div class="col-md-10 main-container">
                <router-view keep-alive class="markdown"></router-view>
                <page-footer-nav></page-footer-nav>
            </div>
        </div>
    </div>
</template>

<script>
    import datas from '../../router/nav.config.json';

    export default {
        name: 'App',
        data(){
            return {
                datas,
                lang: this.$route.meta.lang,
            }
        },
        computed: {
            activePath() {
                return this.$route.path?this.$route.path:`/${this.lang}/component/affixs`;
            }
        }

    }
</script>

<style>
    .page-container.container-fluid {
        width:92%;
    }
</style>