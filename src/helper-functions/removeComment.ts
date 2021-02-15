import { PostType } from '../types';

export const removeComment = (post: PostType, postCollectionQuery: any, comment: any) => {
	const targetPostComments = [...post.comments];

	const filteredCommentsArray = targetPostComments.filter((p) => p.commentID !== comment.commentID);

	postCollectionQuery.doc(post.postID).set(
		{
			comments: filteredCommentsArray,
		},
		{ merge: true }
	);
};
