import admin from 'firebase';
import uniqid from 'uniqid';
import { PostType } from '../types';
import { addNotification } from './addNotification';

export const addComment = (
	post: PostType,
	userCollectionQuery: any,
	postCollectionQuery: any,
	user: string,
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

	addNotification(post.postID, userCollectionQuery, user, post.poster, 'comment');
};
