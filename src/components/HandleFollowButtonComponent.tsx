import { ReactagramButton } from '../styled-components/globalStyles';
import { handleFollow } from '../helper-functions/handleFollow';
import { useGetUser } from '../helper-functions/useGetUser';
import { UserType } from '../types';

export const HandleFollowButtonComponent = ({ user }: UserType) => {
	const currentUser = useGetUser('currentUser');
	const currentUserFollowing: string[] = currentUser.following;

	return (
		<>
			{user.name !== currentUser.name && (
				<ReactagramButton
					onClick={() => handleFollow(currentUserFollowing, currentUser.name, user)}
				>
					{currentUserFollowing !== undefined && currentUserFollowing.includes(user.name)
						? 'Unfollow'
						: 'Follow'}
				</ReactagramButton>
			)}
		</>
	);
};
