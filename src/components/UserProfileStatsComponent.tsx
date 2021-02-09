import { Link } from 'react-router-dom';
import {
	UserProfileStats,
	UserProfileStat,
	UserProfileStatNumber,
	UserProfileStatText,
} from '../styled-components/profileStyles';
import { UserType } from '../types';

export const UserProfileStatsComponent = ({ user }: UserType) => {
	return (
		<UserProfileStats>
			<UserProfileStat>
				<UserProfileStatNumber>{user.posts.length}</UserProfileStatNumber>
				<UserProfileStatText>posts</UserProfileStatText>
			</UserProfileStat>
			<UserProfileStat>
				<UserProfileStatNumber>{user.followers.length}</UserProfileStatNumber>
				<UserProfileStatText>followers</UserProfileStatText>
			</UserProfileStat>
			<UserProfileStat>
				<UserProfileStatNumber>{user.following.length}</UserProfileStatNumber>
				<UserProfileStatText>following</UserProfileStatText>
			</UserProfileStat>
		</UserProfileStats>
	);
};
