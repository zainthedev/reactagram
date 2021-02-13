import { useState } from 'react';
import { ReactagramButton } from '../../styled-components/globalStyles';
import { ImageCropComponent } from './ImageCropComponent';

export const UploadImageComponent = () => {
	const [selectedImage, setSelectedImage] = useState('');
	const [editingImage, setEditingImage] = useState(false);

	const initialUploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.currentTarget.files![0];
		const fileURL = URL.createObjectURL(file);
		setSelectedImage(fileURL);
	};

	const handleImage = (newImage: string) => {
		setSelectedImage(newImage);
	};

	const handleEditing = () => {
		setEditingImage(!editingImage);
	};

	return (
		<div>
			<label>
				<input type='file' name='file' accept='image/*' onChange={initialUploadHandler}></input>
			</label>
			{selectedImage && (
				<>
					<ReactagramButton onClick={() => setEditingImage(true)}>Edit</ReactagramButton>
					{editingImage && (
						<ImageCropComponent
							selectedImage={selectedImage}
							handleImage={handleImage}
							handleEditing={handleEditing}
						/>
					)}
				</>
			)}
		</div>
	);
};
