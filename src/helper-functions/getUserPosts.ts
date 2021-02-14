import { PostType } from '../types';

export const getUserPosts = (postCollectionQueryData: any, poster: any) => {
	const gotPosts = postCollectionQueryData.filter((post: PostType) => {
		return post.poster === poster.name;
	});

	return gotPosts;
};
