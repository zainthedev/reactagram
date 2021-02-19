import { RouterLink } from '../../styled-components/globalStyles';
import { ReactagramLogoComponent } from '../ReactagramLogoComponent';
import { Navbar, NavbarContentWrapper } from '../../styled-components/navbarStyles';
import { NavbarButtonsComponent } from './NavbarButtonsComponent';
import { SearchButtonComponent } from './SearchButtonComponent';

export const NavbarComponent = () => {
	return (
		<Navbar>
			<NavbarContentWrapper>
				<RouterLink to='/'>
					<ReactagramLogoComponent />
				</RouterLink>
				<SearchButtonComponent />
				<NavbarButtonsComponent />
			</NavbarContentWrapper>
		</Navbar>
	);
};
