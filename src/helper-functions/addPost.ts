import firebase from 'firebase';
import admin from 'firebase';
import uniqid from 'uniqid';

export const addPost = async (
	userQuery: any,
	postsQuery: any,
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
				comments: '',
				date: new Date(),
			});
		});
};
