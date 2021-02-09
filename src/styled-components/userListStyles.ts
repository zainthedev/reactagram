import styled from 'styled-components';

export const UserListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 90%;
	height: 50%;
	box-shadow: 0px 5px 8px 0px rgb(99 101 176);
	border-radius: 5px;
	padding: 15px;
	font-size: calc((0.2em + 1vmin) + (0.2em + 1vmax));
	overflow-y: auto;
`;

export const UserList = styled.div`
	display: flex;
	flex-direction: column;
`;

export const UserCard = styled.div`
	display: flex;
	place-items: center;
`;
