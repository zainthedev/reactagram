import { AuthCheck } from 'reactfire';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomeComponent } from './components/HomeComponent';
import { LoginComponent } from './components/auth/LoginComponent';
import { MobileHeaderComponent } from './components/nav/MobileHeaderComponent';
import { NavbarComponent } from './components/nav/NavbarComponent';
import { UserProfileComponent } from './components/userProfiles/UserProfileComponent';
import { UploadImageComponent } from './components/upload/UploadImageComponent';
import { AppWrapper } from './styled-components/globalStyles';
import { ExploreComponent } from './components/ExploreComponent';
import { NotificationsComponent } from './components/notifications/NotificationsComponent';

export const App = () => {
	return (
		<BrowserRouter>
			<AuthCheck fallback={<LoginComponent />}>
				<MobileHeaderComponent />
				<NavbarComponent />
				<Switch>
					<AppWrapper>
						<Route exact path='/' component={HomeComponent} />
						<Route exact path='/explore' component={ExploreComponent} />
						<Route exact path='/upload' component={UploadImageComponent} />
						<Route exact path='/notifications' component={NotificationsComponent} />
						<Route path='/u/:profile' component={UserProfileComponent} />
					</AppWrapper>
				</Switch>
			</AuthCheck>
		</BrowserRouter>
	);
};
