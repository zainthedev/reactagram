import styled from 'styled-components';

export const PostCardWrapper = styled.div`
	display: flex;
	max-width: 600px;
	flex-direction: column;
	box-shadow: 0px 0px 0px 1px #dbdbdb;
	background: white;
	padding-top: 20px;
	margin-bottom: 50px;
`;

export const PostCard = styled.div`
	display: flex;
	flex-direction: column;
	height: max-content;
	margin-bottom: 10px;
`;

export const PostInfo = styled.div`
	padding-bottom: 15px;
	font-weight: 500;
	width: 95%;
	align-self: center;
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
`;

export const MoreButton = styled.div`
	color: #3d6ec9;
	cursor: pointer;
	font-weight: 500;
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
	@media (max-width: 768px) {
		border-radius: 3px;
		padding-top: 5px;
		padding-bottom: 5px;
		font-size: calc((0.2em + 0.8vmin) + (0.2em + 0.8vmax));
	}
`;
