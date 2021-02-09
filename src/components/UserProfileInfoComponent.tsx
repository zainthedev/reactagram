import { Link } from 'react-router-dom';
import { ImageWrapper, UserIcon } from '../styled-components/imageStyles';
import { UserProfileInfo } from '../styled-components/profileStyles';
import { UserType } from '../types';

export const UserProfileInfoComponent = ({ user }: UserType) => {
	return (
		<UserProfileInfo>
			<ImageWrapper>
				<UserIcon src={user.displayPicture} />
			</ImageWrapper>
		</UserProfileInfo>
	);
};
