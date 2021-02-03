import { useAuth } from 'reactfire';
import { SignupUserType } from '../types';

export const SignupFormComponent = ({ email, password }: SignupUserType) => {
	const auth = useAuth();

	const signUp = async (email: string, password: string) => {
		//todo
	};

	const handleSubmit = () => {
		//todo
	};

	return <div onSubmit={handleSubmit} />;
};
