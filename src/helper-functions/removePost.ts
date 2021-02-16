import { PostType } from '../types';

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

	postCollectionQuery.doc(post.postID).delete();
};
