import { Link } from 'react-router-dom';
import { ReactagramLogoComponent } from './ReactagramLogoComponent';
import { MobileHeader, MobileHeaderContentWrapper } from '../styled-components/navbarStyles';
import { FormInputWrapper, FormInput } from '../styled-components/globalStyles';

export const MobileHeaderComponent = () => {
	return (
		<MobileHeader>
			<MobileHeaderContentWrapper>
				<Link to='/' style={{ textDecoration: 'none' }}>
					<ReactagramLogoComponent />
				</Link>
				<FormInputWrapper>
					<FormInput placeholder='Search'></FormInput>
				</FormInputWrapper>
			</MobileHeaderContentWrapper>
		</MobileHeader>
	);
};
