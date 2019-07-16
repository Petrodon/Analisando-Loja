import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAqyWkf3wXKoZeDi7twa6Jia5_LaKABbcw",
    authDomain: "analisandoloja.firebaseapp.com",
    databaseURL: "https://analisandoloja.firebaseio.com",
    projectId: "analisandoloja",
    storageBucket: "analisandoloja.appspot.com",
    messagingSenderId: "169992603944"
};

const fire = firebase.initializeApp(firebaseConfig);


export default fire