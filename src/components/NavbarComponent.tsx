import { Link } from 'react-router-dom';
import { ReactagramLogoComponent } from './ReactagramLogoComponent';
import { Navbar, NavbarContentWrapper } from '../styled-components/navbarStyles';
import { FormInputWrapper, FormInput } from '../styled-components/globalStyles';
import { NavbarButtonsComponent } from './NavbarButtonsComponent';

export const NavbarComponent = () => {
	return (
		<Navbar>
			<NavbarContentWrapper>
				<Link to='/' style={{ textDecoration: 'none', WebkitTapHighlightColor: 'transparent' }}>
					<ReactagramLogoComponent />
				</Link>
				<FormInputWrapper>
					<FormInput placeholder='Search'></FormInput>
				</FormInputWrapper>
				<NavbarButtonsComponent />
			</NavbarContentWrapper>
		</Navbar>
	);
};
