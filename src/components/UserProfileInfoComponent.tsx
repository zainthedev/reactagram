import { Link } from 'react-router-dom';
import { UserProfileImageWrapper, UserIcon } from '../styled-components/imageStyles';
import {
	UserProfileInfo,
	UserProfileName,
	UserProfileStats,
	UserProfileStat,
	UserProfileStatNumber,
	UserProfileStatText,
} from '../styled-components/profileStyles';
import { UserType } from '../types';

export const UserProfileInfoComponent = ({ user }: UserType) => {
	return (
		<>
			<UserProfileImageWrapper>
				<UserIcon src={user.displayPicture} />
			</UserProfileImageWrapper>
			<UserProfileInfo>
				<UserProfileName>{user.name}</UserProfileName>
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
			</UserProfileInfo>
		</>
	);
};
