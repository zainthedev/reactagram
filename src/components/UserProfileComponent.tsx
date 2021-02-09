import { useParams } from 'react-router-dom';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { useEffect, useState } from 'react';
import { UserProfile } from '../styled-components/profileStyles';
import { UserProfileInfoComponent } from './UserProfileInfoComponent';

export const UserProfileComponent = () => {
	const [user, setUser] = useState({
		name: '',
		displayPicture: '',
		posts: [],
		taggedPosts: [],
		followers: [],
		following: [],
		likes: [],
	});

	const { profile }: any = useParams();

	const userCollectionQuery = useFirestore().collection('users');
	const userCollectionData = useFirestoreCollectionData(userCollectionQuery);

	//Find the correct user in Firestore and set the state
	useEffect(() => {
		if (userCollectionData.data !== undefined) {
			const foundUser: any = userCollectionData.data.find((p) => p.name === profile);
			if (foundUser !== undefined) {
				const foundUsername = foundUser;
				setUser(foundUsername);
			}
		}
	}, [userCollectionData.data, profile]);

	return (
		<UserProfile>
			<UserProfileInfoComponent user={user}></UserProfileInfoComponent>
		</UserProfile>
	);
};
