import { AuthCheck } from 'reactfire';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomeComponent } from './components/HomeComponent';
import { LoginComponent } from './components/LoginComponent';

export const App = () => {
	return (
		<BrowserRouter>
			<AuthCheck fallback={<LoginComponent />}>
				<Switch>
					<Route exact path='/' component={HomeComponent} />
				</Switch>
			</AuthCheck>
		</BrowserRouter>
	);
};
