import firebase from 'firebase';
import admin from 'firebase';
import { PostType } from '../types';
import { addNotification } from './addNotification';

export const handleLike = (post: PostType, user: any) => {
	const targetUserLikes = [...user.likes];
	const targetPostLikers = [...post.likers];

	const userQuery = firebase.firestore().collection('users');
	const postsQuery = firebase.firestore().collection('posts');

	if (!targetUserLikes.includes(post.postID)) {
		console.log('liked');
		userQuery.doc(user.name).update({
			likes: admin.firestore.FieldValue.arrayUnion(post.postID),
		});

		postsQuery.doc(post.postID).update({
			likers: admin.firestore.FieldValue.arrayUnion(user.name),
		});

		addNotification(post.postID, user.name, post.poster, 'like');
	} else {
		console.log('unliked');
		const filteredLikersArray = targetPostLikers.filter((p) => p !== user.name);
		const filteredLikesArray = targetUserLikes.filter((p) => p !== post.postID);

		userQuery.doc(user.name).set(
			{
				likes: filteredLikesArray,
			},
			{ merge: true }
		);

		postsQuery.doc(post.postID).set(
			{
				likers: filteredLikersArray,
			},
			{ merge: true }
		);
	}
};
