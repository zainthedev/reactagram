import { RouterLink } from '../../styled-components/globalStyles';
import { ReactagramLogoComponent } from '../ReactagramLogoComponent';
import { Navbar, NavbarContentWrapper, NavbarLeft } from '../../styled-components/navbarStyles';
import { NavbarButtonsComponent } from './NavbarButtonsComponent';
import { SearchButtonComponent } from './SearchButtonComponent';

export const NavbarComponent = () => {
	return (
		<Navbar>
			<NavbarContentWrapper>
				<NavbarLeft>
					<RouterLink to='/'>
						<ReactagramLogoComponent />
					</RouterLink>
				</NavbarLeft>
				<SearchButtonComponent />
				<NavbarButtonsComponent />
			</NavbarContentWrapper>
		</Navbar>
	);
};
