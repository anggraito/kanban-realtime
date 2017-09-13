<template>
  <div id="app">
    <img class="image-logo" src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
import * as firebase from 'firebase'
var config = {
  apiKey: 'AIzaSyBfFVVOEdOF8DCU6XZFexWVqEXH6FEWbFM',
  authDomain: 'kanban-33097.firebaseapp.com',
  databaseURL: 'https://kanban-33097.firebaseio.com',
  projectId: 'kanban-33097'
}
const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.database()

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
  },
  firebase: {
    alltask: db.ref('alltask')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.image-logo{
  width: 80px;
}
</style>
