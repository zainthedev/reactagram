import firebase from 'firebase/app';
import { useAuth, useFirestore, useFirestoreCollectionData } from 'reactfire';
import { AuthForm, GmailLoginWrapper } from '../../styled-components/authStyles';
import { ReactagramLogoComponent } from '.././ReactagramLogoComponent';
import { ImageWrapper, GmailIcon } from '../../styled-components/imageStyles';
import { ReactagramLink } from '../../styled-components/globalStyles';
import { addUser } from '../../helper-functions/addUser';
import gmailIcon from '../../images/gmailIcon.svg';

export interface AuthFormComponentProps {
	children: React.ReactNode;
}

export const AuthFormComponent = (props: AuthFormComponentProps) => {
	const auth = useAuth();
	const userCollectionQuery = useFirestore().collection('users');
	const userCollectionQueryData = useFirestoreCollectionData(userCollectionQuery);

	const signInWithGmail = async () => {
		await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(async (result: any) => {
			// The signed-in user info.
			const picture = result.user.photoURL;
			const username = result.user.email.split('@').shift();
			await auth.currentUser?.updateProfile({ displayName: username });
			const userExists = userCollectionQueryData.data.find((p) => p.name === username)!;
			if (!userExists) {
				addUser(userCollectionQuery, username, picture);
			}
		});
	};

	return (
		<AuthForm>
			<ReactagramLogoComponent />
			{props.children}
			<GmailLoginWrapper onClick={signInWithGmail}>
				<ImageWrapper>
					<GmailIcon alt='gmailIcon' src={gmailIcon} />
					<ReactagramLink> Log in with Gmail</ReactagramLink>
				</ImageWrapper>
			</GmailLoginWrapper>
		</AuthForm>
	);
};
