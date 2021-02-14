import { useEffect, useState } from 'react';
import { useAuth, useFirestore, useFirestoreCollectionData } from 'reactfire';
import { getFollowingPosts } from '../helper-functions/getUserPosts';
import { Home } from '../styled-components/homeStyles';
import { PostType } from '../types';
import { PostCardComponent } from './PostCardComponent';

export const HomeComponent = () => {
	const [posts, setPosts]: any = useState([]);
	const userCollectionQuery = useFirestore().collection('users');
	const userCollectionQueryData = useFirestoreCollectionData(userCollectionQuery);
	const currentUserName = useAuth().currentUser?.displayName!;

	const postCollectionQuery = useFirestore().collection('posts');
	const postCollectionQueryData = useFirestoreCollectionData(postCollectionQuery);
	console.log(postCollectionQueryData);

	//Get all of the posts made by the current user's following users and display put them in state
	useEffect(() => {
		if (
			userCollectionQueryData.data !== undefined &&
			currentUserName !== undefined &&
			postCollectionQueryData.data !== undefined &&
			posts.length === 0
		) {
			const currentUser: any = userCollectionQueryData.data.find((p) => p.name === currentUserName);
			const newPosts = getFollowingPosts(
				userCollectionQueryData.data,
				postCollectionQueryData.data,
				currentUser.following
			);
			setPosts(newPosts);
		}
	}, [userCollectionQueryData, currentUserName, postCollectionQueryData, posts]);

	return (
		<Home>
			{posts.length > 0 &&
				posts.map((post: PostType) => {
					console.log(post);
					return <PostCardComponent key={post.postID} post={post} />;
				})}
		</Home>
	);
};
