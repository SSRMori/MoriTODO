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
      name: 'cover',
      component: require('@/components/cover').default
    },
    {
      path: '/index',
      name: 'index',
      component: require('@/components/index').default
    },
    {
      path: '/register',
      name: 'register',
      component: require('@/components/register').default
    },
    {
      path: '/login',
      name: 'login',
      component: require('@/components/login').default
    }
  ]
})
