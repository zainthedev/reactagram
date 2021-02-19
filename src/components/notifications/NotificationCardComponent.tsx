import { useEffect, useState } from 'react';
import { PostModalComponent } from '../post/PostModalComponent';
import { TextButton } from '../../styled-components/globalStyles';
import { ImageWrapper, UserIcon } from '../../styled-components/imageStyles';
import { UserCard } from '../../styled-components/userListStyles';
import { UserType, NotificationType } from '../../types';
import { useFirestore, useFirestoreDocData } from 'reactfire';

interface NotificationProps extends UserType {
	notification: NotificationType;
}

export const NotificationCardComponent = ({ user, notification }: NotificationProps) => {
	const [post, setPost]: any = useState();
	const [displayModal, setDisplayModal] = useState(false);

	const postQuery = useFirestore().collection('posts').doc(notification.postID);
	const postData = useFirestoreDocData(postQuery);

	useEffect(() => {
		if (postData.data) {
			setPost(postData.data);
		}
	}, [postData.data]);

	// Get the appropriate text for the notification based on the type of notification
	const getNotificationText = () => {
		if (notification.type === 'comment') {
			return <p data-type={'modal'}> {notification.from} commented on your post.</p>;
		}
		if (notification.type === 'tag') {
			return <p data-type={'modal'}> {notification.from} tagged you in a post.</p>;
		}
		if (notification.type === 'like') {
			return <p data-type={'modal'}> {notification.from} liked your post.</p>;
		}
	};

	const handleClick = (e: React.MouseEvent) => {
		const targetElement = e.target as HTMLInputElement;

		if (targetElement.getAttribute('data-type') === 'modal') {
			setDisplayModal(!displayModal);
		}
	};

	return (
		<>
			{displayModal && (
				<PostModalComponent post={post} handleClick={handleClick} data-type={'modal'} />
			)}
			<TextButton onClick={handleClick} style={{ overflowX: 'hidden', color: '#262626' }}>
				<UserCard data-type={'modal'}>
					<ImageWrapper>
						<UserIcon alt='user' src={user.displayPicture} />
					</ImageWrapper>
					{getNotificationText()}
				</UserCard>
			</TextButton>
		</>
	);
};
