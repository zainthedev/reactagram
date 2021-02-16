import { useAuth, useFirestore, useFirestoreCollectionData } from 'reactfire';
import { useEffect, useState } from 'react';
import { NotificationType } from '../../types';
import { NotificationCardComponent } from './NotificationCardComponent';

export const NotificationListComponent = () => {
	const [notifications, setNotifications] = useState<NotificationType[]>([]);
	const userCollectionQuery = useFirestore().collection('users');
	const userCollectionData = useFirestoreCollectionData(userCollectionQuery);

	const currentUserName = useAuth().currentUser?.displayName!;
	const targetUser: any = userCollectionData.data.find((p) => p.name === currentUserName)!;
	const targetUserNotifications: any = targetUser.notifications;

	useEffect(() => {
		if (userCollectionData.data !== undefined) {
			const newNotifications: NotificationType[] = [];
			targetUserNotifications.forEach((notification: NotificationType) => {
				newNotifications.push(notification);
			});
			setNotifications(newNotifications);
		}
	}, [targetUserNotifications, userCollectionData.data]);

	return (
		<>
			{notifications.length > 0 &&
				notifications.map((notification) => {
					return (
						<NotificationCardComponent
							notification={notification}
							user={targetUser}
						></NotificationCardComponent>
					);
				})}
		</>
	);
};
