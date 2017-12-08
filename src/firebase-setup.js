import firebase from 'firebase';

function setup_firebase() {
  var config = {
    apiKey: "AIzaSyBoMsJfeMehRLfTykAi8ohRClq4ND8mp_E",
    authDomain: "react-tvshow-searcher.firebaseapp.com",
    databaseURL: "https://react-tvshow-searcher.firebaseio.com",
    projectId: "react-tvshow-searcher",
    storageBucket: "react-tvshow-searcher.appspot.com",
    messagingSenderId: "251455246556"
  };

  firebase.initializeApp(config);
}

export default setup_firebase;
