import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.component('Loader', Loader)


firebase.initializeApp({
  apiKey: "AIzaSyD8GIWJyZvHumMFsaZQpPwQJx8q12e7UIw",
  authDomain: "vue-crm-3f5b1.firebaseapp.com",
  projectId: "vue-crm-3f5b1",
  storageBucket: "vue-crm-3f5b1.appspot.com",
  messagingSenderId: "969140236401",
  appId: "1:969140236401:web:710a424a19df86f59aebd0",
  measurementId: "G-HR3XH47WHF"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


