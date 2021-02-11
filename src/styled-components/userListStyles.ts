import styled from 'styled-components';

export const UserListWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 95%;
	padding: 10px;
	font-weight: 500;
	margin-top: 10px;
	border-top: solid 1px #dbdbdb;
	font-size: calc((0.2em + 1vmin) + (0.2em + 1vmax));
	overflow-y: auto;
`;

export const UserList = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 16px;
	width: 100%;
`;

export const UserListUser = styled.div`
	display: flex;
	place-content: space-between;
	font-size: 20px;
	width: 100%;
	height: 40px;
`;

export const UserCard = styled.div`
	display: flex;
	place-items: center;
	text-decoration: none;
	overflow-x: hidden;
	margin-right: 10px;
`;

export const RemoveFollowerButton = styled.div`
	display: flex;
	place-items: center;
	background-color: transparent;
	font-size: 14px;
	border: solid 1px #dbdbdb;
	padding: 6px;
	cursor: pointer;
`;

export const HandleFollowButton = styled.div`
	display: flex;
	place-items: center;
	background-color: transparent;
	font-size: 14px;
	border: solid 1px #dbdbdb;
	padding: 6px;
	cursor: pointer;
`;
