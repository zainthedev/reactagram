import { Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom';
import { useAuth, useUser, useFirebaseApp } from 'reactfire';

export const UserProfile = () => {
	const PEEPS = [
		{ id: 0, name: 'Michelle', friends: [1, 2, 3] },
		{ id: 1, name: 'Sean', friends: [0, 3] },
		{ id: 2, name: 'Kim', friends: [0, 1, 3] },
		{ id: 3, name: 'David', friends: [1, 2] },
	];

	let { url } = useRouteMatch();
	let { id }: any = useParams();
	let person = find(parseInt(id));

	function find(id: number): any {
		return PEEPS.find((p) => p.id === id);
	}

	return (
		<div>
			<h3>{person.name}’s Friends</h3>

			<ul>
				{person.friends.map((id: number) => (
					<li key={id}>
						<Link to={`${url}/${id}`}>{find(id).name}</Link>
					</li>
				))}
			</ul>

			<Switch>
				<Route path={`${url}/:id`}>
					<UserProfile />
				</Route>
			</Switch>
		</div>
	);
};
