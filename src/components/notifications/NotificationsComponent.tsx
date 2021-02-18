import { useEffect, useState } from 'react';
import { useAuth, useFirestore, useFirestoreCollectionData } from 'reactfire';
import { NotificationCardComponent } from './NotificationCardComponent';
import { NotificationType } from '../../types';
import { Notifications } from '../../styled-components/notificationsStyles';

export const NotificationsComponent = () => {
	const [notifications, setNotifications] = useState<NotificationType[]>([]);
	const [targetUser, setTargetUser]: any = useState();

	const userCollectionQuery = useFirestore().collection('users');
	const userCollectionData = useFirestoreCollectionData(userCollectionQuery);

	const currentUserName = useAuth().currentUser?.displayName!;

	useEffect(() => {
		if (userCollectionData.data) {
			const targetUser: any = userCollectionData.data.find((p) => p.name === currentUserName)!;
			const targetUserNotifications: any = targetUser.notifications;
			const newNotifications: NotificationType[] = [];
			if (targetUserNotifications) {
				targetUserNotifications.forEach((notification: NotificationType) => {
					newNotifications.unshift(notification);
				});
			}
			setNotifications(newNotifications);
			setTargetUser(targetUser);
		}
	}, [currentUserName, userCollectionData.data]);

	return (
		<Notifications>
			{notifications.length > 0 &&
				notifications.map((notification: NotificationType) => {
					return (
						<NotificationCardComponent
							notification={notification}
							user={targetUser}
						></NotificationCardComponent>
					);
				})}
		</Notifications>
	);
};
