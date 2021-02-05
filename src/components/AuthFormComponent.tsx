import { AuthForm } from '../styled-components/authStyles';
import { ReactagramText } from '../styled-components/globalStyles';

export interface AuthFormComponentProps {
	children: React.ReactNode;
	signupUser: { email: string; password: string };
}

export const AuthFormComponent = (props: AuthFormComponentProps) => {
	return (
		<AuthForm>
			<ReactagramText>Reactagram</ReactagramText>
			{props.children}
		</AuthForm>
	);
};
