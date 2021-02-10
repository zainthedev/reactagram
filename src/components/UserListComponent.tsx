import { useFirestore, useFirestoreCollectionData, useAuth } from 'reactfire';
import { useEffect, useState } from 'react';
import {
	UserListWrapper,
	UserList,
	UserListUser,
	HandleFollowButton,
} from '../styled-components/userListStyles';
import { UserCardComponent } from './UserCardComponent';
import { UserListType } from '../types';

export const UserListComponent = ({ user, list }: UserListType) => {
	const [targetList, setTargetList]: any = useState([]);

	const userCollectionQuery = useFirestore().collection('users');
	const userCollectionData = useFirestoreCollectionData(userCollectionQuery);

	const currentUser = useAuth().currentUser?.displayName;
	const targetUser = userCollectionData.data.find((p) => p.name === user.name)!;
	const targetUserFollowing: any = targetUser.following;
	const targetUserFollowers: any = targetUser.followers;

	useEffect(() => {
		if (userCollectionData.data !== undefined) {
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
	}, [userCollectionData.data, list, user.name, targetUserFollowers, targetUserFollowing]);

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
							<UserListUser key={user.name}>
								<UserCardComponent key={user.name} user={user} />
								{currentUser === targetUser.name && (
									<HandleFollowButton onClick={() => removeFollower(user)}>
										Remove
									</HandleFollowButton>
								)}
							</UserListUser>
						);
					})}
			</UserList>
		</UserListWrapper>
	);
};
