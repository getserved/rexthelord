import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: 'AIzaSyAaEgRDnuvGjj0almPqpZpL8BuNBjvuCeo',
  authDomain: 'rexthelord-6c701.firebaseapp.com',
  databaseURL: 'https://rexthelord-6c701.firebaseio.com',
  projectId: 'rexthelord-6c701',
  storageBucket: 'rexthelord-6c701.appspot.com',
  messagingSenderId: '451177223078',
  appId: '1:451177223078:web:6d017e2cc962131f14b567',
  measurementId: 'G-5GXF5YCY67'
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const coordinateCollection = db.collection('coordinate')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  coordinateCollection
}
