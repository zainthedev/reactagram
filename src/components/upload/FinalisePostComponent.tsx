import { useState } from 'react';
import { useAuth, useFirestore, useFirestoreCollectionData } from 'reactfire';
import { ReactagramButton } from '../../styled-components/globalStyles';
import { ImageWrapper, UserIcon, UploadedImage } from '../../styled-components/imageStyles';
import {
	FinaliseUpload,
	NavigationButtonWrapper,
	CaptionInputWrapper,
	ExtraInfoWrapper,
} from '../../styled-components/uploadStyles';
import { FormInputWrapper, FormInput } from '../../styled-components/globalStyles';
import { ModalWrapper, Modal } from '../../styled-components/modalStyles';
import { addPost } from '../../helper-functions/addPost';
import { Redirect } from 'react-router-dom';

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
	const [tags, setTags] = useState([]);
	const [posted, setPosted] = useState(false);
	const [showImage, setShowImage] = useState(false);

	const userCollectionQuery = useFirestore().collection('users');
	const postsCollectionQuery = useFirestore().collection('posts');
	const userCollectionData = useFirestoreCollectionData(userCollectionQuery);
	const currentUserName = useAuth().currentUser?.displayName!;
	const currentUser: any = userCollectionData.data.find((p) => p.name === currentUserName)!;
	const displayPicture: string = currentUser.displayPicture;

	const showImageModal = () => {
		setShowImage(!showImage);
	};

	const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
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
							<FormInput placeholder={'Write a caption...'} onChange={handleInput} />
						</FormInputWrapper>
						<ImageWrapper>
							<UploadedImage
								src={selectedImage}
								alt='The chosen, cropped image to be posted'
								onClick={showImageModal}
							/>
						</ImageWrapper>
					</CaptionInputWrapper>
					<ExtraInfoWrapper>
						<FormInputWrapper>
							<FormInput placeholder={'Enter a location'} onChange={handleInput} />
						</FormInputWrapper>
						<ReactagramButton>Tag people</ReactagramButton>
					</ExtraInfoWrapper>
				</>
			)}
			{showImage && (
				<ModalWrapper onClick={showImageModal}>
					<Modal>
						<ImageWrapper>
							<UploadedImage src={selectedImage} alt='The chosen, cropped image to be posted' />
						</ImageWrapper>
					</Modal>
				</ModalWrapper>
			)}
			{posted && <Redirect to='/' />}
		</FinaliseUpload>
	);
};
