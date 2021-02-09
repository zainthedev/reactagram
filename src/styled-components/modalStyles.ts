import styled from 'styled-components';

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
	width: 40vw;
	height: 70vh;
	border-radius: 10px;
	font-weight: 700;
	font-size: 16px;
	border: solid 1px black;
	@media (max-width: 768px) {
		width: auto;
		margin-top: 8vh;
		min-height: 90vh;
		min-width: 100vw;
	} ;
`;
