import styled from 'styled-components';
import { NavbarContentWrapper } from './navbarStyles';
import { UserProfileInfo } from './profileStyles';

export const ImageWrapper = styled.div`
	display: flex;
	align-items: center;
	color: #262626;
	outline: none;
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
	${UserProfileInfo} & {
		height: 50px;
	}
`;
