import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import dashboard from '@/components/dashboard'
import modalDetail from '@/components/modaldetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/dashboard',
      component: dashboard,
      props: true,
      children: [
        {
          path: '/:id',
          component: modalDetail,
          props: true
        }
      ]
    }
  ]
})
