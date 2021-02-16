import { useEffect, useState } from 'react';
import { useAuth, useFirestore, useFirestoreCollectionData } from 'reactfire';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { ImageWrapper, Icon } from '../../styled-components/imageStyles';
import { StyledPopover, PopoverButton } from '../../styled-components/globalStyles';
import { NotificationCardComponent } from './NotificationCardComponent';
import { NotificationType } from '../../types';
import heartIcon from '../../images/heartIcon.svg';

export const NotificationsPopoverComponent = () => {
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

	const popover = (
		<StyledPopover>
			<Popover.Content>
				{notifications.length > 0 &&
					notifications.map((notification: NotificationType) => {
						return (
							<PopoverButton key={notification.notificationID}>
								<NotificationCardComponent
									notification={notification}
									user={targetUser}
								></NotificationCardComponent>
							</PopoverButton>
						);
					})}
			</Popover.Content>
		</StyledPopover>
	);

	return (
		<OverlayTrigger trigger='click' rootClose placement='auto' overlay={popover}>
			<ImageWrapper>
				<Icon alt='notifications' src={heartIcon} />
			</ImageWrapper>
		</OverlayTrigger>
	);
};
