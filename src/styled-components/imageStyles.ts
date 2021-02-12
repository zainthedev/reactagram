import styled from 'styled-components';
import { NavbarContentWrapper } from './navbarStyles';
import { UserProfile } from './profileStyles';
import { UserList } from './userListStyles';

export const ImageWrapper = styled.div`
	display: flex;
	align-items: center;
	color: #262626;
	outline: none;
`;

export const UserProfileImageWrapper = styled(ImageWrapper)`
	place-content: center;
`;

export const GmailIcon = styled.img`
	max-width: 20px;
`;

export const Icon = styled.img`
	height: 30px;

	${NavbarContentWrapper} & {
	}
`;

export const UserIcon = styled(Icon)`
	height: 30px;
	border-radius: 50%;
	${UserProfile} & {
		height: 150px;
		@media (max-width: 768px) {
			height: 77px;
		}
	}
	${UserList} & {
		height: 30px;
		margin-right: 10px;
	}
`;

export const EditableImage = styled.img`
	width: 100%;
`;
