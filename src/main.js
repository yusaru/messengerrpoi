// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import HaederComponents from './components/HaederComponents'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

var config = {
  apiKey: 'dummy',
  authDomain: 'dummy',
  databaseURL: 'dummy',
  projectId: 'dummy',
  storageBucket: 'dummy',
  messagingSenderId: 'dummy'
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

new Vue({
  el: '#haederComponents',
  components: { HaederComponents },
  template: '<haederComponents/>'
})
