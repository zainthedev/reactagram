import { useFirestore, useFirestoreCollectionData, useAuth } from 'reactfire';
import { useEffect, useState } from 'react';
import {
	UserListWrapper,
	UserList,
	UserListUser,
	RemoveFollowerButton,
	HandleFollowButton,
} from '../styled-components/userListStyles';
import { UserCardComponent } from './UserCardComponent';
import { UserListType } from '../types';
import { HandleFollowButtonComponent } from './HandleFollowButtonComponent';

export const UserListComponent = ({ user, list }: UserListType) => {
	const [targetList, setTargetList]: any = useState([]);

	const userCollectionQuery = useFirestore().collection('users');
	const userCollectionData = useFirestoreCollectionData(userCollectionQuery);

	const currentUserName = useAuth().currentUser?.email?.split('@').shift();
	const currentUser = userCollectionData.data.find((p) => p.name === currentUserName)!;

	const currentUserFollowing: any = currentUser.following;

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

	async function removeFollower(targetUser: any) {
		if (list === 'followers') {
			const targetUserFollowing = [...targetUser.following];
			const filteredFollowingArray = targetUserFollowing.filter((p) => p.name === user.name);

			const userFollowers = [...user.followers];
			const filteredFollowersArray = userFollowers.filter((p) => p !== targetUser.name);

			await userCollectionQuery.doc(targetUser.name).set(
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
				{targetList.length > 0
					? targetList.map((listUser: any) => {
							return (
								<UserListUser key={listUser.name}>
									<UserCardComponent key={listUser.name} user={listUser} />
									{listUser.name !== currentUserName &&
										(currentUserName === user.name && list === 'followers' ? (
											<RemoveFollowerButton onClick={() => removeFollower(listUser)}>
												Remove
											</RemoveFollowerButton>
										) : (
											<HandleFollowButtonComponent
												userCollectionQuery={userCollectionQuery}
												currentUserName={currentUserName!}
												currentUserFollowing={currentUserFollowing}
												targetUser={listUser}
											/>
										))}
								</UserListUser>
							);
					  })
					: 'No users found.'}
			</UserList>
		</UserListWrapper>
	);
};
