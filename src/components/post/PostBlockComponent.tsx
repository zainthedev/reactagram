import { PostType } from '../../types';
import { ImageWrapper, UploadedImage } from '../../styled-components/imageStyles';
import { PostModalComponent } from './PostModalComponent';
import { useState } from 'react';

interface PostCardComponentProps {
	post: PostType;
}

export const PostBlockComponent = ({ post }: PostCardComponentProps) => {
	const [displayModal, setDisplayModal] = useState(false);

	const handleClick = (e: React.MouseEvent) => {
		const targetElement = e.target as HTMLInputElement;

		if (
			targetElement.className === 'sc-dIUggk ftqKYZ' ||
			targetElement.className === 'sc-fbkhIv iNNTcy'
		) {
			setDisplayModal(!displayModal);
		}
	};

	return (
		<>
			{displayModal && <PostModalComponent post={post} handleClick={handleClick} />}
			<ImageWrapper onClick={handleClick}>
				<UploadedImage src={post.image} alt={`${post.poster}'s upload`} />
			</ImageWrapper>
		</>
	);
};
