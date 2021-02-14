import { UserCardComponent } from '../userProfiles/UserCardComponent';
import { PostCaptionComponent } from './PostCaptionComponent';
import { PostCardWrapper, PostCard, PostInfo, PostTime } from '../../styled-components/postStyles';
import { ReactagramButton } from '../../styled-components/globalStyles';
import { PostType } from '../../types';
import { useAuth, useFirestore, useFirestoreCollectionData } from 'reactfire';
import { ImageWrapper, UploadedImage } from '../../styled-components/imageStyles';
import { handleLike } from '../../helper-functions/handleLike';

interface PostCardComponentProps {
	post: PostType;
}

export const PostCardComponent = ({ post }: PostCardComponentProps) => {
	const userCollectionQuery = useFirestore().collection('users');
	const userCollectionQueryData = useFirestoreCollectionData(userCollectionQuery);
	const poster: any = userCollectionQueryData.data.find((p) => p.name === post.poster);

	const postCollectionQuery = useFirestore().collection('posts');
	const postCollectionQueryData = useFirestoreCollectionData(postCollectionQuery);

	const currentUserName = useAuth().currentUser?.displayName!;
	const currentUser: any = userCollectionQueryData.data.find((p) => p.name === currentUserName);
	const targetUserLikes = [...currentUser.likes];

	//Get the time since post was made
	const currentTime: any = new Date();
	const postedDate = post.date.toDate();

	const postedTimeSeconds = Math.floor(Math.round((currentTime - postedDate) / 1000));
	const postedTimeMinutes = Math.floor(Math.round(postedTimeSeconds / 60));
	const postedTimeHours = Math.floor(Math.round(postedTimeMinutes / 60));
	const postedTimeDays = Math.floor(Math.round(postedTimeHours / 24));

	return (
		<>
			{post !== undefined && (
				<PostCardWrapper>
					<PostCard>
						<PostInfo>
							<UserCardComponent key={post.postID} user={poster} />
							{post.location && <p>{post.location}</p>}
						</PostInfo>
						<ImageWrapper>
							<UploadedImage src={post.image} alt={`${post.poster}'s upload`} />
						</ImageWrapper>
						<ReactagramButton
							onClick={() =>
								handleLike(post, userCollectionQuery, postCollectionQuery, currentUser)
							}
						>
							{targetUserLikes.includes(post.postID) ? 'Unlike' : 'Like'}
						</ReactagramButton>
						{post.caption && <PostCaptionComponent post={post} />}
						<PostTime>
							{postedTimeSeconds < 60 && `${postedTimeSeconds} seconds ago`}
							{postedTimeSeconds > 60 &&
								postedTimeMinutes < 60 &&
								`${postedTimeMinutes} minutes ago`}
							{postedTimeMinutes > 60 && postedTimeHours < 24 && `${postedTimeHours} hours ago`}
							{postedTimeHours > 24 && `${postedTimeDays} hours ago`}
						</PostTime>
					</PostCard>
				</PostCardWrapper>
			)}
		</>
	);
};
