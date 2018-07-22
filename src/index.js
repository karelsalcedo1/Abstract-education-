import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//Integracion de mi back-end en Firebase
import firebase from 'firebase';
//Objecto con los datos de mi back-end
var config = {
  apiKey: ...,
  authDomain: ...,
  databaseURL: ...,
  projectId: ...,
  storageBucket: "",
  messagingSenderId: ...
};
firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
