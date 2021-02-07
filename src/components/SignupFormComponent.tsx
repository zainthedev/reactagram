import { useState } from 'react';
import { useAuth, useFirestore, useFirestoreDocData } from 'reactfire';
import { AuthButton } from '../styled-components/authStyles';
import { FormInputWrapper, FormInput } from '../styled-components/globalStyles';
import { getInputError } from '../helper-functions/getInputError';

export const SignupFormComponent = () => {
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [signUpError, setSignUpError] = useState({ error: false, message: '' });

	const auth = useAuth();

	const usernameCollectionQuery = useFirestore().collection('users');
	const usernamesDoc: any = useFirestoreDocData(usernameCollectionQuery.doc('usernames'));
	const usernames = usernamesDoc.data;
	const FieldValue = useFirestore.FieldValue;

	//Add usernames to Firebase doc
	const addUsername = async () => {
		await usernameCollectionQuery
			.doc('usernames')
			.update({ namesArray: FieldValue.arrayUnion(username.toString()) });
	};

	const signUp = async (email: string, password: string) => {
		//Check if username exists, if not, then create account
		if (username.length > 0 && !usernames.namesArray.includes(username)) {
			try {
				await auth.createUserWithEmailAndPassword(email, password);
				await auth.currentUser?.updateProfile({ displayName: username });
				addUsername();
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
