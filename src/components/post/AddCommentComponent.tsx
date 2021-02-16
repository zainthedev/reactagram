import { useState } from 'react';
import uniqid from 'uniqid';
import { ReactagramLink, FormInputWrapper, FormInput } from '../../styled-components/globalStyles';
import { addComment } from '../../helper-functions/addComment';
import { CommentType, PostType } from '../../types';

interface PostCommentProps {
	post: PostType;
	currentUser: any;
	postCollectionQuery: any;
}

export const AddCommentComponent = ({
	post,
	currentUser,
	postCollectionQuery,
}: PostCommentProps) => {
	const [comment, setComment] = useState({
		commentID: '',
		poster: '',
		comment: '',
	});

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
		<FormInputWrapper
			onSubmit={(e) => {
				e.preventDefault();
				addComment(post, postCollectionQuery, currentUser, comment);
				setComment({ commentID: '', poster: '', comment: '' });
			}}
		>
			<FormInput placeholder={'Add a comment...'} onChange={handleInput} value={comment.comment} />
			<ReactagramLink onClick={() => addComment(post, postCollectionQuery, currentUser, comment)}>
				Post
			</ReactagramLink>
		</FormInputWrapper>
	);
};
