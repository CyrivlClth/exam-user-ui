import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    component: Home
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
  {
    path: '/select',
    name: 'select',
    component: () => import('./views/Select.vue')
  },
  {
    path: '/tasks/:taskId',
    name: 'tasks',
    props: (route) => { { taskId: route.params.taskId } },
    component: () => import('./views/Exam.vue')
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
  ]
})