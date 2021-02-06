import { Link } from 'react-router-dom';
import { NavbarButtons } from '../styled-components/navbarStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const NavbarButtonsComponent = () => {
	const homeIcon = <FontAwesomeIcon icon={faHome} size='1x' color='#262626' />;
	const compassIcon = <FontAwesomeIcon icon={faCompass} size='1x' color='#262626' />;
	const uploadIcon = <FontAwesomeIcon icon={faPlus} size='1x' color='#262626' />;
	const heartIcon = <FontAwesomeIcon icon={faHeart} size='1x' color='#262626' />;
	const userIcon = <FontAwesomeIcon icon={faUser} size='1x' color='#262626' />;

	return (
		<NavbarButtons>
			<Link to='/'>{homeIcon}</Link>
			<Link to='/explore'>{compassIcon}</Link>
			<Link to='/upload'>{uploadIcon}</Link>
			{heartIcon}
			{userIcon}
		</NavbarButtons>
	);
};
