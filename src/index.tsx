import React from 'react';
import ReactDOM from 'react-dom';
import { Routes } from './Routes';
import 'firebase/firestore';
import { FirebaseAppProvider } from 'reactfire';

// Firebase/reactfire config
const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

ReactDOM.render(
	<FirebaseAppProvider firebaseConfig={firebaseConfig}>
		<Routes />
	</FirebaseAppProvider>,
	document.getElementById('root')
);
