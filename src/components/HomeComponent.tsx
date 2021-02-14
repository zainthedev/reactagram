import { useEffect, useState } from 'react';
import { useAuth, useFirestore, useFirestoreCollectionData } from 'reactfire';
import { getFollowingPosts } from '../helper-functions/getUserPosts';
import { Home } from '../styled-components/homeStyles';
import { PostType } from '../types';
import { PostCardComponent } from './post/PostCardComponent';

export const HomeComponent = () => {
	const [posts, setPosts]: any = useState([]);
	const [followingUsers, setFollowingUsers] = useState(0);
	const userCollectionQuery = useFirestore().collection('users');
	const userCollectionQueryData = useFirestoreCollectionData(userCollectionQuery);
	const currentUserName = useAuth().currentUser?.displayName!;

	const postCollectionQuery = useFirestore().collection('posts');
	const postCollectionQueryData = useFirestoreCollectionData(postCollectionQuery);

	//Get all of the posts made by the current user's following users and display put them in state
	useEffect(() => {
		if (
			userCollectionQueryData.data !== undefined &&
			currentUserName !== undefined &&
			postCollectionQueryData.data !== undefined
		) {
			const currentUser: any = userCollectionQueryData.data.find((p) => p.name === currentUserName);
			if (currentUser !== undefined) {
				console.log('hi');
				const newPosts = getFollowingPosts(
					userCollectionQueryData.data,
					postCollectionQueryData.data,
					currentUser.following,
					currentUser
				);
				setFollowingUsers(currentUser.following.length);
				setPosts(newPosts);
			}
		}
	}, [currentUserName, userCollectionQueryData.data, postCollectionQueryData.data]);

	return (
		<Home>
			{posts.length > 0
				? posts.map((post: PostType) => {
						console.log(post);
						return <PostCardComponent key={post.postID} post={post} />;
				  })
				: `Looks like the people you follow haven't posted anything. Why not make one yourself?`}
			{followingUsers > 0 &&
				posts.length === 0 &&
				`Looks like you aren't following anyone. Use the search function or the explore page to find new users.`}
		</Home>
	);
};
