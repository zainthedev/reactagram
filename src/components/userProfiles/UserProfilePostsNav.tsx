import { ReactagramLink, RouterLink } from '../../styled-components/globalStyles';
import { Navbar, NavbarContentWrapper } from '../../styled-components/navbarStyles';
import { UserProfileNavbar } from '../../styled-components/profileStyles';

export const UserProfileNavComponent = () => {
	return (
		<UserProfileNavbar>
			<NavbarContentWrapper>
				<ReactagramLink>Posts</ReactagramLink>
				<ReactagramLink>Tagged</ReactagramLink>
			</NavbarContentWrapper>
		</UserProfileNavbar>
	);
};
