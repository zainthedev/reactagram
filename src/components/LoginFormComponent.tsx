import firebase from 'firebase/app';
import { useAuth } from 'reactfire';
import { SignupUserType } from '../types';
import { AuthForm } from '../styled-components/authStyles';

export const LoginFormComponent = ({ signupUser }: SignupUserType) => {
	const auth = useAuth();

	const signIn = async (email: string, password: string) => {
		await auth.signInWithEmailAndPassword(signupUser.email, signupUser.password);
	};

	const signInWithGmail = async () => {
		await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
	};

	const signOut = async () => {
		await auth.signOut();
	};

	return <AuthForm></AuthForm>;
};
