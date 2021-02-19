import { useFirestore } from 'reactfire';
import { PostInfoComponent } from './PostInfoComponent';
import { PostCaptionComponent } from './PostCaptionComponent';
import { PostCommentsComponent } from './PostCommentsComponent';
import { PostTimeComponent } from './PostTimeComponent';
import { AddCommentComponent } from './AddCommentComponent';
import { ReactagramLink } from '../../styled-components/globalStyles';
import { PostCardWrapper, PostCard } from '../../styled-components/postStyles';
import { ImageWrapper, Icon, UploadedImage } from '../../styled-components/imageStyles';
import { handleLike } from '../../helper-functions/handleLike';
import { useGetUser } from '../../helper-functions/useGetUser';
import { removeTag } from '../../helper-functions/removeTag';
import { PostType } from '../../types';
import heartIcon from '../../images/heartIcon.svg';
import heartIconRed from '../../images/heartIconRed.svg';

interface PostCardComponentProps {
	post: PostType;
}

export const PostCardComponent = ({ post }: PostCardComponentProps) => {
	const userCollectionQuery = useFirestore().collection('users');
	const postCollectionQuery = useFirestore().collection('posts');

	const currentUser = useGetUser('currentUser');
	const poster = useGetUser(post.poster);

	const targetUserLikes = [...currentUser.likes];

	const handleLikeButton = () => {
		handleLike(post, currentUser);
	};

	return (
		<>
			{post.postID ? (
				<PostCardWrapper>
					<PostCard>
						<PostInfoComponent
							post={post}
							poster={poster}
							currentUser={currentUser}
							userCollectionQuery={userCollectionQuery}
							postCollectionQuery={postCollectionQuery}
						/>
						<ImageWrapper onDoubleClick={handleLikeButton}>
							<UploadedImage src={post.image} alt={`${post.poster}'s upload`} data-type={'modal'} />
						</ImageWrapper>
						{post.tags.includes(currentUser.name) && (
							<ReactagramLink
								onClick={() =>
									removeTag(post, userCollectionQuery, postCollectionQuery, currentUser)
								}
							>
								Remove tag
							</ReactagramLink>
						)}
						<ImageWrapper onClick={handleLikeButton}>
							<Icon
								alt='Like button'
								src={targetUserLikes.includes(post.postID) ? heartIconRed : heartIcon}
								style={{ marginLeft: '10px' }}
							/>
							{post.likers.length > 0 && post.likers.length}
						</ImageWrapper>
						{post.caption && <PostCaptionComponent post={post} />}
						<PostCommentsComponent post={post} currentUser={currentUser} />
						<PostTimeComponent post={post} />
						<AddCommentComponent post={post} currentUser={currentUser} />
					</PostCard>
				</PostCardWrapper>
			) : (
				<PostCard>Post not found.</PostCard>
			)}
		</>
	);
};
