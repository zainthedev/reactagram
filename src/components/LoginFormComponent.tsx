import { useAuth } from 'reactfire';
import { AuthFormInputWrapper, AuthFormInput, AuthButton } from '../styled-components/authStyles';
import { useState } from 'react';

export const LoginFormComponent = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loginError, setLoginError] = useState({ error: false, message: '' });

	const auth = useAuth();

	const signIn = async (email: string, password: string) => {
		try {
			await auth.signInWithEmailAndPassword(email, password);
		} catch (err) {
			let error = '';
			if (err.code === 'auth/invalid-email') {
				error = 'Invailid email address.';
			} else if (err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found') {
				error = 'The password or username you entered is incorrect.';
			}
			setLoginError({ error: true, message: error });
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
			<AuthFormInputWrapper>
				<AuthFormInput type={'email'} placeholder={'Email'} onChange={handleInput} />
				<AuthFormInput type={'password'} placeholder={'Password'} onChange={handleInput} />
				<AuthButton onClick={handleClick}>Log in</AuthButton>
			</AuthFormInputWrapper>
			{loginError.error === true && loginError.message}
		</>
	);
};
