import admin from 'firebase';
import { PostType, UserType } from '../types';

export const handleLike = (
	post: PostType,
	userCollectionQuery: any,
	postCollectionQuery: any,
	user: any
) => {
	const targetUserLikes = [...user.likes];
	const targetPostLikers = [...post.likers];

	if (!targetUserLikes.includes(post.postID)) {
		userCollectionQuery.doc(user.name).update({
			likes: admin.firestore.FieldValue.arrayUnion(post.postID),
		});

		postCollectionQuery.doc(post.postID).update({
			likers: admin.firestore.FieldValue.arrayUnion(user.name),
		});
	} else {
		const filteredLikersArray = targetPostLikers.filter((p) => p !== user.name);
		const filteredLikesArray = targetUserLikes.filter((p) => p !== post.postID);

		userCollectionQuery.doc(user.name).set(
			{
				likes: filteredLikesArray,
			},
			{ merge: true }
		);

		postCollectionQuery.doc(post.postID).set(
			{
				likers: filteredLikersArray,
			},
			{ merge: true }
		);
	}
};
