import { useParams } from 'react-router-dom';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { useEffect, useState } from 'react';
import { UserProfile, UserProfilePosts } from '../../styled-components/profileStyles';
import { UserProfileInfoComponent } from './UserProfileInfoComponent';
import { UserListModal } from './UserListModal';
import { PostBlockComponent } from '../post/PostBlockComponent';
import { PostBlocksWrapper } from '../../styled-components/postStyles';
import { PostType } from '../../types';
import { getUserPosts } from '../../helper-functions/getUserPosts';

export const UserProfileComponent = () => {
	const [user, setUser] = useState({
		name: '',
		displayPicture: '',
		posts: [],
		taggedPosts: [],
		followers: [],
		following: [],
		likes: [],
	});
	const [posts, setPosts]: any = useState([]);
	const [displayModal, setDisplayModal] = useState({ display: false, list: '' });

	const { profile }: any = useParams();

	const userCollectionQuery = useFirestore().collection('users');
	const userCollectionQueryData = useFirestoreCollectionData(userCollectionQuery);

	const postCollectionQuery = useFirestore().collection('posts');
	const postCollectionQueryData = useFirestoreCollectionData(postCollectionQuery);

	const handleClick = (e: React.MouseEvent) => {
		const targetElement = e.target as HTMLInputElement;
		const targetList = e.currentTarget.textContent!.replace(/[0-9]/g, '');

		//Prevent closing the modal on button click
		if (
			targetElement.className !== 'sc-jJEJSO eWSPVY' &&
			targetElement.className !== 'sc-iktFzd eWArSt'
		) {
			setDisplayModal({ display: !displayModal.display, list: targetList || '' });
		}
	};

	//Find the correct user in Firestore and set the state
	useEffect(() => {
		if (userCollectionQueryData.data && postCollectionQueryData.data) {
			const foundUser: any = userCollectionQueryData.data.find((p) => p.name === profile);
			if (foundUser !== undefined) {
				const foundUsername = foundUser;
				setUser(foundUsername);
			}
			const newPosts = getUserPosts(postCollectionQueryData.data, foundUser);
			getUserPosts(postCollectionQueryData.data, foundUser);
			setPosts(newPosts);
		}
	}, [userCollectionQueryData.data, postCollectionQueryData.data, profile]);

	return (
		<UserProfile>
			{userCollectionQueryData.data ? (
				userCollectionQueryData.data.includes(user) ? (
					<>
						{displayModal.display === true && (
							<UserListModal user={user} list={displayModal.list} handleClick={handleClick} />
						)}
						<UserProfileInfoComponent
							user={user}
							handleClick={handleClick}
						></UserProfileInfoComponent>
						<UserProfilePosts>
							<PostBlocksWrapper>
								{posts.length > 0 &&
									posts.map((post: PostType) => {
										return <PostBlockComponent key={post.postID} post={post} />;
									})}
							</PostBlocksWrapper>
						</UserProfilePosts>
					</>
				) : (
					'User not found'
				)
			) : (
				'Loading...'
			)}
		</UserProfile>
	);
};
