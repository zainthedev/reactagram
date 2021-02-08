import { UserProfile } from '../styled-components/profileStyles';

export const UserProfileComponent = (user: any) => {
	return <UserProfile>{user.name}</UserProfile>;
};
