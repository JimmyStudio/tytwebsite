import Vue from 'vue'
import Router from 'vue-router'
import Frame from '@/components/Frame'
import Home from '@/pages/Home'
import Join from '@/pages/Join'
import Team from '@/pages/Team'
import PP from '@/pages/Privacy'

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
        }
      ]
    }
  ]
})
