<template>
  <div class="container col-3">
    <b-form v-on:submit="update" method="post">
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
        <b-input v-model="password" placeholder="password" type="password"/>
    </div>
      <div class="form-group row">
        <b-button variant="primary" type="submit">Register</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  created () {
    this.fetchProfile()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchProfile: function () {
      this.axios.get(this.$config.API + '/auth/user', {
        params: {
          token: this.$localStorage.get('token')
        }
      }).then((response) => {
        this.name = response.data.result.name
        this.email = response.data.result.email
      })
    },
    update: function (event) {
      event.preventDefault()
      this.axios.post(this.$config.API + '/auth/profile', {
        token: this.$localStorage.get('token'),
        name: this.name,
        email: this.email,
        password: this.password
      }).then((response) => {
        console.log(response)
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
