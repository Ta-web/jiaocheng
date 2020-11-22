import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/about/index.vue'),
    },
    {
        path: '/news',
        name: 'News',
        component: () => import('@/views/news/index.vue'),
    },
    // 以下是页面组件的路由信息
    {
        path: '/shouye',
        component: () => import('@/views/shouye/index.vue'),
    },
    {
        path: '/qiye',
        component: () => import('@/views/qiye/index.vue'),
    },
    {
        path: '/hangYeDongTai',
        component: () => import('@/views/news/index.vue'),
    },
    {
        path: '/liNian',
        component: () => import('@/views/news/index.vue'),
    },
    {
        path: '/liuYan',
        component: () => import('@/views/news/index.vue'),
    },
];

const router = new VueRouter({
    routes,
});

export default router;
