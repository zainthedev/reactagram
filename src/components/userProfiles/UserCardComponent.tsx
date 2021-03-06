import { RouterLink } from '../../styled-components/globalStyles';
import { useRouteMatch } from 'react-router-dom';
import { ImageWrapper, UserIcon } from '../../styled-components/imageStyles';
import { UserCard } from '../../styled-components/userListStyles';
import { UserType } from '../../types';

export const UserCardComponent = ({ user }: UserType) => {
	let { url } = useRouteMatch();

	return (
		<RouterLink
			to={url.substring(0, 3) === '/u/' ? user.name : 'u/' + user.name}
			style={{ overflowX: 'hidden' }}
		>
			<UserCard>
				<ImageWrapper>
					<UserIcon alt='user' src={user.displayPicture} />
				</ImageWrapper>
				{user.name}
			</UserCard>
		</RouterLink>
	);
};
