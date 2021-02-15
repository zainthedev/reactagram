import { PostType } from '../../types';
import { RouterLink } from '../../styled-components/globalStyles';
import { ImageWrapper, UploadedImage } from '../../styled-components/imageStyles';

interface PostCardComponentProps {
	post: PostType;
}

export const PostBlockComponent = ({ post }: PostCardComponentProps) => {
	return (
		<>
			{post !== undefined && (
				<RouterLink to={`/u/${post.poster}/${post.postID}`}>
					<ImageWrapper>
						<UploadedImage src={post.image} alt={`${post.poster}'s upload`} />
					</ImageWrapper>
				</RouterLink>
			)}
		</>
	);
};
