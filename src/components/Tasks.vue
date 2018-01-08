<template>
  <div class="container col-3">
    <b-form v-on:submit="taskcreate" method="post">
    <div class="form-group row">
      <label>Task</label>
        <b-input v-model="task" placeholder="name" />
    </div>
    <div class="form-group row">
      <b-button variant="primary">Save</b-button>
    </div>
    </b-form>
    <table class="table">
    </table>
  </div>
</template>

<script>
export default {
  name: 'Task',
  data () {
    return {
      task: ''
    }
  },
  methods: {
    taskcreate: function (event) {
      event.preventDefault()
      this.axios.post(this.api_url + '/auth/login', {
        task: this.task,
        token: this.$localStorage.get('token')
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
