import { useUser } from 'reactfire';
import { Link } from 'react-router-dom';
import { Popover, Target, Trigger } from '@accessible/popover';
import { ImageWrapper, Icon } from '../styled-components/imageStyles';
import { StyledPopover, PopoverButton } from '../styled-components/globalStyles';
import userIcon from '../images/userIcon.svg';
import logoutIcon from '../images/logoutIcon.svg';

export const UserPopoverComponent = () => {
	const user = useUser();
	const userImage = user.data.photoURL;

	return (
		<Popover repositionOnScroll repositionOnResize>
			<Target placement='bottom'>
				<StyledPopover className='my-popover'>
					<PopoverButton>
						<Link style={{ textDecoration: 'none' }} to='/user'>
							<ImageWrapper>
								<Icon alt='user' src={userImage || userIcon} />
								<p> View profile</p>
							</ImageWrapper>
						</Link>
					</PopoverButton>
					<PopoverButton>
						<ImageWrapper>
							<Icon alt='logout' src={logoutIcon} />
							<p> Log out</p>
						</ImageWrapper>
					</PopoverButton>
				</StyledPopover>
			</Target>
			<Trigger on='click'>
				<ImageWrapper>
					<Icon alt='user' src={userImage || userIcon} />
				</ImageWrapper>
			</Trigger>
		</Popover>
	);
};
