import { ReactagramLogoComponent } from './ReactagramLogoComponent';
import { Navbar, NavbarContentWrapper } from '../styled-components/navbarStyles';
import { FormInputWrapper, FormInput } from '../styled-components/globalStyles';
import { NavbarButtonsComponent } from './NavbarButtonsComponent';

export const NavbarComponent = () => {
	return (
		<Navbar>
			<NavbarContentWrapper>
				<ReactagramLogoComponent />
				<FormInputWrapper>
					<FormInput placeholder='Search'></FormInput>
				</FormInputWrapper>
				<NavbarButtonsComponent />
			</NavbarContentWrapper>
		</Navbar>
	);
};