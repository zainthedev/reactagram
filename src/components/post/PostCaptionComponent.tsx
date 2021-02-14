import { PostCaptionWrapper, PostCaption, MoreButton } from '../../styled-components/postStyles';
import { PostType } from '../../types';
import { useState } from 'react';
import { RouterLink } from '../../styled-components/globalStyles';

interface PostCardComponentProps {
	post: PostType;
}

export const PostCaptionComponent = ({ post }: PostCardComponentProps) => {
	const [showFullCaption, setShowFullCaption] = useState(false);

	const handleCaption = () => {
		setShowFullCaption(!showFullCaption);
	};

	return (
		<PostCaptionWrapper>
			<PostCaption
				style={
					showFullCaption
						? { overflow: 'inherit', whiteSpace: 'break-spaces' }
						: { textOverflow: 'ellipsis' }
				}
			>
				<RouterLink to={`/u/${post.poster}`}>{post.poster} </RouterLink>
				{post.caption}
			</PostCaption>
			{!showFullCaption && (post.caption.split(/\n/).length > 2 || post.caption.length > 50) && (
				<MoreButton onClick={handleCaption}>...more</MoreButton>
			)}
		</PostCaptionWrapper>
	);
};
