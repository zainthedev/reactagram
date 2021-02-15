import styled from 'styled-components';

export const UserProfile = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	max-width: 1000px;
	min-height: 150px;
	@media (max-width: 768px) {
		min-height: 77px;
	}
`;

export const UserProfileInfoWrapper = styled.div`
	display: flex;
	height: 20%;
	padding-bottom: 50px;
`;

export const UserProfileInfo = styled.div`
	display: flex;
	font-weight: 400;
	width: 100%;
	justify-content: space-evenly;
	flex-direction: column;
	place-items: center;
	border-bottom: solid 1px #dbdbdb;
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

export const UserProfilePosts = styled.div`
	text-align: center;
`;
