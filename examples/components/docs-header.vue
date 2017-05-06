<template>
    <nav class="navbar navbar-primary">
        <div class="container">
            <div class="navbar-head">
                <button type="button"
                        class="navbar-toggle collapsed">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Vue Bootstrap3</a>
            </div>

            <div class="collapse navbar-collapse">
                <IMenu class="navbar-nav navbar-right" mode="horizontal">
                    <IMenuItem title="指南" path="/references"></IMenuItem>
                    <IMenuItem title="组件" path="/components"></IMenuItem>
                    <IMenuItem title="Github" path="/github"></IMenuItem>
                </IMenu>
            </div>
        </div>
    </nav>
</template>
<script>
    export default {
        name:'DocsHeader'
    }
</script>

<style>

    #app .navbar-primary {
        height: 80px;
    }
    @media (min-width: 768px) {
        #app  .navbar-nav > li > a,
        #app .navbar-brand{
            padding-top: 30px;
            padding-bottom: 30px;
            font-size: 16px;
            font-weight: 500;
        }
    }
</style>