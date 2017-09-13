<template>
  <div class="detailed">
    <div class="header-item">
      <h4>ya</h4>
      <span type="button"
      class="glyphicon glyphicon-remove" aria-hidden="true"></span>
    </div>
    <p>Poin</p>
    <p>Assigned To</p>
    <p>Desciption:
      
    </p>
  </div>
</template>

<script>

export default {
  name: 'detailed',
  props: ['detailed'],
  components: {
  },
  methods: {
    deleteTask: function (data) {
      if (window.confirm('Delete this task?')) {
        this.$emit('deleteTask', data)
      }
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
</style>
