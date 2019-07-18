import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FirestoreProvider } from 'react-firestore';
import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MSG_SND_ID,
};

firebase.initializeApp(config);

it('renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <FirestoreProvider firebase={firebase}>
    <App />
  </FirestoreProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
