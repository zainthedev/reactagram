import styled from 'styled-components';
import { NavbarContentWrapper } from './navbarStyles';
import { UserProfile } from './profileStyles';

export const ImageWrapper = styled.div`
	display: flex;
	align-items: center;
	color: #262626;
	outline: none;
	${UserProfile} & {
		height: 50px;
	}
`;

export const UserProfileImageWrapper = styled(ImageWrapper)`
	height: 50px;
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
		height: 50px;
	}
`;
