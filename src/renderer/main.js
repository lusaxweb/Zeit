import Vue from 'vue'
import axios from 'axios'
import firebase from 'firebase'
import App from './App'
import router from './router'
import store from './store'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* Add firebase api */

var config = {
  apiKey: 'AIzaSyAkj86SiEWzQvWX6jwh9F1ht7lly4ORQGo',
  // authDomain: 'zeit-01.firebaseapp.com',
  databaseURL: 'https://zeit-01.firebaseio.com',
  projectId: 'zeit-01',
  storageBucket: 'zeit-01.appspot.com',
  messagingSenderId: '1066115437789'
}
firebase.initializeApp(config)

Vue.mixin({
  data () {
    return {
      get globalReadOnlyProperty () {
        return firebase
      }
    }
  }
})

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
