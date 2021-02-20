import firebase from 'firebase';

export const handleFollow = async (
	currentUserFollowing: any[],
	currentUserName: string,
	targetUser: any
) => {
	const targetUserFollowers = [...targetUser.followers];
	const userFollowing = [...currentUserFollowing];

	const userQuery = firebase.firestore().collection('users');

	if (userFollowing.includes(targetUser.name)) {
		const filteredFollowersArray = targetUserFollowers.filter((p) => p !== currentUserName);
		const filteredFollowingArray = userFollowing.filter((p) => p !== targetUser.name);
		await userQuery.doc(targetUser.name).set(
			{
				followers: filteredFollowersArray,
			},
			{ merge: true }
		);

		await userQuery.doc(currentUserName).set(
			{
				following: filteredFollowingArray,
			},
			{ merge: true }
		);
	} else {
		targetUserFollowers.push(currentUserName);
		userFollowing.push(targetUser.name);
		await userQuery.doc(targetUser.name).set(
			{
				followers: targetUserFollowers,
			},
			{ merge: true }
		);
		await userQuery.doc(currentUserName).set(
			{
				following: userFollowing,
			},
			{ merge: true }
		);
	}
};
