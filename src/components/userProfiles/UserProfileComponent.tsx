import { useParams } from 'react-router-dom';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { useEffect, useState } from 'react';
import {
	UserProfile,
	UserProfilePosts,
	UserProfileTaggedPosts,
} from '../../styled-components/profileStyles';
import { UserProfileInfoComponent } from './UserProfileInfoComponent';
import { UserListModalComponent } from './UserListModalComponent';
import { PostBlockComponent } from '../post/PostBlockComponent';
import { PostBlocksWrapper } from '../../styled-components/postStyles';
import { PostType } from '../../types';
import { getTaggedPosts, getUserPosts } from '../../helper-functions/getUserPosts';
import { NavbarContentWrapper } from '../../styled-components/navbarStyles';
import { UserProfileNavbar } from '../../styled-components/profileStyles';
import { Icon } from '../../styled-components/imageStyles';
import gridIcon from '../../images/gridIcon.svg';
import tagIcon from '../../images/tagIcon.svg';

export const UserProfileComponent = () => {
	const [user, setUser] = useState({
		name: '',
		displayPicture: '',
		posts: [],
		taggedPosts: [],
		followers: [],
		following: [],
		likes: [],
		notifications: [],
	});
	const [posts, setPosts]: any = useState([]);
	const [taggedPosts, setTaggedPosts]: any = useState([]);
	const [displayModal, setDisplayModal] = useState({ display: false, list: '' });
	const [viewTagged, setViewTagged] = useState(false);

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
				setUser(foundUser);
			}
			const newPosts = getUserPosts(postCollectionQueryData.data, foundUser);
			setPosts(newPosts);

			const newTaggedPosts = getTaggedPosts(postCollectionQueryData.data, foundUser);
			setTaggedPosts(newTaggedPosts);
		}
	}, [userCollectionQueryData.data, postCollectionQueryData.data, profile]);

	return (
		<UserProfile>
			{userCollectionQueryData.data ? (
				userCollectionQueryData.data.includes(user) ? (
					<>
						{displayModal.display === true && (
							<UserListModalComponent
								user={user}
								list={displayModal.list}
								handleClick={handleClick}
							/>
						)}
						<UserProfileInfoComponent
							user={user}
							handleClick={handleClick}
						></UserProfileInfoComponent>
						<UserProfileNavbar>
							<NavbarContentWrapper>
								<Icon src={gridIcon} onClick={() => setViewTagged(false)} />
								<Icon src={tagIcon} onClick={() => setViewTagged(true)} />
							</NavbarContentWrapper>
						</UserProfileNavbar>
						{!viewTagged ? (
							<UserProfilePosts>
								{posts.length > 0 ? (
									<PostBlocksWrapper>
										{posts.length > 0 &&
											posts.map((post: PostType) => {
												return <PostBlockComponent key={post.postID} post={post} />;
											})}
									</PostBlocksWrapper>
								) : (
									`This user hasn't posted anything yet.`
								)}
							</UserProfilePosts>
						) : (
							<UserProfileTaggedPosts>
								{taggedPosts.length > 0 ? (
									<PostBlocksWrapper>
										{posts.length > 0 &&
											taggedPosts.map((post: PostType) => {
												return <PostBlockComponent key={post.postID} post={post} />;
											})}
									</PostBlocksWrapper>
								) : (
									'No tagged posts.'
								)}
							</UserProfileTaggedPosts>
						)}
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
