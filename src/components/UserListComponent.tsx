import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { useEffect, useState } from 'react';
import { UserListWrapper, UserList } from '../styled-components/userListStyles';
import { UserCardComponent } from './UserCardComponent';
import { UserListType } from '../types';

export const UserListComponent = ({ user, list }: UserListType) => {
	const [targetList, setTargetList] = useState([]);

	const userCollectionQuery = useFirestore().collection('users');
	const userCollectionData = useFirestoreCollectionData(userCollectionQuery);

	useEffect(() => {
		if (userCollectionData.data !== undefined) {
			const targetUser = userCollectionData.data.find((p) => p.name === user.name)!;
			const targetUserFollowing: any = targetUser.following;
			const targetUserFollowers: any = targetUser.followers;
			const userList: any = [];
			if (list === 'followers') {
				targetUserFollowers.forEach((target: string) => {
					const newTarget = userCollectionData.data.find((p) => p.name === target)!;
					userList.push(newTarget);
				});
				setTargetList(userList);
			} else {
				targetUserFollowing.forEach((target: string) => {
					const newTarget = userCollectionData.data.find((p) => p.name === target)!;
					userList.push(newTarget);
				});
				setTargetList(userList);
			}
		}
	}, [userCollectionData.data, list, user.name]);

	return (
		<UserListWrapper>
			<UserList>
				{targetList.length > 0 &&
					targetList.map((user: any) => {
						return <UserCardComponent key={user.name} user={user} />;
					})}
			</UserList>
		</UserListWrapper>
	);
};
