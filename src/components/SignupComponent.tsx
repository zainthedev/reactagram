import { SignupFormComponent } from './SignupFormComponent';
import { AuthFormComponent } from './AuthFormComponent';
import { Auth } from '../styled-components/authStyles';

export const SignupComponent = () => {
	return (
		<Auth>
			<AuthFormComponent>
				<SignupFormComponent />
			</AuthFormComponent>
		</Auth>
	);
};
