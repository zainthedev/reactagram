import { SignupFormComponent } from './SignupFormComponent';
import { AuthFormComponent } from './AuthFormComponent';
import { Auth, AuthTextWrapper } from '../styled-components/authStyles';
import { ReactagramLink } from '../styled-components/globalStyles';

export const SignupComponent = (props: any) => {
	return (
		<Auth>
			<AuthFormComponent>
				<SignupFormComponent />
			</AuthFormComponent>
			<AuthTextWrapper>
				Already have an account?
				<ReactagramLink onClick={props.handleSignup}> Log in</ReactagramLink>
			</AuthTextWrapper>
		</Auth>
	);
};
