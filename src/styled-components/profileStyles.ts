import styled from 'styled-components';

export const UserProfile = styled.div`
	display: flex;
	place-content: center;
	width: 100%;
	height: 20%;
	min-height: 150px;
	@media (max-width: 768px) {
		min-height: 77px;
	}
`;

export const UserProfileInfoWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 3fr;
	place-items: center;
	place-content: center;
`;

export const UserProfileInfo = styled.div`
	display: flex;
	font-weight: 400;
	width: 100%;
	height: 100%;
	justify-content: space-evenly;
	flex-direction: column;
	place-items: center;
`;

export const UserProfileName = styled.div`
	display: flex;
	font-size: 28px;
	font-weight: 500;
`;

export const UserProfileStats = styled.div`
	display: flex;
	width: 100%;
	place-content: space-evenly;
	text-align: center;
	white-space: pre;
`;

export const UserProfileStat = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 20px;
	@media (max-width: 768px) {
		padding-left: 4vw;
		flex-direction: column;
	}
`;

export const UserPostsStat = styled(UserProfileStat)`
	display: flex;
`;

export const UserProfileStatNumber = styled.div`
	font-weight: 600;
`;

export const UserProfileStatText = styled.div`
	display: flex;
`;
