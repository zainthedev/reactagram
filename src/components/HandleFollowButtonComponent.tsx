import { HandleFollowButton } from '../styled-components/userListStyles';
import { handleFollow } from '../helper-functions/handleFollow';
import { useAuth, useFirestore, useFirestoreCollectionData } from 'reactfire';
import { UserType } from '../types';

export const HandleFollowButtonComponent = ({ user }: UserType) => {
	const userCollectionQuery = useFirestore().collection('users');
	const userCollectionData = useFirestoreCollectionData(userCollectionQuery);
	const currentUserName = useAuth().currentUser?.displayName!;
	const currentUser = userCollectionData.data.find((p) => p.name === currentUserName)!;

	const currentUserFollowing: any = currentUser.following;
	return (
		<HandleFollowButton
			onClick={() =>
				handleFollow(userCollectionQuery, currentUserFollowing, currentUserName!, user)
			}
		>
			{currentUserFollowing !== undefined && currentUserFollowing.includes(user.name)
				? 'Unfollow'
				: 'Follow'}
		</HandleFollowButton>
	);
};
