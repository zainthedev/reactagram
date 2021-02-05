import styled from 'styled-components';

export const Login = styled.div`
	display: flex;
	flex-direction: column;
	place-items: center;
	justify-content: center;
	height: 100%;
`;

export const AuthButton = styled.div`
	display: flex;
`;

export const AuthForm = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	height: 300px;
	max-width: 350px;
	place-items: center;
`;

export const AuthFormInputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	place-items: center;
	justify-content: space-evenly;
	height: 50%;
`;

export const AuthFormInput = styled.input`
	border: solid 1px grey;
	border-radius: 5px;
	font-size: calc((0.2em + 0.6vmin) + (0.2em + 0.6vmax));
	text-align: center;
	@media (max-width: 768px) {
		font-size: calc((0.2em + 1vmin) + (0.2em + 1vmax));
	}
	background: #fafafa;
`;

export const AuthFormButton = styled.button`
	border: none;
	border-radius: 5px;
	font-size: calc((0.2em + 0.6vmin) + (0.2em + 0.6vmax));
	text-align: center;
	background: rgba(0, 149, 246, 0.3);
	@media (max-width: 768px) {
		font-size: calc((0.2em + 1vmin) + (0.2em + 1vmax));
	} ;
`;

export const GmailLoginWrapper = styled.div`
	display: flex;
	align-items: flex-end;
	width: 60%;
	justify-content: space-evenly;
	background: rgba(0, 149, 246, 0.3);
	padding-top: 5px;
	padding-bottom: 5px;
	border-radius: 5px;
`;
