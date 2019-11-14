import Login from '@/pages/login'
import Home from '@/pages/home'
import Demo from '@/pages/demo'
import Count from '@/pages/count'
import ErrorPage from '@/pages/errorPage'
/**
 * path 跳转的路径
 * component 对应路径显示的组件
 * exact 匹配规则，true的时候则精确匹配。
 */
const routes = [
  {
    path: '/login',
    exact: true,
    component: Login
  },
  {
    path: '/home',
    exact: true,
    component: Home
  },
  {
    path: '/count',
    exact: true,
    component: Count
  },
  {
    path: '/demo',
    routes: [
      {
        path: '/demo/:id',
        exact: true,
        component: Demo
      }
    ]
  },
  {
    path: '*',
    component: ErrorPage
  }
]

export default routes
