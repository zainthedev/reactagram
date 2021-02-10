import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { useEffect, useState } from 'react';
import { UserListWrapper, UserList } from '../styled-components/userListStyles';
import { UserCardComponent } from './UserCardComponent';
import { UserListType } from '../types';
import { UserType } from '../types';

export const UserListComponent = ({ user, list }: UserListType) => {
	const [targetList, setTargetList]: any = useState([]);

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

	async function removeFollower(follower: any) {
		if (list === 'followers') {
			const targetUserFollowing = [...follower.following];
			const userFollowers = [...user.followers];

			const filteredFollowingArray = targetUserFollowing.filter((p) => p.name === user.name);
			const filteredFollowersArray = userFollowers.filter((p) => p !== follower.name);

			await userCollectionQuery.doc(follower.name).set(
				{
					following: filteredFollowingArray,
				},
				{ merge: true }
			);
			await userCollectionQuery.doc(user.name).set(
				{
					followers: filteredFollowersArray,
				},
				{ merge: true }
			);
		}
	}

	return (
		<UserListWrapper>
			<UserList>
				{targetList.length > 0 &&
					targetList.map((user: any) => {
						return (
							<>
								<UserCardComponent key={user.name} user={user} />
								<div onClick={() => removeFollower(user)}>Remove follower</div>
							</>
						);
					})}
			</UserList>
		</UserListWrapper>
	);
};
