import Vue from 'vue'
import Router from 'vue-router'
import Frame from '@/components/Frame'
import Home from '@/pages/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Frame,
      children: [
        {
          path: '',
          name: 'Home',
          component: Home
        }
      ]
    }
  ]
})
