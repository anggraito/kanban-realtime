<template>
  <div class="box-wrap">
    <div class="box" v-for="(task, index) in tasks" 
    :key="index" v-if="task.status === 1">
      <div class="header-item">
        <h4>{{task.title}}</h4>
        <span type="button" class="glyphicon glyphicon-remove" 
        aria-hidden="true" @click="remove(index)"></span>
      </div>
      <p><strong>Point: </strong>{{task.point}}</p>
      <p><strong>Assigned To: </strong>{{task.assign}}</p>
      <br />
      <button type="button" class="btn btn-sm" 
      data-toggle="modal" data-target="#detailModal"
      >Show
      </button>
      <modaldetail :task="task" />
    </div>
    
  </div>
</template>

<script>
import modaldetail from '@/components/modaldetail'
export default {
  name: 'box-wrap',
  components: {
    modaldetail
  },
  props: ['tasks'],
  methods: {
    remove (index) {
      this.$tasksRef.child(index).remove()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-item{
  position: relative;
  border-bottom:1px solid #000;
}
.header-item span{
  position: absolute;
  top: 0;
  right: 0;
}
.box{
  padding: 10px;
  text-align: left;
  border: 2px dashed #565656;
  margin: 5px;
}
.box:hover{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
