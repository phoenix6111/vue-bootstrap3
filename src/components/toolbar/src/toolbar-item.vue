<!--<template>
    <div class="toolbar-menu-item">
        <a href="javascript:void(0);"
           :title="text"
           class="toolbar-menu-item-trigger"
           @click="handleClick">
            <slot>
                <Icon class="him-icon" type="icon" v-if="icon"></Icon>
                <span v-if="onlyText && text" class="him-label">
                    {{text}}
                </span>
            </slot>
        </a>
    </div>
    <li>
        <a href=""><i class="him-icon zmdi zmdi-comment-alt-text"></i></a>
    </li>
</template>-->

<script>
    import Icon from '../../icon';

    export default {
        name:'ToolbarItem',
        props: {
            router: { //Designates whether the list tiles will be a router-link,是否使用Vue的路由
                type:Boolean,
                default:false,
            },
            disabled: { //是否禁用
                type:Boolean,
                default:false,
            },
            href: {
                type:String
            },
            replace: {  // Vue Router prop. Will call router.replace() instead of router.push() when clicked,
                        // so the navigation will not leave a history record
                type:Boolean,
            },
            append: {
                type:Boolean,   // Vue Router prop. Appends the relative path to the current path
                default:false
            },
            icon: {
                type:String
            },
            text: {
                type:String
            },
            onlyText:{
                type:Boolean,
                default:false
            },
            tag: {  //根结点的tag名称
                type:String,
                default:'li'
            },
            toggled: {
                type:Boolean,
                default:false
            }
        },
        methods: {
            handleClick() {
                this.$emit('item-click');
            }
        },
        render(h) {
            let children = (
                    <a href="javascript:void(0)" title={this.text} onClick={this.handleClick}>
                        {this.icon?<icon class="him-icon" type={this.icon}></icon>:``}
                        {this.$slots.default}
                    </a>
            );

            let data = {
                'class':{
                    'toggled':this.toggled
                }
            };

            return h(this.tag,data,[children]);

        }
    }
</script>