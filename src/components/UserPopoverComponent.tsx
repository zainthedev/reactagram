import { useUser, useAuth, useFirestore, useFirestoreCollectionData } from 'reactfire';
import { Link } from 'react-router-dom';
import { Popover, Target, Trigger } from '@accessible/popover';
import { ImageWrapper, Icon, UserIcon } from '../styled-components/imageStyles';
import { StyledPopover, PopoverButton } from '../styled-components/globalStyles';
import userIcon from '../images/userIcon.svg';
import logoutIcon from '../images/logoutIcon.svg';
import { useEffect, useState } from 'react';

export const UserPopoverComponent = () => {
	const [username, setUsername] = useState('');

	const user = useUser();
	const userImage = user.data.photoURL;

	const auth = useAuth();
	const userCollectionQuery = useFirestore().collection('users');
	const userCollectionData = useFirestoreCollectionData(userCollectionQuery);

	useEffect(() => {
		if (userCollectionData.data !== undefined) {
			const foundUser: any = userCollectionData.data.find((p) => p.name === user.data.displayName);
			if (foundUser !== undefined) {
				const foundUsername = foundUser.name;
				setUsername(foundUsername);
				console.log(username);
			}
		}
	}, [userCollectionData.data, user.data.displayName, username]);

	const signOut = async () => {
		await auth.signOut();
	};

	return (
		<Popover repositionOnScroll repositionOnResize>
			<Target placement='bottom'>
				<StyledPopover className='my-popover'>
					<PopoverButton>
						<Link style={{ textDecoration: 'none' }} to={`/u/${username}`}>
							<ImageWrapper>
								<UserIcon alt='user' src={userImage || userIcon} />
								<p> Profile</p>
							</ImageWrapper>
						</Link>
					</PopoverButton>
					<PopoverButton onClick={() => signOut()}>
						<ImageWrapper>
							<Icon alt='logout' src={logoutIcon} />
							<p> Log out</p>
						</ImageWrapper>
					</PopoverButton>
				</StyledPopover>
			</Target>
			<Trigger on='click'>
				<ImageWrapper>
					<UserIcon alt='user' src={userImage || userIcon} />
				</ImageWrapper>
			</Trigger>
		</Popover>
	);
};
