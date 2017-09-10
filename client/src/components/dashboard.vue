<template>
  <div class="container dashboard">
    <div class="row">
      <button type="button" class="btn btn-lg" 
      data-toggle="modal" data-target="#myModal">ADD NEW TASK</button>
      <modaladd @addTask="addTask"/>
    </div>
    <div class="row">
      <div class="col-md-3">
        <backlog :backlogTask="backlogTask" /> 
      </div>
      <div class="col-md-3">
        <todo :todoTask="todoTask" />
      </div>
      <div class="col-md-3">
        <doing :doingTask="doingTask" />
      </div>
      <div class="col-md-3">
        <done :doneTask="doneTask" />
      </div>
      modal detail?
    </div>
  </div>
</template>

<script>
import backlog from '@/components/backlog'
import todo from '@/components/todo'
import doing from '@/components/doing'
import done from '@/components/done'
import modaladd from '@/components/modaladd'
export default {
  name: 'dashboard',
  props: ['backlogTask', 'todoTask', 'doingTask', 'doneTask'],
  components: {
    backlog,
    todo,
    doing,
    done,
    modaladd
  },
  methods: {
    addTask (data) {
      this.$emit('addTask', data)
    }
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
