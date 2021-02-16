import { UserCardComponent } from '../userProfiles/UserCardComponent';
import { PostInfo, PostInfoTop } from '../../styled-components/postStyles';
import { ImageWrapper, Icon } from '../../styled-components/imageStyles';
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
	return (
		<PostInfo>
			<PostInfoTop>
				<UserCardComponent key={post.postID} user={poster} />
				<ImageWrapper
					onClick={() => removePost(post, userCollectionQuery, postCollectionQuery, currentUser)}
				>
					{poster.name === currentUser.name && <Icon alt='Delete button' src={deleteIcon} />}
				</ImageWrapper>
			</PostInfoTop>
			{post.location && <p style={{ textAlign: 'start' }}>{post.location}</p>}
		</PostInfo>
	);
};
