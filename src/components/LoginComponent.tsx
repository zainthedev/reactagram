import { LoginFormComponent } from './LoginFormComponent';
import { useState } from 'react';
import { AuthFormComponent } from './AuthFormComponent';
import { AuthForm, Login } from '../styled-components/authStyles';

export const LoginComponent = () => {
	return (
		<Login>
			<AuthFormComponent>
				<LoginFormComponent />
			</AuthFormComponent>
		</Login>
	);
};
