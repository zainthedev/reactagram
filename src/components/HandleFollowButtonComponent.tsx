import { ReactagramButton } from '../styled-components/globalStyles';
import { handleFollow } from '../helper-functions/handleFollow';
import { useAuth, useFirestore, useFirestoreCollectionData } from 'reactfire';
import { UserType } from '../types';

export const HandleFollowButtonComponent = ({ user }: UserType) => {
	const userCollectionQuery = useFirestore().collection('users');
	const userCollectionQueryData = useFirestoreCollectionData(userCollectionQuery);
	const currentUserName = useAuth().currentUser?.displayName!;
	const currentUser: any = userCollectionQueryData.data.find((p) => p.name === currentUserName);
	const currentUserFollowing: any = currentUser.following;

	return (
		<>
			{user.name !== currentUserName && (
				<ReactagramButton
					onClick={() =>
						handleFollow(userCollectionQuery, currentUserFollowing, currentUserName!, user)
					}
				>
					{currentUserFollowing !== undefined && currentUserFollowing.includes(user.name)
						? 'Unfollow'
						: 'Follow'}
				</ReactagramButton>
			)}
		</>
	);
};
