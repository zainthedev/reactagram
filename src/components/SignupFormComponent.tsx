import { useState } from 'react';
import { useAuth, useFirestore, useFirestoreCollectionData } from 'reactfire';
import { AuthButton, ErrorTextWrapper } from '../styled-components/authStyles';
import { FormInputWrapper, FormInput } from '../styled-components/globalStyles';
import { getInputError } from '../helper-functions/getInputError';
import { checkForBadWords } from '../helper-functions/checkForBadWords';
import { addUser } from '../helper-functions/addUser';

export const SignupFormComponent = () => {
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [signUpError, setSignUpError] = useState({ error: false, message: '' });

	const auth = useAuth();
	const userCollectionQuery = useFirestore().collection('users');
	const users = useFirestoreCollectionData(userCollectionQuery).data;

	const signUp = async (email: string, password: string) => {
		//Check if username exists, if not, then create account
		if (
			username.length > 0 &&
			!users.find((user) => user.name === username) &&
			checkForBadWords(username) === false
		) {
			try {
				await auth.createUserWithEmailAndPassword(email, password);
				await auth.currentUser?.updateProfile({ displayName: username });
				addUser(userCollectionQuery, username);
			} catch (err) {
				setSignUpError({ error: true, message: getInputError(err) });
			}
		} else {
			setSignUpError({
				error: true,
				message: username.length === 0 ? 'Enter username' : 'Username unavailable',
			});
		}
	};

	const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
		const formValue = e.currentTarget.value;
		switch (e.currentTarget.type) {
			case 'email':
				setEmail(formValue);
				break;
			case 'text':
				setUsername(formValue);
				break;
			case 'password':
				setPassword(formValue);
				break;
		}
	};

	return (
		<>
			<FormInputWrapper
				onSubmit={(e) => {
					e.preventDefault();
					signUp(email, password);
				}}
			>
				<FormInput type={'email'} placeholder={'Email'} onChange={handleInput} />
				<FormInput type={'text'} placeholder={'Username/Display name'} onChange={handleInput} />
				<FormInput type={'password'} placeholder={'Password'} onChange={handleInput} />
				<AuthButton type='submit'>Sign up</AuthButton>
			</FormInputWrapper>
			{signUpError.error === true && <ErrorTextWrapper>{signUpError.message}</ErrorTextWrapper>}
		</>
	);
};
