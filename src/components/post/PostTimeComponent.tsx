import { PostTime } from '../../styled-components/postStyles';
import { PostType } from '../../types';

interface PostTimeProps {
	post: PostType;
}

export const PostTimeComponent = ({ post }: PostTimeProps) => {
	//Get the time since post was made
	const currentTime: any = new Date();
	const postedDate = post.date.toDate();

	const postedTimeSeconds = Math.floor(Math.round((currentTime - postedDate) / 1000));
	const postedTimeMinutes = Math.ceil(Math.round(postedTimeSeconds / 60));
	const postedTimeHours = Math.ceil(Math.round(postedTimeMinutes / 60));
	const postedTimeDays = Math.ceil(Math.round(postedTimeHours / 24));
	return (
		<PostTime>
			{postedTimeMinutes === 1 && `${postedTimeMinutes} minute ago`}
			{postedTimeMinutes < 60 && postedTimeHours !== 1 && `${postedTimeMinutes} minutes ago`}
			{postedTimeHours === 1 && `${postedTimeHours} hour ago`}
			{postedTimeHours < 24 && postedTimeHours > 1 && `${postedTimeHours} hours ago`}
			{postedTimeHours > 48 && `${postedTimeDays} day ago`}
			{postedTimeHours > 48 && `${postedTimeDays} days ago`}
		</PostTime>
	);
};
