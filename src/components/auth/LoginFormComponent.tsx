import { useAuth } from 'reactfire';
import { AuthButton, ErrorTextWrapper } from '../../styled-components/authStyles';
import { FormInputWrapper, FormInput } from '../../styled-components/globalStyles';
import { useState } from 'react';
import { getInputError } from '../../helper-functions/getInputError';

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

	const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
		const formValue = e.currentTarget.value;
		return e.currentTarget.type === 'email' ? setEmail(formValue) : setPassword(formValue);
	};

	return (
		<>
			<FormInputWrapper
				onSubmit={(e) => {
					e.preventDefault();
					signIn(email, password);
				}}
			>
				<label>
					<FormInput type={'email'} placeholder={'Email'} onChange={handleInput} />
				</label>
				<label>
					<FormInput type={'password'} placeholder={'Password'} onChange={handleInput} />
				</label>
				<label>
					<AuthButton type='submit'>Log in</AuthButton>
				</label>
			</FormInputWrapper>
			{loginError.error === true && <ErrorTextWrapper>{loginError.message}</ErrorTextWrapper>}
		</>
	);
};
