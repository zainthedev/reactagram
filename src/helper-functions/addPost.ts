import firebase from 'firebase';
import admin from 'firebase';
import uniqid from 'uniqid';
import { addNotification } from './addNotification';

export const addPost = async (
	username: string,
	picture: string,
	caption: string,
	location: string,
	tags: string[]
) => {
	const storage = firebase.storage();
	const storageRef = storage.ref();
	const postID = uniqid();
	const imageRef = storageRef.child(`${postID}`);
	const userQuery = firebase.firestore().collection('users');
	const postsQuery = firebase.firestore().collection('posts');

	await imageRef.putString(picture, 'data_url');

	userQuery.doc(username).update({
		posts: admin.firestore.FieldValue.arrayUnion(postID),
	});

	storage
		.refFromURL(`gs://reactagram-zain.appspot.com/${postID}`)
		.getDownloadURL()
		.then((url) => {
			postsQuery.doc(`${postID}`).set({
				postID: `${postID}`,
				poster: username,
				caption: caption,
				image: url,
				location: location,
				tags: tags,
				comments: [],
				date: new Date(),
				likers: [],
			});
		});

	if (tags.length > 0) {
		tags.forEach((tag) => {
			userQuery.doc(tag).update({
				taggedPosts: admin.firestore.FieldValue.arrayUnion(postID),
			});
		});
	}

	addNotification(`${postID}`, username, tags, 'tag');
};
