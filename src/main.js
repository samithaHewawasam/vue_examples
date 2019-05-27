// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    isLoggedIn: !!localStorage.getItem('token')
  },
  mutations: {
    login (state) {
      state.isLoggedIn = false
    },
    logged (state) {
      state.isLoggedIn = true
    },
    logout (state) {
      state.isLoggedIn = false
    }
  },
  getters: {
    isLoggedIn: state => {
      return state.isLoggedIn
    }
  },
  actions: {
    logout (commit) {
      localStorage.removeItem('token')
      commit.commit('logout')
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
