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
            <button class="btn btn-danger">Prev</button>
            <button class="btn btn-info">Next</button>
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
  props: ['task'],
  methods: {
    getTasks () {
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
  }
}
</script>

<style>
</style>