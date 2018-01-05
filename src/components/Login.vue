<template>
  <div class="container col-3">
    <b-form v-on:submit="login" method="post">
    <div class="form-group row">
      <label>Email</label>
      <b-input class="mb-2 mr-sm-2 mb-sm-0">
        <b-input  ref="username" placeholder="Username" />
      </b-input>
    </div>
    <div class="form-group row">
      <label>Password</label>
      <b-input class="mb-2 mr-sm-2 mb-sm-0">
        <b-input v-model="password" placeholder="password" />
      </b-input>
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
      username: 'fgdfg',
      password: ''
    }
  },
  methods: {
    login: function (event) {
      this.username = this.$refs.username.value
      alert(this.username)
      event.preventDefault()
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
