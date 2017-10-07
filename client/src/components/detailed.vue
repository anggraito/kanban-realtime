<template>
  <div class="detailed">
    <div>
      <div class="header-item">
        <h4>title</h4>
        <span type="button" class="glyphicon glyphicon-remove" 
        aria-hidden="true"></span>
      </div>
      <p><strong>Point: </strong></p>
      <p><strong>Assigned To: </strong></p>
      <p><strong>Desciption: </strong>
        
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'detailed'
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
</style>

<!--<div v-for="(task, index) in tasks" 
      :key="index" v-if="task.status === 1">
      <div class="header-item">
        <h4>{{task.title}}</h4>
        <span type="button" class="glyphicon glyphicon-remove" 
        aria-hidden="true" @click="remove(index)"></span>
      </div>
      <p><strong>Point: </strong>{{task.point}}</p>
      <p><strong>Assigned To: </strong>{{task.assign}}</p>
      <p><strong>Desciption: </strong>
        {{task.describe}}
      </p>
    </div> -->