export type SignupUserType = {
	signupUser: { email: string; password: string };
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
export interface PostType {
	postID: string;
	poster: UserType.user;
	caption: string;
	image: string;
	location: string;
	tags: string[];
	comments: string[];
}

export interface UserListType extends UserType {
	list: string;
}

export interface UserModalType extends UserType {
	handleClick: any;
}
