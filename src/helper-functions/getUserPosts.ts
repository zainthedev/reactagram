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
	following: any
) => {
	const postsArray: any = [];

	following.forEach((follower: any) => {
		const foundFollower: any = userCollectionQueryData.find((p: any) => p.name === follower);
		postsArray.push(...getUserPosts(postCollectionQueryData, foundFollower));
	});

	return postsArray;
};
