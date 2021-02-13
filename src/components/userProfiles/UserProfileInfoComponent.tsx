import { UserProfileStatsComponent } from './UserProfileStatsComponent';
import { UserProfileImageWrapper, UserIcon } from '../../styled-components/imageStyles';
import {
	UserProfileInfoWrapper,
	UserProfileInfo,
	UserProfileName,
} from '../../styled-components/profileStyles';
import { HandleFollowButtonComponent } from '../HandleFollowButtonComponent';

export const UserProfileInfoComponent = ({ user, handleClick }: any) => {
	return (
		<UserProfileInfoWrapper>
			<UserProfileImageWrapper>
				<UserIcon src={user.displayPicture} />
			</UserProfileImageWrapper>
			<UserProfileInfo>
				<UserProfileName>{user.name}</UserProfileName>
				<UserProfileStatsComponent user={user} handleClick={handleClick} />
				<HandleFollowButtonComponent user={user} />
			</UserProfileInfo>
		</UserProfileInfoWrapper>
	);
};
