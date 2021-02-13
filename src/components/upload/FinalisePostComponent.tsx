import { useState } from 'react';
import { useAuth, useFirestore, useFirestoreCollectionData } from 'reactfire';
import { ReactagramButton } from '../../styled-components/globalStyles';
import { ImageWrapper, UserIcon, UploadedImage } from '../../styled-components/imageStyles';
import { FinaliseUpload, CaptionInputWrapper } from '../../styled-components/uploadStyles';
import { FormInputWrapper, FormInput } from '../../styled-components/globalStyles';
import { ModalWrapper, Modal } from '../../styled-components/modalStyles';

type FinalisePostComponentProps = {
	selectedImage: string;
	handleFinishEditing: () => void;
};

export const FinalisePostComponent = ({
	selectedImage,
	handleFinishEditing,
}: FinalisePostComponentProps) => {
	const [showImage, setShowImage] = useState(false);
	const userCollectionQuery = useFirestore().collection('users');
	const userCollectionData = useFirestoreCollectionData(userCollectionQuery);

	const currentUserName = useAuth().currentUser?.displayName!;
	const currentUser: any = userCollectionData.data.find((p) => p.name === currentUserName)!;
	const displayPicture: string = currentUser.displayPicture;

	const showImageModal = () => {
		setShowImage(!showImage);
	};

	return (
		<FinaliseUpload>
			<ReactagramButton onClick={handleFinishEditing}>Back</ReactagramButton>
			{currentUser && (
				<CaptionInputWrapper>
					<FormInputWrapper>
						<ImageWrapper>
							<UserIcon src={displayPicture} alt={currentUserName + 'user icon'} />
						</ImageWrapper>
						<FormInput placeholder={'Write a caption...'} />
					</FormInputWrapper>
					<ImageWrapper>
						<UploadedImage
							src={selectedImage}
							onClick={showImageModal}
							alt='The chosen, cropped image to be posted'
						/>
					</ImageWrapper>
				</CaptionInputWrapper>
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
		</FinaliseUpload>
	);
};
