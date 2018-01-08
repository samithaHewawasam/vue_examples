<template>
  <div class="container col-3">
    <b-form v-on:submit="taskcreate" method="post">
    <div class="form-group row">
      <label>Task</label>
        <b-input v-model="task" placeholder="name" />
    </div>
    <div class="form-group row">
      <b-button variant="primary" type="submit">Save</b-button>
    </div>
    </b-form>
    <div class="panel-body">
    <table class="table table-striped task-table">
      <thead>
        <tr><th>#</th><th>name</th><th>delete</th></tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in tasks">
          <td>{{index + 1}}</td><td>{{task.name}}</td>
          <td><b-button variant="danger" v-on:click="deleteTask(index, task.id)">Delete</b-button></td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Task',
  data () {
    return {
      task: '',
      tasks: []
    }
  },
  created () {
    this.fetchTasks()
  },
  watch: {
    '$route': 'fetchTasks'
  },
  methods: {
    fetchTasks: function () {
      this.axios.get(this.$config.API + '/tasks', {
        params: {
          token: this.$localStorage.get('token')
        }
      }).then((response) => {
        this.tasks = response.data.result.tasks
      })
    },
    taskcreate: function (event) {
      event.preventDefault()
      this.axios.post(this.$config.API + '/create_task', {
        name: this.task,
        token: this.$localStorage.get('token')
      }).then((response) => {
        if (response.data.response === 'success') {
          this.fetchTasks()
        }
      })
    },
    deleteTask: function (index, id) {
      this.axios.post(this.$config.API + '/delete_task', {
        id: id,
        token: this.$localStorage.get('token')
      }).then((response) => {
        if (response.data.result) {
          this.tasks.splice(index, 1)
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
