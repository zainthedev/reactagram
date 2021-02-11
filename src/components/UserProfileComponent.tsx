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

	const { profile }: any = useParams();

	const userCollectionQuery = useFirestore().collection('users');
	const userCollectionQueryData = useFirestoreCollectionData(userCollectionQuery);

	const handleClick = (e: React.MouseEvent) => {
		const targetElement = e.target as HTMLInputElement;
		const targetList = e.currentTarget.textContent!.replace(/[0-9]/g, '');

		//Prevent closing the modal on button click
		if (
			targetElement.className !== 'sc-jJEJSO eWSPVY' &&
			targetElement.className !== 'sc-iktFzd eWArSt'
		) {
			setDisplayModal({ display: !displayModal.display, list: targetList || '' });
		}
	};

	//Find the correct user in Firestore and set the state
	useEffect(() => {
		if (userCollectionQueryData.data !== undefined) {
			const foundUser: any = userCollectionQueryData.data.find((p) => p.name === profile);
			if (foundUser !== undefined) {
				const foundUsername = foundUser;
				setUser(foundUsername);
			}
		}
	}, [userCollectionQueryData.data, profile]);

	return (
		<UserProfile>
			{displayModal.display === true && (
				<UserListModal user={user} list={displayModal.list} handleClick={handleClick} />
			)}
			<UserProfileInfoComponent user={user} handleClick={handleClick}></UserProfileInfoComponent>
		</UserProfile>
	);
};
