import { SignupFormComponent } from './SignupFormComponent';
import { LoginFormComponent } from './LoginFormComponent';
import { useState, useEffect } from 'react';

export const LoginComponent = () => {
	const [signupUser, setSignupUser] = useState({ email: '', password: '' });

	return (
		<>
			<LoginFormComponent signupUser={signupUser} />
			<SignupFormComponent signupUser={signupUser} />
		</>
	);
};
