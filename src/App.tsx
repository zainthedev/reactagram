import { AuthCheck } from 'reactfire';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomeComponent } from './components/HomeComponent';
import { LoginComponent } from './components/LoginComponent';
import { MobileHeaderComponent } from './components/MobileHeaderComponent';
import { NavbarComponent } from './components/NavbarComponent';

export const App = () => {
	return (
		<BrowserRouter>
			<AuthCheck fallback={<LoginComponent />}>
				<MobileHeaderComponent />
				<NavbarComponent />
				<Switch>
					<Route exact path='/' component={HomeComponent} />
				</Switch>
			</AuthCheck>
		</BrowserRouter>
	);
};
