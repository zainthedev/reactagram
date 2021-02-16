import admin from 'firebase';
import uniqid from 'uniqid';
import { NotificationType } from '../types';

export const addNotification = (
	postID: string,
	userCollectionQuery: any,
	currentUserName: string,
	targetUser: string[],
	type: string
) => {
	const notificationID = uniqid();

	const newNotification: NotificationType = {
		notificationID: `${notificationID}`,
		postID: postID,
		from: currentUserName,
		to: targetUser,
		type: type,
		seen: false,
	};

	if (typeof targetUser !== 'string') {
		targetUser.forEach((user) => {
			userCollectionQuery.doc(user).update({
				notifications: admin.firestore.FieldValue.arrayUnion(newNotification),
			});
		});
	} else {
		userCollectionQuery.doc(targetUser).update({
			notifications: admin.firestore.FieldValue.arrayUnion(newNotification),
		});
	}
};
