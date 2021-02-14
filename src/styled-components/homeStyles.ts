import styled from 'styled-components';

export const Home = styled.div`
	display: flex;
	flex-direction: column;
	place-items: center;
	height: calc(100vh - 79px);
	width: 100%;
	@media (max-width: 768px) {
		height: 100%;
	}
`;
