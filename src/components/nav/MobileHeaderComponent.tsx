import { ReactagramLogoComponent } from '../ReactagramLogoComponent';
import { MobileHeader, MobileHeaderContentWrapper } from '../../styled-components/navbarStyles';
import { RouterLink } from '../../styled-components/globalStyles';
import { SearchButtonComponent } from './SearchButtonComponent';

export const MobileHeaderComponent = () => {
	return (
		<MobileHeader>
			<MobileHeaderContentWrapper>
				<RouterLink to='/'>
					<ReactagramLogoComponent />
				</RouterLink>
				<SearchButtonComponent />
			</MobileHeaderContentWrapper>
		</MobileHeader>
	);
};
