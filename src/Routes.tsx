import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { App } from './App';

export const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={App} />
			</Switch>
		</BrowserRouter>
	);
};
