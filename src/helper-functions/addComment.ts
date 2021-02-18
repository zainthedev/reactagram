import firebase from 'firebase';
import admin from 'firebase';
import uniqid from 'uniqid';
import { PostType } from '../types';
import { addNotification } from './addNotification';

export const addComment = (post: PostType, user: string, comment: any) => {
	const postsQuery = firebase.firestore().collection('posts');

	const commentID = uniqid();
	postsQuery.doc(post.postID).update({
		comments: admin.firestore.FieldValue.arrayUnion({
			commentID: `${commentID}`,
			poster: user,
			comment: comment.comment,
		}),
	});

	addNotification(post.postID, user, post.poster, 'comment');
};
