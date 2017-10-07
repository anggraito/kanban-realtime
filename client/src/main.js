// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import router from './router'
import * as firebase from 'firebase'

Vue.use(VueFire)
Vue.config.productionTip = false

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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
