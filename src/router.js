import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main'
import Home from './views/Home'
import Login from './views/Login'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Main,
      children: [{
          path: "",
          component: Home
        },
        {
          path: "select",
          component: () => import('./views/Select.vue')
        },
        {
          path: "history",
          component: () => import('./views/Grade.vue')
        },
        {
          path: "account",
          component: () => import('./views/Account.vue')
        }
      ]
    },
    {
      path: '/start/:taskId',
      name: 'start',
      props: (route) => {
        {
          route.params.taskId
        }
      },
      component: () => import('./views/Exam.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/404',
      component: () => import('@/views/errorPage/404'),
      hidden: true
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    },
    // {
    //   path: '/select',
    //   name: 'select',
    //   component: () => import('./views/Select.vue')
    // },

    {
      path: '*',
      redirect: '/404',
      hidden: true
    }
  ]
})