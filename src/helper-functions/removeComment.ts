import firebase from 'firebase';
import { CommentType, PostType } from '../types';

export const removeComment = (post: PostType, comment: CommentType) => {
	const targetPostComments = [...post.comments];
	const postsQuery = firebase.firestore().collection('posts');

	const filteredCommentsArray = targetPostComments.filter((p) => p.commentID !== comment.commentID);

	postsQuery.doc(post.postID).set(
		{
			comments: filteredCommentsArray,
		},
		{ merge: true }
	);
};
