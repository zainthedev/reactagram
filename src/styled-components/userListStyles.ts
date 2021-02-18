import styled from 'styled-components';
import { PostCard } from './postStyles';

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
	place-items: center;
`;

export const UserListUser = styled.div`
	display: flex;
	place-content: space-between;
	font-size: 20px;
	width: 100%;
	height: 40px;
	margin-bottom: 10px;
`;

export const UserCard = styled.div`
	display: flex;
	place-items: center;
	text-decoration: none;
	overflow-x: hidden;
	margin-right: 10px;
	white-space: break-spaces;
	${PostCard} & {
		font-weight: 600;
		padding-bottom: 10px;
	}
`;
