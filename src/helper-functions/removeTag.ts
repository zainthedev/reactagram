import { PostType } from '../types';

export const removeTag = (
	post: PostType,
	userCollectionQuery: any,
	postCollectionQuery: any,
	user: any
) => {
	const targetPostTags = [...post.tags];
	const filteredTagsArray = targetPostTags.filter((p) => p !== user.name);

	postCollectionQuery.doc(post.postID).set(
		{
			tags: filteredTagsArray,
		},
		{ merge: true }
	);

	const targetUserTags = [...user.taggedPosts];
	const newUserTags = targetUserTags.filter((p) => p !== post.postID);

	userCollectionQuery.doc(user.name).set(
		{
			taggedPosts: newUserTags,
		},
		{ merge: true }
	);
};
