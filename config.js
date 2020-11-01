import firebase from 'firebase';
require('@firebase/firestore')

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCds1aiYq1MpdvfkQ_mP-m0g4vzTXsvNdI",
    authDomain: "santa-9baf2.firebaseapp.com",
    databaseURL: "https://santa-9baf2.firebaseio.com",
    projectId: "santa-9baf2",
    storageBucket: "santa-9baf2.appspot.com",
    messagingSenderId: "115455249194",
    appId: "1:115455249194:web:71c920cb78b06a3354ac53"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
