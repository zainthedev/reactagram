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
import { UserCard } from '../styled-components/userListStyles';

export const UserCardComponent = (user: any) => {
	return (
		<Link to={'u/' + user.user.name}>
			<UserCard>
				<ImageWrapper>
					<UserIcon alt='user' src={user.user.displayPicture} />
				</ImageWrapper>
				{user.user.name}
			</UserCard>
		</Link>
	);
};
