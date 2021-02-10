import { useParams } from 'react-router-dom';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { useEffect, useState } from 'react';
import { UserProfile } from '../styled-components/profileStyles';
import { UserProfileInfoComponent } from './UserProfileInfoComponent';
import { UserListModal } from './UserListModal';

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
	const [displayModal, setDisplayModal] = useState({ display: false, list: '' });

	const handleClick = (e: React.MouseEvent) => {
		const targetList = e.currentTarget.textContent!.replace(/[0-9]/g, '');
		console.log(targetList);
		setDisplayModal({ display: !displayModal.display, list: targetList || '' });
	};

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
			{displayModal.display === true && (
				<UserListModal user={user} list={displayModal.list} handleClick={handleClick} />
			)}
			<UserProfileInfoComponent user={user} handleClick={handleClick}></UserProfileInfoComponent>
		</UserProfile>
	);
};
