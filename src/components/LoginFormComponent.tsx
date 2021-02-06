import { useAuth } from 'reactfire';
import { SignupUserType } from '../types';
import { AuthFormInputWrapper, AuthFormInput, AuthButton } from '../styled-components/authStyles';

export const LoginFormComponent = ({ signupUser }: SignupUserType) => {
	const auth = useAuth();

	const signIn = async (email: string, password: string) => {
		await auth.signInWithEmailAndPassword(signupUser.email, signupUser.password);
	};

	const signOut = async () => {
		await auth.signOut();
	};

	return (
		<AuthFormInputWrapper>
			<AuthFormInput type={'email'} placeholder={'Email'} />
			<AuthFormInput type={'password'} placeholder={'Password'} />
			<AuthButton>Log in</AuthButton>
		</AuthFormInputWrapper>
	);
};
