export type SignupUserType = {
	signupUser: { email: string; password: string };
};

export type PostType = {
	poster: string;
	image: string[];
	caption: string;
	tags: string[];
};

export interface UserType {
	user: {
		name: string;
		displayPicture: string;
		posts: string[];
		taggedPosts: string[];
		followers: string[];
		following: string[];
		likes: string[];
	};
}

export interface UserListType extends UserType {
	list: string;
}

export interface UserModalType extends UserType {
	handleClick: any;
}
