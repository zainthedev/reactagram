import { useState } from 'react';
import { useAuth, useFirestore } from 'reactfire';
import { TagModalComponent } from './TagModalComponent';
import { ReactagramButton } from '../../styled-components/globalStyles';
import { ImageWrapper, UserIcon, UploadedImage, Icon } from '../../styled-components/imageStyles';
import {
	FinaliseUpload,
	NavigationButtonWrapper,
	CaptionInputWrapper,
	ExtraInfoWrapper,
	TagsWrapper,
	TagWrapper,
} from '../../styled-components/uploadStyles';
import { FormInputWrapper, FormInput } from '../../styled-components/globalStyles';
import { PostTextInput } from '../../styled-components/postStyles';
import { addPost } from '../../helper-functions/addPost';
import { Redirect } from 'react-router-dom';
import { useGetUser } from '../../helper-functions/useGetUser';
import deleteIcon from '../../images/deleteIcon.svg';

type FinalisePostComponentProps = {
	selectedImage: string;
	handleFinishEditing: () => void;
};

export const FinalisePostComponent = ({
	selectedImage,
	handleFinishEditing,
}: FinalisePostComponentProps) => {
	const [caption, setCaption] = useState('');
	const [location, setLocation] = useState('');
	const [tags, setTags]: any = useState([]);
	const [posted, setPosted] = useState(false);
	const [showTags, setShowTags] = useState(false);
	const [maxTagsError, setMaxTagsError] = useState(false);

	const userCollectionQuery = useFirestore().collection('users');
	const postsCollectionQuery = useFirestore().collection('posts');
	const currentUserName = useAuth().currentUser?.displayName!;
	const currentUser = useGetUser('currentUser');
	const displayPicture: string = currentUser.displayPicture;

	const showTagsModal = (e: React.MouseEvent) => {
		const targetElement = e.target as HTMLInputElement;
		// Prevent closing the modal on search bar click
		if (targetElement.placeholder !== 'Search') {
			setShowTags(!showTags);
		}
	};

	const handleTags = (user: string) => {
		const newTags = [...tags];
		if (!tags.includes(user)) {
			newTags.push(user);
		}
		if (tags.length > 5) {
			setMaxTagsError(true);
		}
		setTags(newTags);
	};

	const removeTag = (e: React.MouseEvent) => {
		const targetElement = e.target as HTMLInputElement;
		const targetTag = targetElement.parentElement!.textContent;
		const newTags = [...tags].filter((p) => p !== targetTag);
		newTags.filter((p) => p !== targetTag);
		setTags(newTags);
	};

	const handleInput = (e: any) => {
		const formValue = e.currentTarget.value;
		e.currentTarget.placeholder.includes('caption')
			? setCaption(formValue)
			: setLocation(formValue);
	};

	const handlePost = () => {
		addPost(
			userCollectionQuery,
			postsCollectionQuery,
			currentUserName,
			selectedImage,
			caption,
			location,
			tags
		);
		setPosted(true);
	};

	return (
		<FinaliseUpload>
			{currentUser && (
				<>
					<NavigationButtonWrapper>
						<ReactagramButton onClick={handleFinishEditing}>Back</ReactagramButton>
						<ReactagramButton onClick={handlePost}>Post</ReactagramButton>
					</NavigationButtonWrapper>
					<CaptionInputWrapper>
						<FormInputWrapper>
							<ImageWrapper>
								<UserIcon src={displayPicture} alt={currentUserName + 'user icon'} />
							</ImageWrapper>
							<PostTextInput
								placeholder={'Write a caption...'}
								onChange={handleInput}
								ng-Trim={false}
							/>
						</FormInputWrapper>
						<ImageWrapper>
							<UploadedImage src={selectedImage} alt='The chosen, cropped image to be posted' />
						</ImageWrapper>
					</CaptionInputWrapper>
					{tags.length > 0 && (
						<>
							<p style={{ fontWeight: 600 }}>Tags: </p>
							<TagsWrapper style={{ display: 'flex' }}>
								{tags.map((tag: string) => {
									return (
										<TagWrapper style={{ cursor: 'pointer' }} onClick={removeTag}>
											{tag}
											<Icon onClick={removeTag} src={deleteIcon} />
											{tags.length > 1 && tags.indexOf(tag) !== tags.length - 1 && ', '}
										</TagWrapper>
									);
								})}
							</TagsWrapper>
						</>
					)}
					<ExtraInfoWrapper>
						<FormInputWrapper>
							<FormInput placeholder={'Enter a location'} onChange={handleInput} />
						</FormInputWrapper>
						<ReactagramButton onClick={showTagsModal}>Tag people</ReactagramButton>
						{maxTagsError && 'Max tags reached'}
					</ExtraInfoWrapper>
				</>
			)}
			{showTags && <TagModalComponent showTags={showTagsModal} handleTags={handleTags} />}
			{posted && <Redirect to='/' />}
		</FinaliseUpload>
	);
};
