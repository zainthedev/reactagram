import ReactDOM from 'react-dom';
import 'firebase/firestore';
import 'firebase/auth';
import { FirebaseAppProvider } from 'reactfire';
import { App } from './App';

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
		<App />
	</FirebaseAppProvider>,
	document.getElementById('root')
);
