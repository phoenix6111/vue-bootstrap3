import navConfig from './nav.config.json';

const registerRoute = (navConfig) => {
    let route = [];
    Object.keys(navConfig).forEach((lang, index) => {
        let navs = navConfig[lang];
        route.push({    //parent route
            path: `/${ lang }/component`,
            redirect: `/${ lang }/component/buttons`,
            component: require(`../pages/${ lang }/component.vue`),
            children: []
        });
        navs.forEach(nav => {
            if (nav.groups) {
                nav.groups.forEach(group => {
                    group.list.forEach(nav => {
                        addRoute(nav, lang, index);
                    });
                });
            } else if (nav.children) {
                nav.children.forEach(nav => {
                    addRoute(nav, lang, index);
                });
            } else {
                addRoute(nav, lang, index);
            }
        });
    });
    function addRoute(page, lang, index) {
        const component = page.path === '/icons'
            ? require(`../docs/${ lang }/icons.vue`)
            : require(`../docs/${ lang }${page.path}.md`);
        let child = {
            path: page.path.slice(1),
            meta: {
                title: page.title || page.name,
                description: page.description,
                lang
            },
            name: 'component-' + (page.title || page.name),
            component: component.default || component
        };
        //子路由
        route[index].children.push(child);
    }

    return route;
};

let route = registerRoute(navConfig);

// let userLanguage = localStorage.getItem('ELEMENT_LANGUAGE') || window.navigator.language || '/zh-CN';
let defaultPath = '/zh-CN/component';
/*if (userLanguage.indexOf('zh-') !== -1) {
 defaultPath = '/zh-CN';
 }*/

route = route.concat([{
    path: '/',
    redirect: defaultPath
}, {
    path: '*',
    redirect: defaultPath
}]);

export default route;
