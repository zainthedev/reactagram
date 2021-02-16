import { PostType } from '../types';

// Sorts post by most recent
function sortPosts(array: PostType[]) {
	array.sort((post1: PostType, post2: PostType) => post2.date - post1.date);
	return array;
}

export const getUserPosts = (postCollectionQueryData: any, poster: any) => {
	const gotPosts = postCollectionQueryData.filter((post: PostType) => {
		return post.poster === poster.name;
	});

	return sortPosts(gotPosts);
};

export const getTaggedPosts = (postCollectionQueryData: any, user: any) => {
	const gotPosts: PostType[] = [];

	postCollectionQueryData.forEach((post: PostType) => {
		const postTags = [...post.tags];
		if (postTags.includes(user.name)) {
			gotPosts.push(post);
		}
	});

	return sortPosts(gotPosts);
};

export const getFollowingPosts = (
	userCollectionQueryData: any,
	postCollectionQueryData: any,
	following: any,
	currentUser: string
) => {
	const postsArray: any = [];

	//Get the posts of all of current user followers
	following.forEach((follower: any) => {
		const foundFollower: any = userCollectionQueryData.find((p: any) => p.name === follower);
		postsArray.push(...getUserPosts(postCollectionQueryData, foundFollower));
	});

	//Get current user posts
	postsArray.push(...getUserPosts(postCollectionQueryData, currentUser));

	return sortPosts(postsArray);
};
