import { useFirestore, useFirestoreCollectionData, useAuth } from 'reactfire';
import { useEffect, useState } from 'react';
import { UserListWrapper, UserList, UserListUser } from '../../styled-components/userListStyles';
import { RemoveFollowerButton } from '../../styled-components/globalStyles';
import { UserCardComponent } from '../userProfiles/UserCardComponent';
import { UserListType } from '../../types';
import { HandleFollowButtonComponent } from '../HandleFollowButtonComponent';

export const UserListComponent = ({ user, list }: UserListType) => {
	const [targetList, setTargetList]: any = useState([]);

	const userCollectionQuery = useFirestore().collection('users');
	const userCollectionData = useFirestoreCollectionData(userCollectionQuery);

	const currentUserName = useAuth().currentUser?.displayName!;

	const targetUser = userCollectionData.data.find((p) => p.name === user.name)!;
	const targetUserFollowing: any = targetUser.following;
	const targetUserFollowers: any = targetUser.followers;

	// Set the target list to be either the list of followers or following users
	useEffect(() => {
		if (userCollectionData.data !== undefined) {
			const userList: any = [];
			if (list === 'followers' || list === 'follower') {
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

	function removeFollower(targetUser: any) {
		if (list === 'followers') {
			const targetUserFollowing = [...targetUser.following];
			const filteredFollowingArray = targetUserFollowing.filter((p) => p.name === user.name);

			const userFollowers = [...user.followers];
			const filteredFollowersArray = userFollowers.filter((p) => p !== targetUser.name);

			userCollectionQuery.doc(targetUser.name).set(
				{
					following: filteredFollowingArray,
				},
				{ merge: true }
			);
			userCollectionQuery.doc(user.name).set(
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
											<HandleFollowButtonComponent user={listUser} />
										))}
								</UserListUser>
							);
					  })
					: 'No users found.'}
			</UserList>
		</UserListWrapper>
	);
};
