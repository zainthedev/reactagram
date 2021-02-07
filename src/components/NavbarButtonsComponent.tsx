import { useUser } from 'reactfire';
import { Link } from 'react-router-dom';
import { NavbarButtons } from '../styled-components/navbarStyles';
import { ImageWrapper, Icon } from '../styled-components/imageStyles';
import homeIcon from '../images/homeIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import uploadIcon from '../images/uploadIcon.svg';
import heartIcon from '../images/heartIcon.svg';
import userIcon from '../images/userIcon.svg';

export const NavbarButtonsComponent = () => {
	const user = useUser();
	const userImage = user.data.photoURL;
	const userDisplayName = user.data.displayName;
	console.log(userDisplayName);

	return (
		<NavbarButtons>
			<Link to='/'>
				<ImageWrapper>
					<Icon alt='home' src={homeIcon}></Icon>
				</ImageWrapper>
			</Link>
			<Link to='/explore'>
				<ImageWrapper>
					<Icon alt='explore' src={exploreIcon}></Icon>
				</ImageWrapper>
			</Link>
			<Link to='/upload'>
				<ImageWrapper>
					<Icon alt='uploadIcon' src={uploadIcon}></Icon>
				</ImageWrapper>
			</Link>
			<Link to='/notifications'>
				<ImageWrapper>
					<Icon alt='notifications' src={heartIcon}></Icon>
				</ImageWrapper>
			</Link>
			<ImageWrapper>
				<Icon alt='user' src={userImage || userIcon}></Icon>
			</ImageWrapper>
		</NavbarButtons>
	);
};
