import { useState } from 'react';
import {
	UserProfileStats,
	UserProfileStat,
	UserProfileStatNumber,
	UserProfileStatText,
} from '../styled-components/profileStyles';
import { UserType } from '../types';
import { UserListModal } from './UserListModal';

export const UserProfileStatsComponent = ({ user }: UserType) => {
	const [displayModal, setDisplayModal] = useState({ display: false, list: '' });

	const handleClick = (e: React.MouseEvent) => {
		const targetList = e.currentTarget.textContent!.replace(/[0-9]/g, '');
		console.log(targetList);
		setDisplayModal({ display: true, list: targetList || '' });
	};

	return (
		<>
			{displayModal.display === true && <UserListModal user={user} list={displayModal.list} />}
			<UserProfileStats>
				<UserProfileStat>
					<UserProfileStatNumber>{user.posts.length}</UserProfileStatNumber>
					<UserProfileStatText>posts</UserProfileStatText>
				</UserProfileStat>
				<UserProfileStat onClick={handleClick}>
					<UserProfileStatNumber>{user.followers.length}</UserProfileStatNumber>
					<UserProfileStatText>followers</UserProfileStatText>
				</UserProfileStat>
				<UserProfileStat onClick={handleClick}>
					<UserProfileStatNumber>{user.following.length}</UserProfileStatNumber>
					<UserProfileStatText>following</UserProfileStatText>
				</UserProfileStat>
			</UserProfileStats>
		</>
	);
};
