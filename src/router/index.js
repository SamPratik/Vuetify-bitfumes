import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '@/components/AppHome'
import AppLogin from '@/components/AppLogin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: AppHome
    },
    {
    	path: '/login',
    	component: AppLogin
    }
  ]
})
