import { useAuth } from 'reactfire';
import { SignupUserType } from '../types';
import { AuthForm, AuthFormInput } from '../styled-components/authStyles';

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
			<AuthFormInput type={'email'} placeholder={'Email'} />
			<AuthFormInput type={'text'} placeholder={'Username/Display name'} />
			<AuthFormInput type={'password'} placeholder={'Password'} />
		</AuthForm>
	);
};
