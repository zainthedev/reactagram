import { Link } from 'react-router-dom';

export const UserLinkComponent = (user: any) => {
	return <Link to={'u/' + user.user.name}></Link>;
};
