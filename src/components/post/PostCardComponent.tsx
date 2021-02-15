import { useState } from 'react';
import uniqid from 'uniqid';
import { UserCardComponent } from '../userProfiles/UserCardComponent';
import { PostCaptionComponent } from './PostCaptionComponent';
import { PostCommentsComponent } from './PostCommentsComponent';
import { PostCardWrapper, PostCard, PostInfo, PostTime } from '../../styled-components/postStyles';
import { CommentType, PostType } from '../../types';
import { useFirestore } from 'reactfire';
import { ImageWrapper, Icon, UploadedImage } from '../../styled-components/imageStyles';
import { handleLike } from '../../helper-functions/handleLike';
import { useGetUser } from '../../helper-functions/useGetUser';
import { ReactagramLink, FormInputWrapper, FormInput } from '../../styled-components/globalStyles';
import heartIcon from '../../images/heartIcon.svg';
import heartIconRed from '../../images/heartIconRed.svg';
import { addComment } from '../../helper-functions/addComment';

interface PostCardComponentProps {
	post: PostType;
}

export const PostCardComponent = ({ post }: PostCardComponentProps) => {
	const [comment, setComment] = useState({
		commentID: '',
		poster: '',
		comment: '',
	});

	const userCollectionQuery = useFirestore().collection('users');
	const postCollectionQuery = useFirestore().collection('posts');

	const currentUser = useGetUser('currentUser');
	const poster = useGetUser(post.poster);

	const targetUserLikes = [...currentUser.likes];

	//Get the time since post was made
	const currentTime: any = new Date();
	const postedDate = post.date.toDate();

	const postedTimeSeconds = Math.floor(Math.round((currentTime - postedDate) / 1000));
	const postedTimeMinutes = Math.ceil(Math.round(postedTimeSeconds / 60));
	const postedTimeHours = Math.ceil(Math.round(postedTimeMinutes / 60));
	const postedTimeDays = Math.ceil(Math.round(postedTimeHours / 24));

	const handleInput = (e: any) => {
		const formValue = e.currentTarget.value;
		const newComment: CommentType = {
			commentID: uniqid(),
			poster: currentUser,
			comment: formValue,
		};
		setComment(newComment);
	};

	return (
		<>
			{post !== undefined && (
				<PostCardWrapper>
					<PostCard>
						<PostInfo>
							<UserCardComponent key={post.postID} user={poster} />
							{post.location && <p>{post.location}</p>}
						</PostInfo>
						<ImageWrapper
							onDoubleClick={() =>
								handleLike(post, userCollectionQuery, postCollectionQuery, currentUser)
							}
						>
							<UploadedImage src={post.image} alt={`${post.poster}'s upload`} />
						</ImageWrapper>
						<ImageWrapper
							onClick={() =>
								handleLike(post, userCollectionQuery, postCollectionQuery, currentUser)
							}
						>
							<Icon
								alt='Like button'
								src={targetUserLikes.includes(post.postID) ? heartIconRed : heartIcon}
								style={{ marginLeft: '10px' }}
							/>
							{post.likers.length > 0 && post.likers.length}
						</ImageWrapper>
						{post.caption && <PostCaptionComponent post={post} />}
						<PostCommentsComponent post={post} currentUser={currentUser} />
						<PostTime>
							{postedTimeMinutes === 1 && `${postedTimeMinutes} minute ago`}
							{postedTimeMinutes < 60 &&
								postedTimeHours !== 1 &&
								`${postedTimeMinutes} minutes ago`}
							{postedTimeHours === 1 && `${postedTimeHours} hour ago`}
							{postedTimeHours < 24 && postedTimeHours > 1 && `${postedTimeHours} hours ago`}
							{postedTimeHours > 48 && `${postedTimeDays} day ago`}
							{postedTimeHours > 48 && `${postedTimeDays} days ago`}
						</PostTime>
						<FormInputWrapper
							onSubmit={(e) => {
								e.preventDefault();
								addComment(post, postCollectionQuery, currentUser, comment);
							}}
						>
							<FormInput placeholder={'Add a comment...'} onChange={handleInput} />
							<ReactagramLink
								onClick={() => addComment(post, postCollectionQuery, currentUser, comment)}
							>
								Post
							</ReactagramLink>
						</FormInputWrapper>
					</PostCard>
				</PostCardWrapper>
			)}
		</>
	);
};
