import firebase from 'firebase';
import admin from 'firebase';
import uniqid from 'uniqid';
import { NotificationType } from '../types';

export const addNotification = (
	postID: string,
	currentUserName: string,
	targetUser: string[],
	type: string
) => {
	const notificationID = uniqid();
	const userQuery = firebase.firestore().collection('users');

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
			userQuery.doc(user).update({
				notifications: admin.firestore.FieldValue.arrayUnion(newNotification),
			});
		});
	} else {
		userQuery.doc(targetUser).update({
			notifications: admin.firestore.FieldValue.arrayUnion(newNotification),
		});
	}
};
