import { useEffect, useState } from 'react';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { ModalWrapper, Modal } from '../../styled-components/modalStyles';
import { ImageWrapper, UserIcon } from '../../styled-components/imageStyles';
import { FormInputWrapper, FormInput } from '../../styled-components/globalStyles';
import { UserListWrapper, UserList } from '../../styled-components/userListStyles';

export const TagModalComponent = ({ toggleModal, handleTags }: any) => {
	const [foundUsers, setFoundUsers]: any = useState([]);
	const [searchInput, setSearchInput] = useState('');
	const userCollectionQuery = useFirestore().collection('users');
	const userCollectionData = useFirestoreCollectionData(userCollectionQuery);

	const handleInput = (e: any) => {
		const formValue = e.currentTarget.value;
		setSearchInput(formValue);
	};

	useEffect(() => {
		if (userCollectionData.data !== undefined && searchInput.length > 0) {
			const allUsers = [...userCollectionData.data];
			const allFoundUsers: any = [];
			allUsers.forEach((user: any) => {
				if (user.name.toLowerCase().startsWith(searchInput.toLowerCase())) {
					allFoundUsers.push(user);
				}
			});
			setFoundUsers(allFoundUsers);
		}
	}, [searchInput, userCollectionData.data]);

	const addTag = (e: any) => {
		const targetUser = e.currentTarget.textContent;
		handleTags(targetUser);
	};

	return (
		<ModalWrapper onClick={toggleModal}>
			<Modal>
				<label>
					<FormInputWrapper>
						<FormInput onChange={handleInput} placeholder='Search'></FormInput>
					</FormInputWrapper>
				</label>
				<UserListWrapper>
					<UserList>
						{foundUsers.length > 0 &&
							searchInput.length > 0 &&
							foundUsers.map((user: any) => {
								return (
									<ImageWrapper style={{ cursor: 'pointer' }} onClick={addTag}>
										<UserIcon alt='user' src={user.displayPicture} />
										<p>{user.name}</p>
									</ImageWrapper>
								);
							})}
					</UserList>
				</UserListWrapper>
			</Modal>
		</ModalWrapper>
	);
};
