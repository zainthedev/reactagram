import { Link } from 'react-router-dom';
import { UserProfileImageWrapper, UserIcon } from '../styled-components/imageStyles';
import {
	UserProfileInfoWrapper,
	UserProfileInfo,
	UserProfileName,
	UserProfileStats,
	UserProfileStat,
} from '../styled-components/profileStyles';
import { UserType } from '../types';

export const UserProfileInfoComponent = ({ user }: UserType) => {
	return (
		<UserProfileInfoWrapper>
			<UserProfileImageWrapper>
				<UserIcon src={user.displayPicture} />
			</UserProfileImageWrapper>
			<UserProfileInfo>
				<UserProfileName>{user.name}</UserProfileName>
				<UserProfileStats>
					<UserProfileStat>{user.posts.length} posts</UserProfileStat>
					<UserProfileStat>{user.followers.length} followers</UserProfileStat>
					<UserProfileStat>{user.following.length} following</UserProfileStat>
				</UserProfileStats>
			</UserProfileInfo>
		</UserProfileInfoWrapper>
	);
};
