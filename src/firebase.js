import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDdQ4pzJ7Y5pxoiNAPz4NldrX5CtzqYQkw",
  authDomain: "expense-tracker-pwa-b8e97.firebaseapp.com",
  projectId: "expense-tracker-pwa-b8e97",
  storageBucket: "expense-tracker-pwa-b8e97.appspot.com",
  messagingSenderId: "62130593941",
  appId: "1:62130593941:web:0007345f3b8a678d487b9c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;