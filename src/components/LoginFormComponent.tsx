import { useAuth } from 'reactfire';
import { AuthFormInputWrapper, AuthFormInput, AuthButton } from '../styled-components/authStyles';
import { useState } from 'react';

export const LoginFormComponent = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const auth = useAuth();

	const signIn = async (email: string, password: string) => {
		await auth.signInWithEmailAndPassword(email, password);
	};

	const signOut = async () => {
		await auth.signOut();
	};

	const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
		const formValue = e.currentTarget.value;
		return e.currentTarget.type === 'email' ? setEmail(formValue) : setPassword(formValue);
	};

	const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
		return signIn(email, password);
	};

	return (
		<AuthFormInputWrapper>
			<AuthFormInput type={'email'} placeholder={'Email'} onChange={handleInput} />
			<AuthFormInput type={'password'} placeholder={'Password'} onChange={handleInput} />
			<AuthButton onClick={handleClick}>Log in</AuthButton>
		</AuthFormInputWrapper>
	);
};
