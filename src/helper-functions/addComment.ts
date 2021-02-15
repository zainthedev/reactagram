import admin from 'firebase';
import uniqid from 'uniqid';
import { PostType, UserType } from '../types';

export const addComment = (
	post: PostType,
	postCollectionQuery: any,
	user: UserType,
	comment: any
) => {
	const commentID = uniqid();
	postCollectionQuery.doc(post.postID).update({
		comments: admin.firestore.FieldValue.arrayUnion({
			commentID: `${commentID}`,
			poster: user,
			comment: comment.comment,
		}),
	});
};
