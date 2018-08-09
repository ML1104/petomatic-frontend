import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/components/Login'
import Home from '@/components/Home'
import Clients from '@/components/Clients'
import Pets from '@/components/Pets'
import Users from '@/components/Users'
import Manual from '@/components/Manual'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Login
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/clients',
            component: Clients
        },
        {
            path: '/pets',
            component: Pets
        },
        {
            path: '/users',
            component: Users
        },
        {
            path: '/manual',
            component: Manual
        },
    ]
})


