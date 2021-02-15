import { useEffect, useState } from 'react';
import { useAuth, useFirestore, useFirestoreCollectionData } from 'reactfire';
import { PostType } from '../types';
import { PostBlockComponent } from './post/PostBlockComponent';
import { PostBlocksWrapper } from '../styled-components/postStyles';
import { ExploreWrapper } from '../styled-components/exploreStyles';

export const ExploreComponent = () => {
	const [posts, setPosts]: any = useState([]);
	const userCollectionQuery = useFirestore().collection('users');
	const userCollectionQueryData = useFirestoreCollectionData(userCollectionQuery);
	const currentUserName = useAuth().currentUser?.displayName!;

	const postCollectionQuery = useFirestore().collection('posts');
	const postCollectionQueryData = useFirestoreCollectionData(postCollectionQuery);

	//Get all of the posts and put them in state
	useEffect(() => {
		if (userCollectionQueryData.data && currentUserName && postCollectionQueryData.data) {
			//No need for fisher-yates here, just roughly sort all the posts randomly
			const newPosts = [...postCollectionQueryData.data].sort(() => 0.5 - Math.random());
			setPosts(newPosts);
		}
	}, [currentUserName, userCollectionQueryData.data, postCollectionQueryData.data]);

	return (
		<ExploreWrapper>
			<PostBlocksWrapper>
				{posts.length > 0 &&
					posts.map((post: PostType) => {
						return <PostBlockComponent key={post.postID} post={post} />;
					})}
			</PostBlocksWrapper>
		</ExploreWrapper>
	);
};
