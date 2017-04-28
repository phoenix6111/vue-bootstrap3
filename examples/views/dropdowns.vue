<template>
    <div class="dropdowns-demo">
        <div class="block-header">
            <h2>
                Dropdown 下拉菜单
                <small>
                    展示一组折叠的下拉菜单。
                </small>
            </h2>
        </div>

        <div>
            <div class="dropdown-btn-demo">

                <Dropdown>
                    <a href="javascript:void(0)">
                        下拉菜单
                        <Icon type="chevron-down"></Icon>
                    </a>
                    <Dropdown-menu slot="list">
                        <Dropdown-item>驴打滚</Dropdown-item>
                        <Dropdown-item>炸酱面</Dropdown-item>
                        <Dropdown-item disabled>豆汁儿</Dropdown-item>
                        <Dropdown-item>冰糖葫芦</Dropdown-item>
                        <Dropdown-item divided>北京烤鸭</Dropdown-item>
                    </Dropdown-menu>
                </Dropdown>
                <Dropdown style="margin-left: 20px">
                    <i-button type="primary">
                        下拉菜单
                        <Icon type="chevron-down"></Icon>
                    </i-button>
                    <Dropdown-menu slot="list">
                        <Dropdown-item>驴打滚</Dropdown-item>
                        <Dropdown-item>炸酱面</Dropdown-item>
                        <Dropdown-item disabled>豆汁儿</Dropdown-item>
                        <Dropdown-item>冰糖葫芦</Dropdown-item>
                        <Dropdown-item divided>北京烤鸭</Dropdown-item>
                    </Dropdown-menu>
                </Dropdown>

            </div>

            <br><br>
            <hr>
            <br><br>

            <div class="dropdown-btn-demo">
                <Dropdown>
                    <a href="javascript:void(0)">
                        hover 触发
                        <Icon type="chevron-down"></Icon>
                    </a>
                    <Dropdown-menu slot="list">
                        <Dropdown-item>驴打滚</Dropdown-item>
                        <Dropdown-item>炸酱面</Dropdown-item>
                        <Dropdown-item>豆汁儿</Dropdown-item>
                        <Dropdown-item>冰糖葫芦</Dropdown-item>
                        <Dropdown-item>北京烤鸭</Dropdown-item>
                    </Dropdown-menu>
                </Dropdown>
                <Dropdown trigger="click" style="margin-left: 20px">
                    <a href="javascript:void(0)">
                        click 触发
                        <Icon type="chevron-down"></Icon>
                    </a>
                    <Dropdown-menu slot="list">
                        <Dropdown-item>驴打滚</Dropdown-item>
                        <Dropdown-item>炸酱面</Dropdown-item>
                        <Dropdown-item>豆汁儿</Dropdown-item>
                        <Dropdown-item>冰糖葫芦</Dropdown-item>
                        <Dropdown-item>北京烤鸭</Dropdown-item>
                    </Dropdown-menu>
                </Dropdown>
            </div>

            <br><br>
            <hr>
            <br><br>

            <div class="dropdown-btn-demo">
                <Dropdown align="left">
                    <a href="javascript:void(0)">
                        菜单(左)
                        <Icon type="chevron-down"></Icon>
                    </a>
                    <Dropdown-menu slot="list" align="left">
                        <Dropdown-item>驴打滚</Dropdown-item>
                        <Dropdown-item>炸酱面</Dropdown-item>
                        <Dropdown-item>豆汁儿</Dropdown-item>
                        <Dropdown-item>冰糖葫芦</Dropdown-item>
                        <Dropdown-item>北京烤鸭</Dropdown-item>
                    </Dropdown-menu>
                </Dropdown>
                <Dropdown style="margin-left: 20px">
                    <a href="javascript:void(0)">
                        菜单(居中)
                        <Icon type="chevron-down"></Icon>
                    </a>
                    <Dropdown-menu slot="list">
                        <Dropdown-item>驴打滚</Dropdown-item>
                        <Dropdown-item>炸酱面</Dropdown-item>
                        <Dropdown-item>豆汁儿</Dropdown-item>
                        <Dropdown-item>冰糖葫芦</Dropdown-item>
                        <Dropdown-item>北京烤鸭</Dropdown-item>
                    </Dropdown-menu>
                </Dropdown>
                <Dropdown style="margin-left: 20px" align="right">
                    <a href="javascript:void(0)">
                        菜单(右)
                        <Icon type="chevron-down"></Icon>
                    </a>
                    <Dropdown-menu slot="list" align="right">
                        <Dropdown-item>驴打滚</Dropdown-item>
                        <Dropdown-item>炸酱面</Dropdown-item>
                        <Dropdown-item>豆汁儿</Dropdown-item>
                        <Dropdown-item>冰糖葫芦</Dropdown-item>
                        <Dropdown-item>北京烤鸭</Dropdown-item>
                    </Dropdown-menu>
                </Dropdown>
                <Dropdown style="margin-left: 20px" align="right" direction="up">
                    <a href="javascript:void(0)">
                        菜单(上)
                        <Icon type="chevron-down"></Icon>
                    </a>
                    <Dropdown-menu slot="list" align="right">
                        <Dropdown-item>驴打滚</Dropdown-item>
                        <Dropdown-item>炸酱面</Dropdown-item>
                        <Dropdown-item>豆汁儿</Dropdown-item>
                        <Dropdown-item>冰糖葫芦</Dropdown-item>
                        <Dropdown-item>北京烤鸭</Dropdown-item>
                    </Dropdown-menu>
                </Dropdown>
            </div>

            <div class="dropdown-btn-demo">
                <Dropdown style="margin-left: 20px" align="right" direction="up"
                          split-button type="primary">
                    split 菜单(上)
                    <Dropdown-menu slot="list" align="right">
                        <Dropdown-item>驴打滚</Dropdown-item>
                        <Dropdown-item>炸酱面</Dropdown-item>
                        <Dropdown-item>豆汁儿</Dropdown-item>
                        <Dropdown-item>冰糖葫芦</Dropdown-item>
                        <Dropdown-item>北京烤鸭</Dropdown-item>
                    </Dropdown-menu>
                </Dropdown>

                <Dropdown style="margin-left: 20px" align="right" direction="up"
                          split-button type="primary" size="sm">
                    split 菜单(上)
                    <Dropdown-menu slot="list" align="right">
                        <Dropdown-item>驴打滚</Dropdown-item>
                        <Dropdown-item>炸酱面</Dropdown-item>
                        <Dropdown-item>豆汁儿</Dropdown-item>
                        <Dropdown-item>冰糖葫芦</Dropdown-item>
                        <Dropdown-item>北京烤鸭</Dropdown-item>
                    </Dropdown-menu>
                </Dropdown>
            </div>
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>