import { LoginFormComponent } from './LoginFormComponent';
import { SignupComponent } from './SignupComponent';
import { AuthFormComponent } from './AuthFormComponent';
import { Auth, AuthTextWrapper } from '../styled-components/authStyles';
import { ReactagramLink } from '../styled-components/globalStyles';
import { useState } from 'react';

export const LoginComponent = () => {
	const [signingUp, setSigningUp] = useState(false);

	const handleSignup = () => {
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
						<ReactagramLink onClick={handleSignup}> Sign up</ReactagramLink>
					</AuthTextWrapper>
				</>
			) : (
				<SignupComponent handleSignup={handleSignup} />
			)}
		</Auth>
	);
};
