import styled from 'styled-components';

export const Auth = styled.div`
	display: flex;
	background: #fafafa;
	flex-direction: column;
	place-items: center;
	place-content: center;
	height: 100%;
`;

export const AuthButton = styled.div`
	display: flex;
	width: 100%;
	place-content: center;
	border: none;
	border-radius: 5px;
	padding-top: 6px;
	padding-bottom: 6px;
	font-size: calc((0.2em + 0.6vmin) + (0.2em + 0.6vmax));
	font-weight: 500;
	text-align: center;
	color: white;
	background: rgba(0, 149, 246, 0.3);
	cursor: pointer;
	user-select: none;
	@media (max-width: 768px) {
		font-size: calc((0.2em + 1vmin) + (0.2em + 1vmax));
	}
	:hover {
		background: rgba(0, 149, 246, 1);
	}
`;

export const AuthForm = styled.div`
	display: flex;
	background: white;
	padding: 50px;
	border: solid 1px #dbdbdb;
	border-radius: 2px;
	flex-direction: column;
	place-content: space-evenly;
	height: 400px;
	place-items: center;
	@media (max-width: 425px) {
		place-content: center;
		width: 100%;
		padding: 0px;
		border: none;
		background: none;
	} ;
`;

export const GmailLoginWrapper = styled(AuthButton)`
	display: flex;
	align-items: flex-end;
	justify-content: space-evenly;
	background: none;
	color: #3d6ec9;
	width: 90%;
	min-inline-size: max-content;
	:hover {
		background: none;
	}
`;

export const AuthTextWrapper = styled.div`
	display: flex;
	margin-top: 20px;
	border: solid 1px #dbdbdb;
	border-radius: 3px;
	padding: 15px;
	background: white;
	font-size: calc((0.2em + 0.6vmin) + (0.2em + 0.6vmax));
	text-align: center;
	@media (max-width: 768px) {
		font-size: calc((0.2em + 1vmin) + (0.2em + 1vmax));
	}
`;

export const TestingText = styled(AuthTextWrapper)`
	flex-direction: column;
	border: solid 1px #dbdbdb;
	border-radius: 3px;
	padding: 8px;
	background: white;
	white-space: pre;
	text-align: center;
	line-height: 1.5;
`;
