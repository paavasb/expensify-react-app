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

const database = firebase.database();

database.ref().set({
    name: 'Paavas Bhasin',
    age: 20,
    isSingle: false,
    location: {
        city: 'New Delhi',
        country: 'India'
    }
}).then(() => {
    console.log('Data is saved');
}).catch((error) => {
    console.log('This failed.', error);
});

//database.ref().set('This is my data.');

// database.ref('age').set(21);
// database.ref('location/city').set('Edinburgh');

database.ref('attributes').set({
    height: 180,
    weight: 83
}).then(() => {
    console.log('Data is added');
}).catch((error) => {
    console.log('This addition failed.', error);
});
