import { useEffect, useState } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
	useParams,
	useRouteMatch,
} from 'react-router-dom';
import { ImageWrapper, Icon, UserIcon } from '../styled-components/imageStyles';

export const UserLinkComponent = (user: any) => {
	return <Link to={'u/' + user.user.name}></Link>;
};
