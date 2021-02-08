export const addUser = async (query: any, username: string) => {
	await query.doc(username).set({
		name: username,
		posts: [],
		taggedPosts: [],
		followers: [],
		following: [],
		likes: [],
	});
};
