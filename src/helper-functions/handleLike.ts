import admin from 'firebase';
import { PostType, UserType } from '../types';

export const handleLike = async (
	post: PostType,
	userCollectionQuery: any,
	postCollectionQuery: any,
	targetUser: any
) => {
	const targetUserLikes = [...targetUser.likes];
	const targetPostLikers = [...post.likers];

	console.log(targetUser);
	console.log(targetUserLikes);
	console.log(targetPostLikers);

	if (!targetUserLikes.includes(post.postID)) {
		await userCollectionQuery.doc(targetUser.name).update({
			likes: admin.firestore.FieldValue.arrayUnion(post.postID),
		});

		await postCollectionQuery.doc(post.postID).update({
			likers: admin.firestore.FieldValue.arrayUnion(targetUser.name),
		});
	} else {
		const filteredLikersArray = targetPostLikers.filter((p) => p !== targetUser.name);
		const filteredLikesArray = targetUserLikes.filter((p) => p !== post.postID);
		console.log(filteredLikersArray);
		console.log('up');

		await userCollectionQuery.doc(targetUser.name).set(
			{
				likes: filteredLikesArray,
			},
			{ merge: true }
		);

		await userCollectionQuery.doc(post.postID).set({
			likers: filteredLikersArray,
		});
	}
};
