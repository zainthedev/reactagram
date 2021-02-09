export type SignupUserType = {
	signupUser: { email: string; password: string };
};

export type PostType = {
	poster: string;
	image: string[];
	caption: string;
	tags: string[];
};

export type UserType = {
	user: {
		name: string;
		displayPicture: string;
		posts: PostType[];
		taggedPosts: string[];
		followers: string[];
		following: string[];
		likes: string[];
	};
};
