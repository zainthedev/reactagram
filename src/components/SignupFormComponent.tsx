import { useAuth } from 'reactfire';
import { AuthFormInputWrapper, AuthFormInput, AuthButton } from '../styled-components/authStyles';

export const SignupFormComponent = () => {
	const auth = useAuth();

	const signUp = async (email: string, password: string) => {
		//todo
	};

	const handleSubmit = () => {
		//todo
	};

	return (
		<AuthFormInputWrapper>
			<AuthFormInput type={'email'} placeholder={'Email'} />
			<AuthFormInput type={'text'} placeholder={'Username/Display name'} />
			<AuthFormInput type={'password'} placeholder={'Password'} />
			<AuthButton onClick={handleSubmit}>Sign up</AuthButton>
		</AuthFormInputWrapper>
	);
};
