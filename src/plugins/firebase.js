import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
import firebase from "firebase"
import 'firebase/firestore'

Vue.use(firestorePlugin)

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDKkd3ugxfaX3F6Cg8J8-2LaBl4Cia2KgY",
  authDomain: "portfolio-waiwai-55092.firebaseapp.com",
  databaseURL: "https://portfolio-waiwai-55092.firebaseio.com",
  projectId: "portfolio-waiwai-55092",
  storageBucket: "portfolio-waiwai-55092.appspot.com",
  messagingSenderId: "163338673940",
  appId: "1:163338673940:web:dc1f061847da31146d6c01",
  measurementId: "G-0PWQ0Z7HFR"
})

export const db = firebaseApp.firestore()