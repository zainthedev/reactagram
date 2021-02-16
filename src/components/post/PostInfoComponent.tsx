import { useState } from 'react';
import { ModalWrapper, Modal } from '../../styled-components/modalStyles';
import { UserCardComponent } from '../userProfiles/UserCardComponent';
import { PostInfo, PostInfoTop } from '../../styled-components/postStyles';
import { ImageWrapper, Icon } from '../../styled-components/imageStyles';
import { ReactagramButton } from '../../styled-components/globalStyles';
import { removePost } from '../../helper-functions/removePost';
import { PostType } from '../../types';
import deleteIcon from '../../images/deleteIcon.svg';

interface PostInfoProps {
	post: PostType;
	poster: any;
	currentUser: any;
	userCollectionQuery: any;
	postCollectionQuery: any;
}

export const PostInfoComponent = ({
	post,
	poster,
	currentUser,
	userCollectionQuery,
	postCollectionQuery,
}: PostInfoProps) => {
	const [deletingPost, setDeletingPost] = useState(false);

	const handleDelete = () => {
		setDeletingPost(!deletingPost);
	};

	return (
		<PostInfo>
			{deletingPost && (
				<ModalWrapper onClick={handleDelete}>
					<Modal>
						Are you sure you want to delete this post?
						<ReactagramButton
							onClick={() =>
								removePost(post, userCollectionQuery, postCollectionQuery, currentUser)
							}
							style={{ background: '#ed4956' }}
						>
							Delete
						</ReactagramButton>
						<ReactagramButton onClick={handleDelete}>Cancel</ReactagramButton>
					</Modal>
				</ModalWrapper>
			)}
			<PostInfoTop>
				<UserCardComponent key={post.postID} user={poster} />
				<ImageWrapper onClick={handleDelete}>
					{poster.name === currentUser.name && <Icon alt='Delete button' src={deleteIcon} />}
				</ImageWrapper>
			</PostInfoTop>
			{post.location && <p style={{ textAlign: 'start' }}>{post.location}</p>}
		</PostInfo>
	);
};
