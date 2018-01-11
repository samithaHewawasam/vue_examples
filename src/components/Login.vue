<template>
  <div class="container col-3">
    <b-form v-on:submit="login" method="post">
    <div class="form-group row">
      <label>Email</label>
        <b-form-input v-model="username" placeholder="Username" v-validate="'required|email'" type="text" name="email"/>
        <span v-show="errors.has('email')">{{ errors.first('email') }}</span>
    </div>
    <div class="form-group row">
      <label>Password</label>
        <b-input v-model="password" placeholder="password" v-validate="'required'" type="password" name="password"/>
        <span v-show="errors.has('password')">{{ errors.first('password') }}</span>
    </div>
      <div class="form-group row">
        <b-button type="submit">Login</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login: function (event) {
      event.preventDefault()
      if (this.errors.any() || !this.username || !this.password) {
        this.$validator.validateAll()
        return
      }
      this.axios.post(this.$config.API + '/auth/login', {
        email: this.username,
        password: this.password
      }).then((response) => {
        if (response.data.response === 'success') {
          this.$store.commit('logged')
          this.$localStorage.set('token', response.data.result.token)
          this.$router.push('/')
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
