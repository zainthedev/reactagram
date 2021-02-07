import styled from 'styled-components';

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
	@media (max-width: 768px) {
		bottom: 0;
		top: auto;
	}
`;

export const NavbarContentWrapper = styled.div`
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
	justify-content: space-evenly;
	place-items: center;
	height: 100%;
	width: 20%;
	@media (max-width: 768px) {
		width: 100%;
	}
`;
