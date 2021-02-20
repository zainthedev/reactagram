import admin from 'firebase';

export const addUser = async (query: any, username: string, picture: string) => {
	await query.doc(username).set({
		name: username,
		displayPicture:
			picture ||
			'https://firebasestorage.googleapis.com/v0/b/reactagram-zain.appspot.com/o/userIcon.svg?alt=media&token=b710b946-089d-4f09-ae3f-d2af5def3559',
		posts: [],
		taggedPosts: [],
		followers: [],
		following: ['zainthedev'],
		likes: [],
		notifications: [],
	});

	await query.doc('zainthedev').update({
		followers: admin.firestore.FieldValue.arrayUnion(username),
	});
};
