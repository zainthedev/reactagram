import { UserListComponent } from './UserListComponent';
import { ModalWrapper, Modal } from '../styled-components/modalStyles';
import { UserModalType } from '../types';

interface UserListModalProps extends UserModalType {
	list: string;
}
export const UserListModal = ({ user, list, handleClick }: UserListModalProps) => {
	console.log(list);
	return (
		<ModalWrapper onClick={handleClick}>
			<Modal>
				Looking at {list}
				<UserListComponent user={user} list={list} />
			</Modal>
		</ModalWrapper>
	);
};
