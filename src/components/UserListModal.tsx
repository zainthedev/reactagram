import { UserListComponent } from './UserListComponent';
import { ModalWrapper, Modal } from '../styled-components/modalStyles';
import { UserModalType } from '../types';

interface UserListModalProps extends UserModalType {
	list: string;
}
export const UserListModal = ({ user, list, handleClick }: UserListModalProps) => {
	return (
		<ModalWrapper onClick={handleClick}>
			<Modal>
				{user.name}'s {list}
				<UserListComponent user={user} list={list} />
			</Modal>
		</ModalWrapper>
	);
};
