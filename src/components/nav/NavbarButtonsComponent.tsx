import { UserPopoverComponent } from './UserPopoverComponent';
import { RouterLink } from '../../styled-components/globalStyles';
import { NavbarButtons, NavbarButton } from '../../styled-components/navbarStyles';
import { ImageWrapper, Icon } from '../../styled-components/imageStyles';
import homeIcon from '../../images/homeIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';
import uploadIcon from '../../images/uploadIcon.svg';
import heartIcon from '../../images/heartIcon.svg';

export const NavbarButtonsComponent = () => {
	return (
		<NavbarButtons>
			<NavbarButton>
				<RouterLink to='/'>
					<ImageWrapper>
						<Icon alt='home' src={homeIcon} />
					</ImageWrapper>
				</RouterLink>
			</NavbarButton>
			<NavbarButton>
				<RouterLink to='/explore'>
					<ImageWrapper>
						<Icon alt='explore' src={exploreIcon} />
					</ImageWrapper>
				</RouterLink>
			</NavbarButton>
			<NavbarButton>
				<RouterLink to='/upload'>
					<ImageWrapper>
						<Icon alt='upload' src={uploadIcon} />
					</ImageWrapper>
				</RouterLink>
			</NavbarButton>
			<NavbarButton>
				<RouterLink to='/notifications'>
					<ImageWrapper>
						<Icon alt='notifications' src={heartIcon} />
					</ImageWrapper>
				</RouterLink>
			</NavbarButton>
			<NavbarButton>
				<UserPopoverComponent />
			</NavbarButton>
		</NavbarButtons>
	);
};
