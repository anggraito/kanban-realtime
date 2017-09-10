<template>
  <div class="container dashboard">
    <div class="row">
      <button type="button" class="btn btn-lg" 
      data-toggle="modal" data-target="#myModal">ADD NEW TASK</button>
      <modaladd @addTask="addTask"/>
    </div>
    <div class="row content">
      <div class="col-md-3">
        <backlog :backlogTask="backlogTask" @detailTask="detailTask"/> 
      </div>
      <div class="col-md-3">
        <todo :todoTask="todoTask" @detailTask="detailTask" />
      </div>
      <div class="col-md-3">
        <doing :doingTask="doingTask" @detailTask="detailTask" />
      </div>
      <div class="col-md-3">
        <done :doneTask="doneTask" @detailTask="detailTask" />
      </div>
      <modaldetail @deleteTask="deleteTask" @setDoing="setDoing" @setTodo="setTodo" @setDone="setDone" @setBacklog="setBacklog" :recentTask="recentTask"/>
    </div>
  </div>
</template>

<script>
import backlog from '@/components/backlog'
import todo from '@/components/todo'
import doing from '@/components/doing'
import done from '@/components/done'
import modaladd from '@/components/modaladd'
import modaldetail from '@/components/modaldetail'
export default {
  name: 'dashboard',
  props: ['addTask', 'backlogTask', 'todoTask', 'doingTask', 'doneTask', 'detailTask'],
  components: {
    backlog,
    todo,
    doing,
    done,
    modaladd,
    modaldetail
  },
  methods: {
    addTask (data) {
      this.$emit('addTask', data)
    },
    detailTask (data) {
      this.$emit('detailTask', data)
    },
    setBacklog (data) {
      this.$emit('setBacklog', data)
    },
    setTodo (data) {
      this.$emit('setTodo', data)
    },
    setDoing (data) {
      this.$emit('setDoing', data)
    },
    setDone (data) {
      this.$emit('setDone', data)
    },
    deleteTask (data) {
      this.$emit('deleteTask', data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.content{
  padding-top: 30px;
}
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
