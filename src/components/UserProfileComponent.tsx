import { useParams } from 'react-router-dom';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { useEffect, useState } from 'react';
import { UserProfile } from '../styled-components/profileStyles';

export const UserProfileComponent = () => {
	const [user, setUser] = useState({
		name: '',
		followers: [],
		following: [],
		likes: [],
		displayPicture: '',
	});

	const { profile }: any = useParams();

	const userCollectionQuery = useFirestore().collection('users');
	const userCollectionData = useFirestoreCollectionData(userCollectionQuery);

	useEffect(() => {
		if (userCollectionData.data !== undefined) {
			const foundUser: any = userCollectionData.data.find((p) => p.name === profile);
			if (foundUser !== undefined) {
				const foundUsername = foundUser;
				setUser(foundUsername);
			}
		}
	}, [userCollectionData.data, profile]);

	return <UserProfile>{user.name}'s profile</UserProfile>;
};
