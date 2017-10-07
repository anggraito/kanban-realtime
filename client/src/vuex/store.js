import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
// import Router from '../router/index'

Vue.use(Vuex)

var config = {
  apiKey: 'AIzaSyBfFVVOEdOF8DCU6XZFexWVqEXH6FEWbFM',
  authDomain: 'kanban-33097.firebaseapp.com',
  databaseURL: 'https://kanban-33097.firebaseio.com',
  storageBucket: 'kanban-33097.appspot.com',
  projectId: 'kanban-33097'
}
const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.database()
Vue.prototype.$tasksRef = db.ref('alltask')

const store = new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    setTask (state, payload) {
      state.tasks = Object.values(payload)
    }
  },
  actions: {
    newTask ({content}, payload) {
      console.log('ini gettask payload', payload)
      db.ref('alltask').push(payload)
    },
    getTasks ({commit}) {
      db.ref('alltask').on('value', (data) => {
        commit('setTask', data.val())
      })
    },
    remove (index) {
      this.$tasksRef.child(index).remove()
    }
  }
})

export default store
