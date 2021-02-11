export const handleFollow = async (
	userCollectionQuery: any,
	currentUserFollowing: any[],
	currentUserName: string,
	targetUser: any
) => {
	const targetUserFollowers = [...targetUser.followers];
	const userFollowing = [...currentUserFollowing];

	if (userFollowing.includes(targetUser.name)) {
		const filteredFollowersArray = targetUserFollowers.filter((p) => p !== currentUserName);
		const filteredFollowingArray = userFollowing.filter((p) => p !== targetUser.name);
		await userCollectionQuery.doc(targetUser.name).set(
			{
				followers: filteredFollowersArray,
			},
			{ merge: true }
		);

		await userCollectionQuery.doc(currentUserName).set(
			{
				following: filteredFollowingArray,
			},
			{ merge: true }
		);
	} else {
		targetUserFollowers.push(currentUserName);
		userFollowing.push(targetUser.name);
		await userCollectionQuery.doc(targetUser.name).set(
			{
				followers: targetUserFollowers,
			},
			{ merge: true }
		);
		await userCollectionQuery.doc(currentUserName).set(
			{
				following: userFollowing,
			},
			{ merge: true }
		);
	}
};
