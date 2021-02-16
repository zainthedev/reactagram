import { RouterLink } from '../../styled-components/globalStyles';
import { useRouteMatch } from 'react-router-dom';
import { ImageWrapper, UserIcon } from '../../styled-components/imageStyles';
import { UserCard } from '../../styled-components/userListStyles';
import { UserType, NotificationType } from '../../types';

interface NotificationProps extends UserType {
	notification: NotificationType;
}

export const NotificationCardComponent = ({ user, notification }: NotificationProps) => {
	let { url } = useRouteMatch();

	const getNotificationText = () => {
		if (notification.type === 'comment') {
			console.log(notification.from);
			return <p>{notification.from.name} commented on your post.</p>;
		}
		if (notification.type === 'tag') {
			return <p>{notification.from.name} tagged you in a post.</p>;
		}
		if (notification.type === 'like') {
			return <p>{notification.from.name} liked your post.</p>;
		}
	};

	return (
		<RouterLink
			to={url.substring(0, 3) === '/u/' ? user.name : 'u/' + user.name}
			style={{ overflowX: 'hidden' }}
		>
			<UserCard>
				<ImageWrapper>
					<UserIcon alt='user' src={user.displayPicture} />
				</ImageWrapper>
				{getNotificationText()}
			</UserCard>
		</RouterLink>
	);
};
