import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
	useParams,
	useRouteMatch,
} from 'react-router-dom';

import { UserProfile } from '../styled-components/profileStyles';

export const UserProfileComponent = () => {
	let { url } = useRouteMatch();
	let { profile }: any = useParams();
	console.log(url);
	console.log(profile);

	return <UserProfile>{profile}'s profile</UserProfile>;
};
