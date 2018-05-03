import Vue from 'vue'
import Router from 'vue-router'

// #es: login

import login from '@/pages/login/Login.vue'

// #es: paginas principales

import App from '@/pages/app/Aplication.vue'
import home from '@/pages/app/Home.vue'
import awwards from '@/pages/app/awwards.vue'
import config from '@/pages/app/config.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/app',
      name: 'app',
      component: App,
      children: [
        {
          path: '/home',
          name: 'home',
          component: home
        },
        {
          path: '/awwards',
          name: 'awwards',
          component: awwards
        },
        {
          path: '/config',
          name: 'config',
          component: config
        },
        {
          path: '*',
          redirect: '/'
        }
      ]
    }
  ]
})
