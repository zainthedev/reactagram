import firebase from 'firebase/app';
import { useAuth } from 'reactfire';
import { AuthForm, GmailLoginWrapper } from '../styled-components/authStyles';
import { ImageWrapper, GmailIcon } from '../styled-components/imageStyles';
import {
	ReactagramTextWrapper,
	ReactagramText,
	ReactagramLink,
} from '../styled-components/globalStyles';
import gmailIcon from '../images/gmailIcon.svg';

export interface AuthFormComponentProps {
	children: React.ReactNode;
}

export const AuthFormComponent = (props: AuthFormComponentProps) => {
	const auth = useAuth();

	const signInWithGmail = async () => {
		await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
	};

	return (
		<AuthForm>
			<ReactagramTextWrapper>
				<ReactagramText>Reactagram</ReactagramText>
			</ReactagramTextWrapper>
			{props.children}
			<GmailLoginWrapper onClick={signInWithGmail}>
				<ImageWrapper>
					<GmailIcon src={gmailIcon} />
					<ReactagramLink> Log in with Gmail</ReactagramLink>
				</ImageWrapper>
			</GmailLoginWrapper>
		</AuthForm>
	);
};
