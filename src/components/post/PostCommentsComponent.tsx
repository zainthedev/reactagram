import { useState } from 'react';
import { useFirestore } from 'reactfire';
import {
	PostCommentsWrapper,
	PostCommentWrapper,
	PostComment,
	MoreButton,
} from '../../styled-components/postStyles';
import { ImageWrapper, Icon } from '../../styled-components/imageStyles';
import { RouterLink } from '../../styled-components/globalStyles';
import { PostType } from '../../types';
import { removeComment } from '../../helper-functions/removeComment';
import deleteIcon from '../../images/deleteIcon.svg';

interface PostCommentProps {
	post: PostType;
	currentUser: any;
}

export const PostCommentsComponent = ({ post, currentUser }: PostCommentProps) => {
	const [showAllComments, setShowAllComments] = useState(false);

	const postCollectionQuery = useFirestore().collection('posts');

	const handleAllComments = () => {
		setShowAllComments(!showAllComments);
	};

	function getLastTwoComments() {
		const lastTwoComments = [
			post.comments[post.comments.length - 1],
			post.comments[post.comments.length - 2],
		];
		if (lastTwoComments[0] && lastTwoComments[1]) {
			return lastTwoComments;
		}
	}

	return (
		<PostCommentsWrapper>
			{post.comments.length < 3 || showAllComments ? (
				post.comments.map((comment) => {
					return (
						<PostCommentWrapper key={comment.commentID}>
							<PostComment>
								<RouterLink to={`/u/${comment.poster}`}>{comment.poster} </RouterLink>
								{comment.comment}
							</PostComment>
							{comment.poster === currentUser.name && (
								<ImageWrapper onClick={() => removeComment(post, postCollectionQuery, comment)}>
									<Icon alt='Delete button' src={deleteIcon} />
								</ImageWrapper>
							)}
						</PostCommentWrapper>
					);
				})
			) : (
				<>
					<MoreButton onClick={handleAllComments}>
						View all {post.comments.length} comments
					</MoreButton>
					{getLastTwoComments() &&
						getLastTwoComments()!.map((comment) => {
							return (
								<PostCommentWrapper key={comment.commentID}>
									<PostComment>
										<RouterLink to={`/u/${comment.poster}`}>{comment.poster} </RouterLink>
										{comment.comment}
									</PostComment>
									{comment.poster === currentUser.name && (
										<ImageWrapper onClick={() => removeComment(post, postCollectionQuery, comment)}>
											<Icon alt='Delete button' src={deleteIcon} />
										</ImageWrapper>
									)}
								</PostCommentWrapper>
							);
						})}
				</>
			)}
		</PostCommentsWrapper>
	);
};
