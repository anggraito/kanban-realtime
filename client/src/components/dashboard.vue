<template>
  <div class="container dashboard">
    <div class="row">
      <button type="button" class="btn btn-sm" 
      data-toggle="modal" data-target="#myModal">ADD NEW TASK</button>
      <modaladd />
    </div>
    <div class="row content">
      <div class="col-md-3">
       <h3 class="head-title">Backlog</h3>
        <div class="item">
          <backlog :tasks="tasks"/>
        </div>
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
      <modaldetail />
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
  components: {
    backlog,
    todo,
    doing,
    done,
    modaladd,
    modaldetail
  },
  data () {
    return {
      tasks: null,
      keys: null
    }
  },
  methods: {
    getTasks () {
      this.$tasksRef.on('value', (data) => {
        this.tasks = data.val()
      })
    }
  },
  mounted () {
    this.getTasks()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.content{
  padding-top: 30px;
}
.item{
  border: 2px solid #f6f6f6;
  padding:0 0 30px 0;
  margin-bottom: 20px;
}
.box-wrap h3{
  color: #fff;
  font-weight: bold;
}
.btn{
  background-color: #565656;
  color: #f9f9f9;
}
.head-title{
  background: #febb32;
  padding: 15px;
  margin: 0;
}
</style>
