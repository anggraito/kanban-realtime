<template>
  <div class="detailed">
    <div class="header-item">
      <h4>Title</h4>
      <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
    </div>
    <p>Point: 10</p>
    <p>Desciption:
      This paragraph tell about desciptif of description
    </p>
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
