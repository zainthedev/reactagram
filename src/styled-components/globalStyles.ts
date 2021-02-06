import styled from 'styled-components';

export const ReactagramTextWrapper = styled.div`
	display: flex;
`;

export const ReactagramText = styled.div`
	font-family: 'Grand Hotel', cursive;
	font-size: 60px;
	user-select: none;
`;

export const ReactagramLink = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-evenly;
	background: none;
	color: #3d6ec9;
	font-weight: 600;
	white-space: break-spaces;
	cursor: pointer;
`;

export const GithubLink = styled.a`
	margin-top: 20px;
	cursor: pointer;
	color: #3d6ec9;
	font-size: calc((0.2em + 0.6vmin) + (0.2em + 0.6vmax));
	@media (max-width: 768px) {
		font-size: calc((0.2em + 1vmin) + (0.2em + 1vmax));
	}
`;
