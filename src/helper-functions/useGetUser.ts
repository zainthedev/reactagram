import { useAuth, useFirestore, useFirestoreCollectionData } from 'reactfire';

export const useGetUser = (user: string) => {
	const userCollectionQuery = useFirestore().collection('users');
	const userCollectionQueryData = useFirestoreCollectionData(userCollectionQuery).data;
	const currentUserName = useAuth().currentUser?.displayName!;

	if (user === 'currentUser') {
		const currentUser: any = userCollectionQueryData.find((p) => p.name === currentUserName);
		return currentUser;
	} else {
		const targetUser: any = userCollectionQueryData.find((p) => p.name === user);
		return targetUser;
	}
};
