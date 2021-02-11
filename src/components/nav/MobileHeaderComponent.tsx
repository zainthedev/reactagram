import { ReactagramLogoComponent } from '../ReactagramLogoComponent';
import { MobileHeader, MobileHeaderContentWrapper } from '../../styled-components/navbarStyles';
import { FormInputWrapper, FormInput, RouterLink } from '../../styled-components/globalStyles';

export const MobileHeaderComponent = () => {
	return (
		<MobileHeader>
			<MobileHeaderContentWrapper>
				<RouterLink to='/'>
					<ReactagramLogoComponent />
				</RouterLink>
				<FormInputWrapper>
					<FormInput placeholder='Search'></FormInput>
				</FormInputWrapper>
			</MobileHeaderContentWrapper>
		</MobileHeader>
	);
};
