<template>
  <div class="container col-3">
    <b-form>
    <div class="form-group row">
      <label>Name</label>
      <b-input class="mb-2 mr-sm-2 mb-sm-0">
        <b-input id="name" placeholder="name" />
      </b-input>
    </div>
    <div class="form-group row">
      <label>Email</label>
      <b-input class="mb-2 mr-sm-2 mb-sm-0">
        <b-input id="email" placeholder="Email" />
      </b-input>
    </div>
    <div class="form-group row">
      <label>Password</label>
      <b-input class="mb-2 mr-sm-2 mb-sm-0">
        <b-input id="password" placeholder="password" />
      </b-input>
    </div>
    <div class="form-group row">
      <label>Password</label>
      <b-input class="mb-2 mr-sm-2 mb-sm-0">
        <b-input id="password" placeholder="password" />
      </b-input>
    </div>
      <div class="form-group row">
        <b-button variant="primary">Register</b-button>
      </div>

    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
