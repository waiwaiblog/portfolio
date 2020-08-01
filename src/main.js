import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import firebase from 'firebase'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyDKkd3ugxfaX3F6Cg8J8-2LaBl4Cia2KgY",
  authDomain: "portfolio-waiwai-55092.firebaseapp.com",
  databaseURL: "https://portfolio-waiwai-55092.firebaseio.com",
  projectId: "portfolio-waiwai-55092",
  storageBucket: "portfolio-waiwai-55092.appspot.com",
  messagingSenderId: "163338673940",
  appId: "1:163338673940:web:dc1f061847da31146d6c01",
  measurementId: "G-0PWQ0Z7HFR"
};

firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
