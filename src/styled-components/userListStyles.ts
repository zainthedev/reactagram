import styled from 'styled-components';

export const UserListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 95%;
	padding: 10px;
	margin-top: 10px;
	border-radius: 5px;
	font-size: calc((0.2em + 1vmin) + (0.2em + 1vmax));
	overflow-y: auto;
`;

export const UserList = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 20px;
`;

export const UserCard = styled.div`
	display: flex;
	place-items: center;
`;
