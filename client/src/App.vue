<template>
  <div id="app">
    <h2>KANBAN <small>Suling</small></h2>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      recentTask: {
        title: '',
        point: 0,
        assign: '',
        describe: '',
        status: null
      }
    }
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #565656;
}
h2{
  font-family: 'Fascinate Inline', cursive;
  font-size: 44px;
}
h2 small {
  font-family: 'Fascinate Inline', cursive;
  color: #565656;
}
</style>
<!-- font-family: 'Lato', sans-serif; -->