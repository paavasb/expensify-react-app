import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCYSzQ2Jv_Y23sMNn38G90DlqZ4Gvln7yI",
    authDomain: "expensify-53c16.firebaseapp.com",
    databaseURL: "https://expensify-53c16.firebaseio.com",
    projectId: "expensify-53c16",
    storageBucket: "expensify-53c16.appspot.com",
    messagingSenderId: "777555561747",
    appId: "1:777555561747:web:565b7e09e2edf7442adee6",
    measurementId: "G-455TH2S1CT"
  };

firebase.initializeApp(firebaseConfig);
firebase.database().ref().set({
    name: 'Paavas Bhasin'
});