import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import firebase from 'firebase'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false

var firebaseConfig = {

};

firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
