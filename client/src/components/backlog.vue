<template>
  <div class="box-wrap">
    <h3 class="head-title">Backlog</h3>
    <div class="item">
      <detailed />
      <button>ToDo</button>
    </div>
    <div class="item">
      <detailed />
      <button>ToDo</button>
    </div>
  </div>
</template>

<script>
import detailed from '@/components/detailed'
export default {
  name: 'box-wrap',
  components: {
    detailed
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head-title{
  background: red;
  padding: 15px;
  margin: 0;
}
.item{
  text-align: left;
  padding: 10px;
  border: 2px solid #000;
  margin: 5px;
}
</style>
