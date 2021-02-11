import { RouterLink } from '../styled-components/globalStyles';
import { ReactagramLogoComponent } from './ReactagramLogoComponent';
import { Navbar, NavbarContentWrapper } from '../styled-components/navbarStyles';
import { FormInputWrapper, FormInput } from '../styled-components/globalStyles';
import { NavbarButtonsComponent } from './NavbarButtonsComponent';

export const NavbarComponent = () => {
	return (
		<Navbar>
			<NavbarContentWrapper>
				<RouterLink
					to='/'
					style={{ textDecoration: 'none', WebkitTapHighlightColor: 'transparent' }}
				>
					<ReactagramLogoComponent />
				</RouterLink>
				<FormInputWrapper>
					<FormInput placeholder='Search'></FormInput>
				</FormInputWrapper>
				<NavbarButtonsComponent />
			</NavbarContentWrapper>
		</Navbar>
	);
};
