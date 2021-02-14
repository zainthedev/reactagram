import { UserCardComponent } from './userProfiles/UserCardComponent';
import { PostCardWrapper, PostCard, PostCaption } from '../styled-components/postStyles';
import { PostType } from '../types';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { ImageWrapper, UploadedImage } from '../styled-components/imageStyles';

interface PostCardComponentProps {
	post: PostType;
}

export const PostCardComponent = ({ post }: PostCardComponentProps) => {
	const userCollectionQuery = useFirestore().collection('users');
	const userCollectionQueryData = useFirestoreCollectionData(userCollectionQuery);
	const currentUser: any = userCollectionQueryData.data.find((p) => p.name === post.poster);

	return (
		<>
			{post !== undefined && (
				<PostCardWrapper>
					<PostCard>
						<UserCardComponent key={post.postID} user={currentUser} />
						<p>{post.location}</p>
						<ImageWrapper>
							<UploadedImage src={post.image} alt={`${post.poster}'s upload`} />
						</ImageWrapper>
						<PostCaption>{post.caption}</PostCaption>
					</PostCard>
				</PostCardWrapper>
			)}
		</>
	);
};
