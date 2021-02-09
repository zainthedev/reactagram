import { UserProfileStatsComponent } from './UserProfileStatsComponent';
import { UserProfileImageWrapper, UserIcon } from '../styled-components/imageStyles';
import { UserProfileInfo, UserProfileName } from '../styled-components/profileStyles';
import { UserType } from '../types';

export const UserProfileInfoComponent = ({ user }: UserType) => {
	return (
		<>
			<UserProfileImageWrapper>
				<UserIcon src={user.displayPicture} />
			</UserProfileImageWrapper>
			<UserProfileInfo>
				<UserProfileName>{user.name}</UserProfileName>
				<UserProfileStatsComponent user={user} />
			</UserProfileInfo>
		</>
	);
};
