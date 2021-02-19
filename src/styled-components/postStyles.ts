import styled from 'styled-components';
import { PostModal } from './modalStyles';

export const PostCardWrapper = styled.div`
	display: flex;
	max-width: 600px;
	flex-direction: column;
	box-shadow: 0px 0px 0px 1px #dbdbdb;
	background: white;
	padding-top: 20px;
	margin-bottom: 50px;
	${PostModal} & {
		padding-top: 10px;
		margin-bottom: 0px;
		overflow-y: scroll;
		overflow-x: hidden;
		max-height: 90vh;
		min-width: 250px;
		::-webkit-scrollbar {
			display: none;
		}
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
`;

export const PostCard = styled.div`
	display: flex;
	flex-direction: column;
	height: max-content;
	max-width: 100vw;
`;

export const NoPostModal = styled(PostCard)`
	min-width: 10vw;
	min-height: 10vh;
	font-weight: 600;
	place-content: center;
	place-items: center;
`;

export const PostInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-self: center;
	place-content: space-between;
	padding-bottom: 15px;
	font-weight: 500;
	width: 95%;
`;

export const PostInfoTop = styled.div`
	display: flex;
	place-content: space-between;
	align-items: center;
	font-weight: 500;
	width: 100%;
`;

export const PostCaptionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 20px;
	width: 95%;
	align-self: center;
`;

export const PostCaption = styled.p`
	width: 100%;
	max-height: 64px;
	overflow: hidden;
	white-space: pre-line;
	overflow-wrap: break-word;
`;

export const MoreButton = styled.div`
	color: #3d6ec9;
	cursor: pointer;
	font-weight: 500;
`;

export const PostCommentsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 20px;
	width: 95%;
	align-self: center;
`;

export const PostCommentWrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	align-self: center;
`;

export const PostComment = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	align-self: center;
	white-space: break-spaces;
	margin-bottom: 2px;
`;

export const PostTextInput = styled.textarea`
	border: solid 1px #dbdbdb;
	border-radius: 3px;
	padding-top: 5px;
	padding-bottom: 5px;
	font-size: calc((0.1em + 0.4vmin) + (0.1em + 0.4vmax));
	text-align: center;
	background: #fafafa;
	outline-color: #3d6ec9;
	font-family: Helvetica, Arial, sans-serif;
	font-size: calc((0.2em + 0.6vmin) + (0.2em + 0.6vmax));
	resize: none;
	@media (max-width: 768px) {
		border-radius: 3px;
		padding-top: 5px;
		padding-bottom: 5px;
		font-size: calc((0.2em + 0.8vmin) + (0.2em + 0.8vmax));
	}
`;

export const PostTime = styled.div`
	font-weight: 500;
	width: 95%;
	align-self: center;
	font-size: 14px;
	color: #8e8e8e;
	margin-bottom: 10px;
`;

export const PostBlocksWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	place-items: space-evenly;
	width: 100%;
	gap: 2px;
	@media (max-width: 768px) {
		height: 100%;
	}
`;
