import { AuthCheck } from 'reactfire';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomeComponent } from './components/HomeComponent';
import { LoginComponent } from './components/LoginComponent';
import { MobileHeaderComponent } from './components/MobileHeaderComponent';
import { NavbarComponent } from './components/NavbarComponent';
import { UserProfileComponent } from './components/UserProfileComponent';
import { AppWrapper } from './styled-components/globalStyles';

export const App = () => {
	return (
		<BrowserRouter>
			<AuthCheck fallback={<LoginComponent />}>
				<MobileHeaderComponent />
				<NavbarComponent />
				<Switch>
					<AppWrapper>
						<Route exact path='/' component={HomeComponent} />
						<Route exact path='/explore' component={HomeComponent} />
						<Route exact path='/upload' component={HomeComponent} />
						<Route exact path='/notifications' component={HomeComponent} />
						<Route path='/u/:profile' component={UserProfileComponent} />
					</AppWrapper>
				</Switch>
			</AuthCheck>
		</BrowserRouter>
	);
};
