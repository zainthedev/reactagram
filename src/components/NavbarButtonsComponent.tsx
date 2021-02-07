import { Link } from 'react-router-dom';
import { UserPopoverComponent } from './UserPopoverComponent';
import { NavbarButtons } from '../styled-components/navbarStyles';
import { ImageWrapper, Icon } from '../styled-components/imageStyles';
import homeIcon from '../images/homeIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import uploadIcon from '../images/uploadIcon.svg';
import heartIcon from '../images/heartIcon.svg';

export const NavbarButtonsComponent = () => {
	return (
		<NavbarButtons>
			<Link to='/'>
				<ImageWrapper>
					<Icon alt='home' src={homeIcon} />
				</ImageWrapper>
			</Link>
			<Link to='/explore'>
				<ImageWrapper>
					<Icon alt='explore' src={exploreIcon} />
				</ImageWrapper>
			</Link>
			<Link to='/upload'>
				<ImageWrapper>
					<Icon alt='uploadIcon' src={uploadIcon} />
				</ImageWrapper>
			</Link>
			<Link to='/notifications'>
				<ImageWrapper>
					<Icon alt='notifications' src={heartIcon} />
				</ImageWrapper>
			</Link>
			<UserPopoverComponent />
		</NavbarButtons>
	);
};
