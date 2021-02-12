import { UserProfileStatsComponent } from './UserProfileStatsComponent';
import { HandleFollowButtonComponent } from '../HandleFollowButtonComponent';
import { UserProfileImageWrapper, UserIcon } from '../../styled-components/imageStyles';
import { UserProfileInfo, UserProfileName } from '../../styled-components/profileStyles';

export const UserProfileInfoComponent = ({ user, handleClick }: any) => {
	return (
		<>
			<UserProfileImageWrapper>
				<UserIcon src={user.displayPicture} />
			</UserProfileImageWrapper>
			<UserProfileInfo>
				<UserProfileName>{user.name}</UserProfileName>
				<UserProfileStatsComponent user={user} handleClick={handleClick} />
			</UserProfileInfo>
			<HandleFollowButtonComponent user={user} />
		</>
	);
};
