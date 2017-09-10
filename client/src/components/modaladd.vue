<template>
    <!-- Modal -->
    <div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Add New Task</h4>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="task">Title Task:</label>
                <input type="task" class="form-control" 
                id="task" placeholder="-Title Task-" v-model="formTask.task" />
              </div>
              <div class="form-group">
                <label for="point">Point:</label>
                <input type="point" class="form-control" 
                id="point" placeholder="-How many point-" v-model="formTask.point" />
              </div>
              <div class="form-group">
                <label for="assign">Assign to:</label>
                <input type="assign" class="form-control" 
                id="assign" placeholder="-Who's people assigned-" v-model="formTask.assign" />
              </div>
              <div class="form-group">
                <label for="describe">Describe:</label>
                <textarea type="describe" class="form-control" 
                id="describe" placeholder="-Describe it-" v-model="formTask.describe" />
              </div>
              <button @click="addTask()" type="submit" class="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      formTask: {
        task: null,
        point: 0,
        assign: null,
        describe: null,
        status: 'backlog'
      }
    }
  },
  methods: {
    addTask () {
      this.$emit('addTask', this.formTask)
      this.formTask.task = ''
      this.formTask.point = 0
      this.formTask.assign = ''
      this.formTask.describe = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
