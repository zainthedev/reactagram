import styled from 'styled-components';
import { UserProfile } from './profileStyles';

export const Navbar = styled.div`
	display: flex;
	position: fixed;
	top: 0;
	place-content: space-around;
	place-items: center;
	height: 53px;
	width: 100%;
	font-size: calc((0.1em + 1vmin) + (0.1em + 1vmax));
	background: white;
	border-bottom: solid 1px #dbdbdb;
	box-sizing: border-box;
	@media (max-width: 768px) {
		bottom: 0;
		top: auto;
	}
`;

export const MobileHeader = styled.div`
	display: none;
	position: fixed;
	top: 0;
	/* place-content: space-around; */
	place-items: center;
	height: 53px;
	width: 100%;
	font-size: calc((0.1em + 1vmin) + (0.1em + 1vmax));
	background: white;
	border-bottom: solid 1px #dbdbdb;
	@media (max-width: 768px) {
		display: flex;
	}
`;

export const NavbarContentWrapper = styled.div`
	display: flex;
	height: 100%;
	width: 70%;
	max-width: 2560px;
	place-items: center;
	/* place-content: space-between; */
	${UserProfile} & {
		justify-content: space-around;
		width: 100%;
	}
	@media (max-width: 768px) {
		place-content: space-around;
		width: 100%;
	}
`;

export const MobileHeaderContentWrapper = styled.div`
	display: flex;
	height: 100%;
	width: 70%;
	place-items: center;
	place-content: space-between;
	@media (max-width: 768px) {
		place-content: space-around;
		width: 100%;
	}
`;

export const NavbarButtons = styled.div`
	display: flex;
	flex: 1;
	justify-content: flex-end;
	place-items: center;
	height: 100%;
	width: 20%;
	@media (max-width: 768px) {
		flex: auto;
		width: 100%;
		justify-content: space-evenly;
	}
`;

export const NavbarButton = styled.div`
	margin-left: 20px;
	@media (max-width: 768px) {
		margin-left: 0px;
	}
`;

export const NavbarLeft = styled.div`
	flex: 1;
`;
