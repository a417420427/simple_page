import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Write from '../pages/Write'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home'
    },
    {
      path: '/login',
      component: Login,
      name: 'login'
    },
    {
      path: '/signUp',
      component: SignUp,
      name: 'signUp'
    },
    {
      path: '/write',
      component: Write,
      name: 'write'
    }
  ]
})
