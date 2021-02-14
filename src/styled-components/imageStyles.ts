import styled from 'styled-components';
import { UserProfileInfoWrapper } from './profileStyles';
import { UserList } from './userListStyles';
import { UploadImage, FinaliseUpload } from './uploadStyles';
import { Modal } from './modalStyles';
import { PostCard } from './postStyles';

export const ImageWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: #262626;
	outline: none;
	${Modal} & {
		height: 100%;
	}
`;

export const UserProfileImageWrapper = styled(ImageWrapper)`
	place-content: center;
`;

export const GmailIcon = styled.img`
	max-width: 20px;
`;

export const Icon = styled.img`
	height: 30px;
	cursor: pointer;

	${UploadImage} & {
		height: 200px;
	}
`;

export const UserIcon = styled(Icon)`
	height: 30px;
	border-radius: 50%;
	${UserProfileInfoWrapper} & {
		height: 150px;
		@media (max-width: 768px) {
			height: 77px;
		}
		@media (max-width: 320px) {
			height: 60px;
		}
	}
	${UserList} & {
		margin-right: 10px;
	}
	${FinaliseUpload} & {
		height: 50px;
		margin-right: 10px;
	}
	${PostCard} & {
		margin-right: 10px;
	}
`;

export const UploadedImage = styled.img`
	width: 300px;
	cursor: pointer;
	border-radius: 7px;
	max-width: 600px;
	${Modal} & {
		width: 800px;
		height: 100%;
		border-radius: 0px;
		@media (max-width: 768px) {
			width: 90vw;
		}
	}
	${PostCard} & {
		width: 100vw;
		max-width: 600px;
		height: 100%;
		border-radius: 0px;
		padding-bottom: 10px;
	}
`;
