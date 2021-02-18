import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { NavbarContentWrapper, MobileHeaderContentWrapper } from './navbarStyles';
import { AuthButton } from './authStyles';
import { UploadImage, FinaliseUpload } from './uploadStyles';
import searchIcon from '../images/searchIcon.svg';
import Popover from 'react-bootstrap/Popover';
import { PostCaption, PostCard, PostCommentsWrapper, PostInfo } from './postStyles';
import { Modal, PostModal } from './modalStyles';
import { UserProfileNavbar } from './profileStyles';
import { Notifications } from './notificationsStyles';

export const AppWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	place-content: center;
	width: 60vw;
	height: max-content;
	padding-top: 25px;
	@media (max-width: 768px) {
		width: 90vw;
		align-items: center;
		margin-bottom: 55px;
	}
`;

export const ReactagramTextWrapper = styled.div`
	display: flex;
	margin-bottom: 10px;
`;

export const ReactagramText = styled.div`
	font-family: 'Grand Hotel', cursive;
	font-size: 60px;
	user-select: none;
	color: #262626;
	${NavbarContentWrapper} & {
		font-size: 33px;
		@media (max-width: 768px) {
			display: none;
		}
	}
	${MobileHeaderContentWrapper} & {
		font-size: 33px;
	}
`;

export const ReactagramLink = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: space-evenly;
	background: none;
	color: rgba(61, 110, 201, 0.8);
	font-weight: 600;
	white-space: break-spaces;
	cursor: pointer;
	outline: none;
	:hover {
		color: rgba(61, 110, 201, 1);
	}
	${UploadImage} & {
		font-size: 24px;
		text-align: center;
	}
	${UserProfileNavbar} & {
		width: 100%;
		background: white;
		border-bottom: solid 1px black;
	}
`;

export const RouterLink = styled(Link)`
	text-decoration: none;
	-webkit-tap-highlight-color: transparent;
	user-select: none;
	color: #262626;
	align-self: center;
	${PostCaption} & {
		font-weight: 600;
	}
	${PostCommentsWrapper} & {
		font-weight: 600;
		width: auto;
	}
	${PostModal} & {
		width: auto;
	}
`;

export const GithubLink = styled.a`
	margin-top: 20px;
	cursor: pointer;
	color: rgba(61, 110, 201, 0.8);
	font-size: calc((0.2em + 0.6vmin) + (0.2em + 0.6vmax));
	@media (max-width: 768px) {
		font-size: calc((0.2em + 1vmin) + (0.2em + 1vmax));
	}
	outline: none;
	:hover {
		color: rgba(61, 110, 201, 1);
	}
`;

export const FormInputWrapper = styled.form`
	display: flex;
	flex-direction: column;
	place-items: center;
	justify-content: space-evenly;

	height: 50%;
	${FinaliseUpload} & {
		flex-direction: row;
		margin-bottom: 10px;
		height: auto;
	}
	${PostCard} & {
		flex-direction: row;
		border-top: solid 1px #dbdbdb;
		padding-right: 10px;
	}
`;

export const FormInput = styled.input`
	border: solid 1px #dbdbdb;
	border-radius: 3px;
	padding-top: 5px;
	padding-bottom: 5px;
	font-size: calc((0.1em + 0.4vmin) + (0.1em + 0.4vmax));
	text-align: center;
	background: #fafafa;
	outline-color: #3d6ec9;
	${NavbarContentWrapper} & {
		background-image: url(${searchIcon});
		background-position-x: 30%;
		background-position-y: 45%;
		background-size: calc((0.1em + 0.4vmin) + (0.1em + 0.4vmax));
		background-repeat: no-repeat;
		@media (max-width: 768px) {
			display: none;
		}
	}
	${FinaliseUpload} & {
		font-size: calc((0.2em + 0.6vmin) + (0.2em + 0.6vmax));
	}

	${PostCard} & {
		outline: none;
		border: none;
		width: 85%;
		height: 100%;
		background: none;
		font-size: 16px;
		padding: 10px;
		text-align: left;
	}

	@media (max-width: 768px) {
		border-radius: 3px;
		padding-top: 5px;
		padding-bottom: 5px;
		font-size: calc((0.2em + 0.8vmin) + (0.2em + 0.8vmax));
	}
`;

export const StyledPopover = styled(Popover)`
	display: flex;
	flex-direction: column;
	border-radius: 5px;
	background: white;
	box-shadow: 0px 0px 4px 1px #dbdbdb;
	white-space: pre;
	color: #262626;
	outline: none;
	user-select: none;
	-webkit-tap-highlight-color: transparent;
`;

export const TextButton = styled.div`
	display: flex;
	border: none;
	padding: 10px;
	font-size: 20px;
	color: #262626;
	text-align: center;
	color: white;
	cursor: pointer;
	user-select: none;
	:hover {
		background: #f7f7f7;
	}
	${Notifications} & {
		border-bottom: solid 1px #dbdbdb;
	}
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

export const ReactagramButton = styled(AuthButton)`
	font-size: calc((0.2em + 0.6vmin) + (0.2em + 0.6vmax));
	width: 25%;
	align-self: center;
	align-items: center;
	${Modal} & {
		width: auto;
		font-size: 16px;
	}
	${PostInfo} & {
		width: 50%;
		height: 20%;
	}
`;
