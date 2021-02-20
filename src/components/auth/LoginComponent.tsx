import { LoginFormComponent } from './LoginFormComponent';
import { SignupComponent } from './SignupComponent';
import { AuthFormComponent } from './AuthFormComponent';
import { Auth, AuthTextWrapper, TestingText, AuthButton } from '../../styled-components/authStyles';
import { ReactagramLink, GithubLink } from '../../styled-components/globalStyles';
import { useState } from 'react';
import { useAuth } from 'reactfire';

export const LoginComponent = () => {
	const [signingUp, setSigningUp] = useState(false);

	const auth = useAuth();

	const handleSigningUp = () => {
		return signingUp === false ? setSigningUp(true) : setSigningUp(false);
	};

	const guestSignIn = async () => {
		await auth.signInWithEmailAndPassword('tester@test.com', 'testpass');
	};

	return (
		<Auth>
			{signingUp === false ? (
				<>
					<AuthFormComponent>
						<LoginFormComponent />
					</AuthFormComponent>
					<AuthTextWrapper>
						Don't have an account?
						<ReactagramLink onClick={handleSigningUp}> Sign up</ReactagramLink>
					</AuthTextWrapper>
					<TestingText>
						Just testing?{'\n'}
						<AuthButton onClick={guestSignIn}>Log in as guest</AuthButton>
					</TestingText>
				</>
			) : (
				<SignupComponent handleSigningUp={handleSigningUp} />
			)}
			<GithubLink href='https://github.com/zainthedev/reactagram' target='_blank' rel='author'>
				View on Github
			</GithubLink>
		</Auth>
	);
};
