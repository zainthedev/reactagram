import { UserPopoverComponent } from './UserPopoverComponent';
import { RouterLink } from '../../styled-components/globalStyles';
import { NavbarButtons } from '../../styled-components/navbarStyles';
import { ImageWrapper, Icon } from '../../styled-components/imageStyles';
import homeIcon from '../../images/homeIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';
import uploadIcon from '../../images/uploadIcon.svg';
import heartIcon from '../../images/heartIcon.svg';

export const NavbarButtonsComponent = () => {
	return (
		<NavbarButtons>
			<RouterLink to='/'>
				<ImageWrapper>
					<Icon alt='home' src={homeIcon} />
				</ImageWrapper>
			</RouterLink>
			<RouterLink to='/dashboard'>
				<ImageWrapper>
					<Icon alt='explore' src={exploreIcon} />
				</ImageWrapper>
			</RouterLink>
			<RouterLink to='/upload'>
				<ImageWrapper>
					<Icon alt='uploadIcon' src={uploadIcon} />
				</ImageWrapper>
			</RouterLink>
			<RouterLink to='/notifications'>
				<ImageWrapper>
					<Icon alt='notifications' src={heartIcon} />
				</ImageWrapper>
			</RouterLink>
			<UserPopoverComponent />
		</NavbarButtons>
	);
};
