import styled from 'styled-components';
import { UserProfile, UserProfileInfoWrapper } from './profileStyles';
import { UserList } from './userListStyles';
import { UploadImage, FinaliseUpload, TagsWrapper } from './uploadStyles';
import { Modal, PostModal } from './modalStyles';
import { PostBlocksWrapper, PostCard, PostCommentWrapper } from './postStyles';
import { StyledPopover } from './globalStyles';
import { NavbarContentWrapper } from './navbarStyles';

export const ImageWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: #262626;
	outline: none;
	-webkit-tap-highlight-color: transparent;
	user-select: none;
	${Modal} & {
		height: 100%;
	}
	${PostCard} & {
		align-self: flex-start;
	}
	${NavbarContentWrapper} & {
		font-size: calc((0.1em + 0.4vmin) + (0.1em + 0.4vmax));
		cursor: pointer;
	}
`;

export const SearchImageWrapper = styled(ImageWrapper)`
	${NavbarContentWrapper} & {
		font-size: calc((0.1em + 0.4vmin) + (0.1em + 0.4vmax));
		cursor: pointer;
		@media (max-width: 768px) {
			display: none;
		}
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
	${PostCard} & {
		margin-bottom: 10px;
	}

	${PostCommentWrapper} & {
		margin-bottom: 0px;
		height: 16px;
	}
	${TagsWrapper} & {
		height: 16px;
		margin-left: 10px;
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
		margin-bottom: 0px;
	}
	${StyledPopover} & {
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
	${PostBlocksWrapper} & {
		width: 19vw;
		border-radius: 0px;
		@media (max-width: 768px) {
			width: 29vw;
		}
		@media (min-width: 2560px) {
			width: 14vw;
		}
	}
	${UserProfile} & {
		width: 17vw;
		border-radius: 0px;
		@media (max-width: 768px) {
			width: 29vw;
		}
		@media (min-width: 2560px) {
			width: 12vw;
		}
	}
	${PostModal} & {
		width: 100vw;
		max-width: 100%;
		padding: 0px;
		height: 100%;
		border-radius: 0px;
		padding-bottom: 10px;
	}
`;
