export const getInputError = (err: any) => {
	let error = '';
	if (err.code === 'auth/invalid-email' || err.code === 'auth/email-already-in-use') {
		error = 'Invailid email address.';
	} else if (err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found') {
		error = 'The password or username you entered is incorrect.';
	}
	return error;
};
