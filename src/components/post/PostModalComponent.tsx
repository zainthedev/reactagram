import { PostModal, ModalWrapper, Modal } from '../../styled-components/modalStyles';
import { PostType } from '../../types';
import { PostCardComponent } from './PostCardComponent';

interface PostModalProps {
	handleClick: any;
	post: PostType;
}

export const PostModalComponent = ({ post, handleClick }: PostModalProps) => {
	return (
		<PostModal>
			<ModalWrapper onClick={handleClick}>
				<Modal>
					<PostCardComponent post={post} />
				</Modal>
			</ModalWrapper>
		</PostModal>
	);
};
