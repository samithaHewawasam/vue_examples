

<script>
import { Bar } from 'vue-chartjs'
function onlyUnique (value, index, self) {
  return self.indexOf(value) === index
}
export default {
  extends: Bar,
  created () {
    this.fetchTasks()
  },
  watch: {
    '$route': 'fetchTasks'
  },
  data () {
    return {
      datasets: [],
      users: [],
      completes: {
        label: 'Complete tasks',
        data: [],
        backgroundColor: 'rgba(0, 99, 132, 0.6)',
        borderWidth: 0
      },
      pendings: {
        label: 'Pendings tasks',
        data: [],
        backgroundColor: 'rgba(99, 132, 0, 0.6)',
        borderWidth: 0
      }
    }
  },
  methods: {
    fetchTasks: function () {
      return this.axios.get(this.$config.API + '/tasks_charts', {
        params: {
          token: this.$localStorage.get('token')
        }
      }).then((response) => {
        for (let i = 0; i < response.data.result.tasks.length; i++) {
          if (typeof response.data.result.tasks[i] === 'undefined') {
            continue
          }
          if (response.data.result.tasks[i].name) {
            this.users.push(response.data.result.tasks[i].name)
          }
          if (response.data.result.tasks[i].done === 1) {
            this.completes.data.push(response.data.result.tasks[i].status)
          } else {
            this.pendings.data.push(response.data.result.tasks[i].status)
          }
        }
        this.renderChart({
          labels: this.users.filter(onlyUnique),
          datasets: [this.completes, this.pendings]
        }, {responsive: true, maintainAspectRatio: false})
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
