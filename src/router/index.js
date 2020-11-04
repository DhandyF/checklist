import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Login',
      component: () => import('@/components/Login.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/components/Register.vue')
    },
    {
      path: '/list',
      name: 'List',
      component: () => import('@/components/List.vue')
    }
  ]
})
