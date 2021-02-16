import { useState } from 'react';
import uniqid from 'uniqid';
import { ReactagramLink, FormInputWrapper, FormInput } from '../../styled-components/globalStyles';
import { addComment } from '../../helper-functions/addComment';
import { CommentType, PostType } from '../../types';
import { addNotification } from '../../helper-functions/addNotification';

interface PostCommentProps {
	post: PostType;
	currentUser: any;
	userCollectionQuery: any;
	postCollectionQuery: any;
}

export const AddCommentComponent = ({
	post,
	currentUser,
	userCollectionQuery,
	postCollectionQuery,
}: PostCommentProps) => {
	const [comment, setComment] = useState({
		commentID: '',
		poster: '',
		comment: '',
	});

	const handleInput = (e: React.ChangeEvent) => {
		const targetElement = e.target as HTMLInputElement;
		const formValue = targetElement.value;
		const newComment: CommentType = {
			commentID: uniqid(),
			poster: currentUser,
			comment: formValue,
		};
		setComment(newComment);
	};

	const handlePost = () => {
		addComment(post, postCollectionQuery, currentUser, comment);
		addNotification(post.postID, userCollectionQuery, currentUser.name, post.poster, 'comment');
	};

	return (
		<FormInputWrapper
			onSubmit={(e) => {
				e.preventDefault();
				addComment(post, postCollectionQuery, currentUser, comment);
				setComment({ commentID: '', poster: '', comment: '' });
			}}
		>
			<FormInput placeholder={'Add a comment...'} onChange={handleInput} value={comment.comment} />
			<ReactagramLink onClick={handlePost}>Post</ReactagramLink>
		</FormInputWrapper>
	);
};
