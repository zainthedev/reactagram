import styled from 'styled-components';
import { NavbarContentWrapper } from './navbarStyles';

export const ImageWrapper = styled.div`
	display: flex;
	align-items: center;
`;

export const GmailIcon = styled.img`
	max-width: 20px;
`;

export const Icon = styled.img`
	height: 30px;

	${NavbarContentWrapper} & {
	}
`;
