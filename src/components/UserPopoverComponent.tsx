import { useUser, useAuth } from 'reactfire';
import { Link } from 'react-router-dom';
import { Popover, Target, Trigger } from '@accessible/popover';
import { ImageWrapper, Icon, UserIcon } from '../styled-components/imageStyles';
import { StyledPopover, PopoverButton } from '../styled-components/globalStyles';
import userIcon from '../images/userIcon.svg';
import logoutIcon from '../images/logoutIcon.svg';

export const UserPopoverComponent = () => {
	const user = useUser();
	const userImage = user.data.photoURL;

	const auth = useAuth();
	const signOut = async () => {
		await auth.signOut();
	};

	return (
		<Popover repositionOnScroll repositionOnResize>
			<Target placement='bottom'>
				<StyledPopover className='my-popover'>
					<PopoverButton>
						<Link style={{ textDecoration: 'none' }} to='/0'>
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
