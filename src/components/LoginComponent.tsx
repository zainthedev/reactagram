import { LoginFormComponent } from './LoginFormComponent';
import { SignupComponent } from './SignupComponent';
import { AuthFormComponent } from './AuthFormComponent';
import { Auth, SignupTextWrapper } from '../styled-components/authStyles';
import { ReactagramLink } from '../styled-components/globalStyles';
import { useState } from 'react';

export const LoginComponent = () => {
	const [signingUp, setSigningUp] = useState(false);

	const handleSignup = () => {
		return setSigningUp(true);
	};
	return (
		<Auth>
			{signingUp === false ? (
				<>
					<AuthFormComponent>
						<LoginFormComponent />
					</AuthFormComponent>
					<SignupTextWrapper>
						Don't have an account?
						<ReactagramLink onClick={handleSignup}> Sign up</ReactagramLink>
					</SignupTextWrapper>
				</>
			) : (
				<SignupComponent />
			)}
		</Auth>
	);
};
