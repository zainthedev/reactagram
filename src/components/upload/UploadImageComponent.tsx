import { useState } from 'react';
import { ReactagramLink } from '../../styled-components/globalStyles';
import { ImageCropComponent } from './ImageCropComponent';
import { FinalisePostComponent } from './FinalisePostComponent';
import { ImageWrapper, Icon } from '../../styled-components/imageStyles';
import { UploadImageWrapper, UploadImage } from '../../styled-components/uploadStyles';
import uploadIcon from '../../images/uploadIcon.svg';

export const UploadImageComponent = () => {
	const [selectedImage, setSelectedImage] = useState('');
	const [editingImage, setEditingImage] = useState(false);
	const [finishedEditing, setFinishedEditing] = useState(false);

	const initialUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.currentTarget.files![0];
		const fileURL = URL.createObjectURL(file);
		setSelectedImage(fileURL);
		setEditingImage(!editingImage);
	};

	const handleImage = (newImage: string) => {
		setSelectedImage(newImage);
	};

	const handleEditing = () => {
		setEditingImage(!editingImage);
	};

	const handleFinishEditing = () => {
		setFinishedEditing(!finishedEditing);
	};

	return (
		<UploadImageWrapper>
			{!finishedEditing ? (
				<UploadImage>
					<label>
						<ImageWrapper>
							<Icon src={uploadIcon} />
						</ImageWrapper>
						<input
							style={{ display: 'none' }}
							type='file'
							name='file'
							accept='image/*'
							onChange={initialUploadHandler}
						/>
						<ReactagramLink>Choose image to upload</ReactagramLink>
					</label>
					{selectedImage && !finishedEditing && editingImage && (
						<ImageCropComponent
							selectedImage={selectedImage}
							handleImage={handleImage}
							handleEditing={handleEditing}
							handleFinishEditing={handleFinishEditing}
						/>
					)}
				</UploadImage>
			) : (
				<FinalisePostComponent
					selectedImage={selectedImage}
					handleFinishEditing={handleFinishEditing}
				/>
			)}
		</UploadImageWrapper>
	);
};
