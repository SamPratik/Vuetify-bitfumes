import Vue from 'vue'
import Router from 'vue-router'
import AppHome from '@/components/AppHome'
import AppLogin from '@/components/AppLogin'
import AppContact from '@/components/AppContact'

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
    },
    {
      path: '/contact',
      component: AppContact
    }
  ]
})
