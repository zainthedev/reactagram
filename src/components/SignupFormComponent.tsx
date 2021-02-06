import { useAuth } from 'reactfire';
import { AuthButton } from '../styled-components/authStyles';
import { FormInputWrapper, FormInput } from '../styled-components/globalStyles';

export const SignupFormComponent = () => {
	const auth = useAuth();

	const signUp = async (email: string, password: string) => {
		//todo
	};

	const handleSubmit = () => {
		//todo
	};

	return (
		<FormInputWrapper>
			<FormInput type={'email'} placeholder={'Email'} />
			<FormInput type={'text'} placeholder={'Username/Display name'} />
			<FormInput type={'password'} placeholder={'Password'} />
			<AuthButton onClick={handleSubmit}>Sign up</AuthButton>
		</FormInputWrapper>
	);
};
