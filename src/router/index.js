import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

import About from '../components/About'
import Home from '../components/Home'
import HomeMessage from "@/components/HomeMessage";
import Profile from "@/components/Profile";
// import User from "@/components/User";

const User = () => import('../components/User')      //懒加载

const HomeNews = () => import('../components/HomeNews')

Vue.use(VueRouter)                    //传入路由插件

const routes = [                               //配置映射关系
    // {
    //     path: '',                                //默认路径
    //     redirect: '/Home'
    // },


    {
        meta: {
            title: '首页',
        },
        path: '/home',
        name: 'Home',
        component: Home,

        children: [
            {
                path: '',
                component: HomeNews
            },
            {
                path: 'news',
                component: HomeNews,
            },
            {
                path: 'message',
                component: HomeMessage,
            }

        ]
    },
    {
        meta: {
            title: '关于'
        },
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: About
    },
    {
        meta: {
            title: '用户'
        },
        path: '/user/:userId',                   //动态路由
        name: 'User',
        component: User
    },

    {
        path: '/profile',
        component: Profile
    }
]

const router = new VueRouter({            //创建路由对象
    mode: 'history',
    base: process.env.BASE_URL,
    routes,                                     //配置映射关系
    // linkActiveClass:active                //统一改
})

router.beforeEach((to, from, next) => {             //全局导航守卫guard   前置钩子
    document.title = to.matched[0].meta.title

    next()                                           //overrider
})

// router.afterEach()

export default router                   //导出
