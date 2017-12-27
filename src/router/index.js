import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import details from '@/views/details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'details',
      component: details
    }
  ]
})
