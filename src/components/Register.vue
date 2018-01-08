<template>
  <div class="container col-3">
    <b-form v-on:submit="register" method="post">
    <div class="form-group row">
      <label>Name</label>
        <b-input v-model="name" placeholder="name" />
    </div>
    <div class="form-group row">
      <label>Email</label>
        <b-input v-model="email" placeholder="Email" />
    </div>
    <div class="form-group row">
      <label>Password</label>
        <b-input v-model="password" placeholder="password" />
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
      this.axios.post(this.$config.API + '/auth/register', {
        name: this.name,
        email: this.email,
        password: this.password
      }).then((response) => {
        console.log(response.data)
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
