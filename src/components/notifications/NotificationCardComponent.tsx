import { useEffect, useState } from 'react';
import { PostModalComponent } from '../post/PostModalComponent';
import { ReactagramTextWrapper } from '../../styled-components/globalStyles';
import { ImageWrapper, UserIcon } from '../../styled-components/imageStyles';
import { UserCard } from '../../styled-components/userListStyles';
import { UserType, NotificationType, PostType } from '../../types';
import { useFirestore, useFirestoreDocDataOnce } from 'reactfire';

interface NotificationProps extends UserType {
	notification: NotificationType;
}

export const NotificationCardComponent = ({ user, notification }: NotificationProps) => {
	const [post, setPost]: any = useState({});
	const [displayModal, setDisplayModal] = useState(false);

	const postQuery = useFirestore().collection('posts').doc(notification.postID);
	const postData = useFirestoreDocDataOnce(postQuery);

	useEffect(() => {
		if (postData.data) {
			setPost(postData.data as PostType);
		}
	}, [postData.data]);

	const getNotificationText = () => {
		if (notification.type === 'comment') {
			return <p data-type={'modal'}>{notification.from} commented on your post.</p>;
		}
		if (notification.type === 'tag') {
			return <p data-type={'modal'}>{notification.from} tagged you in a psost.</p>;
		}
		if (notification.type === 'like') {
			return <p data-type={'modal'}>{notification.from} liked your post.</p>;
		}
	};

	const handleClick = (e: React.MouseEvent) => {
		const targetElement = e.target as HTMLInputElement;
		console.log(targetElement);
		if (targetElement.getAttribute('data-type') === 'modal') {
			setDisplayModal(!displayModal);
		}
	};

	return (
		<>
			{displayModal && (
				<PostModalComponent post={post} handleClick={handleClick} data-type={'modal'} />
			)}
			<ReactagramTextWrapper
				onClick={handleClick}
				style={{ overflowX: 'hidden', color: '#262626' }}
			>
				<UserCard data-type={'modal'}>
					<ImageWrapper>
						<UserIcon alt='user' src={user.displayPicture} />
					</ImageWrapper>
					{getNotificationText()}
				</UserCard>
			</ReactagramTextWrapper>
		</>
	);
};
