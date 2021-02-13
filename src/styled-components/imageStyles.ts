import styled from 'styled-components';
import { UserProfileInfoWrapper } from './profileStyles';
import { UserList } from './userListStyles';
import { UploadImage } from './uploadStyles';
import { ModalWrapper, Modal } from './modalStyles';

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
		height: 30px;
		margin-right: 10px;
	}
`;

export const UploadedImage = styled.img`
	width: 200px;
	cursor: pointer;
	border-radius: 7px;
	${Modal} & {
		width: 100%;
		height: 100%;
		border-radius: 0px;
		@media (max-width: 768px) {
			width: 90vw;
		}
	}
`;
