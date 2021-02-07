import { ReactagramLogoComponent } from './ReactagramLogoComponent';
import { MobileHeader, MobileHeaderContentWrapper } from '../styled-components/navbarStyles';
import { FormInputWrapper, FormInput } from '../styled-components/globalStyles';

export const MobileHeaderComponent = () => {
	return (
		<MobileHeader>
			<MobileHeaderContentWrapper>
				<ReactagramLogoComponent />
				<FormInputWrapper>
					<FormInput placeholder='Search'></FormInput>
				</FormInputWrapper>
			</MobileHeaderContentWrapper>
		</MobileHeader>
	);
};
