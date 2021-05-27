import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// import { seedDatabase } from '../seed'

const config = {
    apiKey: "AIzaSyBkYXwzB6CtCTh-9V0wFexvp-sivPvPbbw",
    authDomain: "netflix-b5298.firebaseapp.com",
    projectId: "netflix-b5298",
    storageBucket: "netflix-b5298.appspot.com",
    messagingSenderId: "215800936721",
    appId: "1:215800936721:web:fd934a4d6a61ea5aa7b4b0"
};


const firebase = Firebase.initializeApp(config)

// seedDatabase(firebase)

export { firebase }