export type SignupUserType = {
	signupUser: { email: string; password: string };
};

export type PostType = {
	postID: string;
	poster: string;
	caption: string;
	image: string;
	location: string;
	tags: string[];
	comments: string[];
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
