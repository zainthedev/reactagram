import { PostType } from '../../types';
import { useAuth, useFirestore, useFirestoreCollectionData } from 'reactfire';
import { RouterLink } from '../../styled-components/globalStyles';
import { ImageWrapper, UploadedImage } from '../../styled-components/imageStyles';

interface PostCardComponentProps {
	post: PostType;
}

export const PostBlockComponent = ({ post }: PostCardComponentProps) => {
	const userCollectionQuery = useFirestore().collection('users');
	const userCollectionQueryData = useFirestoreCollectionData(userCollectionQuery);

	const postCollectionQuery = useFirestore().collection('posts');
	const postCollectionQueryData = useFirestoreCollectionData(postCollectionQuery);

	return (
		<>
			{post !== undefined && (
				<RouterLink to='/'>
					<ImageWrapper>
						<UploadedImage src={post.image} alt={`${post.poster}'s upload`} />
					</ImageWrapper>
				</RouterLink>
			)}
		</>
	);
};
