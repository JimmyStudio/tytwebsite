import Vue from 'vue'
import Router from 'vue-router'
import Frame from '@/components/Frame'
import Home from '@/pages/Home'
import Join from '@/pages/Join'
import Team from '@/pages/Team'
import PP from '@/pages/Privacy'
import TU from '@/pages/Term'

Vue.use(Router)

export default new Router({
  base: '/en-US/',
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
        },
        {
          path: 'join',
          name: 'Join',
          component: Join
        },
        {
          path: 'team',
          name: 'Team',
          component: Team
        },
        {
          path: 'privacy-policy',
          name: 'PP',
          component: PP
        },
        {
          path: 'terms-of-use',
          name: 'TU',
          component: TU
        }
      ]
    }
  ]
})
