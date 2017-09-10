<template>
  <div class="container dashboard">
    <div class="row">
      <button>ADD NEW TASK</button>
    </div>
    <div class="row">
      <div class="col-md-3">
        <backlog /> 
      </div>
      <div class="col-md-3">
        <todo />
      </div>
      <div class="col-md-3">
        <doing />
      </div>
      <div class="col-md-3">
        <done />
      </div>
    </div>
  </div>
</template>

<script>
import backlog from '@/components/backlog'
import todo from '@/components/todo'
import doing from '@/components/doing'
import done from '@/components/done'
export default {
  name: 'dashboard',
  components: {
    backlog,
    todo,
    doing,
    done
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.box-wrap{
  border: 2px solid #f6f6f6;
  padding:0 0 30px 0;
  margin-bottom: 20px;
}
.box-wrap h3{
  color: #fff;
  font-weight: bold;
}
</style>
