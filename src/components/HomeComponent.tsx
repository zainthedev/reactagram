import { useEffect, useState } from 'react';
import { useAuth, useFirestore, useFirestoreCollectionData } from 'reactfire';
import { getUserPosts } from '../helper-functions/getUserPosts';
import { Home } from '../styled-components/homeStyles';
import { PostType, UserType } from '../types';
import { PostCardComponent } from './PostCardComponent';
import { ImageWrapper } from '../styled-components/imageStyles';

export const HomeComponent = () => {
	const [postIDs, setPostIDs]: any = useState([]);
	const [posts, setPosts]: any = useState([]);
	const userCollectionQuery = useFirestore().collection('users');
	const userCollectionQueryData = useFirestoreCollectionData(userCollectionQuery);
	const currentUserName = useAuth().currentUser?.displayName!;

	const postCollectionQuery = useFirestore().collection('posts');
	const postCollectionQueryData = useFirestoreCollectionData(postCollectionQuery);
	console.log(postCollectionQueryData);

	useEffect(() => {
		if (
			userCollectionQueryData.data !== undefined &&
			currentUserName !== undefined &&
			postCollectionQueryData.data !== undefined &&
			posts.length === 0
		) {
			const currentUser: any = userCollectionQueryData.data.find((p) => p.name === currentUserName);
			console.log(postCollectionQueryData.data);
			const newPosts = getUserPosts(postCollectionQueryData.data, currentUser);
			const newnewPosts = newPosts;
			setPosts(newnewPosts);
			console.log(posts);
		}
	}, [userCollectionQueryData, currentUserName, postCollectionQueryData, posts]);

	return (
		<Home>
			{posts.length > 0 &&
				posts.map((post: PostType) => {
					console.log(post);
					return <PostCardComponent post={post} />;
				})}
		</Home>
	);
};
