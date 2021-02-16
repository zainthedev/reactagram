import { PostType } from '../types';
import admin from 'firebase';

export const removePost = (
	post: PostType,
	userCollectionQuery: any,
	postCollectionQuery: any,
	user: any
) => {
	const targetUserPosts = [...user.posts];
	const newUserPosts = targetUserPosts.filter((p) => p !== post.postID);

	userCollectionQuery.doc(user.name).update(
		{
			posts: newUserPosts,
		},
		{ merge: true }
	);

	if (post.tags.length > 0) {
		post.tags.forEach((tag) => {
			userCollectionQuery.doc(tag).update({
				taggedPosts: admin.firestore.FieldValue.arrayRemove(post.postID),
			});
		});
	}

	postCollectionQuery.doc(post.postID).delete();
};
