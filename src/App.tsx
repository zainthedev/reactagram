import { useAuth } from 'reactfire';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomeComponent } from './components/HomeComponent';
import { LoginComponent } from './components/LoginComponent';

export const App = () => {
	const auth = useAuth();

	return (
		<BrowserRouter>
			{auth.currentUser === null ? (
				<LoginComponent />
			) : (
				<Switch>
					<Route exact path='/' component={HomeComponent} />
				</Switch>
			)}
		</BrowserRouter>
	);
};
