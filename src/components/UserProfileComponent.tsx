import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
	useParams,
	useRouteMatch,
} from 'react-router-dom';
import {
	useUser,
	useAuth,
	useFirestore,
	useFirestoreCollection,
	useFirestoreCollectionData,
	useFirestoreDoc,
} from 'reactfire';
import { useEffect, useState } from 'react';
import { UserProfile } from '../styled-components/profileStyles';

export const UserProfileComponent = () => {
	const [username, setUsername] = useState('');

	const user = useUser();
	const userImage = user.data.photoURL;

	const auth = useAuth();
	const userCollectionQuery = useFirestore().collection('users');
	const userCollectionData = useFirestoreCollectionData(userCollectionQuery);

	useEffect(() => {
		if (userCollectionData.data !== undefined) {
			const foundUser: any = userCollectionData.data.find((p) => p.name === user.data.displayName);
			const foundUsername = foundUser.name;
			setUsername(foundUsername);
			console.log(username);
		}
	}, [userCollectionData.data, user.data.displayName, username]);
	let { url } = useRouteMatch();
	let { profile }: any = useParams();
	console.log(url);
	console.log(profile);

	return <UserProfile>{profile}'s profile</UserProfile>;
};
