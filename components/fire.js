import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCvvKgd3CnLJlfpVQevb6i_K4Usi_m6Pqk",
    authDomain: "kageyama-ryouta20.firebaseapp.com",
    projectId: "kageyama-ryouta20",
    storageBucket: "kageyama-ryouta20.appspot.com",
    messagingSenderId: "1059022984971",
    appId: "1:1059022984971:web:f512f07176655c9578b40e"
};
if (firebase.apps.length == 0){
    firebase.initializeApp(firebaseConfig)
}