<template>
  <div class="box-wrap">
    <h3 class="head-title">Backlog</h3>
    <div class="item" v-for="done in doneTask"
    :key="done.id" :detailed="detailed">
      <detailed />
      <button type="button" class="btn btn-sm" 
        data-toggle="modal" data-target="#detailModal"
        @click="detailTask(done)">Show
      </button>
      <modaldetail />
    </div>
  </div>
</template>

<script>
import detailed from '@/components/detailed'
import modaldetail from '@/components/modaldetail'
export default {
  props: ['doneTask'],
  components: {
    detailed,
    modaldetail
  },
  methods: {
    detailTask (data) {
      this.$emit('detailTask', data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head-title{
  background: green;
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
