import styled from 'styled-components';

export const ModalWrapper = styled.div`
	display: flex;
	place-items: center;
	position: fixed;
	top: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(38, 38, 38, 0.3);
`;

export const Modal = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	place-items: center;
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	padding: 20px;
	width: 20vw;
	height: 30vh;
	border-radius: 10px;
	font-weight: 700;
	font-size: 16px;
	border: solid 1px #dbdbdb;
	background: #fafafa;
	@media (max-width: 768px) {
		width: 80vw;
	} ;
`;
