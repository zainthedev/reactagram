export const checkForBadWords = (input: string) => {
	const badWords = process.env.REACT_APP_BAD_WORDS;
	return badWords?.includes(input.toLowerCase());
};
