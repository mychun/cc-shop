import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            component: () => import('@/views/index')
        },
        {
            path: '/category',
            component: () => import('@/views/category')
        },
        {
            path: '/cart',
            component: () => import('@/views/cart')
        },
        {
            path: '/me',
            component: () => import('@/views/me')
        }
    ]
}) 