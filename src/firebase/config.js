import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyD5XwpDlp4mxttX0PyLSKGQrrT0WobFgsg",

    authDomain: "reactolx-368c2.firebaseapp.com",
  
    projectId: "reactolx-368c2",
  
    storageBucket: "reactolx-368c2.appspot.com",
  
    messagingSenderId: "356657593320",
  
    appId: "1:356657593320:web:fe75f64d8151a5c878425d",
  
    measurementId: "G-7CB568CPM1"
  
  };

  export default firebase.initializeApp(firebaseConfig)