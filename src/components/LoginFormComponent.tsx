import { useAuth } from 'reactfire';
import { AuthButton } from '../styled-components/authStyles';
import { FormInputWrapper, FormInput } from '../styled-components/globalStyles';
import { useState } from 'react';
import { getInputError } from '../helper-functions/getInputError';

export const LoginFormComponent = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loginError, setLoginError] = useState({ error: false, message: '' });

	const auth = useAuth();

	const signIn = async (email: string, password: string) => {
		try {
			await auth.signInWithEmailAndPassword(email, password);
		} catch (err) {
			setLoginError({ error: true, message: getInputError(err) });
		}
	};

	const signOut = async () => {
		await auth.signOut();
	};

	const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
		const formValue = e.currentTarget.value;
		return e.currentTarget.type === 'email' ? setEmail(formValue) : setPassword(formValue);
	};

	const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
		signIn(email, password);
		console.log(auth.currentUser);
	};

	return (
		<>
			<FormInputWrapper>
				<FormInput type={'email'} placeholder={'Email'} onChange={handleInput} />
				<FormInput type={'password'} placeholder={'Password'} onChange={handleInput} />
				<AuthButton onClick={handleClick}>Log in</AuthButton>
			</FormInputWrapper>
			{loginError.error === true && loginError.message}
		</>
	);
};
