import { AuthCheck } from 'reactfire';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomeComponent } from './components/HomeComponent';
import { LoginComponent } from './components/LoginComponent';
import { MobileHeaderComponent } from './components/MobileHeaderComponent';
import { NavbarComponent } from './components/NavbarComponent';
import { UserProfile } from './components/UserProfileComponent';

export const App = () => {
	return (
		<BrowserRouter>
			<AuthCheck fallback={<LoginComponent />}>
				<MobileHeaderComponent />
				<NavbarComponent />
				<Switch>
					<Route path='/:id'>
						<UserProfile />
					</Route>
					<Route exact path='/' component={HomeComponent} />
				</Switch>
			</AuthCheck>
		</BrowserRouter>
	);
};
