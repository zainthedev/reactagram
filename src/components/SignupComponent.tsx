import { SignupFormComponent } from './SignupFormComponent';
import { AuthFormComponent } from './AuthFormComponent';
import { AuthTextWrapper } from '../styled-components/authStyles';
import { ReactagramLink } from '../styled-components/globalStyles';

export const SignupComponent = (props: any) => {
	return (
		<>
			<AuthFormComponent>
				<SignupFormComponent />
			</AuthFormComponent>
			<AuthTextWrapper>
				Already have an account?
				<ReactagramLink onClick={props.handleSigningUp}> Log in</ReactagramLink>
			</AuthTextWrapper>
		</>
	);
};
