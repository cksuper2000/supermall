// 引入vue
import Vue from 'vue';
// 引入路由模块
import Router from 'vue-router';
// 引入页面的模块
const home = () =>
    import ('../views/home/home');
const cart = () =>
    import ('../views/cart/cart');
const categary = () =>
    import ('../views/categary/categary')
const profile = () =>
    import ('../views/profile/profile')
Vue.use(Router);

const routes = [{
        path: "/",
        redirect: '/home'
    },
    {
        path: '/home',
        component: home
    },
    {
        path: '/cart',
        component: cart
    },
    {
        path: '/categary',
        component: categary
    },
    {
        path: '/profile',
        component: profile
    }
];
// 导出router实例
export default new Router({
    routes
})