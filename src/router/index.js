import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Profile from '@/components/Profile'
import Tasks from '@/components/Tasks'
import Charts from '@/components/Charts'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLocalStorage from 'vue-localstorage'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
const vueConfig = require('vue-config')
const configs = {
  API: '//todo-list-laravel-5-5.herokuapp.com/api'
}

Vue.use(vueConfig, configs)
Vue.use(BootstrapVue)
Vue.use(Router)
Vue.use(VueAxios, axios)
Vue.use(VueLocalStorage)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/task',
      name: 'Task',
      component: Tasks
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/charts',
      name: 'Charts',
      component: Charts
    }
  ]
})
