import * as firebase from 'firebase';


var config = {
  apiKey: "AIzaSyBoMsJfeMehRLfTykAi8ohRClq4ND8mp_E",
  authDomain: "react-tvshow-searcher.firebaseapp.com",
  databaseURL: "https://react-tvshow-searcher.firebaseio.com",
  projectId: "react-tvshow-searcher",
  storageBucket: "react-tvshow-searcher.appspot.com",
  messagingSenderId: "251455246556"
};

firebase.initializeApp(config);

var database = firebase.database();

export var User = {};
export function auth () {
  return new Promise(function (resolve, reject) {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(function (result) {
        User.user = result.user;
        resolve(User);
      })
      .catch(function (e) {
        reject(e);
      });
  });
}

firebase.auth()
  .onAuthStateChanged(function(user) {
    if (user) {
      User.user = user;
      console.log(user);
    }
  });


export default database;
