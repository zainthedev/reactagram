import { useState } from 'react';
import { useAuth, useFirestore, useFirestoreCollectionData } from 'reactfire';
import { AuthButton } from '../styled-components/authStyles';
import { FormInputWrapper, FormInput } from '../styled-components/globalStyles';
import { getInputError } from '../helper-functions/getInputError';

export const SignupFormComponent = () => {
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [signUpError, setSignUpError] = useState({ error: false, message: '' });

	const auth = useAuth();

	const usernameCollectionQuery = useFirestore().collection('usernames');
	const usernameCollection = useFirestoreCollectionData(usernameCollectionQuery).data;

	const usernames: string[] = [];
	const populateUsernames = async () => {
		usernameCollection.forEach((obj: any) => {
			if (!usernames.includes(username)) {
				usernames.push(obj.name);
			}
		});
	};

	const addUsername = async () => {
		await usernameCollectionQuery.add({ name: username.toString() });
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

	const signUp = async (email: string, password: string) => {
		populateUsernames();
		if (username.length > 0 && !usernames.includes(username)) {
			try {
				await auth.createUserWithEmailAndPassword(email, password);
				await auth.currentUser?.updateProfile({ displayName: username });
				addUsername();
				console.log(usernames);
			} catch (err) {
				console.log(err);
				setSignUpError({ error: true, message: getInputError(err) });
			}
		} else {
			console.log(usernames);
			setSignUpError({
				error: true,
				message: username.length === 0 ? 'Enter username' : 'Username unavailable',
			});
		}
	};

	const handleSubmit = () => {
		return signUp(email, password);
	};

	return (
		<>
			<FormInputWrapper>
				<FormInput type={'email'} placeholder={'Email'} onChange={handleInput} />
				<FormInput type={'text'} placeholder={'Username/Display name'} onChange={handleInput} />
				<FormInput type={'password'} placeholder={'Password'} onChange={handleInput} />
				<AuthButton onClick={handleSubmit}>Sign up</AuthButton>
			</FormInputWrapper>
			{signUpError.error === true && signUpError.message}
		</>
	);
};
