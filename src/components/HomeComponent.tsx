import { Home } from '../styled-components/homeStyles';
import { UserListComponent } from './UserListComponent';

export const HomeComponent = () => {
	return (
		<Home>
			Home
			<UserListComponent></UserListComponent>
		</Home>
	);
};
