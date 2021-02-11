import { Link } from 'react-router-dom';
import { UserType } from '../../types';

export const UserLinkComponent = ({ user }: UserType) => {
	return <Link to={'u/' + user.name}></Link>;
};
