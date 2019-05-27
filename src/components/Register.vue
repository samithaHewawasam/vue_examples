<template>
  <div class="container col-3">
    <b-form v-on:submit="register" method="post">
    <div class="form-group row">
      <label>Name</label>
        <b-input v-model="name" placeholder="name" v-validate="'required|alpha_spaces'" type="text" name="name"/>
        <span v-show="errors.has('name')">{{ errors.first('name') }}</span>
    </div>
    <div class="form-group row">
      <label>Email</label>
        <b-input v-model="email" placeholder="Email" v-validate="'required|email'" type="text" name="email"/>
        <span v-show="errors.has('email')">{{ errors.first('email') }}</span>
    </div>
    <div class="form-group row">
      <label>Password</label>
        <b-input v-model="password" placeholder="password" v-validate="'required'" type="password" name="password"/>
        <span v-show="errors.has('password')">{{ errors.first('password') }}</span>
    </div>
      <div class="form-group row">
        <b-button variant="primary" type="submit">Register</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register: function (event) {
      event.preventDefault()
      if (this.errors.any() || !this.name || !this.email || !this.password) {
        this.$validator.validateAll()
        return
      }
      this.axios.post(this.$config.API + '/auth/register', {
        name: this.name,
        email: this.email,
        password: this.password
      }).then((response) => {
        if (response.data.status) {
          this.$router.push('/login')
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
