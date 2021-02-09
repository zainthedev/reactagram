import { UserListComponent } from './UserListComponent';
import { Modal } from '../styled-components/modalStyles';
import { UserListType } from '../types';

export const UserListModal = ({ user, list }: UserListType) => {
	return (
		<Modal>
			<UserListComponent user={user} list={list} />
		</Modal>
	);
};
