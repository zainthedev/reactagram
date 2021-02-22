import {
	UserProfileStats,
	UserProfileStat,
	UserPostsStat,
	UserProfileStatNumber,
	UserProfileStatText,
} from '../../styled-components/profileStyles';
import { UserModalType } from '../../types';

export const UserProfileStatsComponent = ({ user, handleClick }: UserModalType) => {
	return (
		<UserProfileStats>
			<UserPostsStat>
				<UserProfileStatNumber>{user.posts.length}</UserProfileStatNumber>
				<UserProfileStatText>{user.posts.length > 1 ? 'posts' : 'post'}</UserProfileStatText>
			</UserPostsStat>
			<UserProfileStat onClick={handleClick}>
				<UserProfileStatNumber>{user.followers.length}</UserProfileStatNumber>
				<UserProfileStatText>
					{user.followers.length > 1 ? 'followers' : 'follower'}
				</UserProfileStatText>
			</UserProfileStat>
			<UserProfileStat onClick={handleClick}>
				<UserProfileStatNumber>{user.following.length}</UserProfileStatNumber>
				<UserProfileStatText>following</UserProfileStatText>
			</UserProfileStat>
		</UserProfileStats>
	);
};
