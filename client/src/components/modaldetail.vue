<template>
    <!-- Modal -->
    <div class="modal fade" id="detailModal" role="dialog">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>
          <div class="modal-body">
            <div class="header-item">
              <h4>Title: {{task.title}}</h4>
            </div>
            <p><strong>Point: </strong>{{task.point}}</p>
            <p><strong>Assigned To: </strong>{{task.assign}}</p>
            <p><strong>Desciption: </strong>
              {{task.describe}}
            </p>
          </div>
          <div class="modal-footer">
            <div v-if="task.status === 1"></div>
            <div v-else>
              <button @click="prev(task, index)"class="btn btn-danger">Prev</button>
            </div>
            <div v-if="task.status === 4"></div>
            <div v-else>
              <button @click="next(task, index)" class="btn btn-info">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import detailed from '@/components/detailed'
export default {
  components: {
    detailed
  },
  props: ['index'],
  data () {
    return {
      task: {}
    }
  },
  // props: ['task'],
  methods: {
    getTasks (index) {
      this.$emit('getTasks', this.task)
    },
    next (task, index) {
      this.$tasksRef.child(index).update({
        status: task.status + 1
      })
    },
    prev (task, index) {
      this.$tasksRef.child(index).update({
        status: task.status - 1
      })
    }
  },
  mounted () {
    this.getTasks(this.index)
  },
  watch: {
    id (newId) {
      this.getTasks(newId )
    }
  }
}
</script>

<style>
</style>