import styled from 'styled-components';
import { MobileHeader } from './navbarStyles';

export const UploadImageWrapper = styled.div`
	display: flex;
	place-items: center;
	place-content: center;
	height: 80vh;
	width: 100%;
`;

export const UploadImage = styled.div`
	padding: 30px;
	box-shadow: 2px 2px 4px 1px #dbdbdb;
`;

export const CropperContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
`;

export const Controls = styled(MobileHeader)`
	position: fixed;
	display: flex;
	height: 80px;
	left: 0;
	bottom: 0;
	top: auto;
`;

export const FinaliseUpload = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	place-content: space-between;
	max-width: 1000px;
	min-height: 150px;
`;

export const CaptionInputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 50vh;
	justify-content: space-evenly;
	place-items: center;
`;

export const NavigationButtonWrapper = styled.div`
	display: flex;
	width: 100%;
	place-content: space-between;
`;

export const ExtraInfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	place-items: center;
	height: 20%;
	width: 100%;
	place-content: space-evenly;
`;
