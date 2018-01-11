<template>
  <div id="app">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link v-if="!isLoggedIn" to="/login">Login</router-link> </li>
      <li><router-link v-if="!isLoggedIn" to="/register">Register</router-link> </li>
      <li><router-link v-if="isLoggedIn" to="/task">Task</router-link> </li>
      <li><router-link v-if="isLoggedIn" to="/profile">Profile</router-link></li>
      <li><router-link v-if="isLoggedIn" to="/charts">Charts</router-link></li>
      <li><a href="#" v-if="isLoggedIn" @click="logout">Logout</a> </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.getters.isLoggedIn
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
