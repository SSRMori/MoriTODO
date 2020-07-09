import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name:'test',
      component: require('@/components/test').default
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
      path: '/timeline',
      name: 'timeline',
      component: require('@/components/timeline').default
    },
    {
      path: '/add',
      name: 'add',
      component: require('@/components/add').default
    }
  ]
})
