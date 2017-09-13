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
                <label for="title">Title Task:</label>
                <input type="title" class="form-control" 
                id="title" placeholder="-Title Task-" />
              </div>
              <div class="form-group">
                <label for="point">Point:</label>
                <input type="point" class="form-control" 
                id="point" placeholder="-How many point-"  />
              </div>
              <div class="form-group">
                <label for="assign">Assign to:</label>
                <input type="assign" class="form-control" 
                id="assign" placeholder="-Who's people assigned-"  />
              </div>
              <div class="form-group">
                <label for="describe">Describe:</label>
                <textarea type="describe" class="form-control" 
                id="describe" placeholder="-Describe it-" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
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
        title: null,
        point: 0,
        assign: null,
        describe: null,
        status: 0
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
