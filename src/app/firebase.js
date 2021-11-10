import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDmLZ9X2XpBu18l6mnZQO7l5IKTRtcS9m0',
  authDomain: 'linkedin-clone-yt-4878b.firebaseapp.com',
  projectId: 'linkedin-clone-yt-4878b',
  storageBucket: 'linkedin-clone-yt-4878b.appspot.com',
  messagingSenderId: '807608806801',
  appId: '1:807608806801:web:0d163a899f9bf506987e30',
  measurementId: 'G-1FE809T53L',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
