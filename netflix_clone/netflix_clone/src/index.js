import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { FirebaseContext } from './context/firebase'

import { seedDatabase } from './seed'

const config = {
  apiKey: "AIzaSyDx4eBfv0kKYDksjgyNHY266UMfUc3IfDY",
  authDomain: "netflix---clone-62ce9.firebaseapp.com",
  databaseURL: "https://netflix---clone-62ce9-default-rtdb.firebaseio.com",
  projectId: "netflix---clone-62ce9",
  storageBucket: "netflix---clone-62ce9.appspot.com",
  messagingSenderId: "1028274966333",
  appId: "1:1028274966333:web:6d42937954fd242e47ff54"
};

const firebase = window.firebase.initializeApp(config)


ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase: window.firebase }} >
        <GlobalStyles />
        <App />
    </FirebaseContext.Provider>,
    document.getElementById('root')
);
