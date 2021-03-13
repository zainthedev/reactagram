import { useState } from 'react';
import uniqid from 'uniqid';
import { ReactagramLink, FormInputWrapper, FormInput } from '../../styled-components/globalStyles';
import { addComment } from '../../helper-functions/addComment';
import { CommentType, PostType } from '../../types';

interface PostCommentProps {
	post: PostType;
	currentUser: any;
}

export const AddCommentComponent = ({ post, currentUser }: PostCommentProps) => {
	const [comment, setComment] = useState({
		commentID: '',
		poster: '',
		comment: '',
	});

	const handleInput = (e: React.ChangeEvent) => {
		const targetElement = e.target as HTMLInputElement;
		const formValue = targetElement.value;
		if (formValue.length < 2200) {
			const newComment: CommentType = {
				commentID: uniqid(),
				poster: currentUser,
				comment: formValue,
			};
			setComment(newComment);
		}
	};

	const handleComment = () => {
		if (comment.comment.length > 0) {
			setComment({ commentID: '', poster: '', comment: '' });
			setTimeout(() => {
				addComment(post, currentUser.name, comment);
			}, 1500);
		}
	};

	return (
		<FormInputWrapper
			onSubmit={(e) => {
				e.preventDefault();
				handleComment();
			}}
		>
			<FormInput placeholder={'Add a comment...'} onChange={handleInput} value={comment.comment} />
			<ReactagramLink onClick={handleComment}>Post</ReactagramLink>
		</FormInputWrapper>
	);
};
