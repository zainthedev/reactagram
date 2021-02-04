import { useAuth } from 'reactfire';
import { SignupUserType } from '../types';
import { AuthForm, SignupFormInput } from '../styled-components/authStyles';

export const SignupFormComponent = ({ signupUser }: SignupUserType) => {
	const auth = useAuth();

	const signUp = async (email: string, password: string) => {
		//todo
	};

	const handleSubmit = () => {
		//todo
	};

	return (
		<AuthForm>
			Email: <SignupFormInput />
			Password: <SignupFormInput />
		</AuthForm>
	);
};
