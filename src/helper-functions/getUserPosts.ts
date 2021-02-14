import { PostType } from '../types';

export const getUserPosts = (postCollectionQueryData: any, poster: any) => {
	const gotPosts = postCollectionQueryData.filter((post: PostType) => {
		return post.poster === poster.name;
	});

	return gotPosts;
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

	//Sort by most recent
	const sortedPosts = postsArray.sort(
		(post1: PostType, post2: PostType) => post2.date - post1.date
	);

	return sortedPosts;
};
