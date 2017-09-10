<template>
  <div class="box-wrap">
    <h3 class="head-title">Backlog</h3>
    <div class="item">
      <detailed />
      <button>ToDo</button>
      <button>Done</button>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head-title{
  background: orange;
  padding: 15px;
  margin: 0;
}
.item{
  text-align: left;
  padding: 10px;
  border: 2px solid #000;
  margin: 5px;
}
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
