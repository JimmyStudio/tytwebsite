import Vue from 'vue'
import Router from 'vue-router'
import Frame from '@/components/Frame'
import Home from '@/pages/Home'
import News from '@/pages/News'
import NewsDetail from '@/pages/NewsDetail'
import Team from '@/pages/Team'
import Cooperation from '@/pages/Cooperation'

Vue.use(Router)

export default new Router({
  base: '/zh-CN/',
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
          path: 'news',
          name: 'News',
          component: News
        },
        {
          path: 'news/:id',
          name: 'NewsDetail',
          component: NewsDetail
        },
        {
          path: 'team',
          name: 'Team',
          component: Team
        },
        {
          path: 'cooperation',
          name: 'Cooperation',
          component: Cooperation
        }
      ]
    }
  ]
})
