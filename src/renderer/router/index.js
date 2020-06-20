import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/landing-page',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/',
      name: 'index',
      component: require('@/components/index').default
    },
    {
      path: '/login',
      name: 'login',
      component: require('@/components/login').default
    }
  ]
})
