export default {
    computed: {
        //寻找[sub-menu.path,sub-menu.path,...,path]组成的Array，直到Menu
        indexPath() {
            let pathArr = [this.path];
            let parent = this.$parent;
            while (parent.$options.componentName !== 'Menu') {
                if(parent.path) {
                    pathArr.unshift(parent.path);
                }

                parent = parent.$parent;
            }

            return pathArr;
        },
        //寻找顶级Menu
        rootMenu() {
            let parent = this.$parent;
            while(parent && parent.$options.componentName !== 'Menu') {
                parent = parent.$parent;
            }

            return parent;
        },
        //寻找直接父级Menu或SubMenu
        parentMenu() {
            let parent = this.$parent;
            while(parent && (['Menu','SubMenu'].indexOf(parent.$options.componentName) === -1)) {
                parent = parent.$parent;
            }

            return parent;
        }
    }
};