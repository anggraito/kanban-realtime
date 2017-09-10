<template>
  <div id="app">
    <img class="image-logo" src="./assets/logo.png">
    <router-view @recentTask="recentTask" @addTask="addTask" 
    @detailTask="detailTask" @setBacklog="setBacklog" @setTodo="setTodo" 
    @setDoing="setDoing" @setDone="setDone" @deleteTask="deleteTask" 
    @backlogTask="backlogTask" @todoTask="todoTask" @doingTask="doingTask"
    @doneTask="doneTask"></router-view>
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
  },
  method: {
    addTask (data) {
      this.$firebaseRefs.alltask.push(data)
    },
    detailTask (data) {
      this.recentTask = data
    },
    setBacklog (data) {
      this.$firebaseRefs.alltask.child(data['.key'])
      .child('status')
      .set(0)
    },
    setTodo (data) {
      this.$firebaseRefs.alltask.child(data['.key'])
      .child('status')
      .set(1)
    },
    setDoing (data) {
      this.$firebaseRefs.alltask.child(data['.key'])
      .child('status')
      .set(2)
    },
    setDone (data) {
      this.$firebaseRefs.alltask.child(data['.key'])
      .child('status')
      .set(3)
    },
    deleteTask (data) {
      this.$firebaseRefs.alltask.child(data['.key'])
      .remove()
    }
  },
  computed: {
    backlogTask () {
      return this.alltask.filter(function (t) {
        return t.status === 0
      })
    },
    todoTask () {
      return this.alltask.filter(function (t) {
        return t.status === 1
      })
    },
    doingTask () {
      return this.alltask.filter(function (t) {
        return t.status === 2
      })
    },
    doneTask () {
      return this.alltask.filter(function (t) {
        return t.status === 3
      })
    }
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
