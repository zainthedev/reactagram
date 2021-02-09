export const addUser = async (query: any, username: string, picture: string) => {
	await query.doc(username).set({
		name: username,
		displayPicture: picture || 'default',
		posts: [],
		taggedPosts: [],
		followers: [],
		following: [],
		likes: [],
	});
};
