import { RouterLink } from '../../styled-components/globalStyles';
import { ReactagramLogoComponent } from '../ReactagramLogoComponent';
import { Navbar, NavbarContentWrapper } from '../../styled-components/navbarStyles';
import { NavbarButtonsComponent } from './NavbarButtonsComponent';
import { SearchPopoverComponent } from '../SearchPopoverComponent';

export const NavbarComponent = () => {
	return (
		<Navbar>
			<NavbarContentWrapper>
				<RouterLink to='/'>
					<ReactagramLogoComponent />
				</RouterLink>
				<SearchPopoverComponent />
				<NavbarButtonsComponent />
			</NavbarContentWrapper>
		</Navbar>
	);
};
