<template>
    <!-- Modal -->
    <div class="modal fade" id="detailModal" role="dialog">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Add New Task</h4>
          </div>
          <div class="modal-body">
            <detailed />
          </div>
          <div class="modal-footer">
            <button class="btn btn-danger">Back Log</button>
            <button class="btn btn-info">To Do</button>
            <button class="btn btn-warning">Doing</button>
            <button class="btn btn-success">Done</button>
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
  }
}
</script>

<style>
</style>