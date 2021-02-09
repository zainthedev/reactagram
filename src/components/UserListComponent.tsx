import { useParams, useRouteMatch } from 'react-router-dom';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { useEffect, useState } from 'react';
import { UserList } from '../styled-components/userListStyles';
import { UserLinkComponent } from './UserLinkComponent';
import { UserCardComponent } from './UserCardComponent';

export const UserListComponent = () => {
	const [users, setUsers]: any = useState();

	const userCollectionQuery = useFirestore().collection('users');
	const userCollectionData = useFirestoreCollectionData(userCollectionQuery);

	useEffect(() => {
		if (userCollectionData.data !== undefined) {
			const userArray: any = [...(userCollectionData.data ?? [])];
			setUsers(userArray);
		}
	}, [userCollectionData.data]);

	let { url } = useRouteMatch();
	let { profile }: any = useParams();

	return (
		<UserList>
			{users !== undefined &&
				users.map((user: any) => {
					return <UserCardComponent user={user} />;
				})}
		</UserList>
	);
};
