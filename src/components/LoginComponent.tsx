import { LoginFormComponent } from './LoginFormComponent';
import { SignupComponent } from './SignupComponent';
import { AuthFormComponent } from './AuthFormComponent';
import { Auth, AuthTextWrapper, TestingText } from '../styled-components/authStyles';
import { ReactagramLink, GithubLink } from '../styled-components/globalStyles';
import { useState } from 'react';

export const LoginComponent = () => {
	const [signingUp, setSigningUp] = useState(false);

	const handleSigningUp = () => {
		return signingUp === false ? setSigningUp(true) : setSigningUp(false);
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
						Email: test@test.test{'\n'}
						Password: testpass
					</TestingText>
				</>
			) : (
				<SignupComponent handleSigningUp={handleSigningUp} />
			)}
			<GithubLink href='https://github.com/zainthedev/reactagram' target='_blank'>
				View on Github
			</GithubLink>
		</Auth>
	);
};
