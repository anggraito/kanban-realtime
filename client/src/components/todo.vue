<template>
  <div class="box-wrap">
    <h3 class="head-title">To-Do</h3>
    <div class="item" >
      <detailed />
      <button type="button" class="btn btn-sm" 
        data-toggle="modal" data-target="#detailModal"
        >Show
      </button>
      <modaldetail />
    </div>
  </div>
</template>

<script>
import detailed from '@/components/detailed'
import modaldetail from '@/components/modaldetail'
export default {
  name: 'box-wrap',
  components: {
    detailed,
    modaldetail
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head-title{
  background: #d0dd2b;
  padding: 15px;
  margin: 0;
}
.item{
  text-align: left;
  padding: 10px;
  border: 2px dashed #565656;
  margin: 5px;
}
.item:hover{
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
