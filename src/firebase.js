import firebase from 'firebase'

const config={
    apiKey: "AIzaSyAyaXbeFFac5HSlgcfhYGd3pm_3tYccec0",
  authDomain: "fir-athe.firebaseapp.com",
  projectId: "fir-athe",
  storageBucket: "fir-athe.appspot.com",
  messagingSenderId: "19737937601",
  appId: "1:19737937601:web:76792c9d8c5768662af640",
  measurementId: "G-0ZPRLEQPN7"
}
firebase.initializApp(config);
export default firebase
