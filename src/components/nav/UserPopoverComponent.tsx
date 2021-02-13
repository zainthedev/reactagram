import { useEffect, useState } from 'react';
import { useUser, useAuth, useFirestore, useFirestoreCollectionData } from 'reactfire';
import { ImageWrapper, Icon, UserIcon } from '../../styled-components/imageStyles';
import { StyledPopover, PopoverButton, RouterLink } from '../../styled-components/globalStyles';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import userIcon from '../../images/userIcon.svg';
import logoutIcon from '../../images/logoutIcon.svg';

export const UserPopoverComponent = () => {
	const [username, setUsername] = useState('');
	const [userImage, setUserImage] = useState('');

	const user = useUser();
	const userData: any = user.data;

	const auth = useAuth();
	const userCollectionQuery = useFirestore().collection('users');
	const userCollectionData = useFirestoreCollectionData(userCollectionQuery);

	useEffect(() => {
		if (userCollectionData.data !== undefined && userData !== undefined) {
			const username = userData.displayName;
			const foundUser = userCollectionData.data.find((p) => p.name === username)!;
			if (foundUser) {
				const foundUsername: any = foundUser.name;
				const foundUserImage: any = foundUser.displayPicture;
				setUsername(foundUsername);
				setUserImage(foundUserImage);
			}
		}
	}, [userData, userCollectionData.data]);

	const signOut = async () => {
		await auth.signOut();
	};

	const popover = (
		<StyledPopover>
			<Popover.Content>
				<PopoverButton>
					<RouterLink to={`/u/${username}`}>
						<ImageWrapper>
							<UserIcon alt='user' src={userImage} />
							<p> Profile</p>
						</ImageWrapper>
					</RouterLink>
				</PopoverButton>
				<PopoverButton onClick={() => signOut()}>
					<ImageWrapper>
						<Icon alt='logout' src={logoutIcon} />
						<p> Log out</p>
					</ImageWrapper>
				</PopoverButton>
			</Popover.Content>
		</StyledPopover>
	);

	return (
		<OverlayTrigger trigger='click' rootClose placement='auto' overlay={popover}>
			<ImageWrapper>
				<UserIcon alt='user' src={userImage || userIcon} />
			</ImageWrapper>
		</OverlayTrigger>
	);
};
