import styled from 'styled-components';

export const AuthButton = styled.div`
	display: flex;
`;

export const AuthForm = styled.div`
	display: flex;
	flex-direction: column;
`;

export const SignupFormInput = styled.input`
	border: none;
	border-radius: 5px;
	font-size: calc((0.2em + 0.6vmin) + (0.2em + 0.6vmax));
	text-align: center;
	@media (max-width: 768px) {
		font-size: calc((0.2em + 1vmin) + (0.2em + 1vmax));
	} ;
`;
