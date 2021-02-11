import { HandleFollowButton } from '../styled-components/userListStyles';
import { handleFollow } from '../helper-functions/handleFollow';

type HandleFollowButtonComponentProps = {
	userCollectionQuery: any;
	currentUserFollowing: any[];
	currentUserName: string;
	targetUser: any;
};

export const HandleFollowButtonComponent = ({
	userCollectionQuery,
	currentUserFollowing,
	currentUserName,
	targetUser,
}: HandleFollowButtonComponentProps) => {
	return (
		<HandleFollowButton
			onClick={() =>
				handleFollow(userCollectionQuery, currentUserFollowing, currentUserName!, targetUser)
			}
		>
			{currentUserFollowing !== undefined && currentUserFollowing.includes(targetUser.name)
				? 'Unfollow'
				: 'Follow'}
		</HandleFollowButton>
	);
};
