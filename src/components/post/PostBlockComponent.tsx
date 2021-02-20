import { PostType } from '../../types';
import { ImageWrapper, UploadedImage } from '../../styled-components/imageStyles';
import { PostModalComponent } from './PostModalComponent';
import { useEffect, useState } from 'react';
import { useFirestore, useFirestoreDocData } from 'reactfire';

interface PostCardComponentProps {
	post: PostType;
}

export const PostBlockComponent = ({ post }: PostCardComponentProps) => {
	const [displayModal, setDisplayModal] = useState(false);
	const [currentPost, setCurrentPost]: any = useState(post);

	const postQuery = useFirestore().collection('posts').doc(post.postID);
	const postData = useFirestoreDocData(postQuery);

	useEffect(() => {
		if (postData.data) {
			setCurrentPost(postData.data);
		}
	}, [postData.data]);

	const handleClick = (e: React.MouseEvent) => {
		const targetElement = e.target as HTMLInputElement;
		console.log(targetElement);

		if (targetElement.getAttribute('data-type') === 'modal') {
			setDisplayModal(!displayModal);
		}
	};

	return (
		<>
			{displayModal && <PostModalComponent post={currentPost} handleClick={handleClick} />}
			<ImageWrapper onClick={handleClick}>
				<UploadedImage src={post.image} alt={`${post.poster}'s upload`} data-type={'modal'} />
			</ImageWrapper>
		</>
	);
};
